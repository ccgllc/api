<template>
	<div class="columns is-mobile assignments" style="text-align: center;">
		<div class="column is-half assignment">
			<a :href="'/profile/' + user.id + '#'">
				<img 
	    			v-if="user.avatar"
	    			:src="user.avatar.path"
	    			:alt="user.name"
	    			@click="addingAvatar = true"
	    			style="border-radius: 356px; border: 10px solid #439BD1; cursor: pointer;"
	    			width="100%"
	    			height="auto"
    			>
    			<span class="icon is-medium" v-else>
    				<i class="fa fa-11x fa-user-circle-o"></i>
    			</span>
    		</a>
    		<h3 v-text="user.name" style="color: #439BD1; overflow:hidden; font-weight: 700;"></h3>
    		<h4 style="color: #bbb; font-size: 1em; margin-top: -.25em;">Adjuster</h4>
		</div><!--  end column -->
		 <div class="column is-half">
			<a :href="'/profile/' + reviewer.id + '#'">
				<img 
	    			v-if="reviewer.avatar"
	    			:src="reviewer.avatar.path"
	    			:alt="reviewer.name"
	    			style="border-radius: 256px; border: 10px solid #64C6A3; cursor: pointer;"
	    			width="100%"
	    			height="auto"
    			>
    			<span class="icon is-medium" v-else>
    				<i class="fa fa-11x fa-user-circle-o"></i>
    			</span>
    		</a>
			<h3 v-text="reviewer.name" style="color: #64C6A3; overflow:hidden; font-weight: 700;"></h3> 
			<div style="color: #bbb; font-size: 1em; margin-top: -.25em;">Reviewer</div>
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