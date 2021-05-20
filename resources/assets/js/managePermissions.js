import Vue from 'vue';
// import Resource from './structur/src/services/Resource.js';
import permissions from './components/Permissions.vue';
// Vue.filter('capitalize', function(value) {
// 	return value[0].toUpperCase() + value.slice(1)
// 	});


Vue.component('permissions', permissions);

let manageRoles = new Vue({
	name: 'ManagePermissions',
	el: '#permissions',
	// template: '<h1>Permissions</h1>',
	// props: ['permissions'],
	mounted() {
		this.permissions = window.permissions;
	},
	data() {
		return {
			permissions: [],
		}
	},
	methods: {
		//
	}
})