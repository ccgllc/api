<template>
	<div class="modal" :class="{ 'is-active': show, 'is-solid': solid }" style="position: fixed;">
	  <div class="modal-background"></div>
		<div class="modal-content">
		
				<slot></slot>
			<!-- <button class="modal-close is-large" aria-label="close"></button> -->
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Modal',
		props: ['show', 'solid'],
		data(){
			return {

			}
		}
	}
</script>