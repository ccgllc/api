<template>
	<div>
		<div>
			<!-- <h1 class="title">Claims ({{claims.length}})</h1> -->
			<div class="field">
				<div class="control" style="margin: 1em;">
					<input v-model="query" type="text" class="input" style="" placeholder="Filter list by claim#, adjuster, type of loss, carrier, or insured...">
				</div>
			</div>
			<table class="table is-striped is-full-width">
				<thead>
					<tr>
						<th>Carrier</th>
						<th>Claim #</th>
						<th>Status</th>
						<th>Adjuster</th>
						<th>Type</th>
						<th>Insured</th>
						<!-- <th>Location</th> -->
						<th>Date Received</th>
						<th>Date of Loss</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="claim in filteredResults">
						<td>{{ claim.carrier_name }}</td>
						<td><a :href="'/claims/' + claim.id + '/#'">{{ claim.claim_number }}</a></td>
						<td v-text="claim.statuses[ claim.statuses.length - 1 ].name"></td>
						<td v-text="getAssigneeName(claim.assignments)"></td>
						<td>{{ claim.type_of_loss || 'n/a' }}</td>
						<td>{{ claim.insured }}</td>
						<td>{{ claim.date_received}}</td>
						<td>{{claim.date_of_loss}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="pageloader is-left-to-right is-info" :class="{ 'is-active': !claims.length }"><span class="title">Loading Claims</span></div>
	</div>
</template>

<script>
	export default {
		name: 'ClaimList',
		data () {
			return {
				claims: [],
				query: ''
			}
		},
		mounted() {
			window.axios.get('/claims').then(function(response){
				console.log(this.claims);
				return this.claims = response.data;
				// this.claims.forEach(claim => {
				// if (claim.assignments.length) {
				// 	const latestAssignment = [].pop.call(claim.assignmnets);
				// 	claim.assignee = latestAssignment.user.name;
				// }
			// })
			}.bind(this));
		},
		computed: {
			filteredResults(){
				var vm = this;
				if (!vm.query && vm.claims.length) return vm.claims.slice(0,200);

				if (vm.claims) {
					return vm.claims.filter(claim => {
						var searchRegex = new RegExp(vm.query, 'i')

						return searchRegex.test(claim.claim_number) 
							|| searchRegex.test(claim.insured)
							|| searchRegex.test(claim.claim_number)
							|| searchRegex.test(claim.carrier_name)
							|| searchRegex.test(claim.transaction_id)
							|| searchRegex.test(claim.type_of_loss)
							|| searchRegex.test(vm.getAssigneeName(claim.assignments))
							|| searchRegex.test(vm.getStatusName(claim.statuses))
					});
				}
			}
		},
		methods: {
			getStatusName(statuses) {
				let status = statuses[statuses.length - 1];
				return status == undefined ? 'n/a' : status.name;
			},
			getAssigneeName(assignments) {
				const assignment = assignments[assignments.length - 1];
				return assignment == undefined ?  'unassignable' : assignment.user.name;
			},
			getLocation(claimData){
				let data = JSON.parse(claimData);
				return data.client.addresses 
					? ` ${data.client.addresses[0].city}, ${data.client.addresses[0].state} `
					: 'no address found.';
			}
		},
	}
</script>