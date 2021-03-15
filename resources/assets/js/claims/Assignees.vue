<template>
	<div class="columns is-mobile assignments" style="text-align: center; padding-top: 3rem;">
		<div class="column is-half assignment">
			<a @mouseup="$emit('status-set', getAssignmentStatus()); $emit('new-status-toggle');">
				<img 
	    			v-if="claim.adjuster.avatar"
	    			:src="claim.adjuster.avatar.path"
	    			:alt="claim.adjuster.name"
	    			@click="addingAvatar = true"
	    			style="border-radius: 356px; border: 10px solid #343b4c; cursor: pointer;"
	    			width="100%"
	    			height="auto"
    			>
    			<span class="icon is-standard" v-else>
    				<i class="fa fa-8x fa-user-circle-o"></i>
    			</span>
    		</a>
    		<h3 style="color: #439BD1; padding-top: 1rem; overflow:hidden; font-size: .8em; font-weight: 700;">
    			<a v-if="hasAdjuster" :href="'/users/' + claim.adjuster.id"> {{ claim.adjuster.name }}</a>
				<span v-else>Unassignable</span>
			</h3>
    		<h4 style="color: #aaa; margin-top: -.25em;">Adjuster</h4>
		</div><!--  end column -->
		<!-- <div class="column is-half assignment">
			<a @mouseup="$emit('status-set', statusesList[2]); $emit('new-status-toggle');">
				<img 
	    			v-if="reviewer.avatar"
	    			:src="reviewer.avatar.path"
	    			:alt="reviewer.name"
	    			style="border-radius: 256px; border: 10px solid #64C6A3; cursor: pointer;"
	    			width="100%"
	    			height="auto"
    			>
    			<span class="icon is-standard" v-else>
    				<i class="fa fa-8x fa-user-circle-o"></i>
    			</span>
    		</a>
			<h3 style="color: #64C6A3;padding-top: 1rem; overflow:hidden; font-size: .8em; font-weight: 700;">{{ reviewer.name || "Not Assigned" }}</h3>
			<div style="font-size: 1em; color: #aaa; margin-top: -.25em;">Reviewer</div>
		</div> end column -->
	</div>
</template>
<script>
	import claimData from './claimData.js';
	export default {
		name: 'Assignees',
		mounted() {
			//console.log(this.user);
			// this.adjuster = claim.
		},
		computed: {
			hasAdjuster() {
				return this.claim.hasOwnProperty('adjuster') ? true : false;
			}
		},
		data() {
			return claimData;
		},
		methods: {
			getAssignmentStatus(){
			 	return this.hasAdjuster ? this.statusesList[3] : this.statusesList[1];
			}
		}
	}
</script>