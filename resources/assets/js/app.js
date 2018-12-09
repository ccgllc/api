require('./bootstrap');

import Vue from 'vue';
// import Chart from 'chart.js';
import search from './components/Search.vue';
import roleSwitcher from './components/RoleSwitcher.vue';
import support from './components/Support.vue';
import Form from './structur/src/form/Form.js';

let app = new Vue({
	name: "App",
	el: "#app",
	data() {
		return {
			userId: 0,
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
	},
	computed: {
		currentRole() {
			return window.user ? window.user.role : 'No User';
		},
		uri() {
			return window.user ? '/api/users/' + this.userId + '/role/' : null;
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
		}
	},
	mounted() {
		document.addEventListener('DOMContentLoaded', function () {
		  // allow mobile navigation.
		  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
		  if ($navbarBurgers.length > 0) {
		    $navbarBurgers.forEach(function ($el) {
		      $el.addEventListener('click', function () {
		        var target = $el.dataset.target;
		        var $target = document.getElementById(target);
		        $el.classList.toggle('is-active');
		        $target.classList.toggle('is-active');
		      });
		    });
		  }
		});
		this.userId = window.user ? window.user.id : 0;
		this.form.role = window.user ? window.user.role : this.currentRole;
	}
})