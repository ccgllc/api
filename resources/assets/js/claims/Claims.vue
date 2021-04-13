<template>
	<div>
		<div>
			<h1 class="title">Claims ({{claims.length}})</h1>
			<table class="table is-striped is-full-width">
				<thead>
					<tr>
						<th>Carrier</th>
						<th>Claim #</th>
						<th>Status</th>
						<th>Adjuster</th>
						<th>Type</th>
						<th>Insured</th>
						<th>Location</th>
						<th>Date of Loss</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="claim in claims">
						<td>{{ claim.carrier_name }}</td>
						<td><a :href="'/claims/' + claim.id + '/#'">{{ claim.claim_number }}</a></td>
						<td>{{ getStatusName(claim.statuses) }}</td>
						<td v-text="getAssigneeName(claim.assignments)"></td>
						<td>{{ claim.type_of_loss || 'n/a' }}</td>
						<td>{{ claim.insured }}</td>
						<td>{{ getLocation(claim.claim_data) }}</td>
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
				search: ''
			}
		},
		mounted() {
			window.axios.get('/claims').then(function(response){
				console.log(this.claims);
				return this.claims = response.data;
			}.bind(this));
		},
		methods: {
			getStatusName(statuses) {
				let status = Array.prototype.pop.call(statuses);
				return status == undefined ? 'n/a' : status.name;
			},
			getAssigneeName(assignments) {
				const assignment = Array.prototype.pop.call(assignments);
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