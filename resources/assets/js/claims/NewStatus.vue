<template>	
	<modal :show="creatingNewStatus">
		<form @submit.prevent="submit">
		<button @click.prevent="$emit('new-status-toggle')" class="modal-close is-large" aria-label="close"></button>
		<h3 class="subtitle has-text-info has-text-weight-light">Claim# {{ claim.claim_number }}</h3>
		<h1 class="title" style="color: #efefef">{{ newStatus.name }}</h1>
		<hr style="background: #485269">
		
	<!-- 	<div class="columns">
			<div class="column"> -->
				<div class="field" v-if="newStatus.name == 'Select a status'">
					<label class="label" for="status">Status:</label>
					<div class="control">
						<div class="select">
						  <select v-model="newStatus.name" class="input" name="status">
						    <option v-for="item in statusesList" :value="item.name" v-text="item.name"></option>
						  </select>
						</div>
					</div>
				</div>
		<!-- 	</div>
		</div> -->

			<!-- <div class="field" v-if="newStatus.name == 'Reviewer Assigned'">
					<label class="label" for="status">Status:</label>
					<div class="control">
						<div class="select">
						  <select v-model="newStatus.name" class="input" name="status">
						    <option v-for="item in statusesList" :value="item.name" v-text="item.name"></option>
						  </select>
						</div>
					</div> -->

		<!-- <div class="columns">

			<div class="column"> -->
				<div class="field">
					<label class="label" for="another">Date:</label>
					<div class="control has-icons-left">
				    	<input v-model="newStatus.date" class="input" type="text" placeholder="yyyy/mm/dd/">
				    	<span class="icon is-small is-left">
					      <i class="fa fa-calendar-o"></i>
					    </span>
					    <span class="help is-danger" v-if="newStatus.errors.has('date')" v-text="newStatus.errors.get('date')"></span>
		  			</div>
				</div>
			<!-- </div> -->

			<!-- <div class="column"> -->
				<div class="field">
				<label class="label" for="another">Time:</label>
					<div class="control has-icons-left">
				    	<input v-model="newStatus.time" class="input" type="text" placeholder="11:35 am">
				    	<span class="icon is-small is-left">
					      <i class="fa fa-clock-o"></i>
					    </span>
					    <span class="help is-danger" v-if="newStatus.errors.has('time')" v-text="newStatus.errors.get('time')"></span>
		  			</div>
				</div>
			<!-- </div> -->

		<!-- </div> -->

		
		
		<div class="field" style="margin-top: 1em;">
		  <input id="switchRoundedInfo" type="checkbox" name="switchRoundedInfo" class="switch is-small is-rounded is-info" checked="checked">
		  <label for="switchRoundedInfo">Export to third parties</label>
		</div>

		<div class="has-text-right" style="margin-top: 1.5em;">
			<a @click.prevent="$emit('new-status-toggle')" class="is-size-7 has-text-white is-light is-small is-link" style="margin-right: 1em; margin-top: 2em;">cancel</a>
			<button type="submit" class="button is-info is-small">Add Status</button>
		</div>
		</form>
	</modal>
</template>
<script>
	import claimData from './claimData.js';
	import modal from '../Modal.vue';
	export default {
		name: 'NewStatus',
		components: {
			modal
		},
		data() {
			return claimData;
		},
		mounted() {
			this.newStatus.claim_number = this.claim.claim_number;
			this.newStatus.claim_id = this.claim.id;
			this.newStatus.user_id = this.user.id;
			this.getTodaysDate();
		},
		methods: {
			submit() {
				this.newStatus.post('/api/claims/' + this.claim.id + '/statuses').then(response => {
					console.log(response);
					this.claim.statuses.unshift(response);
					this.$emit('new-status-toggle');
				}).catch(errors => {
					console.error(errors);
					this.$emit('new-status-toggle');
				})
			},
			getTodaysDate() {
				let today = new Date();
				this.newStatus.date =   (today.getMonth()+1) + '/' + today.getDate() + '/'+ today.getFullYear();
				this.newStatus.time = today.toTimeString().replace(/(GMT-\d{1,}\s{1,}\S[A-z]{1,}\S)/g, '').trim();
			},
			// toggleNewStatus() {
			// 	// this.getTodaysDate();
			// 	return this.creatingNewStatus = !this.creatingNewStatus;
			// },
		},
		computed: {
			// accessContact() {
			// 	return claim.claim_data.accessContact.name
			// }
		}
	}
</script>