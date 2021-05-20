require('./bootstrap');

import Vue from 'vue';
// import Chart from 'chart.js';
import navigation from './components/Navigation';
import search from './components/Search.vue';
import roleSwitcher from './components/RoleSwitcher.vue';
import support from './components/Support.vue';
import Form from './structur/src/form/Form.js';
import userData from './data/userData.js';
import _ from '../../../node_modules/lodash/lodash.min.js';

let app = new Vue({
	name: "App",
	el: "#app",
	data() {
		return {
			userData,
			url: '/api/search',
			search: new Form({
				query: '',
				scope: 'users',
			}),
			results: [],
			complete: true,
			selectedResult: 0,
			userId: 0,
			user: {},
			show: false,
			form: new Form({
				role: ''
			}),
			showSupport: false
		}
	},
	components: {
		support,
		search,
		roleSwitcher,
		navigation
	},
	computed: {
		currentRole() {
			return window.user ? window.user.role : 'No User';
		},
		uri() {
			return window.user ? '/api/users/' + this.userId + '/role/' : null;
		},
		isSelected() {
				return this.results.length > 0 ? this.results[this.selectedResult]['id'] : 0;
			}
	},
	methods: {
		switchRole(role){
			this.form.role = role;
			this.form.put(this.uri).then(response => {
				console.log(response);
				return this.form.role = response;
			});
		},
		toggleSupport(){
			return this.showSupport = !this.showSupport;
		},
		dynamicSearch: _.debounce(function(event) {
				var vm = this;
				let action = vm.detectKeyboardAction(event);
				// console.log(action);
				if (!action && vm.search.query != '')  vm.submit();
				if (vm.search.query == '') vm.results = [];
				// if (vm.search.query == '') vm.userData.users = window.users;
			}, 200),
			detectKeyboardAction(event) {
				console.log(event.key);
				switch (event.key) {
					case 'Escape':
					this.search.query = '';
					this.results = [];
					return true;
					break;

					case 'Enter':
					window.location = '/' + this.results[this.selectedResult].scope + '/' + this.isSelected + '/#';
					return true;
					break;

					case 'ArrowDown':
					if (this.selectedResult + 1 < this.results.length) this.selectedResult += 1;
					return true;
					break;

					case 'ArrowUp':
					if (this.selectedResult > 0) this.selectedResult -= 1;
					return true;
					break;

					default:
					// this.search.scope = 'claims';
					return false;
				}
			},
			submit() {
				this.search.post(this.url, false)
					.then(response => {
						console.log(response);
						// this.userData.users = response;
						this.results = response;
						// this.search.scope = 'claims';
					}).catch(error => {
						console.log('has an error');
				});
			},
			placeholder() {
				return `search claims, users...`
			}
	},
	mounted() {
		// document.addEventListener('DOMContentLoaded', function () {
		//   // allow mobile navigation.
		//   var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		//   if ($navbarBurgers.length > 0) {
		//     $navbarBurgers.forEach(function ($el) {
		//       $el.addEventListener('click', function () {
		//         var target = $el.dataset.target;
		//         var $target = document.getElementById(target);
		//         $el.classList.toggle('is-active');
		//         $target.classList.toggle('is-active');
		//       });
		//     });
		//   }
		// });
		this.userId = window.user ? window.user.id : 0;
		this.user = window.user;
		this.form.role = window.user ? window.user.role : this.currentRole;
	}
})