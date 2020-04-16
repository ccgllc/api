<template>
	<div :class="{'is-clipped': creatingEstimate}">
		<h1 class="title">{{ user.name }}'s Dashboard</h1><hr style="background: #dfdfdf;">
		<claims :claims="openClaims" @estimate-toggle="toggleEstimate"></claims>
		
		<estimate @estimate-toggle="toggleEstimate"></estimate>
		<invoice @invoice-toggle="toggleInvoice"></invoice>

		<!-- <new-status 
			@new-status-toggle="toggleCreatingNewStatus()"
		>	
		</new-status> -->
	</div>
</template>

<script>
	import adjusterData from '../data/adjusterData.js';
	import newStatus from '../../../claims/NewStatus.vue';
	// import estimate from '../../../claims/NewEstimate.vue';
	// import invoice from '../../../claims/NewInvoice.vue';
	import modal from '../../../Modal.vue';
	import claims from './OpenClaims.vue';
	export default {
		name: 'AdjsuterDashboard',
		components: {
			claims,
			newStatus,
			// estimate,
			// invoice
		},
		mounted() {
			this.user = window.adjusterData.user;
			this.openClaims = window.adjusterData.claims;
		},
		data() {
			return adjusterData;
		},
		methods: {
			toggleCreatingNewStatus() {
				console.log('toggled');
				return this.creatingNewStatus = !this.creatingNewStatus;
			},
			toggleEstimate(claim) {
				console.log('toggled');
				// console.log(claim.claim_number);
				if (claim != undefined) this.newEstimate.claim_number = claim.claim_number;
				return this.creatingEstimate = !this.creatingEstimate;
			},
			toggleInvoice(claim) {
				console.log('toggled');
				// console.log(claim.claim_number);
				if (claim != undefined) this.newInvoice.claim_number = claim.claim_number;
				return this.creatingInvoice = !this.creatingInvoice;
			}
		}
	}
</script>