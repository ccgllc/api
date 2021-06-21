<template>
	<div class="columns" style="overflow: hidden;">
		<!-- !editing -->
		<div class="column" v-if="!editing">
			<div class="columns is-gapless">
				<div class="column">{{ xactnetAddress.address }}</div>
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
							<p class="control" style="margin-bottom: 0;">
								<button class="button is-danger"
									@click.confirm="deleteAddress(xactnetAddress.id)"
								>
									&nbsp;<span class="icon"><i class="fa fa-trash-o"></i></span>&nbsp;
								</button>
							</p>
						</div>
				</div>
			</div>
		</div>

		<!-- editing -->
		<div class="column" v-show="editing">
			<form @submit.prevent="submit" @keydown="errors.clear($event.target.name)">
				<div class="columns is-gapless">
					<div class="column">
						<div class="field">
							<div class="control has-icons-left">
								<span class="icon is-small is-left" style="pointer-events: auto;">
							      <i class="fa fa-times" @click="toggleEditing" style="cursor:pointer;"></i>
							    </span>
								<input 
									type="text"
									class="input"
									v-model="editedXactnetAddress.address"
									@keyup.enter="toggleEditing"
									@keyup.escape="toggleEditing"
								>
							</div>
							<span class="help is-danger" v-if="errors.has('xactnet_address')" v-text="errors.get('xactnet_address')"></span>
							<span class="help is-danger" v-if="errors.has('current_xactnet_address')" v-text="errors.get('current_xactnet_address')"></span>
						</div>
					</div>
					<div class="column">
						<div class="field has-addons">
						<span class="control" style="margin-bottom: 0"><button type='submit' class="button is-info">&nbsp;<span class="icon is-small"><i class="fa fa-check"></i></span>&nbsp;</button></span>
						<span class="control" style="margin-bottom: 0"><button @click="editing = false" class="button is-dark">&nbsp;<span class="icon is-small"><i class="fa fa-times"></i></span>&nbsp;</button></span>
					</div>
					</div>
				</div>
			</form>
			<span v-model="xactnetAddress" v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="toggleOptions(true)" @mouseleave="toggleOptions(false)" style="cursor:pointer">
				{{ xactnetAddress.address }} 
				&nbsp;
				<span v-show="showOptions">
				<a 
					@click.prevent="toggleEditing"
					v-if="!editing"
				>
					<span class="icon is-small has-text-dark"><span class="fa fa-pencil"></span></span>
				</a>
				&nbsp;|&nbsp; 
				<a 
					@click.prevent="deleteAddress(xactnetAddress.id)"
					v-if="!editing"
				>
					<span class="icon is-small has-text-danger"><span class="fa fa-trash-o"></span></span>
				</a>
				&nbsp;|&nbsp;
				<a 
					@click.prevent="copyToClipboard"
					v-if="!editing"
				>
					<span class="icon is-small has-text-secondary"><span class="fa fa-copy"></span></span>
				</a>
				</span>
			</span>
		</div>	
</div>
</template>

<script>
	import Form from "../../structur/src/form/Form.js";
	export default {
		name: 'XactnetAddress',
		props: ['xactnetAddress', 'errors', 'updateError'],
		mounted() {
			this.userId = window.userData.id;
		},
		data() {
			return {
				userId: '',
				editedXactnetAddress: {
					address: this.xactnetAddress.address,
					id: this.xactnetAddress.id
				},
				editing: false,
				showOptions: false,
				copyText: 'copy',
				input: {},
			}
		},
		computed: {
			submitable() {
				return this.form.xactnet_address === '' ? false : true;
			}
		},
		methods: {
			submit() {
				return this.$emit('xactnet-address-edited', [this.editedXactnetAddress, this.xactnetAddress]);
			},
			deleteAddress(id) {
				return this.$emit('xactnet-address-deleted', id);
			},
			toggleEditing() {
				this.editing = !this.editing;
				if (this.editing == false && this.errors.any()) this.editing = true;
			},
			toggleOptions(show) {
				return this.showOptions = show;
			},
			focusInput() {
				return this.editing ? this.input.focus() : null;
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
			  	textArea.value = this.xactnetAddress.address;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		}
	}
</script>