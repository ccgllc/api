<template>
	<div>
		<h1 class="title">Permissions</h1><hr>
		<permission v-for="(permission, key) in permissions" :permission="permission" :key="key"></permission>
	</div>
</template>

<script>
	import permission from './Permission'
	export default {
		name: 'Permissions',
		props: ['permissions'],
		components: {
			permission
		},
	}
</script>