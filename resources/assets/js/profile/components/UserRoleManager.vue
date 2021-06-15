<template>
	<div class="roles">
		<span style="font-weight:700; "><slot></slot></span>
			<span
				@click="showAll = !showAll"
				:data-tooltip="tooltipText"
				class="icon tooltip is-tooltip-right"
				style="cursor: pointer"
				>
					<i class="fa" v-bind:class="{'fa-plus-circle': !showAll, 'fa-times-circle': showAll}"></i>
			</span>
		<div id="roles" class="tags are-medium" v-bind:class="{ 'showAll': showAll }" style="margin-top: .5rem;">
			<span 
				v-for="role in roles" 
				v-bind:class="{ 'is-secondary' : hasRole(role.id) }" 
				v-text="role.label"
				@click="assignRole(role.id)"
				class="tag"
				style="cursor: pointer"
				>
			</span>
		</div>
	</div>
</template>

<script>
	import Form from '../../structur/src/form/Form';
	// import userRoles from '../../components/UserRoles';
	export default {
		name: 'UserRoleManager',
		props: ['roles', 'userRoles', 'userId', 'endpoint'],
		components: {
			// userRoles

		},
		data() {
			return {
				showAll: true,
				form: new Form({ role: '' })
			}
		},
		computed: {
			activeRoles() {
				let ids = [];
				for (let role of this.userRoles){
					ids.push(role.id);
				}
				return ids;
			},
			tooltipText() {
				return this.showAll ? 'Hide roles' : 'Show available roles';
			}
		},
		methods: {
			hasRole(roleId) {
				return this.activeRoles.indexOf(roleId) !== -1 ? true : false;
			},
			assignRole(roleId) {
				this.form.role = roleId;
				this.form.put('/api/user/' + this.userId + '/roles').then(response => {
					this.$emit('role-added', response);
				})
			},
		}
	}
</script>

<style>
	#roles.tags{
		height: 2rem;
		overflow: hidden;
	}
	#roles.tags.showAll{
		height: 100%;
	}
</style>