<template>
		<page title="Adjuster Dashboard" description="Where shit gets done, son!">
			<!-- <div class="columns" style="padding: 2em 0 2em 2em; background: #f2f2f2; margin: .05em .025em 0 .025em; overflow: hidden;">
				<div class="column">
					<p class="is-size-5 has-text-weight-bold">Adjuster Dashboard</p>
					<p class="is-size-6">Where shit gets done, son!</p>
				</div>
				<div class="column has-text-right">
					<a class="button is-ghost" aria-label="more options" style="padding-right: 2.5em;">
			      <span class="icon has-text-weight-bold">
			        <i class="fa fa-angle-down" aria-hidden="true" style="font-size: 2.25em;"></i>
			      </span>
		    	</a>
				</div>
			</div> -->

			<div class="card-content" >
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
				<!-- <div class="card" v-if="user.claims" v-for="claim in filteredResults" style="margin: .5em 0; border-radius: 7px;">
					<div class="card-header">
						<p class="card-header-title"><span class="has-text-info is-font-weight-700 has-text-grey">{{ claim.carrier.name }}</span><br> <strong> <span class="icon has-text-grey"><i class="fa fa-hashtag"></i></span> {{ claim.claim_number}}</strong></p>
					</div>
				</div> -->
				<p v-if="!user.claims">You do not have any claims assigned to you at this time. </p>
				<p v-if="user.claims && !filteredResults.length">Sorry, no claims matched your query...</p>
			</div>
		</div> <!-- endcard -->
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