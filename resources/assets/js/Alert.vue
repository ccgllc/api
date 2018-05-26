<template>
	<article class="message" :class="type">
		  <div class="message-body" style="background: #FEFEFE">  <!-- -->
		  	<span class="">{{ message }}</span>
		  </div>

		<modal :show="creatingNewStatus">
			<button @click="creatingNewStatus = !creatingNewStatus" class="modal-close is-large" aria-label="close"></button>
		</modal>
	</article>
</template>

<script>
	import modal from './Modal.vue';
	import claimData from './claims/claimData.js';
	export default {
		name: 'Alert',
		props: ['message', 'type'],
		components: {
			modal
		},
		data(){
			return 	claimData
		}
	}
</script>