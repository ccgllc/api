<template>
<div>
	<router-link to="/claims/create" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-plus"></span> &nbsp;Create New Claim</router-link><br><br>

	<div class="form-group" style="padding: 10px 0 10px 0">
	    <label class="sr-only">Search</label>
	    <div class="input-group">
	    	<div class="input-group-addon"><span class="glyphicon glyphicon-search"></span></div>
	        <input type="text" class="form-control" v-model="search" placeholder="Claim Number, Adjuster, etc.">
	    </div>
	</div>

	<table class="table is-striped">
		<thead>
			<tr>
				<th>Carrier</th>
				<th>Claim #</th>
				<th>Insured</th>
				<!-- <th>Adjuster</th> -->
			</tr>
		</thead>
		<tbody>
			<tr v-for="claim in claims">
				<td>{{ claim.carrier_name }}</td>
				<td><router-link :to="{ name: 'show', params: { claimId: claim.id }}">{{ claim.claim_number }}</router-link></td>
				<td>{{ claim.insured }}</td>
				<!-- <td>{{ claim.adjuster.fname }} {{ claim.adjuster.lname }}</td> -->
			</tr>
		</tbody>
	</table>
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

		},
	}
</script>