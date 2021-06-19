<template>
	<div class="columns" style="padding: 2em; background: #f2f2f2; margin-bottom: 0;">

		<div class="column">
			<user-permissions-manager 
				:available-permissions="availablePermissions"
				:user="user"
				endpoint="user"
				@permission-revoked="revokePermission"
				@permission-granted="grantPermission"
			>
				Assign Permissions
			</user-permissions-manager>
		</div>

		<div class="column">
			<role-manager 
				@role-added="updateRoles"
				:roles="roles"
				:user-roles="user.roles"
				:user-id="user.id"
				endpoint="roles"
			>
				Assign Roles
			</role-manager>
		</div>

		<div class="column"></div>

	</div>
</template>

<script>
	import roleManager from './UserRoleManager';
	import userPermissionsManager from './UserPermissionsManager';

	export default {
		name: 'UserAuthorizations',
		props: ['user'],
		components: {
			roleManager,
			userPermissionsManager
		},
		data() {
			return {
				roles: [],
				availablePermissions: []
			}
		},
		mounted() {
			this.roles = window.roles;
			this.availablePermissions = window.availablePermissions;
		},
		methods: {
			updateRoles(roles){
				this.user.roles = roles;
			},
			grantPermission(permission) {
				return this.user.permissions.push(permission);
			},
			revokePermission(permission) {
				const idx = this.user.permissions.indexOf(permission)
				return this.user.permissions.splice(idx, 1);
			}
		}
	}
</script>