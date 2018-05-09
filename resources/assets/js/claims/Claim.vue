<template>
	<h1>Claim {{ claim.claim_number }}</h1>

</template>

<script>
	export default {
		name: 'Claim',
		mounted() {
			// this.claimId = this.$route.params.claimId;
			console.log(this.$route.params.claimId);
			window.axios.get('claims/' + this.$route.params.claimId).then(response => {
				return this.claim = response.data;
			});
		},
		data() {
			return {
				claimId: '',
				claim: {},
			}
		}
	}
</script>