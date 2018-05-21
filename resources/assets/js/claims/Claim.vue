<template>
	<div class="columns">
		<div id="left-side" class="column is-9">
			<title-header></title-header>
			<claim-nav></claim-nav>
			<claim-map></claim-map>
			<tags></tags>
			<claim-stats></claim-stats>
			<contacts></contacts>
			<description></description>
	        <claim-info></claim-info>
		</div>

		<div  id="right-side" class="column is-3">
			<assignees></assignees>
			<timeline></timeline>
		</div>
		<!-- forms -->
		<new-status></new-status>
		
	</div>
</template>

<script>
	import claimData from './claimData.js';
	import titleHeader from './TitleHeader.vue';
	import claimNav from './ClaimNavigation.vue';
	import claimMap from './Map.vue';
	import claimStats from './ClaimStats.vue';
	import tags from './Tags.vue';
	import contacts from './Contacts.vue';
	import description from './Description.vue';
	import claimInfo from './claimInfo.vue';
	import assignees from './Assignees.vue';
	import timeline from './Timeline.vue';
	import newStatus from './NewStatus.vue';
	export default {
		name: 'Claim',
		components: {
			titleHeader,
			claimNav,
			claimMap,
			claimStats,
			tags,
			contacts,
			description,
			claimInfo,
			assignees,
			timeline,
			newStatus
		},
		created() {
			this.claim = claim;
			this.claim.gross_loss = '7,893.12';
			this.claim.claim_data = JSON.parse(this.claim.claim_data);
			this.user = user;
			this.reviewer = reviewer;
		},
		data() {
			return claimData;
		}
	}
</script>