import Vue from 'vue';
import VueRouter from 'vue-router';
// import Croppa from 'vue-croppa';

import Claims from './Claims.vue';
import page from '../components/Page'
// import Claim from './Claim.vue';
// import Documents from './Documents';
// import Certifications from './Certifications';
// import WorkHistory from './WorkHistory';
// import profileNavigation from './ProfileNavigation'

Vue.use(VueRouter);
// Vue.use(Croppa, { componentName: 'avatar-cropper' });

const routes = [
	{ path: '/', name: "claims", component: Claims },
	// { path: '/:claimId', name: "show", component: Claim },
	// { path: '/documents', name: 'documents', component: Documents },
	// { path: '/work-history', name: "workHistory", component: WorkHistory },
	// { path: '/certifications', name: 'certifications', component: Certifications },
	// { path: '/complete', component: Complete }
];

let router = new VueRouter({
	routes,
	linkActiveClass: 'is-active'
})


// router.beforeEach((to, from, next) => {
  
// })

const ClaimsVue = new Vue({
	name: 'Claims',
	router,
	components: {
		// profileNavigation,
		page
	},
	mounted() {
		// this.user = window.userData;
		// this.user.avatar.path = '';
	},
	data() {
		return {
			
		}
	},
	computed: {
		
	},
	methods: {
	}
}).$mount('#claims');