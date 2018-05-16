<template>
	<div class="columns">
		<div class="column">
			<div class="tabs is-left">
			  <ul>
			    <li class="is-active">
			      <a>
			        <span class="icon is-small"><i class="fa fa-home" aria-hidden="true"></i></span>
			        <span>Claim Information</span>
			      </a>
			    </li>
			    <li>
			      <a>
			        <span class="icon is-small"><i class="fa fa-list" aria-hidden="true"></i></span>
			        <span>Billing</span>
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