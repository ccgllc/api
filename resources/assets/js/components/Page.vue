<template>
	<div class="card mb-4" style="border-radius: 7px;">
		<div class="page-title is-flex is-align-items-center is-justify-content-space-between" style="padding: 2em; border-bottom: 1px solid #e5e5e5;">
			<div>
				<div v-if="img && img !== '#'"><img class="mr-4" :src="img" :alt="img" style="max-width: 4rem; max-height: 4rem; border-radius: 10000px; border: 5px solid #343b4c;">
				</div>
				<span>
					<p class="is-size-5 has-text-weight-bold" v-text="title"></p>
					<p class="is-size-6" v-text="description"></p>
				</span>
			</div>
			<!-- need to convert the div below to a slot to inject other content also... -->
			<div>
				<slot name="top-right"></slot>
			</div>

		</div>

		<div class="content">
			<slot></slot>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Page',
		props: ['title', 'description', 'img'],
	}
</script>