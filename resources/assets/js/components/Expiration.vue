<template>
	<div style="width: 100%; padding-bottom: 10%;">
	<div style="width: 100%; margin-top: 5%; margin-bottom: 5%;">
		<slot></slot>
	</div>
	<div class="columns is-mobile">
		<div class="column is-4">
			<div class="field">
				<!-- <label class="label"><small>Exp. Mo:</small></label> -->
				<div class="select is-small">
				  <select v-model="month" @change="updateDate">
				  	<option value="">mo.</option>
				    <option v-for="month in appData.months" :value="month.abbr">{{ month.abbr }}</option>
				  </select>
				  <span class="help is-danger" v-if="!month">required</span>
				</div>  
			</div>
		</div>
		
		<div class="column is-6">
			<div class="field">
				<!-- <label class="label"><small>Exp. Year:</small></label> -->
				<div class="select is-small">
				  <select v-model="year" @change="updateDate">
				  	<option value="">yr.</option>
				    <option v-for="n in 10" :value="(currentYear + n) - 1">{{ (currentYear + n) - 1 }}</option>
				  </select>
				  <span class="help is-danger" v-if="!year">required</span>
				</div>  
			</div>
		</div>
		<br><br>
	</div>
	</div>
</template>
<script>
	import appData from '../data/appData.js';
	export default {
		name: 'Expiration',
		props: ['certification'],
		mounted() {
			let today = new Date;
			this.currentYear = today.getFullYear();
			// console.log(certification);
		},
		data() {
			return {
				appData,
				year: '',
				month: '',
				currentYear: ''
			}
		},
		computed: {
			valid() {
				return this.month != '' && this.year != '' ? true : false;
			},
			formatted() {
				return {
					name: this.certification.name,
					month: this.month, 
					year: this.year.toString()
				}; 
			}
		},
		methods: {
			updateDate() {
				if (this.valid) return this.$emit('date-changed', this.formatted);
			}
		}

	}
</script>