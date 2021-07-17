<template>
	<page title="Adjuster Licenses" description="Always keep your license data up-to-date">
		<!-- <div class="columns"> -->
			<License 
				v-for="(license, idx) in adjusterLicenses" 
				:key="license.id" 
				:license="license" 
				:states="states" 
				:months="months" 
				:currentYear="currentYear"
				:background="(idx % 2 ) === 0 ? 'background: #f2f2f2;' : 'background: transparent;'"
				@update='update'
				@remove="remove"
			>
			</License>
	 	<!-- </div> -->
		<button @click="creatingNewLicense = !creatingNewLicense;" class="button is-info" style="margin: 2em 0 0 2em;">{{ buttonText}}</button><br><br>
		<!-- </div> -->

		<div id="createLicense" class="quickview" :class="{'is-active': creatingNewLicense}">
    <header class="quickview-header">
      <span class="has-text-weight-bold is-size-5 has-text-white">Add a new Adjuster License</span>
      <span class="delete" @click="creatingNewLicense = false"></span>
    </header>

    <div class="quickview-body">
      <div class="quickview-block" style="margin: 1em;">
      	 <form @submit.prevent="submit" @keydown="newLicense.errors.clear($event.target.name)">
      	 		<div class="columns">

      	 			<div class="column is-3">
      	 				<div class="field">
									<label class="label">State:</label>
									<div class="select">
									  <select v-model="newLicense.license_state">
									    <option value=""></option>
									    <option v-for="state in states" :value="state.abbr">{{ state.abbr }}</option>
									  </select>
									</div>
									  <span class="help is-danger" v-if="newLicense.errors.has('license_state')" v-text="newLicense.errors.get('license_state')"></span>
								</div>
      	 			</div>

							<div class="column is-3">
								<div class="field">
									<label class="label">Exp. Mo:</label>
									<div class="select">
									  <select v-model="newLicense.expiration_month">
									  	<option value="">mo.</option>
									    <option v-for="month in months" :value="month.abbr">{{ month.abbr }}</option>
									  </select>
									  <span class="help is-danger" v-if="newLicense.errors.has('expiration_month')" v-text="newLicense.errors.get('expiration_month')"></span>
									</div>  
								</div>
							</div>

							<div class="column is-3">
								<div class="field">
									<label class="label">Exp. Year:</label>
									<div class="select">
									  <select v-model="newLicense.expiration_year">
									  	<option value="">yr.</option>
									    <option v-for="n in 10" :value="(currentYear + n) - 1">{{ (currentYear + n) - 1 }}</option>
									  </select>
									  <span class="help is-danger" v-if="newLicense.errors.has('expiration_year')" v-text="newLicense.errors.get('expiration_year')"></span>
									</div>  
								</div>
							</div>
						</div>

						<div class="field">
							<label class="label">License #:</label>
							<div class="control control has-icons-left">
					    	<input v-model="newLicense.license_number" class="input" type="text">
					    	<span class="icon is-small is-left">
						      <i class="fa fa-hashtag"></i>
						    </span>
						    <span class="help is-danger" v-if="newLicense.errors.has('license_number')" v-text="newLicense.errors.get('license_number')"></span>
				  		</div>
						</div>

					<hr>
					<div class="field is-flex is-justify-content-flex-end">
			      <button class="button" @click.prevent="creatingNewLicense = false">Cancel</button>&nbsp;&nbsp;
			      <input type="submit" class="button is-primary" value="Save License">
					</div>
				</form>
      </div>
    </div>
  </div>
	</page>
</template>

<script>
	import page from '../components/Page.vue';
	import License from './components/License.vue';
	import Form from '../structur/src/form/Form.js';
	import states from '../data/states.js';
	import months from '../data/months.js';
	export default {
		name: 'Licenses',
		components: {
			License,
			page,
		},
		mounted() {
			this.adjusterLicenses = window.userData.adjuster_licenses;
			this.userId = window.userData.id;
			let today = new Date;
			this.currentYear = today.getFullYear();
		},
		computed: {
			buttonText() {
				return this.creatingNewLicense ? 'cancel' : 'Add A License';
			}
		},
		data() {
			return {
				creatingNewLicense: false,
				adjusterLicenses: [],
				userId: '',
				newLicense: new Form({
					license_number: '',
					license_state: '',
					expiration_month: '',
					expiration_year: '',
				}),
				currentYear: '',
				states,
				months
			}
		},
		methods: {
			submit() {
				this.newLicense.post('/api/user/' + this.userId + '/license/')
					.then(response => {
						console.log(response)
						this.adjusterLicenses.push(response);
						return this.creatingNewLicense = false;
					})
					.catch(error => {
						console.error(error);
						return window.axios.post('/api/admin/client-error', error);
					})
			},
			update(license) {
				// alert('updating...')
				window.axios.patch('/api/user/' + this.userId + '/license/' + license.id, license)
					.then(response => {
						let current = this.adjusterLicenses.find(adjusterLicense => adjusterLicense.id === license.id)
						let index = this.adjusterLicenses.indexOf(current);
						return this.adjusterLicenses.splice(index, 1, response.data);
					})
					.catch(error => {
						console.log(error);
				})
			},
			remove(license) {
				window.axios.delete('/api/user/' + this.userId + '/license/' + license.id)
					.then(response => {
						console.log(response);
						let index = this.adjusterLicenses.indexOf(license);
						return this.adjusterLicenses.splice(index, 1);
					})
					.catch(error => {
						console.log(error);
				})
			}
		}
	}
</script>