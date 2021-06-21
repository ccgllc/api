<template>
	<div class="columns" style="padding: 2em; background: #f2f2f2; overflow: hidden; margin-left: 0.025em; margin-right: 0.025em;">
		<!-- static -->
		<div class="column is-2">
			<p><strong>Email</strong>:</p>
		</div>

		<!-- not editing  -->
		<div class="column is-8" v-if="!editing" @dblclick.prevent="toggleEditing"  style="cursor:pointer">
			<div class="columns is-gapless">
				<div class="column">{{ form.email }}</div>
				<div class="column">
					<div class="field has-addons">
						<p class="control" style="margin-bottom: 0;">
							<button class="button is-dark"
								@click.prevent="copyToClipboard"
							>
								&nbsp;<span class="icon"><i class="fa fa-files-o"></i></span>&nbsp;
							</button>
						</p>
						<p class="control" style="margin-bottom: 0;">
							<button class="button is-info"
								@click.prevent="toggleEditing"
							>
								&nbsp;<span class="icon"><i class="fa fa-edit"></i></span>&nbsp;
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- editing -->
		<div class="column is-8" v-show="editing">
			<form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
				<div class="columns is-gapless">
					<div class="column">
						<div class="field">
							<div class="control has-icons-left">
								<span class="icon is-small is-left" style="pointer-events: auto;">
						      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
						    </span>
								<input 
									id="email-input"
									type="text"
									class="input"
									style="" 
									v-model="form.email" 
									@keyup.enter="submit()"
									@keyup.esc="close()"
								>
							</div>
							<span class="help is-danger" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
						</div>
					</div>
					<div class="column">
						<div class="field has-addons" v-if="editing">
							<span class="control" style="margin-bottom: 0"><button type='submit' class="button is-info">&nbsp;<span class="icon is-small"><i class="fa fa-check"></i></span>&nbsp;</button></span>
							<span class="control" style="margin-bottom: 0"><button @click="close()" class="button is-dark">&nbsp;<span class="icon is-small"><i class="fa fa-times"></i></span>&nbsp;</button></span>
						</div>
					</div>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
	import Form from "../../structur/src/form/Form.js";	
	export default {
		name: 'EmailAddress',
		mounted() {
			this.input = document.getElementById('email-input')
			this.form.email = window.userData.email;
			this.userId = window.userData.id;
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
				userId: '',
				currentValue: '',
				form: new Form({
					email: '',
				})
			}
		},
		computed: {
			submitable() {
				return this.form.email === ''
					? false 
					: true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.form.put('/api/user/' + this.userId + '/email', false)
						.then(response => {
							console.log(response);
							this.form.email = response;
							this.close();
							// this.emailAddress.api_token = window.userData.api_token;
						}).catch(error => {
							console.error(error);
							return window.axios.post('/api/admin/client-error', error);
						});
				}else{
					this.editing = false;
					return this.form.email = window.userData.profile.email;
				}
			},
			close() {
				return this.editing = false;
			},
			toggleEditing() {
				this.editing = !this.editing;
				this.input.focus();
			},
			copyToClipboard() {
				this.createEmptyTextArea();
				let successful = document.execCommand('copy');
				return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
			},
			createEmptyTextArea() {
				let textArea = document.createElement("textarea");
			 	textArea.style.position = 'fixed';
			  	textArea.style.top = -1000;
			  	textArea.style.left = -1000;
			  	textArea.style.width = '2em';
			  	textArea.style.height = '2em';
			  	textArea.style.padding = 0;
			  	textArea.style.border = 'none';
			  	textArea.style.outline = 'none';
			  	textArea.style.boxShadow = 'none';
			  	textArea.style.background = 'transparent';
			  	textArea.value = this.form.email;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
	}
</script>