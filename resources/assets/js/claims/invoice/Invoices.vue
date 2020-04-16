<template>
	<div>
		<h1 class="title has-text-weight-bold">Invoices</h1>
		<p style="margin-bottom: 1em" v-if="claim.invoices.length === 0">No invoices have been created for claim #{{ claim.claim_number }}.</p>

		<invoice 
				v-for="invoice in claim.invoices" 
				:invoice="invoice" 
				:estimates="claim.estimates" 
				:carrier="claim.carrier"
				:key="invoice.id"
				@invoice-built="update"
				v-else
			>
		</invoice>
	</div>
</template>

<script>
	import claimData from '../claimData.js'
	import invoice from './Invoice.vue'
	export default	{
		name: 'Invoices',
		components: {
			invoice
		},
		data() {
			return claimData;
		},
		mounted() {
			// console.log(this.claim.invoices === true)
		},
		methods: {
			update(data) {
				this.claim.invoices.splice(data.idx, 1, data.invoice)
			}
		}
	}
</script>