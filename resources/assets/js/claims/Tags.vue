<template>
	<div class="columns">
		<div class="column">
			<div class="tags">
				<span class="tag is-dark" v-for="tag in claim.tags">
					<a :href="'/tags/' + tag.name + '/claims'" v-text="tag.name" style="color: #fff;"></a>
				</span>
				<span class="icon" @click="creatingNewTag = !creatingNewTag"><i class="fa fa-plus" style="color: #ccc; position:relative; top: -3px;"></i></span>
			</div>
		</div>
	</div>
</template>

// claims/

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Tags',
		data() {
			return claimData;
		}
	}
</script>