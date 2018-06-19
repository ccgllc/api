<template>
	<div class="columns is-mobile assignments" style="text-align: center;">
		<div class="column is-half assignment">
			<a @mouseup="$emit('status-set', statusesList[1]); $emit('new-status-toggle');">
				<img 
	    			v-if="adjuster.avatar"
	    			:src="adjuster.avatar.path"
	    			:alt="adjuster.name"
	    			@click="addingAvatar = true"
	    			style="border-radius: 356px; border: 10px solid #439BD1; cursor: pointer;"
	    			width="100%"
	    			height="auto"
    			>
    			<span class="icon is-standard" style="padding: 3em;" v-else>
    				<i class="fa fa-9x fa-user-circle-o"></i>
    			</span>
    		</a>
    		<h3 style="color: #aaa; overflow:hidden;">{{ adjuster.name || 'Not Assigned' }}</h3>
    		<h4 style="color: #bbb; font-size: 1em; color: #439BD1; margin-top: -.25em; font-weight: 700;">Adjuster</h4>
		</div><!--  end column -->
		<div class="column is-half assignment">
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
    				<i class="fa fa-9x fa-user-circle-o"></i>
    			</span>
    		</a>
			<h3 style="color: #aaa; overflow:hidden;">{{ reviewer.name || "Not Assigned" }}</h3> 
			<div style="color: #bbb; font-size: 1em; color: #64C6A3; margin-top: -.25em; font-weight: 700;">Reviewer</div>
		</div><!--  end column -->	
	</div>
</template>
<script>
	import claimData from './claimData.js';
	export default {
		name: 'Assignees',
		mounted() {
			//console.log(this.user);
		},
		data() {
			return claimData;
		},
		computed: {

		}
	}
</script>