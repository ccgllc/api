<template>
<div style="">
	<span style="font-weight: 700;"><slot></slot></span>
	<span
			@click="showAll = !showAll"
			:data-tooltip="tooltipText"
			class="icon tooltip is-tooltip-right"
			style="cursor: pointer"
			>
				<i class="fa" v-bind:class="{'fa-plus-circle': !showAll, 'fa-times-circle': showAll}"></i>
	</span>

	<input v-model="query" @input="search" @keyup.down="downKey" @keyup.up="upKey" @keyup.enter="enterKey" @keyup.esc="escKey" type="text" class="input" style="margin: .5em 0 0 0; border-radius: 5px; white-space: pre-line;" :placeholder="`Grant ${user.name} permission to...`">

	<aside class="menu" v-if="filteredPermissions.length">
		<ul class="menu-list" style="width: 100%; margin:0;">
			<li 
				class="" style="list-style: none;" 
				v-for="(result, key) in filteredPermissions" 
				:key="key" 
				v-bind:class="{selected: isSelected == result.id }"
			>
				<small><a v-text="result.label"></a></small>
			</li>
		</ul>
	</aside>

	<p class="menu-label" v-if="showAll">{{user.name}}'s Permissions:</p>
	<div v-if="showAll" v-for="permission in user.permissions" style="margin-right: .5em;">
		<span @click="revoke(permission)" class="icon tooltip is-tooltip-left is-tooltip-danger" :data-tooltip="`Revoke`"><i class="fa fa-undo has-text-danger is-clickable"></i></span>
		<small v-text="permission.label"></small>
  </div>
			
</div>
</template>

<script>
	// import Form from '../../structur/src/form/Form';
	export default {
		name: 'UserPermissionManager',
		props: ['user', 'availablePermissions'],
		data() {
			return {
				showAll: true,
				query: '',
				selectedResult: 0,
				results: [],
			}
		},
		computed: {
			tooltipText() {
				return this.showAll ? 'Hide Permissions' : 'Show Permissions';
			},
			isSelected() {
				return this.filteredPermissions.length > 0 ? this.filteredPermissions[this.selectedResult]['id'] : 0;
			},
			filteredPermissions() {
				var vm = this;
				if (vm.query == '') return [];
				return this.availablePermissions.filter(permission => {
					const label = permission.label.toLowerCase();
					return label.indexOf(vm.query.toLowerCase()) !== -1;
				});
			}
		},
		methods: {
			search() {
				//starter for xhr search when/if needed...
				// const route = `/api/permissions/`
				// window.axios.get(route, this.query)
				// 	.then(response => this.results = response)
				// 	.catch(error => console.error(error));
				this.showAll = true;
			},
			grant(permission) {
				const permissionRoute = `/api/users/${this.user.id}/permissions/${permission.id}`;
				permission.label = permission.label.replace(/(\w+)/g, x => x[0].toUpperCase() + x.substring(1));

				return window.axios.post(permissionRoute)
					.then(response => this.$emit('permission-granted', permission))
					.catch(error => console.error(error));
			},
			revoke(permission) {
				const permissionRoute = `/api/users/${this.user.id}/permissions/${permission.id}`;

				return window.axios.delete(permissionRoute)
					.then(response => this.$emit('permission-revoked', permission))
					.catch(error => console.error(error));
			},
			downKey() {
				if (this.selectedResult + 1 < this.filteredPermissions.length) 
					this.selectedResult += 1;
			},
			upKey() {
				if (this.selectedResult > 0) this.selectedResult -= 1;
			},
			enterKey() {
				const permission = this.filteredPermissions[this.selectedResult]
				this.escKey();
				this.showAll = true;
				return this.grant(permission);
			},
			escKey() {
				this.query = '';
			},
			// detectKeyboardAction(event) {
			// 	console.log(event.key);
			// 	let keys = ['Escape', 'Enter', 'ArrowDown', 'ArrowUp'];
			// 	let action = keys.find(key => key === event.key);
			// },
			// performKeyboardAction(key) {
			// 	switch (event.key) {
			// 		case 'Escape':
			// 		this.search.query = '';
			// 		this.results = [];
			// 		return true;
			// 		break;

			// 		case 'Enter':
			// 		//window.location = '/' + this.results[this.selectedResult].scope + '/' + this.isSelected + '/#';
			// 		return true;
			// 		break;

			// 		case 'ArrowDown':
			// 		if (this.selectedResult + 1 < this.results.length) this.selectedResult += 1;
			// 		return true;
			// 		break;

			// 		case 'ArrowUp':
			// 		if (this.selectedResult > 0) this.selectedResult -= 1;
			// 		return true;
			// 		break;

			// 		default:
			// 		// this.search.scope = 'claims';
			// 		return false;
			// 	}
			// }
		}
	}
</script>