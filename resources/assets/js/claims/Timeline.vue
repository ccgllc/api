<template>
	<!-- <div class="card">
		<div class="card-content"> -->
			<div class="content" style="margin: 3rem;">
				<!-- <h3 class="is-size-3" style="font-weight: 700; color: #343b4d;">
					Timeline
				</h3> -->

				<!-- <div class="dropdown is-down is-hoverable">
				  <div class="dropdown-trigger">
				    <button @click="creatingNewStatus = !creatingNewStatus" class="button is-rounded" aria-haspopup="true" aria-controls="statuses">
				      <span>Update Status</span>
				      <span class="icon is-small">
				        <i class="fa fa-angle-down" aria-hidden="true"></i>
				      </span>
				    </button>
				  </div>
				  <div class="dropdown-menu" id="statuses" role="menu">
				    <div class="dropdown-content">
				      <a class="dropdown-item" v-for="status in statusesList">
				        <span v-text="status.name" @click="newStatus.name = status.name; creatingNewStatus = true;"></span>
				      </a>
				    </div>
				  </div>
				</div> -->

				<div class="timeline">

				  <div class="timeline-item">
				  	<div class="timeline-marker is-image is-32x32" v-if="user.avatar">
				      <a :href="'/users/' + user.id"><img :src="user.avatar.path" :alt="user.name"></a>
				    </div>
				    <div class="timeline-marker is-secondary" v-else></div>
				  	<div class="timeline-content">
				      <p class="heading">February 05, 2018</p>
				      <p>Estimate Submitted - $7893.12</p>
				    </div>
					</div>

				 	<div class="timeline-item">
					  	<div class="timeline-marker is-image is-32x32" style="border-color: #439BD1;" v-if="reviewer.avatar">
					      <a :href="'/users/' + reviewer.id"><img :src="reviewer.avatar.path" :alt="reviewer.name"></a>
					    </div>
					    <div class="timeline-marker is-secondary" v-else></div>
					  	<div class="timeline-content">
					      <p class="heading">February 05, 2018</p>
					      <p>Estimate Requested</p>
					    </div>
					</div>

					<div class="timeline-item">
				  	<div class="timeline-marker is-secondary"></div>
					  	<div class="timeline-content">
					      <p class="heading">February 03, 2018</p>
					      <p>Site Inspected</p>
					    </div>
					</div>

				  <div class="timeline-item">
				  	<div class="timeline-marker is-secondary"></div>
				  	<div class="timeline-content">
				      <p class="heading">February 01, 2018</p>
				      <p>Customer Contacted</p>
				    </div>
				  </div>
					
				  <div class="timeline-item">
			    	<div class="timeline-marker is-image is-32x32" v-if="user.avatar">
				      <a :href="'/users/' + user.id"><img :src="user.avatar.path" :alt="user.name"></a>
				    </div>
				    <div class="timeline-marker is-secondary" v-else></div>
				    <div class="timeline-content">
				      <p class="heading">February 01, 2018</p>
		      		  <p><a :href="'/users/' + user.id">{{user.name}}</a> assigned as adjuster</p>
				    </div>
				  </div>
				   <div class="timeline-item">
				   	<div class="timeline-marker is-image is-32x32" style="border-color: #439BD1;" v-if="reviewer.avatar">
					      <a :href="'/users/' + reviewer.id"><img :src="reviewer.avatar.path" :alt="reviewer.name"></a>
					    </div>
					    <div class="timeline-marker is-secondary" v-else></div>
				    <div class="timeline-content">
				      <p class="heading">February 01, 2018</p>
				      <p><a :href="'/users/' + reviewer.id">{{reviewer.name}}</a> assigned as reviewer</p>
				    </div>
				  </div>

				  <div class="timeline-item">
				    <div class="timeline-marker is-secondary"></div>
				    <div class="timeline-content">
				      <p class="heading">January 31, 2018</p>
				      <p>In Assignment Queue</p>
				    </div>
				  </div>
		
				  <div class="timeline-header">
				    <span class="tag is-medium is-secondary">FNOL</span>
				  </div>
				</div>
				<new-status></new-status>
			</div>

		<!-- </div> -->
		
	<!-- </div> -->
</template>

<script>
	import claimData from './claimData.js';
	import newStatus from './NewStatus.vue';
	export default {
		name: 'Timeline',
		components: {
			newStatus,
		},
		mounted() {
			//console.log(this.user);
		},
		data() {
			return claimData;
		},
	}
</script>