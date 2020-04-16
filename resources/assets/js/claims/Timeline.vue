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

			  	<div class="timeline-item" v-for="status in claim.statuses">
				  	<div class="timeline-marker is-image is-32x32" v-if="status.hasOwnProperty(user)">
				      <a :href="'/users/' + status.user.id"><img :src="status.user.avatar.path" :alt="status.user.name"></a>
				    </div>
				    <div class="timeline-marker is-secondary" v-else></div>
				  	<div class="timeline-content">
				      <p class="heading" v-text="status.date"></p>
				      <p><strong v-text="status.name"></strong>  <br> <span v-if="status.user" v-text="status.user.name"></span> <span v-text="'System'" v-else></span> <span v-if="status.value"><br><span v-text="status.value"></span></span></p>
				    </div>
				</div>
		
				  <div class="timeline-header">
				    <span class="tag is-medium is-secondary">FNOL</span>
				  </div>

				</div>
				
			</div>

		<!-- </div> -->
		
	<!-- </div> -->
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Timeline',
		mounted() {
			//console.log(this.user);
		},
		computed: {

		},
		data() {
			return claimData;
		},
	}
</script>