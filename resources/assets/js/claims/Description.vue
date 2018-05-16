<template>
	<div class="columns">
		<div class="column">
    		<div class="card">
	            <div class="card-content">
	                <div class="content">
		                  <p v-text="claim.description"></p>
	               	 </div>
	        	</div> 
	    	</div>   
		</div><!-- end column -->
	</div><!-- end columns -->
</template>
<script>
	import claimData from './claimData.js';
	export default {
		name: 'Description',
		data() {
			return claimData;
		}
	}
</script>