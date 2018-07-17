<template>
	<div class="modal" :class="{ 'is-active': show, 'is-solid': solid }">
	  <div class="modal-background"></div>
		<div class="modal-content">
			<section class="">
				<slot></slot>
			</section>
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