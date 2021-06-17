<template>
	<LineItemBase :lineItem="lineItem">
		<template #data>

			<div class="control">
				<input v-model="lineItem.description" @change="update()" type="input" class="input">
			</div>

			<div class="control" v-if="creatingGrossLoss === false">
				<div class="select">
					<select v-model="lineItem.amount" @change="update()" :ref="`grossLossSelect-${id}`">
						<option value="default" disabled>Select Gross Loss Amount</option>
						<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
						<option v-if="invoice.feeSchedule.erroneous" value="erroneous">erroneous</option>
						<option v-if="invoice.feeSchedule.cwop"value="cwop">CWOP</option>
					</select>
				</div>
			</div>

			<new-gross-loss v-else
				:id="id" :new-gross-loss="newGrossLoss" 
				:creating-gross-loss="creatingGrossLoss" 
				@gross-loss-created="createNewGrossLoss"
			></new-gross-loss>

			<a class="button is-small is-dark is-outlined is-rounded" @click="toggleCreatingGrossLoss()">
				<span class="is-small" style="margin-right: .5em;"><i class="fa" :class="{'fa-plus-circle' : creatingGrossLoss === false, 'fa-times-circle': creatingGrossLoss !== false}"></i></span>
				<span v-text="creatingGrossLoss === false ? 'Add GLA' : 'Cancel'"></span>
			</a>
	</template>

		<template #total>
			<span v-text="'$' + lineItem.total" style="font-weight: 700; padding: 0 .5em 0 0; color: #343b4c"></span>
		 	<button class="delete is-small" @click="$emit('line-item-removed', lineItem)" style=""></button>
		</template>

	</LineItemBase>
</template>

<script>
	import LineItemBase from './LineItemBase';
	import claimData from '../claimData';
	import NewGrossLoss from './NewGrossLoss';
	// import description from './Description';
	// import grossLossSelect
	export default {
		name: 'ServiceFeeLineItem',
		props: ['lineItem', 'invoice', 'estimates', 'id'],
		components:{ LineItemBase, NewGrossLoss	},
		data() {
			return { 
				...claimData,
				creatingGrossLoss: false
			}
		},
		computed: {

		},
		methods: {
			update() {
				this.lineItem.calculate();
				this.$emit('line-item-updated', this.lineItem)
				this.$emit('service-fee-updated');
			},
			async toggleCreatingGrossLoss() {

				// this.creatingGrossLoss !== false 
				// 	? this.creatingGrossLoss = false
				// 	: this.creatingGrossLoss = this.id;

				this.creatingGrossLoss = !this.creatingGrossLoss

				// if (this.creatingGrossLoss !== false) {
				// 	await this.getGrossLossInput(this.id).then(ele => ele.focus())
				// }
			},
			async createNewGrossLoss() {
				this.newGrossLoss.user_id = this.user.id;
				this.newGrossLoss.claim_id = this.claim.id;

				await this.newGrossLoss.post(`/api/claims/${this.claim.id}/estimates`).then(response => {
					this.claim.estimates.unshift(response);
					this.creatingGrossLoss = false;
				});

				await this.getGrossLossSelect().then(ele => {
					const e = new Event('change');
					ele.selectedIndex = 1;
					this.lineItem.amount = ele.options[ele.selectedIndex].value
					ele.dispatchEvent(e);
				});
			},
			async getGrossLossInput(id = 0) {
				const self = this;
				return new Promise((resolve, reject) => {
					self.$nextTick(() => resolve(self.$refs[`grossLoss-${id}`]))
		 		});
			},
			async getGrossLossSelect(id = 0) {
				const self = this;
				return new Promise((resolve, reject) => {
					self.$nextTick(() => resolve(self.$refs[`grossLossSelect-${id}`]))
		 		});
			},
		}
	}
</script>