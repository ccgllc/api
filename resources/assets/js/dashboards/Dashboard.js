import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Croppa from 'vue-croppa';

import dashboard from './Dashboard.vue';
import search from '../components/Search';
// import page from '../components/Page';

// Vue.use(VueRouter);
// Vue.use(Croppa, { componentName: 'avatar-cropper' });

// function getUser (route) {
// 	return {
// 		user: (window.user),
// 	}
// }

// const routes = [
// 	{ path: '/', name: "home", component: Dashboard, props: true },
// 	{ path: '/personal-info', name: "personalInfo", component: PersonalInformation, props: true },
// 	{ path: '/licenses', name: "licenses", component: Licenses, props: true },
// 	{ path: '/documents', name: 'documents', component: Documents, props: true },
// 	{ path: '/work-history', name: "workHistory", component: WorkHistory, props: true },
// 	{ path: '/certifications', name: 'certifications', component: Certifications, props: true },
// 	// { path: '/complete', component: Complete }
// ];

// let router = new VueRouter({
// 	routes,
// 	linkActiveClass: 'is-active'
// })


// router.beforeEach((to, from, next) => {
  
// })

const dash = new Vue({
	name: 'Dashboard',
	// router,
	el: '#dashboard',
	components: {
		dashboard,
		search
	},
	mounted() {
		// this.$nextTick(() => {
			// console.log(window.userData);
			this.user = window.user;
			// this.roles = window.roles;
			// console.log(this.roles);
			// this.availablePermissions = window.availablePermissions;
		// });
	},
	data() {
		return {
			user: {avatar:{path: '#'}},
			// authUser: {avatar:{path: '#'}},
			// avatarCropper: null,
			// showAvatarButton: false,
			// addingAvatar: false,
			// imgLoaded: false,
			// google: {},
			// roles: [],
			// availablePermissions: [],
		}
	},
	computed: {
		// userHasAvatar() {
		// 	return  this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
		// },
	},
	methods: {
		// uploadImage() {
		// 	console.log('uploading...');
		// 	this.avatarCropper.generateBlob((blob) => {
		// 		let file = new File([blob], "avatar.png", {type: 'image/png'});
		// 		let data = new FormData();
		// 		data.append('avatar', file);
	 //        	window.axios.post('/api/user/' + window.userData.id + '/avatar/', data).then(response => {
	 //        		console.log(response);
	 //        		this.addingAvatar =  false;
	 //        		this.user.avatar = {
	 //        			path: response.data
	 //        		};
	 //        	})
		// 	});
		// },
		// hasImage() {
		// 	return this.imgLoaded = !this.imgLoaded;
		// },
		// toggleAvatarButton() {
		// 	return this.showAvatarButton = !this.showAvatarButton;
		// },
		// updateAvailability(availability){
		// 	return this.user.available = availability;
		// },
		// updatePriority(priority){
		// 	return this.user.priority = priority;
		// },
		// updateNotes(note) {
		// 	return this.user.notes = note;
		// },
		// updateRoles(roles){
		// 	this.user.roles = roles;
		// },
		// grantPermission(permission) {
		// 	return this.user.permissions.push(permission);
		// },
		// revokePermission(permission) {
		// 	const idx = this.user.permissions.indexOf(permission)
		// 	return this.user.permissions.splice(idx, 1);
		// }
		// avatarPath() {
		// 	if (this.userHasAvatar) {
		// 		return this.user.avatar.path;
		// 	}
		// 	return "#";
		// }
	}
}).$mount('#dashboard');