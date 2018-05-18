<template>
	<div class="columns is-multiline is-mobile">
		
		<div class="column is-hidden-desktop is-12">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Gross Loss Amount</h3>
					<h1 class="title has-text-info" style="font-size: 2em; font-weight: 700; color:#64C6A3;">${{ claim.gross_loss }}</h1>
				</div>	
			</div>
		</div>

		<div class="column is-hidden-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Gross Loss Amount</h3>
					<h1 class="title has-text-info" style="font-size: 2em; font-weight: 700; color:#64C6A3;">${{ claim.gross_loss }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Days Open</h3>
					<h1 class="title has-text-grey" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '7' }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Days To Contact</h3>
					<h1 class="title has-text-grey" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '2' }}</h1>
				</div>
			</div>
		</div>
		

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Days To Inspection</h3>
					<h1 class="title has-text-grey" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '4' }}</h1>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Days to Estimate</h3>
					<h1 class="title has-text-grey" style="font-size: 2em; font-weight: 700; color:#64C6A3;">{{ '5' }}</h1>
				</div>
			</div>
		</div>


		<!-- <div class="column is-one-quarter">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle" style="color: #908F8F; font-size: .75em;">Adjuster Expenses</h3>
					<h1 class="title" style="font-size: 2em; font-weight: 700; color:#64C6A3;">${{ 134.56 }}</h1>
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