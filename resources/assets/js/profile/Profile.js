import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Croppa from 'vue-croppa';
// import Dashboard from './Dashboard';
import PersonalInformation from './PersonalInformation';
import Licenses from './Licenses';
import Documents from './Documents';
import Certifications from './Certifications';
import WorkHistory from './WorkHistory';
import Search from '../components/Search';
import Avatar from './Avatar';
// import profileNavigation from './ProfileNavigation';
// import availability from './Availability';
import Form from '../structur/src/form/Form';
import editableTextCard from './components/EditableTextCard';
// import roleManager from './components/UserRoleManager';
// import UserPermissionsManager from './components/UserPermissionsManager';
// import statusManager from './components/StatusManager';

// Vue.use(VueRouter);
// Vue.use(Croppa, { componentName: 'avatarCropper' });

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

const Profile = new Vue({
	name: 'Profile',
	// router,
	el: '#profile',
	components: {
		// profileNavigation,
		// availability,
		// roleManager,
		// statusManager,
		// UserPermissionsManager,
		// Dashboard,
		PersonalInformation,
		Licenses,
		Documents,
		Certifications,
		WorkHistory,
		Search,
		Avatar,
		priority: editableTextCard,
		notes: editableTextCard,
	},
	mounted() {
		// this.$nextTick(() => {
			// console.log(window.userData);
			this.user = window.userData;
			this.roles = window.roles;
			// console.log(this.roles);
			this.availablePermissions = window.availablePermissions;
		// });
	},
	data() {
		return {
			user: {avatar:{path: '#'}},
			authUser: {avatar:{path: '#'}},
			avatarCropper: null,
			showAvatarButton: false,
			addingAvatar: false,
			imgLoaded: false,
			google: {},
			roles: [],
			availablePermissions: [],
		}
	},
	computed: {
		userHasAvatar() {
			return  this.user.avatar !== '#' && this.user.avatar !== null ? true : false;
		},
	},
	methods: {
		updateAvailability(availability){
			return this.user.available = availability;
		},
		updatePriority(priority){
			return this.user.priority = priority;
		},
		updateNotes(note) {
			return this.user.notes = note;
		},
		updateRoles(roles){
			this.user.roles = roles;
		},
		grantPermission(permission) {
			return this.user.permissions.push(permission);
		},
		revokePermission(permission) {
			const idx = this.user.permissions.indexOf(permission)
			return this.user.permissions.splice(idx, 1);
		},
		getAvatarPath() {
			if (this.userHasAvatar) {
				return this.user.avatar.path;
			}
			return "#";
		}
	}
}).$mount('#profile');