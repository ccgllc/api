<template>
	<div>
		<a class="button is-info" @click="createInvoice">
	    <span class="icon"><i class="fa fa-plus"></i></span>
	    <span>Create Invoice</span>
		</a>
		<a class="button is-secondary" @click="createSupplementInvoice">
	    <span class="icon"><i class="fa fa-plus"></i></span>
	    <span>Supplement Invoice</span>
		</a>
	</div>
</template>

<script>
	import claimData from '../claimData'
	import Invoice from './Invoice' 
	import SupplementInvoice from './SupplementInvoice.js' 
	import DifferenceInTiersLineItem from './DifferenceInTiersLineItem.js'
	import lineItemTypes from './lineItemTypes.js'
	// import Form from '../../structur/src/form/Form'
	export default {
		name: 'createInvoice',
		props: ['invoices'],
		data() {
			return { ...claimData, }
		},
		mounted() {
			let address = this.getLossAddress(); 
		},
		computed: {
			usesPhotos() {
				return this.claim.carrier.fee_schedules[0].data.photoRate > 0
					? true
					: false;
			},
			isSurchargeCity() {
				let surchargeCities = [{city: 'HOUSTON', state: 'TX'}, {city: 'CHICAGO', state: 'IL'}, {city: 'MINEOLA', state: 'TX'}];

				let address = this.claim.claim_data.client.addresses.find(address => address.type === 'Property')
				if (!address) address = this.claim.claim_data.client.addresses.find(address => address.type === 'Home')
					
				let search = surchargeCities.find(location => {
					if (!address) address = { city: '', state: '' }
					return location.city === address.city.trim().toUpperCase() && location.state === address.state
				});

				return search ? true : false;
			},
		},
		methods: {
			async createInvoice() {
				let rate;
				const state = this.getLossAddress().state;

				state === 'TX' 	? rate = .0825 : rate = 0;

				// console.log(state);
				if (this.isTaxable(state) && state !== 'TX') {
					rate = await this.getTaxRate(this.getLossAddress());
				}
				
				this.supplement 
					? this.newInvoice = new SupplementInvoice({taxRate: rate, is_supplement: 1})
				  : this.newInvoice = new Invoice({taxRate: rate})

				await this.post();

			},
			createSupplementInvoice() {
				this.supplement = true;
				return this.createInvoice();
			},
			setInvoiceData(invoice) {
				this.newInvoice.total = parseFloat(this.newInvoice.total)
				this.newInvoice.subTotal = parseFloat(this.newInvoice.subTotal)
				this.newInvoice.id = invoice.id
				this.newInvoice.carrier = this.claim.carrier
				// this.newInvoice.feeSchedule = this.claim.carrier.fee_schedules[0].data
				this.supplement 
					? this.newInvoice.feeSchedule = this.copyFeeScheduleFromPriviousInvoice() 
					: this.newInvoice.feeSchedule = 'default';

				if (!this.supplement){
					this.setLineItemMinimums()
					this.setLineItemRates()
				} 

				this.makeDefaultLineItems()
			},
			makeDefaultLineItems() {
				if (this.supplement) {
					this.makeSupplementLineItems();
				} else {
					this.newInvoice.createServiceFeeLineItem(this.defaultLineItems.grossLoss)
					this.newInvoice.createAdjusterExpenseLineItems(this.adjusterExpenses())
				}
				
			},
			makeSupplementLineItems() {

				let lineItems = [];

				const hasSupplementFee = this.claim.carrier.fee_schedules.find(
					schedule => schedule.data.hasOwnProperty('supplementFee')
				)

				let lineItem = lineItemTypes.find(item => item.type === 'DifferenceInTiersLineItem');
				let diffInTiers = {...lineItem }
				diffInTiers.feeSchedule = this.newInvoice.feeSchedule;
				diffInTiers.amount = this.copyPreviousGrossLossAmount()
				lineItems.push(diffInTiers);

				if (hasSupplementFee) {
						let item = lineItemTypes.find(item => item.type === 'QuantifiableLineItem')
						// unsing destructuring to deep copy to avoid overwriting props in our item's data...
						let supplementFee = { ...item };
						supplementFee.rate = hasSupplementFee.data.supplementFee;
						supplementFee.quantity = 1; 
						supplementFee.description = 'Supplement Fee'; 
						
						lineItems.push(supplementFee);
					}

				this.newInvoice.createSupplementLineItems(lineItems);
				
				this.supplement = false;
			},
			copyFeeScheduleFromPriviousInvoice() {
				const invoice = this.invoices.find(invoice => !invoice.is_supplement)
				return invoice ? invoice.feeSchedule : 'default';
			},
			copyPreviousGrossLossAmount() {
				const invoice = this.invoices.find(invoice => !invoice.supplement)
				return invoice ? invoice.lineItems[0].amount : 'default';
			},
			setLineItemRates() {
				this.defaultLineItems.photos.rate = this.newInvoice.getPhotoRate()
				this.defaultLineItems.mileage.rate = this.newInvoice.getMileageRate()
				this.defaultLineItems.hours.rate = this.newInvoice.getHourlyRate()
				// if (this.isSurchargeCity) 
			},
			setLineItemMinimums() { 
				this.defaultLineItems.photos.minimum = this.newInvoice.getPhotoMinimum()
				this.defaultLineItems.mileage.minimum = this.newInvoice.getMileageMinimum()
			},
			toggle() {
				return this.creatingInvoice = !this.creatingInvoice
			},
			setFeeSchedule(feeSchedule) {
				return this.newInvoice.feeSchedule = feeSchedule;
			},
			update() {
				window.axios.put(this.getRoute() + this.newInvoice.id, this.newInvoice.data())
					.then(response => this.claim.invoices.push(response.data))
					.catch(error => console.error(error))
			},
			post() {
				window.axios.post(this.getRoute(), this.newInvoice.data())
					.then(response => {
						this.setInvoiceData(response.data)
						this.update()
					})
					.catch(error => console.error(error))
			},
			isTaxable(state) {
				let st = this.taxableStates().find(st => st === state );
				let taxable = this.claim.carrier.fee_schedules[0].data.taxable 
				return st !== undefined && taxable ? true : false;
			},
			taxableStates() {
				return ['TX', 'NM'];
			},
		  getTaxRate(lossLocation) {
			  let rate;
				const request = {
					method: 'POST',
					url: 'https://sales-tax-calculator.p.rapidapi.com/rates',
					headers:{
						"content-type": "application/json", 
						"x-rapidapi-key": "a29b750334mshc27f715175b14e7p15c95bjsnbc1e065bb876", 
						"x-rapidapi-host": "sales-tax-calculator.p.rapidapi.com",
						"useQueryString": true
					},
					data: {
						"city": lossLocation.city,
						"state": lossLocation.state,
						"street": lossLocation.street,
						"zip": lossLocation.zip
					}
				};

				return window.axios.request(request).then(response => {
					return (parseFloat(response.data.tax_rate) / 100)
				}).catch(error=>alert(error));
			},
			getRoute() {
				return '/api/claims/' + this.claim.id + '/invoices/';
			},
			getLossAddress() {
				let property = this.claim.claim_data.client.addresses.find(a => a.type === 'Property');
				return property !== undefined ? property : this.claim.claim_data.client.addresses.find(a => a.type === 'Home');
			},
			adjusterExpenses() {
				let items = [
					this.defaultLineItems.hours, 
					this.defaultLineItems.reimbursable,
					this.defaultLineItems.mileage
				];

				if (this.usesPhotos) {
					items.splice(0, 0, this.defaultLineItems.photos);
				}

				if (this.claim.carrier.id === 21) {
					this.defaultLineItems.adminFee.amount = 25
					items.push(this.defaultLineItems.adminFee);
				}

				if (this.claim.carrier.id === 20 && this.isSurchargeCity) {
					items.push(this.defaultLineItems.surcharge)
				}

				return items;
			}
		},
	}
</script>