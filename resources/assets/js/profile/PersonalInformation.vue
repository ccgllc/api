<template>
	<page 
		:title="user.name" 
		:description="titleString" 
		:img="user.avatar === null ? '#' : user.avatar.path"
	>
		<authorizations :user="user" v-if="hasPermission"></authorizations>
		<status-manager v-if="hasPermission" @status-changed="updateStatus" :status="user.status" :user-id="user.id"></status-manager>
		<reset-password></reset-password>
		<email-address></email-address>
		<phone-number></phone-number>
		<mailing-address></mailing-address>
		<xactnet-addresses></xactnet-addresses>	
	</page>
</template>

<script>
	import page from '../components/Page.vue';
	import xactnetAddresses from './components/XactnetAddresses.vue';
	import phoneNumber from './components/PhoneNumber.vue';
	import emailAddress from './components/EmailAddress.vue';
	import mailingAddress from './components/Address.vue';
	import resetPassword from './components/ResetPassword.vue';
	import statusManager from './components/StatusManager';
	import authorizations from './components/UserAuthorizations';
	// import EditableText from './EditableText.vue';
	export default {
		name: 'PersonalInformation',
		// props: ['requiredPermissions'],
		components: {
			page,
			xactnetAddresses,
			phoneNumber,
			emailAddress,
			mailingAddress,
			resetPassword,
			statusManager,
			authorizations
		},
		mounted() {
			// console.log(this.components);
			// this.$nextTick(() => {
				this.authUser = window.user;
				this.user = window.userData;
				// console.log(this.user);
			// });
		},
		data() {
			return {
				user: {avatar:{path: '#'}},
				authUser: {avatar:{path: '#'}},
				requiredPermissions: ['manage-users'],
			}
		},
		computed: {
			titleString() {
				if(this.user.profile) {
					return `Joined ${this.user.created_at}, lives in ${this.user.profile.city}, ${this.user.profile.state}, and has ${this.user.adjuster_licenses.length} adjuster lisenses...`
				}
			},
			hasPermission() {
				// this.$nextTick(()=>{
					// console.log(this.user.roles);
				var vm = this;

				// if (this.authUser.roles.find(role => role.name === 'administrator')) 
				// 	return true;

				function authUserHasPermissionTo(permission) {
					// console.log(vm.authUser.hasOwnProperty('permissions'));
					let hasPermission = vm.authUser.permissions.find(perm => perm.name === permission)
					return hasPermission ? true : false;
				}

				if (vm.authUser.permissions !== undefined)
					return this.requiredPermissions.every(authUserHasPermissionTo);
						
					// })
					// const roleAccess = this.authUser.roles.permissions.find(perm => {
					// 	vm.
					// });
					// return this.availablePermissions.filter(permission => {
					// 	// const label = permission.label.toLowerCase();
					// 	return vm.requiredPermissions.
					// 	// return permission.name.indexOf(vm.query.toLowerCase()) !== -1;
					// });
					// console.log(roleAccess);
					// if (roleAccess) return true;
				// }

				
			},

				// return false;
				// });
				
			// }
		},
		methods: {
			updateStatus(status){
				return this.user.status = status;;
			},
		}
	}
</script>