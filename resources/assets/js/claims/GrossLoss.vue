<template>
	<div class="column gross-loss"">
		<div class="card has-ribbon has-ribbon-left">
			<div class="card-content">
			    <!-- <div class="ribbon is-dark" style="border-radius:  0 7px 7px 0; margin-left: -1px;">Gross Loss Amount</div><br> -->
				<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Gross Loss Amount</h3>
				<h1 class="title" style="font-size: 2em; font-weight: 700; color:#64C6A3;">${{ claim.gross_loss }}</h1>
				<hr style="background: #ddd">
				<a href="#" class="is-link is-small" style="font-size: .85em;">Issue Correction</a> 
				<span class="icon" style="color: #ccc">•</span>
				 <a href="#" class="is-link is-small" style="font-size: .85em;">Billing</a>
			</div>
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'GrossLoss',
		data() {
			return claimData;
		}
	}
</script>