<template>
	<div>
		<div>
			<h1 class="title">Claims ({{claims.length}})</h1>
			<table class="table is-striped is-full-width">
				<thead>
					<tr>
						<th>Carrier</th>
						<th>Claim #</th>
						<th>Type</th>
						<th>Insured</th>
						<th>Date of Loss</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="claim in claims">
						<td>{{ claim.carrier_name }}</td>
						<td><a :href="'/claims/' + claim.id">{{ claim.claim_number }}</a></td>
						<td>{{ claim.type_of_loss || 'n/a' }}</td>
						<td>{{ claim.insured }}</td>
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
			// this.claims = claims;
			window.axios.get('/claims').then(function(response){
				console.log(this.claims);
				return this.claims = response.data;
			}.bind(this));
		},
		methods: {

		},
	}
</script>