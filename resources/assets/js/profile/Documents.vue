<template>
	<page title="Your Documents" description="Documents uploaded by you, keep an updated resume here.">
		<div class="columns" style="padding: 2em 0 2em 2em; background: #f2f2f2; margin-left: .025em; margin-right: .025em;">
			<div class="column">
				<file 
					v-for="doc in documents" 
					:key="doc.id"
					:user-id="userId"
					:file="doc"
					v-on:file-deleted="remove"
				>	
				</file>
			</div>
	</div>

	<div class="columns" style="padding: 2em 0 2em 2em; margin-left: .025em; margin-right: .025em;">
		<button class="button is-info" @click="creatingNewFile = !creatingNewFile">Upload File</button>
	</div>

	<div id="createDocument" class="quickview" :class="{'is-active': creatingNewFile}">
    <header class="quickview-header">
      <span class="has-text-weight-bold is-size-5 has-text-white">Upload a new file</span>
      <span class="delete" @click="creatingNewFile = false"></span>
    </header>

    <div class="quickview-body">
      <div class="quickview-block" style="margin: 1em;">
        <form @submit.prevent="submit" @keydown="newFile.errors.clear($event.target.name)">
	
					<div class="field">
						<label class="label">Type:</label>
						<div class="select is-fullwidth">
						  <select v-model="newFile.type">
						    <option value="">select</option>
						    <option v-for="type in types" :value="type">{{ type }}</option>
						  </select>
						</div>
						  <span class="help is-danger" v-if="newFile.errors.has('type')" v-text="newFile.errors.get('type')"></span>
					</div>

					<div class="field">
						<label class="label">Filename:</label>
						<input type="text" v-model="newFile.filename" class="input" placeholder="My File">
						<span class="help is-danger" v-if="newFile.errors.has('filename')" v-text="newFile.errors.get('filename')"></span>
					</div>

					<div class="field">
						<div class="file has-name is-dark">
						  <label class="file-label">
						    <input class="file-input" type="file" name="resume" @change="processFile($event.target.files)">
						    <span class="file-cta">
						      <span class="file-icon">
						        <i class="fa fa-cloud-upload"></i>
						      </span>
						      <span class="file-label">
						        Select a file to upload…
						      </span>
						    </span>
						    <span class="file-name" v-text="filename" v-if="filename != ''"></span>
						  </label>
						</div>
					</div>
					<hr>
					<div class="field is-flex is-justify-content-flex-end">
						<button class="button" @click.prevent="creatingNewFile = false">Cancel</button>&nbsp;&nbsp;
	      		<input class="button is-info" type="submit" value="Save Document">
					</div>
				</form>
      </div>
    </div>
     <!--  <footer class="quickview-footer">

      </footer>  -->
  </div>

		

	</page>

</template>

<script>
	import page from '../components/Page.vue';
	import FormWithFiles from '../structur/src/form/FormWithFiles';
	import file from './components/File.vue';
	export default {
		name: 'Documents',
		components: {
			file,
			page
		},
		mounted() {
			this.userId = window.userData.id;
			this.name = window.userData.name;
			this.documents = window.userData.documents;
		},
		data() {
			return {
				name: '',
				userId: '',
				toggleDelete: false,
				documents: [],
				types: [
					'resume',
				],
				filename: '',
				creatingNewFile: false,
				newFile: new FormWithFiles({
					type: '',
					filename: '',
					file: {}
				}),
			}
		},
		methods: {
			submit() {
				this.newFile.post('/api/user/'+ this.userId + '/documents/').then(response => {
					console.log(response);
					this.documents.push(response);
					this.creatingNewFile = false;
				}).catch(error => {
					console.error(error);
				})
			},
			remove(file) {
				console.log('deleting');
				let index = this.documents.indexOf(file);
				return this.documents.splice(index, 1);
			},
			processFile(files) {
				if (files.length > 0) {
					this.filename = files[0].name;
					this.newFile.file = files[0];
				}
			},
		}
	}
</script>