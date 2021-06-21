<template>
	<div class="columns" style="padding: 2em; margin-left: .025em; margin-right: .025em;">
		
		<!-- static -->
		<div class="column is-2">
			<p><strong>Phone Number</strong>:</p>
		</div>

		<!-- not editing -->
		<div class="column is-8" v-if="!editing">
			<div class="columns is-gapless">
				<div class="column">{{ form.phone | phoneNumber }}</div>

				<div class="column">
					<div class="buttons has-addons">
						<button class="button is-dark" @click.prevent="copyToClipboard">
							&nbsp;<span class="icon"><i class="fa fa-files-o"></i></span>&nbsp;
						</button>
						<button class="button is-info" @click.prevent="toggleEditing">
							&nbsp;<span class="icon"><i class="fa fa-edit"></i></span>&nbsp;
						</button>
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
							<div class="control has-icons-left" style="">
								<span class="icon is-small is-left" style="pointer-events: auto; cursor:pointer;">
							      <i @click="close" class="fa fa-times"></i>
							    </span>
									<input 
										id="phone-input"
										type="text"
										class="input"
										v-model="form.phone" 
										@keyup.enter="toggleEditing"
										@keyup.esc="close()"
									>
								</div>
							<span class="help is-danger" v-if="form.errors.has('value')" v-text="form.errors.get('value')"></span>
						</div>
				</div>
				<div class="column">
					<div class="field has-addons">
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
		name: 'PhoneNumber',
		mounted() {
			this.input = document.getElementById('phone-input')
			this.form.phone = window.userData.profile.phone;
			this.userId = window.userData.id;
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				input: {},
				currentValue: '',
				userId: '',
				form: new Form({
					phone: '',
				})
			}
		},
		computed: {
			submitable() {
				return this.form.phone === ''
					? false 
					: true;
			}
		},
		methods: {
			submit() {
				if (this.submitable) {
					this.form.put('/api/user/' + this.userId + '/phone', false)
						.then(response => {
							this.form.phone = response;
							this.close();
						}).catch(error => {
							console.error(error);
							return window.axios.post('/api/admin/client-error', error);
						});
				}else{
					this.editing = false;
					return this.form.phone = window.userData.profile.phone;
				}
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
			close() {
				return this.editing = false;
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
			  	textArea.value = this.form.phone;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
		filters: {
			phoneNumber: function (value) {
			    if (!value) return ''
			    value = value.toString()
			    // return value.charAt(0).toUpperCase() + value.slice(1)
			    return value.replace(/\b(\d{3})([-.\s]?)+(\d{3})([-.\s]?)+(\d{4})\b/g, '($1) $3-$5');
	  		}	
		}	
	}
</script>