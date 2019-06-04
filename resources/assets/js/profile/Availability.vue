<template>
	<button class="button is-normal is-rounded"  v-bind:class="{ 'is-secondary': isAvailable, 'is-danger': !isAvailable }" style="margin-top: .5rem;" @click="setAvailability"><i class="fa" v-bind:class="{'fa-check': isAvailable, 'fa-times': !isAvailable}" style="margin-right: .5rem;"></i> {{text}}</button>
</template>

<script>
	export default {
		name: 'Availability',
		props: ['isAvailable'],
		data() {
			return {
				//
			}
		},
		computed: {
			text() {
				return this.isAvailable == 0 ? 'Unavailable' : 'Available';
			},
		},
		methods: {
			setAvailability() {
				let data = {available: 0};
				this.isAvailable === 0 ? data.available = 1 : data.available = 0;
				this.$emit('availability-changed', data.available);
			},
		}

	}
</script>