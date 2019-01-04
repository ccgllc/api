<template>
	<form id="certifications" method="post" action="/login" enctype="multipart/form-data" @submit.prevent="submit" @click="appData.certifications.errors.clear($event.target.name)">
		<div class="columns">
			<div class="column">
				<h2 class="subtitle has-text-primary"><strong>Certifications</strong></h2><hr>
				<span class="help is-danger" v-if="appData.certifications.errors.has('certifications')" v-text="appData.certifications.errors.get('certifications')"></span>
				<div class="field" v-for="cert in certificationTypes">
				  <input type="checkbox" class="is-checkbox is-circle" @change="toggleCertification(cert)" :value="cert" :id="cert.name" :name="cert.name">
				  <label :for="cert.name" v-text="cert.label"></label>
				  <expiration v-show="certificationIsSelected(cert) && cert.expiration !== false" :certification="cert" @date-changed="updateExpiration">
				  	<small>Provide date of {{ cert.name }} expiration </small>
				  </expiration>
				</div>
			</div>

			<div class="column">
				<h2 class="subtitle has-text-primary"><strong>Estimating Software Experience</strong></h2><hr>
				<span class="help is-danger" v-if="appData.certifications.errors.has('software')" v-text="appData.certifications.errors.get('software')"></span>
				<div class="field" v-for="software in softwares">
				  <input type="checkbox" class="is-checkbox is-circle" :value="software.name" :id="software.name" :name="software.name" v-model="appData.certifications.software">
				  <label :for="software.name" v-text="software.label"></label>
				</div>
			</div>
		</div><!-- end columns -->

		<br>
		
		<h2 class="subtitle has-text-primary"><strong>Upload Your Resume</strong></h2><hr>

		<div class="columns">
			<div class="column">
				<div class="file has-name is-primary">
				  <label class="file-label">
				    <input class="file-input" type="file" name="resume" @change="processFile($event.target.files)">
				    <span class="file-cta">
				      <span class="file-icon">
				        <i class="fa fa-cloud-upload"></i>
				      </span>
				      <span class="file-label">
				        Upload your resume…
				      </span>
				    </span>
				    <span class="file-name" v-text="filename" v-if="filename != ''"></span>
				  </label>
				</div>
				<span class="help is-danger" v-if="appData.certifications.errors.has('resume')" v-text="appData.certifications.errors.get('resume')"></span>
				<span class="help">Accepted file types: <strong>.pdf .doc .docx .rtf</strong></span>
			</div>
		</div>

		<br>

		<div class="columns">		
			<div class="column">

				<button class="button is-primary has-text-right" v-bind:class="{ 'is-loading': btnState }" @click="btnState = !btnState">
					<span>Save &amp; Continue</span>
					<span class="icon is-small">
			     	 	<i class="fa fa-chevron-circle-right"></i>
			   		</span>
				</button> 
			</div>
		</div>
	</form>
</template>
<script>
	import appData from '../data/appData.js';
	import expiration from './Expiration.vue';
	export default {
		name: 'Certifications',
		mounted() {
			this.setupView();
		},
		components: {
			expiration
		},
		data() {
			return {
				appData,
				btnState: false,
				certs: '',
				filename: '',
				toRemove: {},
				currentYear: '',
				certificationTypes: [
					// { name: 'none', label: 'None' },
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
				softwares: [
					{ name: 'xactimate', label: 'Xactimate' },
					{ name: 'symbility', label: 'Symbility' },
					{ name: 'simsol', label: 'Simsol' },
					{ name: 'guidewire', label: 'Guidewire' },
					{ name: 'VCA', label: 'VCA (Virtual Claim Adjuster)' },
					{ name: 'MSB/Integra Claim', label: 'MSB/Integra Claim' },
				],
			}
		},
		computed: {
			//
		},
		methods: {
			submit() {
				this.appData.certifications.post('/api/user/certifications', false)
					.then(response => {
						this.$router.push({ path: '/complete' });
					}).catch(error => {
						this.btnState = false;
						return window.axios.post('/api/admin/client-error', error);
					});
			},
			processFile(files) {
				if (files.length > 0) {
					this.filename = files[0].name;
					this.appData.certifications.resume = files[0];
				}
			},
			toggleCertification(cert) {
				if (this.certificationIsSelected(cert)) {
					let idx = this.appData.certifications.certifications.indexOf(cert);
					if (cert.expiration !== false) this.removeExpiration(idx);
					return this.appData.certifications.certifications.splice(idx, 1);
				}
				return this.appData.certifications.certifications.push(cert);
			},
			certificationIsSelected(cert) {
				let selected = this.appData.certifications.certifications.filter(
					(certification) => certification == cert
				);
				return selected.length > 0 ? true : false;
			},
			updateExpiration(cert) {
				console.log(cert);
				let certifications = this.appData.certifications.certifications.filter(c => c.name == cert.name);
				let idx = this.appData.certifications.certifications.indexOf(certifications[0]);
				// if (this.certificationIsSelected(cert))
				this.appData.certifications.certifications[idx].expiration = cert.month + '/' + cert.year;
				// let match = this.certs.certifications.filter(certification => certification == cert.name);
			},
			removeExpiration(idx){
				return this.appData.certifications.expirations.splice(idx, 1);
			},
			setupView() {
				this.appData.text.title = "Industry Certifications";
				this.appData.text.subtitle = "Step Three - Tell us what you're certified to do";
				this.appData.progress = 3;
				this.appData.certifications = this.appData.certifications;
			}
		}
	}
</script>