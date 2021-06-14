<template>
	<LineItemBase :lineItem="lineItem">
		<template #data>
			<div class="control">
				<input v-model="lineItem.description" @change="update()" type="input" class="input">
			</div>

			 <div class="control has-icons-left" v-if="lineItem.has('quantity')" style="width: 10%;">
		    <input class="input" @change="update()" v-model="lineItem.quantity" type="text">
		    <span class="icon is-small is-left has-text-bold">
			   <small>qty</small>
			  </span>
			</div>

			<div class="control has-icons-left" style="width: 12.5%">
				<div class="select"
					v-if="lineItem.type == 'HourlyRateLineItem' && invoice.hasMultipleHourlyRates() " 
				>
					<select v-model="lineItem.rate" @change="update()" style="">
						<option v-for="rate in invoice.feeSchedule.hourly" :value="rate.amount" v-text="'$' + rate.amount"></option>
					</select>
				</div>
		    <input v-else class="input is-static" placeholder="rate" v-model="lineItem.rate" type="text" @change="update()" :disabled="lineItem.type == 'amount' || !lineItem.has('name')" :readonly="!lineItem.has('name')">
		   <span class="icon is-small is-left has-text-bold">
				<small>rate</small>
		   </span>
			</div>

		</template>

		<template #total>
			<span v-text="'$' + lineItem.total" style="font-weight: 700; padding: 0 .5em 0 0; color: #343b4c"></span>
		 	<button class="delete is-small" @click="$emit('line-item-removed', lineItem)" style=""></button>
		</template>
	</LineItemBase>
</template>

<script>
	import claimData from '../claimData'
	import LineItemBase from './LineItemBase'
	export default {
		name: 'HourlyRateLineItem',
		props: ['lineItem', 'estimates', 'invoice', 'id'],
		components: {
			LineItemBase
		},
		data() {
			return {
				...claimData
			}
		},
		methods: {
			update() {
				this.lineItem.calculate();
				return this.$emit('line-item-updated', this.lineItem);
			}
		}
	}
</script>