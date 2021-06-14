<template>
	<LineItemBase :lineItem="lineItem">
		<template #data>
			<div class="control">
				<input v-model="lineItem.description" @change="update()" type="input" class="input">
			</div>

			 <div class="control has-icons-left">
		    	<input  class="input" @change="update()" v-model="lineItem.amount" type="text">
			    <span class="icon is-small is-left has-text-bold"><small>amt</small></span>
				</div>
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
		name: 'CitySurchargeLineItem',
		props: ['lineItem', 'invoice', 'id'],
		components: {
			LineItemBase
		},
		data() {
			return {
				// ...claimData
			}
		},
		methods: {
			update() {
				this.lineItem.calculate();
				return this.$emit('line-item-updated');
			}
		}
	}
</script>