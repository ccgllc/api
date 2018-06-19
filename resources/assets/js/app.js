require('./bootstrap');
import Vue from 'vue';
import Chart from 'chart.js';
// import VueRouter from 'vue-router';
// import axios from 'axios';


// Vue.prototype.$http = axios

// let app = new Vue({
// 	name: 'App',
// 	el: "#app",
// 	mounted() {
// 		console.log('this is app.js');
// 	}
// });
import search from './components/Search.vue';
import roleSwitcher from './components/RoleSwitcher.vue';
import Form from './structur/src/form/Form.js';
let app = new Vue({
	name: "App",
	el: "#app",
	data() {
		return {
			userId: window.user.id,
			form: new Form({
				role: ''
			})
		}
	},
	components: {
		search,
		roleSwitcher
	},
	computed: {
		currentRole() {
			return window.user.role;
		},
		uri() {
			return '/api/users/' + this.userId + '/role/';
		}
		},
	methods: {
		switchRole(role){
			this.form.role = role;
			this.form.put(this.uri).then(response => {
				console.log(response);
				return this.form.role = response;
			});
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
		this.form.role = window.user.role;
	}
})