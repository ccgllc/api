<template>
	<page title="Reviewer Dashboard" description="Where Reviewer work happens...">
		<!-- <div class="card-header">
			<p class="card-header-title">Reviewer Dashboard</p>
		</div> -->
		<div class="card-content">
		<input v-model="search" type="text" class="input" placeholder="Search your claims by claim number, insured or carrier...">
		<!-- <aside class="menu">
			<ul class="menu-list">
				<li v-for="result in filteredResults"><a v-text="result.claim_number + ' ' + result.insured"></a></li>
			</ul>
		</aside> -->
		<table v-if="user.claims.length" class="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>Actions</th>
						<th>Claim #</th>
						<th>Carrier</th>
						<th>Insured</th>
						<th>Date of Loss</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="claim in filteredResults">
						<td>
							<a :href="'/claims/' + claim.id + '/#/'" class="button is-small">
							  <i class="fa fa-map-marker"></i>
						  </a>
							<a :href="'/claims/' + claim.id + '/#/billing'" class="button is-secondary is-small">
							  <i class="fa fa-calculator"></i>
						  </a>
						</td>
						<td><a :href="'/claims/' + claim.id + '/#/'">{{ claim.claim_number }}</a></td>
						<td>{{ claim.carrier.name }}</td>
						<td>{{ claim.insured }}</td>
						<td>{{ claim.date_of_loss }}</td>
					</tr>
				</tbody>
			</table>
			<p class="has-text-danger" v-if="search && !filteredResults.length">couldn't find any claims based on your search...</p>
			</div>
	</page>
	
</template>

<script>
	// import _ from '../../../../node_modules/lodash/lodash.min.js';
	import page from '../components/Page';
	export default {
		name: 'ReviewerDashboard',
		props: ['user'],
		components: {
			page
		},
		computed: {
			filteredResults() {
				var vm = this;
				if (!vm.search && vm.user.claims.length) return vm.user.claims.slice(0,25);
				return vm.user.claims.filter(claim => {
					var searchRegex = new RegExp(vm.search, 'i')
					return searchRegex.test(claim.claim_number) 
						|| searchRegex.test(claim.insured)
						|| searchRegex.test(claim.carrier.name);
				});
			},
		},
		data() {
			return {
				search: '',
			}
		},
	}
</script>