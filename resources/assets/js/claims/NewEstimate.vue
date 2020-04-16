<template>
	<modal :show="creatingEstimate" :solid="true">
		
		<h3 class="subtitle has-text-info has-text-weight-light">Claim# {{ claim.claim_number }}</h3>
		<h1 class="title" style="color: #efefef">Create Estimate</h1>
		<hr style="background: #485269"> 
		
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<div class="field">
				  	<input
				  		id="is-erroneous" type="checkbox" name="is-erroneous" class="switch is-rounded is-small"
				  		v-model="isErroneous" :disabled="isCwop" @change="isErroneous ? estimate.gross_loss = 'erroneous' : estimate.gross_loss = 0"
			  		 >
				  	<label for="is-erroneous">Erroneous</label>
				  </div>
				</div>
				<div class="level-item">
					<div class="field">
					  	<input 
					  		id="is-cwop" type="checkbox" name="is-cwop" class="switch is-rounded is-small"
					  		v-model="isCwop" :disabled="isErroneous" @change="isCwop ? estimate.gross_loss = 'cwop' : estimate.gross_loss = 0"
				  		>
					  	<label for="is-cwop">CWOP</label>
					</div>
				</div>
			</div>
		</div>
		
		
		<div class="field">
			<label class="label" for="estimate">Gross Loss:</label>
			<div class="control">
				<input v-model="estimate.gross_loss" class="input" name="estimate" :disabled="isErroneous || isCwop">
			</div>
		</div>
		<div class="field">
			<label class="label" for="date">Date:</label>
			<div class="control">
				<input v-model="estimate.date" class="input" name="date">
			</div>
		</div>
		<div class="field">
			<label class="label" for="time">Time:</label>
			<div class="control">
				<input v-model="estimate.time" class="input" name="time">
			</div>
		</div>
		
		<div class="has-text-right" style="margin-top: 1.5em;">
			<a @click="$emit('toggle-estimate')" class="is-size-7 has-text-white is-light is-small is-link" style="margin-right: 1em; margin-top: 2em;">cancel</a>
			<button @click="submit()" class="button is-info is-small">Create Estimate</button>
		</div>
		<!-- <button @click.prevent="$emit('toggle-estimate')" class="modal-close is-large" aria-label="close"></button> -->
	</modal>
</template>
<script>
	import claimData from './claimData.js';
	import modal from '../Modal.vue';
	import Form from '../structur/src/form/Form.js';
	export default {
		name: 'NewEstimate',
		props: ['claim', 'creatingEstimate'],
		components: {
			modal
		},
		data() {
			// return claimData;
			return {
				estimate: {},
				isCwop: false,
				isErroneous: false,
			}
		},
		mounted() {
			this.makeNewEstimate();
			this.getTodaysDate();
		},
		methods: {
			submit() {
				this.estimate.post('/api/claims/' + this.claim.id + '/estimates').then(response => {
					this.$emit('estimate-created', response)
					return this.makeNewEstimate()
				}).catch(errors => {
					console.error(errors);
				})
			},
			makeNewEstimate() {
				this.isCwop = false;
				this.isErroneous = false;
				this.estimate = new Form({
					gross_loss: (0.00).toFixed(2),
					claim_id: this.claim.id,
					user_id: window.user.id,
					date: '',
					time: '',
				});
				return this.getTodaysDate();
			},
			getTodaysDate() {
				let today = new Date();
				this.estimate.date =   (today.getMonth()+1) + '/' + today.getDate() + '/'+ today.getFullYear();
				this.estimate.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}.{1,})/g, '').trim();
			},
		},
		computed: {
			//
		}
	}
</script>