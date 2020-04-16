<template>
	<div>
		<a class="button is-info" @click="createInvoice">
		    <span class="icon"><i class="fa fa-plus"></i></span>
		    <span>Create Invoice</span>
		</a>
	</div>
</template>

<script>
	import claimData from '../claimData'
	import Invoice from './Invoice' 
	// import Form from '../../structur/src/form/Form'
	export default {
		name: 'createInvoice',
		data() {
			return claimData
		},
		mounted() {
			//
		},
		methods: {
			createInvoice() {
				this.newInvoice = new Invoice()
				this.post();
			},
			setInvoiceData(invoice) {
				this.newInvoice.total = parseFloat(this.newInvoice.total)
				this.newInvoice.subTotal = parseFloat(this.newInvoice.subTotal)
				this.newInvoice.id = invoice.id
				this.newInvoice.carrier = this.claim.carrier
				this.newInvoice.feeSchedule = this.claim.carrier.fee_schedules[0].data
				// console.log(this.newInvoice.feeSchedule)
				this.setLineItemMinimums()
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
			getRoute() {
				return '/api/claims/' + this.claim.id + '/invoices/';
			},
			adjusterExpenses() {
				return [
					this.defaultLineItems.photos, 
					this.defaultLineItems.mileage, 
					this.defaultLineItems.hours, 
					this.defaultLineItems.reimbursable
				]
			}
		},
	}
</script>