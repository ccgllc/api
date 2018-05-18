<template>
	<div class="columns">
		<div class="column gross-loss"">
			<div class="card has-ribbon has-ribbon-left">
				<div class="card-content">
				    <!-- <div class="ribbon is-dark" style="border-radius:  0 7px 7px 0; margin-left: -1px;">Gross Loss Amount</div><br> -->
					<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Gross Loss Amount</h3>
					<h1 class="title has-text-info" style="font-size: 2em; font-weight: 700; color:#64C6A3;">${{ claim.gross_loss }}</h1>
					<!--  s -->
				</div>
			</div>
		</div>

		<div class="column gross-loss"">
			<div class="card has-ribbon has-ribbon-left">
				<div class="card-content">
				    <!-- <div class="ribbon is-dark" style="border-radius:  0 7px 7px 0; margin-left: -1px;">Gross Loss Amount</div><br> -->
					<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Days Open</h3>
					<h1 class="title has-text-dark" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '7' }}</h1>
					<!--  s -->
				</div>
			</div>
		</div>

		<div class="column gross-loss"">
			<div class="card has-ribbon has-ribbon-left">
				<div class="card-content">
				    <!-- <div class="ribbon is-dark" style="border-radius:  0 7px 7px 0; margin-left: -1px;">Gross Loss Amount</div><br> -->
					<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Invoices</h3>
					<h1 class="title has-text-dark" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '1' }}</h1>
					<!--  s -->
				</div>
			</div>
		</div>

		<div class="column gross-loss"">
			<div class="card has-ribbon has-ribbon-left">
				<div class="card-content">
				    <!-- <div class="ribbon is-dark" style="border-radius:  0 7px 7px 0; margin-left: -1px;">Gross Loss Amount</div><br> -->
					<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Notes</h3>
					<h1 class="title has-text-dark" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '0' }}</h1>
					<!--  s -->
				</div>
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