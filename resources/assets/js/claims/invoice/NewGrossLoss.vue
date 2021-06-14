<template>
	<div class="control has-icons-left has-icons-right" v-if="creatingGrossLoss">
		<input 
			type="input" placeholder="Add a gross loss amount" class="input"
			v-model="newGrossLoss.gross_loss"  @keyup.enter="createNewGrossLoss" @keyup.tab="createNewGrossLoss"
	  >	
		<span class="icon is-left"><i class="fa fa-usd"></i></span>
		<span @click="createNewGrossLoss" class="icon is-right" style="background:#209cee; color: whitesmoke;border-radius: 0 6px 6px 0; border: 1px solid; border-color: #209cee; border-left:none; cursor: pointer;" data-tooltip="Save gross loss amount"><i class="fa fa-check"></i></span>
	</div>
</template>

<script>
	import claimData from '../claimData'
	export default {
		name: 'NewGrossLoss',
		props: ['id', 'newGrossLoss', 'creatingGrossLoss'],
		data() {
			return {
				// creatingGrossLoss: false,
			}
		},
		computed: {
			// 
		},
		methods: {
			// toggleCreatingGrossLoss() {
			// 	return this.$emit('gross-loss-toggled', this.creatingGrossLoss);
			// },
			createNewGrossLoss() {
				return this.$emit('gross-loss-created');
			}
		}
	}
</script>