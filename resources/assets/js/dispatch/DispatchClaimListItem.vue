<template>
	<div class="card is-dispatch-claim" :class="{'is-active':  isSelected}" @click="selectToggle(claim)" style="margin-bottom: 1em;">
		<div class="card-content">
			<div class="columns">
				<div class="column is-1 is-icon" >
					<span class="icon is-large" v-if="isSelected" style="padding-right: 1em;"><i class="fa fa-lg" :class="[{'has-text-danger': isSelected}, {'fa-check': isSelected}]" ></i></span>
					<span class="icon is-large" v-if="!isSelected" style="padding-right: 1em;"><i class="fa fa-lg" :class="[{'has-text-dark': !isSelected}, {'fa-map-marker': !isSelected}]" ></i></span>
				</div>
				<div class="column">
					<h4 class="subtitle"><span style="font-weight: 700">{{ claim.carrier.name }}</span> Claim #</h4>
					<h3 class="title"><a :href="'/claims/' + claim.id" v-text="claim.claim_number"></a></h3>
				</div>
				<div class="column">
					<h4 class="subtitle">Type Of Loss</h4>
					<h3 class="title is-grey-lighter"><a v-text="claim.type_of_loss"></a></h3>
				</div>
				<div class="column">
					<h4 class="subtitle">Date Received</h4>
					<h3 class="title is-grey-lighter"><a v-text="claim.date_received"></a></h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ClaimListItem',
		props: ['claim', 'selectedClaims'],
		data() {
			return {
				isSelected: false
			}
		},
		computed: {
			selected() {
				console.log(this.selectedClaims.indexOf(this.claim));
				return this.selectedClaims.indexOf(this.claim) < 0 ? this.isSelected = false : this.isSelected = true;
			}
		},
		methods: {
			selectToggle(claim) {
				this.isSelected = !this.isSelected;
				
				return this.isSelected == true 
					? this.$emit('claim-selected', claim)
					: this.$emit('claim-removed', claim)
			}
		}
	}
</script>