import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import claimData from './claimData.js';
import Claim from './Claim.vue';
import Billing from './Billing.vue';
import titleHeader from './TitleHeader.vue';
import claimMenu from './ClaimMenu.vue';
import claimNav from './ClaimNavigation.vue';
import assignees from './Assignees.vue';
import timeline from './Timeline.vue';
import newStatus from './NewStatus.vue';
import page from '../components/Page';
import search from '../components/Search';
// import alert from '../Alert.vue';

const routes = [
	{ path: '/', name: "home", component: Claim },
	{ path: '/billing', name: "billing", component: Billing },
	// { path: '/certifications', component: Certifications },
	// { path: '/complete', component: Complete }
];

let router = new VueRouter({
	routes,
	linkActiveClass: 'is-active'
})

const ClaimView = new Vue({
	name: 'Claim',
	router,
	components: {
		titleHeader,
		claimMenu,
		claimNav,
		assignees,
		timeline,
		newStatus,
		page,
		search
	},
	created() {
		this.claim = claim;
		this.claim.claim_data = JSON.parse(this.claim.claim_data);
		this.user = user;
		this.hasAlert = true;
		this.alert.message = 'You have been assigned to this claim please confirm or reject this assignment';
	},
	mounted() {
		if (this.claim.assignments.length > 0) {
			this.adjuster = this.claim.assignments.find(assignment => assignment.type = 'adjuster');
		}
	},
	data() {
		return claimData;
	},
	methods: {
		setStatus(data) {
			console.log(data);
			this.newStatus.name = data.name; 
			return this.newStatus.type = data.type; 
		},
		toggleCreatingNewStatus() {
			console.log('toggled');
			return this.creatingNewStatus = !this.creatingNewStatus;
		}
	}

}).$mount('#claim');