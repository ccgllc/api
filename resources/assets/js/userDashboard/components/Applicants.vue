<template>
	<div class="column">
		<div class="card">
			<header class="card-header is-info">
			    <p class="card-header-title">
			      <span class="tag is-dark">{{ applicantCount }}</span> Recent Applicants 
			    </p>
		  	</header>
		  	<div class="card-content">
			    <div class="content">

			    	<div class="card is-stacked" v-for="applicant in applicants">
			    		<div class="card-content">
			    			<div class="content">
			    				<h3><a :href="'/users/' + applicant.id">{{applicant.name}}</a></h3>
			    				<!-- <p><strong>3 years 7 months</strong> total experience, <strong>320</strong> Total Claims</p> -->
			    			</div>
			    		</div>
			    		<footer class="card-footer">
			    			<span class="card-footer-item"><i class="fa fa-clock-o"></i>{{ applicant.created_at }}</span>
			    			<div class="card-footer-item dropdown is-hoverable">
							  <div class="dropdown-trigger">
							    <a aria-haspopup="true" aria-controls="dropdown-menu">
							      <span>Action</span>
							      <span class="icon is-small">
							        <i class="fa fa-angle-down" aria-hidden="true"></i>
							      </span>
							    </a>
							  </div>
							  <div class="dropdown-menu" id="dropdown-menu" role="menu">
							    <div class="dropdown-content">
							      <a @click="makeCandidate(applicant)" class="dropdown-item">
							        Make candidate
							      </a>
							      <a class="dropdown-item">
							        View applicant details
							      </a>
							    </div>
							  </div>
							</div>
			    		</footer>
			    	</div><!-- end stacked card -->						      
			    </div>
			    	<a class="button">All Applicants</a>
		    </div><!-- end card content -->
		</div><!--end Card -->	
	</div><!-- end third Column -->
</template>

<script>
	import dashboardData from '../data/dashboardData.js';
	export default {
		name: 'Applicants',
		mounted() {
			this.applicants = window.dashboardData.applicants;
			this.applicantCount = window.dashboardData.applicantCount;
		},
		data() {
			return dashboardData
		},
		methods: {
			makeCandidate(user){
				window.axios.patch('/api/user/' + user.id + '/status/', {status: 'candidate'})
							.then(response => {
								console.log('setting as candidate');
								let idx = this.applicants.indexOf(user);
								this.applicants.splice(idx, 1);
								this.candidates.unshift(response.data);
							})
			}
		}
	}
</script>