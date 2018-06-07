<template>
	<div class="columns">
		<div class="column">
			<span class="is-hidden-mobile">
				<h3 class="subtitle is-hidden-tablet-only"><span style="color: #bbb;">Claim#</span></h3>
				<h1 class="title is-hidden-tablet-only">
					<span class="claim-number" data-badge="2"> 
						<span class="icon is-large"> 
							<i @click="locked = !locked" class="fa fa-1x is-lock has-text-grey" :class="{'fa-lock': locked, 'fa-unlock-alt': !locked}"></i>
							</span>{{ claim.claim_number }}
						</span>
					<span class="divider" style="color: #439BD1">|</span>
					<span class="carrier"> {{ claim.carrier.label }}</span>
				</h1>
			</span>

			<div class="is-hidden-desktop">
				<h3><span style="color: #bbb;">Claim#</span></h3>
				<h1 class="title" style="margin-bottom: -.25rem;">
					<span class="claim-number">{{ claim.claim_number }}</span>
				</h1>
				<h3 style="font-size: 1.5em; margin: 0;">{{ claim.carrier.label }} </h3>
			</div> 
		</div>
	</div>
</template>
<script>
	import claimData from './claimData.js';
	import grossLoss from './GrossLoss.vue';
	export default {
		name: 'Title',
		components: {
			grossLoss,
		},
		data() {
			return  claimData;
		},
		methods: {
			setStatusType(data) {
				this.$emit('status-set', data);
				return this.$emit('new-status-toggle')
			},
			scrollTop(){
				window.scrollTo(0,0);
			}
		}
	}
</script>