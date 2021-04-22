<template>
		<a class="button is-info" @click="createInvoice">
		    <span class="icon"><i class="fa fa-plus"></i></span>
		    <span>Create Invoice</span>
		</a>
</template>

<script>
	import claimData from '../claimData'
	import Invoice from './Invoice' 
	import QuantifiableLineItem from './QuantifiableLineItem'
	// import Form from '../../structur/src/form/Form'
	export default {
		name: 'createInvoice',
		data() {
			return claimData
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
				let surchargeCities = ['HOUSTON', 'CHICAGO', 'MINEOLA'];

				let address = this.claim.claim_data.client.addresses.find(address => address.type === 'Property')
				!address 
					? address = this.claim.claim_data.client.addresses.find(address => address.type === 'Home') 
					: address = {city: 'not found'};

				let search = surchargeCities.find(
					city => city === address.city.trim().toUpperCase()
				);
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
				
				this.newInvoice = new Invoice({taxRate: rate})

				// await this.setFeeSchedule();
				await this.post();

			},
			setInvoiceData(invoice) {
				this.newInvoice.total = parseFloat(this.newInvoice.total)
				this.newInvoice.subTotal = parseFloat(this.newInvoice.subTotal)
				this.newInvoice.id = invoice.id
				this.newInvoice.carrier = this.claim.carrier
				// this.newInvoice.feeSchedule = this.claim.carrier.fee_schedules[0].data
				this.newInvoice.feeSchedule = 'default';

				// this.setLineItemMinimums()
				this.setLineItemRates()
				this.makeDefaultLineItems()
			},
			makeDefaultLineItems() {
				this.newInvoice.createServiceFeeLineItem(this.defaultLineItems.grossLoss)
				this.newInvoice.createAdjusterExpenseLineItems(this.adjusterExpenses())
			},
			setLineItemRates() {
				this.defaultLineItems.photos.rate = this.newInvoice.getPhotoRate()
				this.defaultLineItems.mileage.rate = this.newInvoice.getMileageRate()
				this.defaultLineItems.hours.rate = this.newInvoice.getHourlyRate()
			},
			setLineItemMinimums() { 
				this.defaultLineItems.photos.minimum = this.newInvoice.feeSchedule.photoMinimum
				this.defaultLineItems.mileage.minimum = this.newInvoice.feeSchedule.mileageMinimum
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
					this.defaultLineItems.adminFee.rate = 25
					this.defaultLineItems.adminFee.quantity = 1;
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