<template>
	<div class="column is-three-quarters">
	<span class="is-hidden-mobile">
		<h3 class="subtitle is-hidden-tablet-only"><span style="color: #bbb;">Claim#</span></h3>
		<h1 class="title is-hidden-tablet-only">
			<span class="claim-number">{{ claim.claim_number }}</span> 
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

	

	<div class="dropdown" v-bind:class="{ 'is-active': active}" @click="active = !active">
		  <div class="dropdown-trigger">
		    <button class="button is-rounded is-info" style="margin-top: .5rem;" aria-haspopup="true" aria-controls="dropdown-menu">
		      <span>&nbsp; I need to ... &nbsp;</span>
		      <span class="icon is-small">
		        <i class="fa fa-angle-down" aria-hidden="true"></i>
		      </span>
		    </button>
		  </div>
		  <div class="dropdown-menu" id="dropdown-menu" role="menu" style="border-radius: 56px;">
		    <div class="dropdown-content">
		    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Create an Invoice</a>
		    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-credit-card"></i> </span> Add Adjuster Expenses</a>
		    	<hr class="dropdown-divider">
				<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-money"></i> </span> Submit an Estimate</a>
				<!-- <a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-usd"></i> </span> Issue an Estimate Correction</a> -->
				<hr class="dropdown-divider">
				<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-envelope-o"></i></span> Send Invoice to Carrier</a>
		    </div>
		  </div>
		</div>
	</div>
</template>
<script>
	import claimData from './claimData.js';
	export default {
		name: 'Title',
		data() {
			return  claimData;
		}
	}
</script>