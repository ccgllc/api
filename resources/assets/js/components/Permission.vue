<template>
	<div class='card' style="margin-bottom: .5em;">
		<div class="card-content">
			<div>{{ permission.label }}</div>
		</div>
	</div>
</template>

<script>
	import permission from './Permission'
	export default {
		name: 'Permission',
		props: ['permission'],
	}
</script>