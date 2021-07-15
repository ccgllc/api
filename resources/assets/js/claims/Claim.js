import Vue from 'vue';
import VueRouter from 'vue-router';
const { RayPlugin } = require('vue-ray/vue2');
Vue.use(VueRouter);
// Vue.use(RayPlugin, { interceptErrors: true, host: '127.0.0.1', port: 23517 })

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
	el: '#claim',
	router,
	components: {
		// titleHeader,
		// claimMenu,
		claimNav,
		// assignees,
		// timeline,
		// newStatus,
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
		// this.$ray(claim.invoices)
		if (this.claim.assignments.length > 0) {
			this.adjuster = this.claim.assignments.pop();
			// this.adjuster = this.claim.assignments.find(assignment => assignment.type = 'adjuster');
		}
		// this.adjusterName = this.getAdjuster();
	},
	data() {
		return claimData
	},
	computed: {
		getAdjuster(){
			return this.adjuster.user ? this.adjuster.user.name : 'unassignable';
			// return 'Test';
		},
		claimTitle() {
			return `Claim # ${claim.claim_number} • ${claim.statuses.length ? claim.statuses[0].name : `no status found.`}`;
		}
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
		},
	}

}).$mount('#claim');