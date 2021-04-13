<template>
		<a class="button is-secondary" @click="createSupplement" v-if="claim.invoices.length > 0">
		    <span class="icon"><i class="fa fa-plus"></i></span>
		    <span>Supplement Invoice</span>
		</a>
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
			// let address = this.getLossAddress(); 
			// this.isTaxableState(address.state)
		},
		methods: {
			createSupplement() {
					alert('creating...');
			}
		}
	}
</script>