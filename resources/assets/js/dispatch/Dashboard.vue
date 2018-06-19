<template>
	<div id="claims">
		<h1 class="title">Dispatch Dashboard</h1>
		<table class="table">
			<thead>
				<tr>
					<th>Claim #</th>
					<th>Insured</th>
					<th>Loss Location</th>
					<th>Type Of Loss</th>
					<th>Date of Loss</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="claim in claims">
					<td><a :href="'/claims/' + claim.id" v-text="claim.claim_number"></a></td>
					<td v-text="claim.insured"></td>
					<td v-text="claim.claim_data.client.addresses[1].city +', ' + claim.claim_data.client.addresses[1].state"></td>
					<td v-text="claim.type_of_loss"></td>
					<td v-text="claim.date_of_loss"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'DispatchDashboard',
		created() {
			return this.claims.forEach(claim => {
				claim.claim_data = JSON.parse(claim.claim_data);
			});
		},
		data(){
			return {
				claims: dispatch.claims,
			}
		}
	}
</script>