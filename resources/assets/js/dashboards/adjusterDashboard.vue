<template>
	<page title="Adjuster Dashboard" description="Where adjuster work happens.">
		<div class="card-content">
			<input v-model="search" v-if="user.claims" type="text" class="input" placeholder="Search your claims by claim number, insured or carrier...">
			<table v-if="user.claims && filteredResults.length > 0" class="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>Actions</th>
						<th>Carrier</th>
						<th>Claim #</th>
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
						<td>{{ claim.carrier.name }}</td>
						<td><a :href="'/claims/' + claim.id + '/#/'">{{ claim.claim_number }}</a></td>
						<td>{{ claim.insured }}</td>
						<td>{{ claim.date_of_loss }}</td>
					</tr>
				</tbody>
			</table>
			<p v-if="!user.claims">You do not have any claims assigned to you at this time. </p>
			<p v-if="user.claims && !filteredResults.length">Sorry, no claims matched your query...</p>
		</div>
	</page>
</template>

<script>
	import page from '../components/Page';
	export default {
		name: 'AdjusterDashboard',
		props: ['user'],
		components: {
			page
		},
		computed: {
			filteredResults() {
				var vm = this;
				if (!vm.search && vm.user.claims.length) return vm.user.claims.slice(0,25);

				if (vm.user.claims) {
					return vm.user.claims.filter(claim => {
					var searchRegex = new RegExp(vm.search, 'i')
					return searchRegex.test(claim.claim_number) 
						|| searchRegex.test(claim.insured)
						|| searchRegex.test(claim.carrier.name);
				});
				}
			},
		},
		data() {
				return {
					search: '',
				}
			}
	}
</script>