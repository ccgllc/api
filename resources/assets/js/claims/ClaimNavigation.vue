<template>
	<div class="columns" style="padding: 0;">
		<div class="column">
			<div class="tabs is-left">
			  <ul style="margin-left: 0;">
			  <!--   <li class=""> -->
			      <router-link to="/" tag="li" exact>
			      	<a>
			        <span class="icon is-small"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
			        <span>Claim Data</span>
			    	</a>
			      </router-link>
			    <!-- </li> -->
			   
			      <router-link to="/billing" tag="li">
			      	<a>
			        <span class="icon is-small"><i class="fa fa-calculator" aria-hidden="true"></i></span>
			        <span>Billing</span>
			        </a>
			      </router-link>
			     <li>
			      <a>
			        <span class="icon is-small"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>
			        <span>Notes</span>
			      </a>
			    </li>
			  </ul>
			</div>
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Navigation',
		data() {
			return claimData;
		}
	}
</script>