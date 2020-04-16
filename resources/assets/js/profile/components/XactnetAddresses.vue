<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Xactnet Addresses</strong>: </p> 
		</div>
		<div class="column is-10">
			<xactnet-address 
				v-for="address in xactnetAddresses" :key="address.id" 
				:xactnetAddress="address" :errors="form.errors" :updateError="updateError"
				@xactnet-address-edited="update" @xactnet-address-deleted="remove"
			>
			</xactnet-address>
			<form @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" style="pointer-events: auto;">
					      <i class="fa fa-times" @click="toggleEditing" style="cursor:pointer;"></i>
					    </span>
						<input 
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="form.xactnet_address"
							@keyup.escape="toggleEditing"
						>
						<!-- @keyup.enter="toggleEditing" -->
					</div>
					<span class="help is-danger" v-if="form.errors.has('xactnet_address')" v-text="form.errors.get('xactnet_address')"></span>
				</div>
			</form>
			<span v-if="!editing" @click="create" style="cursor:pointer;" class="icon has-text-primary"><span class="fa fa-plus-circle" style="margin-left: 1rem;"></span> &nbsp;new</span>
		</div>
	</div>
</template>

<script>
	import Form from "../../structur/src/form/Form.js";
	import xactnetAddress from "./XactnetAddress.vue"
	export default {
		name: 'XactnetAddresses',
		mounted() {
			// this.form.xactnet_address = window.userData.profile.xactnet_address;
			this.xactnetAddresses = window.userData.xactnet_addresses;
			this.userId = window.userData.id;
		},
		components: {
			xactnetAddress
		},
		data() {
			return {
				userId: '',
				xactnetAddresses: [],
				isUpdate: false,
				updateError: false,
				requestMethod: 'put',
				form: new Form ({
					xactnet_address: '',
					current_xactnet_address: '',
					id: '',
				}),
				editing: false
			}
		},
		methods: {
			// submit newly edited 
			update(data) {
				this.isUpdate = true;
				this.form.xactnet_address = data[0].address;
				this.form.id = data[1].id;
				this.form.current_xactnet_address = data[1].address;
				this.requestMethod = 'patch';
				// console.log(data[1].address);
				return this.submit();
			},
			create() {
				this.toggleEditing();
				this.isUpdate = false;
				this.requestMethod='put'; 
				this.form.xactnet_address = '';
			},
			remove(id) {
				window.axios.delete('/api/xactnet_address/' + id ).then(response => {
					let address = this.xactnetAddresses.find(address => address.id == id)
					let idx = this.xactnetAddresses.indexOf(address);
					this.xactnetAddresses.splice(idx, 1);
				}).catch(error => {
					alert(error.message);
					console.error(error)
				});
			},
			submit() {
				// if (this.submitable) {
				this.form[this.requestMethod]('/api/user/' + this.userId + '/xactnet_address', false)
					.then(response => {
						this.updateError = false;
						this.isUpdate
							? this.updateXactnetAddress(response) 
							: this.xactnetAddresses.push(response);

						this.editing = false;
						console.log(this.editing);
					}).catch(error => {
						this.updateError = true;
						console.error(error)
						return window.axios.post('/api/admin/client-error', error);
					});
			},
			updateXactnetAddress(response){
				let xactnetAddress = this.xactnetAddresses.find(xactnetAddress => xactnetAddress.id == response.id );
				 xactnetAddress.address = response.address;
			},
			toggleEditing(){
				return this.editing = !this.editing;
			}
		}
	}
</script>