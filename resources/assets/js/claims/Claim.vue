<template>
	<div>
	<!-- <alert v-if="hasAlert" :message="alert.message" :type="alert.type" @click="confirmingAlert = !confirmingAlert"></alert> -->
		<div class="" style="width: 100%;">
			<contacts></contacts>
			<tags></tags>
		</div>
		<!-- <claim-stats :claim-id="claim.id" :user-id="user.id" :estimates="claim.estimates"></claim-stats> -->
		<description></description>
	    <claim-info></claim-info>
    </div>
</template>

<script>
	import claimData from './claimData.js';
	import claimStats from './ClaimStats.vue';
	import tags from './Tags.vue';
	import contacts from './Contacts.vue';
	import description from './Description.vue';
	import claimInfo from './claimInfo.vue';

	export default {
		name: 'Claim',
		components: {
			//claimMap,
			claimStats,
			tags,
			contacts,
			description,
			claimInfo,
		},
		created() {
			this.hasAlert = true;
			this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
		},
		mounted() {
			if (this.claim.assignments.length > 0) {
				this.adjuster = this.claim.assignments.find(assignment => assignment.type = 'adjuster');
			}
		},
		data() {
			return claimData;
		},
	}
</script>