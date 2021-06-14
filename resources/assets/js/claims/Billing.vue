<template>
	<div class="columns" style="padding: 1em;">
		<div class="column">
			<invoices></invoices>
			<new-invoice></new-invoice>
			<!-- <new-supplement></new-supplement> -->
			<!-- <quick-invoice></quick-invoice> -->
			<new-estimate 
				:claim="claim" 
				:creating-estimate="creatingEstimate" 
				@toggle-estimate="creatingEstimate = !creatingEstimate" 
				@estimate-created="addEstimate"
			>
			</new-estimate>
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js'
	import invoices from './invoice/Invoices.vue'
	// import newSupplement from './invoice/NewSupplement'
	import newEstimate from './NewEstimate.vue'
	import newInvoice from './invoice/NewInvoice.vue'
	import quickInvoice from './invoice/QuickInvoice.vue'
	export default {
		name: 'Billing',
		components: {
			newEstimate,
			newInvoice,
			// newSupplement,
			quickInvoice,
			invoices
		},
		data() {
			return claimData
		},
		methods: {
			addEstimate(estimate){
				this.claim.estimates.push(estimate)
				return this.creatingEstimate = false
			}		
		}
	}
</script>