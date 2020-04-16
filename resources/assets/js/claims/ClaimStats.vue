<template>
	<div class="columns is-multiline is-mobile">

		<!-- <div class="column is-hidden-desktop is-12">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Gross Loss Amount</h3>
					<h1 class="title stat has-text-info">$
						<span v-if="hasEstimates">{{ claim.estimates[0].gross_loss }}</span>
						<span v-else">0</span>
					</h1>
					<h3 class="subtitle stat-title"><a href="">Issue Correction</a></h3>
				</div>	
			</div>
		</div> -->

		<div class="column is-one-third is-hidden-mobile">
			<div class="card">
				<div class="card-content claim-stat" @mouseleave="editingGrossLoss = false">
					<h3 class="subtitle stat-title">Gross Loss Amount</h3>
					<!-- <h1 class="title stat has-text-info" v-if="!editingGrossLoss">$<span v-if="hasEstimates"> {{ claim.estimates[0].gross_loss }} </span><span v-else>0.00</span></h1> -->
					<form @submit.prevent="submit" @keydown="estimate.errors.clear($event.target.name)" style="margin-top: -1.75em;">
					<div class="field" style="margin-top: -5px;">
						<div class="control has-icons-right has-icons-left">
							<input 
								type="text"
								id="gross-loss"
								class="input"
								style="border: none; background: transparent; box-shadow: none; font-size: 2em; font-weight: bold; color: #4b9ae7; padding-top: 0; padding-bottom: 0; height: 1.5em;text-align: center; justify-content: center" 
								v-model="estimate.gross_loss"
								@keyup.enter="submit"
								@keyup.escape="toggleEditing"
								:readonly="!editingGrossLoss"
							>
							<span class="icon is-small is-right" style="pointer-events: auto;">
						       <i class="fa fa-pencil" v-if="!editingGrossLoss" @click="toggleEditing" style="color: #4b9ae7; cursor:pointer; margin-top: 1rem;"></i>
						       <i class="fa fa-cloud-upload" v-if="editingGrossLoss" @click="toggleEditing" style="cursor:pointer; margin-top: 1rem;"></i>
						    </span>
						     <!-- color: #64c6a3; -->
						</div>
						<span class="help is-danger" v-if="estimate.errors.has('gross_loss')" v-text="estimate.errors.get('gross_loss')"></span>
						<!-- <span class="help is-danger" v-if="errors.has('current_xactnet_address')" v-text="errors.get('current_xactnet_address')"></span> -->
						</div>
					</form>
					<h3 class="subtitle stat-title" @click="toggleEditing"><a><span v-if="hasEstimates">Issue Correction</span><span v-else>Create Estimate</span></a></h3>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Time Open</h3>
					<h1 class="title stat has-text-grey">N/A</h1>
					<h3 class="subtitle stat-title">Days</h3>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Time To Contact</h3>
					<h1 class="title stat has-text-grey">N/A</h1>
					<h3 class="subtitle stat-title">Days</h3>
				</div>
			</div>
		</div>
		

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Time To Inspection</h3>
					<h1 class="title stat has-text-grey">N/A</h1>
					<h3 class="subtitle stat-title">Days</h3>
				</div>
			</div>
		</div>

		<div class="column is-half-mobile">
			<div class="card">
				<div class="card-content claim-stat">
					<h3 class="subtitle stat-title">Time to Estimate</h3>
					<h1 class="title stat has-text-grey">N/A</h1>
					<h3 class="subtitle stat-title">Days</h3>
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
	// import claimData from './claimData.js';
	import Form from '../structur/src/form/Form.js';
	export default {
		name: 'GrossLoss',
		props: ['claimId', 'userId', 'estimates'],
		data() {
			return {
				editingGrossLoss: false,

				estimate: new Form({
					gross_loss: 0,
					user_id: 0,
					claim_id: 0
				}),
			}
		},
		mounted() {
			this.estimate.user_id = this.userId
			this.estimate.claim_id = this.claimId
			// this.estimate.claim_id = this.claim.id;
		},
		computed: {
			hasEstimates() {
				return this.estimates.length > 0 ? true : false;
			}
		},
		methods: {
			submit() {
			this.estimate.post('/api/claims/' + this.claimId + '/estimates').then(response => {
					console.log(response);
					this.estimates.push(response);
					this.estimate.gross_loss = response.gross_loss;
				}).catch(error => {
					console.error(error);
				})
			},
			toggleEditing() {
				 this.editingGrossLoss = !this.editingGrossLoss;
				this.editingGrossLoss ? document.getElementById('gross-loss').focus() : null;
			}
		}
	}
</script>