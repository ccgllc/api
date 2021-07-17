<template>
	<page title="My Certifications" description="Your industry certifications">
		<div class="columns is-multiline" style="padding: 2em; background: #f2f2f2; margin-left: .025em; margin-right: .025em;">
			<div class="certification column is-3"  v-for="cert in certifications">
				<div class="card">
					<div class="card-content">
						<div class="content">
							<span class="icon has-text-info"><i class="fa fa-certificate"></i></span>
							{{ cert.type }} <small style="font-weight: 700; font-size: .75em;" v-if="cert.expiration">&nbsp;(exp&nbsp;{{ cert.expiration }})</small>
							<span 
								class="is-pulled-right is-tooltip-danger tooltip is-tooltip-left" 
								:data-tooltip="'Delete ' + cert.type"
							>
								<a 
									class="delete is-small is-danger"
									@click="remove(cert, 'certifications')"
								></a>
							</span>

						</div>	
					</div>
				</div>
			</div>
		</div>
		
		<div class="columns is-multiline"  style="padding: 2em; margin-left: .025em; margin-right: .025em;">
			<div class="certification column is-3"  v-for="exp in softwareExperiences">
				<div class="card">
					<div class="card-content">
						<div class="content">
							<span class="icon has-text-info"><i class="fa fa-laptop"></i></span>
							{{ exp.type }}
							<span 
								class="is-pulled-right is-tooltip-danger tooltip is-tooltip-left" 
								:data-tooltip="'Delete ' + exp.type"
							>
								<a 
									class="delete is-small is-danger"
									@click="remove(exp, 'software-experiences')"
								></a>
							</span>
						</div>	
					</div>
				</div>
			</div>
			</div>

			<div class="columns" style="padding: 2em; margin-left: .025em; margin-right: .025em;">
				<div class="column">
						<!-- =====================BUTTON===================== -->
						<button class="button is-info" @click="creatingNew = !creatingNew">Add new</button>
						<!-- =====================BUTTON===================== -->
				</div>
			</div>

		<div id="createLicense" class="quickview" :class="{'is-active': creatingNew}">

	    <header class="quickview-header">
	      <span class="has-text-weight-bold is-size-5 has-text-white">New certification</span>
	      <span class="delete" @click="creatingNew = false"></span>
	    </header>

	    <div class="quickview-body">
	      <div class="quickview-block" style="margin: 1em;">
	      	 <form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
					
						<div class="field">
							<label class="label">Type:</label>
							<div class="select is-fullwidth">
							  <select v-model="type" @change="clearForm">
							    <option value="">Select</option>
							   	<option value="software-experiences">Software Experience</option>
							   	<option value="certifications">Certification</option>
							  </select>
							</div>
						</div>

						<div class="field"  v-if="type == 'software-experiences'">
							<label class="label">Software Experience:</label>
							<div class="select is-fullwidth">
							  <select v-model="form.type">
							    <option value="">Select</option>
							   <option v-for="exp in experienceTypes" :value="exp.name">{{ exp.label }}</option>
							  </select>
							</div>
							  <span class="help is-danger" v-if="form.errors.has('type')" v-text="form.errors.get('type')"></span>
						</div>

						<div class="field" v-if="type == 'certifications'">
							<label class="label">Certification:</label>
							<div class="select is-fullwidth">
							  <select v-model="form.type">
							    <option value="">Select</option>
							   <option v-for="cert in certificationTypes" :value="cert">{{ cert.label }}</option>
							  </select>
							</div>
							<expiration v-show="form.type && form.type.expiration !== false" :certification="form.type" @date-changed="updateExpiration">
						  		<small>Provide date of {{ form.type.name }} expiration </small>
					  	</expiration>
					    <span class="help is-danger" v-if="form.errors.has('type.name')" v-text="form.errors.get('type.name')"></span>
						</div>

						<hr>
						<div class="field is-flex is-justify-content-flex-end">
				      <button class="button" @click.prevent="creatingNew = false">Cancel</button>&nbsp;&nbsp;
				      <input type="submit" class="button is-primary" value="Save">
						</div>

					</form>
				</div>
  		</div>
  	</div>
	</page>
</template>

<script>
	import Form from '../structur/src/form/Form';
	import page from '../components/Page';
	import expiration from '../components/Expiration.vue';
	export default {
		name: 'Certifications',
		components: {
			expiration,
			page
		},
		mounted(){
			this.certifications = window.userData.certifications;
			this.softwareExperiences = window.userData.software_experiences;
			this.userId = window.userData.id;
		},
		data() {
			return {
				type: '',
				form: new Form({
					type: {},
				}),
				userId: '',
				creatingNew: false,
				certifications: [],
				softwareExperiences: [],
				certificationTypes: [
					{ name: 'AIC', label: 'AIC', expiration: false },
					{ name: 'CPCU', label: 'CPCU', expiration: false },
					{ name: 'TWIA/TFPA', label: 'TWIA / TFPA', expiration: 1 },
					{ name: 'NFIP', label: 'NFIP', expiration: 1 },
					{ name: 'HAAG', label: 'HAAG', expiration: false },
					{ name: 'IIRC', label: 'IIRC', expiration: false },
					{ name: 'rope/harness', label: 'Rope & Harness', expiration: false },
					{ name: 'Earthquake', label: 'Earthquake', expiration: 1 },
					{ name: 'Umpire', label: 'Umpire', expiration: false },
					{ name: 'Appraiser', label: 'Appraiser', expiration: false },
				],
				experienceTypes: [
					{ name: 'xactimate', label: 'Xactimate' },
					{ name: 'symbility', label: 'Symbility' },
					{ name: 'simsol', label: 'Simsol' },
					{ name: 'guidewire', label: 'Guidewire' },
					{ name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' },
					{ name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' },
				],
			}
		},
		methods: {
			submit() {
				this.form.post('/api/user/' + this.userId + '/' + this.type)
							.then(response => {
								console.log(response);
								this.type == 'certifications' 
									? this.certifications.push(response) 
									: this.softwareExperiences.push(response);
								return this.creatingNew = false;
							}).catch(error => {
								console.error(error);
								return window.axios.post('/api/admin/client-error', error);
							})
			},
			remove(obj, uri) {
				window.axios.delete('/api/user/' + uri + '/' + obj.id)
							.then(response => {
								console.log(response);
								if (uri == 'software-experiences')
								{
									let index = this.softwareExperiences.indexOf(obj);
									return this.softwareExperiences.splice(index, 1);
								}else{
									let index = this.certifications.indexOf(obj);
									return this.certifications.splice(index, 1);
								}
							}).catch(error => {
								console.error(error);
							})
			},
			updateExpiration(cert) {
				console.log(cert);
				// let certifications = this.form.type.filter(c => c.name == cert.name);
				// let idx = this.certifications.indexOf(certifications[0]);
				// if (this.certificationIsSelected(cert))
				return this.form.type.expiration = cert.month + '/' + cert.year;
				// let match = this.certs.certifications.filter(certification => certification == cert.name);
			},
			clearForm() {
				return this.form.type = '';
			}
		}
	}
</script>