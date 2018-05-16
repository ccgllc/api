<template>
	<div class="columns">
		<div class="column">
			<div class="tags">
				<span class="tag is-danger">CAT  <button class="delete is-small"></button></span>
				<span class="tag is-info">Hurricane <button class="delete is-small"></button></span>
				<span class="tag is-info">Harvey <button class="delete is-small"></button></span>
				<span class="icon"><i class="fa fa-plus" style="color: #ccc; position:relative; top: -3px;"></i></span>
			</div>
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Tags',
		data() {
			return claimData;
		}
	}
</script>