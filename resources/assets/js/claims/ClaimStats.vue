<template>
	<div class="columns is-multiline is-mobile">

		<div class="column is-hidden-desktop is-12">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Gross Loss Amount</h3>
					<h1 class="title stat has-text-info">${{ claim.gross_loss }}</h1>
				</div>	
			</div>
		</div>

		<div class="column is-one-third is-hidden-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Gross Loss Amount</h3>
					<h1 class="title stat has-text-info">${{ claim.gross_loss }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Days Open</h3>
					<h1 class="title stat has-text-grey">{{ '∞' }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Days To Contact</h3>
					<h1 class="title stat has-text-grey">{{ '2' }}</h1>
				</div>
			</div>
		</div>
		

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Days To Inspection</h3>
					<h1 class="title stat has-text-grey">{{ '4' }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Days to Estimate</h3>
					<h1 class="title stat has-text-grey">{{ '5' }}</h1>
				</div>
			</div>
		</div>


		<!-- <div class="column is-one-quarter">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Adjuster Expenses</h3>
					<h stat1 class="title">${{ 134.56 }}</h1>
				</div>
			</div>
		</div> -->

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