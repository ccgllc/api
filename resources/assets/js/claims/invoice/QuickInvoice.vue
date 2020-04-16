<template>
	<div>
	<a class="button is-secondary" @click="toggle">
	    <span class="icon"><i class="fa fa-plus"></i></span>
	    <span>Quick Invoice</span>
	</a>
	<modal :show="creatingInvoice" :solid="true">
		<form @submit.prevent="submit">		
		<h3 class="subtitle has-text-info has-text-weight-light">Claim# {{ claim.claim_number }}</h3>
		<h1 class="title" style="color: #efefef">Create {{ claim.carrier.name }} Invoice</h1>
		<hr style="background: #485269">

		<!-- <div class="columns" style="margin-left: 0; margin-right: 0;">
			<div class="column">
				<div class="field">
				<label class="label" for="estimate">Choose Invoice Type:</label>
					<div class="select">
						<select>
							<option value="0" disabled selected>Type</option>
							<option value="1">Standard</option>
							<option value="2">Supplement</option>
						</select>
					</div>
				</div>
			</div>
		</div> -->
		
		<div class="columns">
			<div class="column" v-if="claim.estimates.length > 0">
				<div class="field">
					<label class="label" for="estimate">Choose Estimate:</label>
					<div class="select">
						<select v-model="grossLoss.amount" name="estimate">
							<option value="0">Select an estimate</option>
							<option v-for="estimate in claim.estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
							<!-- <option value="1">Create New Estimate</option> -->
						</select>
					</div>
				</div>
			</div>
			<!-- <div class="column" v-else>
				<div class="field">
					<label class="label" for="estimate">Gross Loss Amount:</label>
					<div class="control">
						<input v-model="grossLoss.amount" class="input" name="estimate">
					</div>
				</div>
			</div> -->
		</div>
		<div class="columns">
			<div class="column">
				<div class="field">
					<label class="label" for="photos">Photos:</label>
					<div class="control">
						<input v-model="photos.quantity" class="input" name="photos">
					</div>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label" for="hours">T&E Hours:</label>
					<div class="control">
						<input v-model="hours.quantity" class="input" name="hours">
					</div>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label" for="mileage">Mileage:</label>
					<div class="control">
						<input v-model="mileage.quantity" class="input" name="mileage">
					</div>
				</div>
			</div>
			<div class="column">
				<div class="field">
					<label class="label" for="reimbursable">Reimbursable:</label>
					<div class="control">
						<input v-model="reimbursable.amount" class="input" name="reimbursable">
					</div>
				</div>
			</div> 
		</div>
		<hr style="background: #485269">
		<div class="has-text-right" style="margin-top: 1.5em;">
			<a @click.prevent="toggle" class="is-size-7 has-text-white is-light is-small is-link" style="margin-right: 1em; margin-top: 2em;">cancel</a>
			<button type="submit" class="button is-info is-small">Create Invoice</button>
		</div>
		</form>
		<!-- <button @click.prevent="$emit('toggle-estimate')" class="modal-close is-large" aria-label="close"></button> -->
	</modal>
	</div>
</template>

<script>
	import claimData from '../claimData.js';
	import Modal from '../../Modal.vue';
	import Invoice from './Invoice.js';
	export default {
		name: 'QuickInvoice',
		components: {
			Modal
		},
		data() {
			return claimData;
		},
		mounted() {
			this.getTodaysDate();
		},
		methods: {
			submit() {
				this.setCarrierInvoiceData();
				let adjuserExpenses = [this.photos, this.mileage, this.hours, this.reimbursable];
				this.newInvoice.createServiceFeeLineItem(this.grossLoss);
				this.newInvoice.createAdjusterExpenseLineItems(adjuserExpenses);
				this.newInvoice.calculate();
				this.claim.invoices.push(this.newInvoice);
				this.creatingInvoice = false;
			},
			getTodaysDate() {
				let today = new Date();
				this.date = (today.getMonth()+1) + '/' + today.getDate() + '/'+ today.getFullYear();
				console.log(today.toTimeString());
				this.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g, '').trim();
			},
			toggle() {
				return this.creatingInvoice = !this.creatingInvoice;
			},
			setCarrierInvoiceData() {
				this.newInvoice = new Invoice();
				let feeSchedule = JSON.parse(this.claim.carrier.pay_scale);
				this.newInvoice.carrier = this.claim.carrier;
				this.grossLoss.feeSchedule = feeSchedule;
				this.hours.rate = parseFloat(feeSchedule.hourly);
				this.photos.rate = feeSchedule.photoRate;
				this.photos.minimum = feeSchedule.photoMinimum;
				this.mileage.rate = feeSchedule.mileageRate;
				this.mileage.minimum = feeSchedule.mileageMinimum;
			},
		},
	}
</script>

<style>
	.select select {
    	text-rendering: auto !important;
	}
</style>