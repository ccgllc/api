<template>
	<button class="button is-small is-rounded"  v-bind:class="{ 'is-secondary': isAvailable, 'is-danger': !isAvailable }" style="margin-top: .5rem;" @click="setAvailability"><i class="fa" v-bind:class="{'fa-check': isAvailable, 'fa-times': !isAvailable}" style="margin-right: .5rem;"></i> {{text}}</button>
</template>

<script>
	import Form from '../structur/src/form/Form';
	export default {
		name: 'Availability',
		props: ['isAvailable', 'userId'],
		data() {
			return {
				availability: new Form({ available: 0 }),
			}
		},
		computed: {
			text() {
				return this.isAvailable == 0 ? 'Unavailable' : 'Available';
			},
		},
		methods: {
			setAvailability() {
				this.isAvailable === 0 ? this.availability.available = 1 : this.availability.available = 0;
				this.availability.put('/api/user/' + this.userId + '/available').then(response => {
					this.$emit('availability-changed', response);
				});
			},
		}

	}
</script>