<template>
	<div class="columns">
		<div id="left-side" class="column is-9">
			<div class="columns">
				<title-header></title-header>
				<gross-loss></gross-loss>
			</div>

			<!-- <claim-nav class="is-hidden-mobile"></claim-nav> -->

			<hr class="is-hidden-mobile" style="background: #ddd;">

			<claim-map></claim-map>

			<tags></tags>

			<contacts></contacts>

			<description></description>

	        <claim-info></claim-info>
		</div>

		<div  id="right-side" class="column is-3">
			<assignees></assignees>
			<timeline></timeline>
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js';
	import titleHeader from './TitleHeader.vue';
	import claimNav from './ClaimNavigation.vue';
	import claimMap from './Map.vue';
	import grossLoss from './GrossLoss.vue';
	import tags from './Tags.vue';
	import contacts from './Contacts.vue';
	import description from './Description.vue';
	import claimInfo from './claimInfo.vue';
	import assignees from './Assignees.vue';
	import timeline from './Timeline.vue';
	export default {
		name: 'Claim',
		components: {
			titleHeader,
			claimNav,
			claimMap,
			grossLoss,
			tags,
			contacts,
			description,
			claimInfo,
			assignees,
			timeline
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