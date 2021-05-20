<template>
	<component :is="dashboard" :user="user" style="margin: 1em;"></component>
</template>

<script>
	// import appData from '../data/appData.js';
	import reviewerDashboard from './reviewerDashboard';
	import adjusterDashboard from './adjusterDashboard';

	export default {
		name: 'DashboardRoot',
		// props: ['user'],
		components: {
			reviewerDashboard,
			adjusterDashboard,
		},
		mounted() {
			// this.setupView();
			this.user = window.user;
			console.log(this.user);
			// console.log('mounted' + this.user.name);
			// this.$nextTick(() => this.setupDashboard())
			 return this.setupDashboard();
		},
		data () {
			return {
				// appData,
				user: {},
				dashboard: 'adjusterDashboard',
			}
		},
		computed: {
			//	
		},
		methods: {
			setupDashboard() {
				if (this.user.roles) {
					const reviewer = this.user.roles.find(role => role.name === 'reviewer');
						if (reviewer) {
							return this.$nextTick(() => this.dashboard = 'reviewerDashboard');
						}
					return this.dashboard = 'adjusterDashboard';
				}
			},
			
		}
	}
</script>