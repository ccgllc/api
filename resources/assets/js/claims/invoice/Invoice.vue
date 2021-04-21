<template>
	<div class="card" style="margin-bottom: 1em; border-radius: 6px;" v-if="invoice.options !== undefined">
		<div class="card-content">
			
			<div class="level">
				<!-- Show / Hide Button  -->
				<div class="level-left">
					<div class="level-item">
						<!-- :class="{'is-dark': !invoice.options.show, 'is-dark is-outlined': invoice.options.show}" -->
						<a 
							class="button is-rounded is-outlined is-dark" 
							
							@click="toggle()"
						>
							<span class="icon is-small">
						      <i class="fa" 
						      	:class="{'fa-chevron-down': !invoice.options.show, 'fa-minus': invoice.options.show}"
					      	  >
					      	</i>
						    </span>
						     <!-- <span v-text="invoice.options.show ? 'close' : 'open'"></span> -->
						</a>
					</div>
					<invoice-options
							:invoice="invoice"
							:lineItemTypes="lineItemTypes"
							@new-line-item="addLineItem"
							@remove-line-item="removeLineItem"
							@invoice-deleted="remove"
							@toggle-estimate="createEstimate"
							@toggle-taxable="update"
							@fee-schedule-changed="updateFeeSchedule"
						> 
						</invoice-options>
				</div>
				
				<!-- Hidden state Total -->
				<div class="level-right">
					<div class="level-item" v-if="hasInteractedWithFeeSchedule">
						<a :href="'/invoices/' + invoice.id" target="_blank" class="button is-dark is-outlined is-rounded"> <!-- @click="$emit('preview-invoice')" --> 
							<span class="icon is-small">
						      <i class="fa fa-download"></i>
						    </span>
							<span>Download PDF</span>
						</a>
					</div>
	       	<div class="level-item">
						<button class="button is-danger is-rounded" @click="remove()" v-if="invoice.options.show">
							<span class="icon">
						      <i class="fa fa-trash"></i>
						    </span>
							<!-- <span>Delete Invoice</span> -->
						</button>
					</div>
					<div class="level-item" v-if="!invoice.options.show">
						<strong class="is-size-5">Total: <span v-text="'$' + invoice.total"></span></strong>
					</div>
			</div>
		</div>
			<!-- <div class="> -->

				

		<div id="invoice" v-if="invoice.options.show">
			<div class="level">
				<div class="level-left">
				<div class="level-item" v-if="invoice.options.show">
					<div class="field">
					  <div class="control">
					  	 <!-- <label class="label is-small" for="feeSchedule">Fee Schedule</label> -->
					    <div class="select is-info">
					      <select v-model="invoice.feeSchedule" @change="updateFeeSchedule()" id="feeSchedule">
					        <option :value="0" disabled>Select a fee schedule to begin</option>
					        <option 
					        	v-for="feeSchedule in invoice.carrier.fee_schedules" 
					        	:value="feeSchedule.data" 
					        	v-text="feeSchedule.label + ' Fee Schedule'" 
					        	:key="feeSchedule.id"
					        	>
				        	</option>   
					      </select>
					    </div>
					  </div>
					</div>
				</div>
				</div>
			</div>
				<!-- <invoice-options
					:invoice="invoice"
					:lineItemTypes="lineItemTypes"
					@new-line-item="addLineItem"
					@remove-line-item="removeLineItem"
					@invoice-deleted="remove"
					@toggle-estimate="createEstimate"
					@toggle-taxable="update"
					@fee-schedule-changed="updateFeeSchedule"
				> :carrier="claim.carrier" 
				</invoice-options> -->
				
				<line-item 
					v-for="(lineItem, key) in invoice.lineItems" 
					v-if="hasInteractedWithFeeSchedule"
					:invoice="invoice"
					:lineItem="lineItem" 
					:estimates="claim.estimates"
					:id="key"
					:key="key"
					@line-item-removed="removeLineItem"
					@line-item-updated="caclulate"
					@toggle-estimate="createEstimate"
					@creating-gross-loss-toggled="toggleCreatingGrossLoss"
				>
				</line-item>
				
				<new-line-item
					v-if="hasInteractedWithFeeSchedule"
					:invoice="invoice"
					:lineItemTypes="lineItemTypes"
					:carrier="claim.carrier"
					@new-line-item="addLineItem"
				></new-line-item>

				<div class="level" style="padding: 1em; border-radius: .5em;" v-if="hasInteractedWithFeeSchedule">
					<div class="level-left">
						
					</div>

					<div class="level-right has-text-weight-bold is-size-5">
						<span style="padding-right: 2em;">Sub Total: <span v-text="invoice.subTotal"></span></span>
						<span v-if="invoice.feeSchedule.taxable" style="padding-right: 2em;">Tax <small>({{(invoice.taxRate) * 100}}%):</small> <span v-text="invoice.tax"></span></span>
			      <strong class="has-text-info">Total: <span v-text="'$' + invoice.total"></span></strong>
	       	</div>
				</div>
				
			</div>
				<!-- </div> -->
        </div>
   </div>
</template>

<script>
	import claimData from '../claimData.js';
	import invoiceOptions from './InvoiceOptions.vue';
	import dropdown from '../../Dropdown.vue';
	import Invoice from './Invoice.js'
	import lineItem from './LineItem.vue';
	import newLineItem from './newLineItem.vue';
	import QuantifiableLineItem from './QuantifiableLineItem'
	import HourlyRateLineItem from './HourlyRateLineItem'
	import MileageLineItem from './MileageLineItem'
	import ServiceFeeLineItem from './ServiceFeeLineItem'
	import AmountLineItem from './AmountLineItem'
	import DifferenceInTiersLineItem from './DifferenceInTiersLineItem'
	export default {
		name: 'Invoice',
		props: ['invoice', 'carrier'],
		components: {
			lineItem,
			newLineItem,
			dropdown,
			invoiceOptions,
		},
		created() {
			if (!(this.invoice instanceof Invoice)) this.buildInvoice()
		},
		mounted() {
			// if(!this.hasDefaultEstimates) {
			// 	this.claim.estimates.push({
			// 		gross_loss: 'erroneous',
			// 		claim_id: this.claim.id,
			// 		user_id: this.user.id
			// 	},
			// 	{
			// 		gross_loss: 'CWOP',
			// 		claim_id: this.claim.id,
			// 		user_id: this.user.id,
			// 	})
			// }
		},
		data() {
			return claimData
		},
		computed: {
			hasInteractedWithFeeSchedule() {
				return _.isEmpty(this.invoice.feeSchedule) ? false : true;
			},
			// hasDefaultEstimates() {
			// 	let estimates = this.claim.estimates.filter(estimate => estimate.gross_loss == 'erroneous' || estimate.gross_loss == 'CWOP');
			// 	return estimates.length ? true : false;
			// }
		},
		methods: {
			toggle() {
				this.invoice.options.show = !this.invoice.options.show 
				this.update()
			},
			toggleCreatingGrossLoss() {
				// alert('toggled');
				return this.creatingGrossLoss = !this.creatingGrossLoss;
			},
			caclulate() {
				this.invoice.calculate()
				return this.update()
			},
			addLineItem(lineItem) {
				this.invoice.addLineItem(
					this.getlineItemType(lineItem)
				);
				return this.update()
			},
			removeLineItem(lineItem) {
				this.invoice.removeLineItem(lineItem)
				return this.update()
			},
			update() {
				window.axios.put(this.route(), this.invoice.data())
					.then(response => console.log(response.data))
					.catch(error => console.error(error))
			},
			remove(){
				window.axios.delete(this.route())
					.then(response => {
						return this.claim.invoices.splice(
							this.claim.invoices.indexOf(this.invoice), 1
						)
					})
					.catch(error => console.error(error))
			},
			createEstimate() {
				this.creatingEstimate = !this.creatingEstimate
			},
			updateFeeSchedule() {
				// console.log();
				this.setRates()
				this.setMinimums()
				this.invoice.recalculateLineItems()

				return this.update()
			},
			setRates() {
				if (this.invoice.feeSchedule.photoRate > 0) {
					this.invoice.lineItems[2].rate = this.invoice.getHourlyRate();
					this.invoice.lineItems[1].rate = this.invoice.getPhotoRate();
					this.invoice.lineItems[4].rate = this.invoice.getMileageRate();
				} else {
					this.invoice.lineItems[1].rate = this.invoice.getHourlyRate();
					// this.invoice.lineItems[1].rate = this.invoice.getPhotoRate();
				  this.invoice.lineItems[3].rate = this.invoice.getMileageRate();
				}
				// let te = this.invoice.lineItems.find(item => item.)
				
			},
			setMinimums() {
				if (this.invoice.feeSchedule.photoRate > 0) {
					this.invoice.lineItems[1].minimum = this.invoice.getPhotoMinimum();
					this.invoice.lineItems[4].minimum = this.invoice.getMileageMinimum();
				} else {
					this.invoice.lineItems[3].minimum = this.invoice.getMileageMinimum();
				}
				
			},
			buildInvoice() {
				let invoice = new Invoice({
					id: this.invoice.id,
					carrier: this.carrier,
				})
				
			    this.sync(this.assignInvoiceProperties(invoice))
			},
			assignInvoiceProperties(invoice){
				for (let property in this.invoice.data) {
					property == 'lineItems'
						? invoice[property] = this.buildLineItems(this.invoice.data[property])
						: invoice[property] = this.invoice.data[property]
				}
				return invoice
			},
			buildLineItems(lineItems) {
				let items = []
				for (let lineItem of lineItems) {
					items.push(this.getlineItemType(lineItem))
				}
				return items
			},
			sync(invoice) {
				return this.$emit('invoice-built', 
					{
						invoice: invoice,
						idx: this.claim.invoices.indexOf(this.invoice)
					}
				)
			},
			getlineItemType(lineItem) {
				switch(lineItem.type) {
					case 'ServiceFeeLineItem' :
						return new ServiceFeeLineItem(lineItem)
						break
					case 'QuantifiableLineItem' : 
						return new QuantifiableLineItem(lineItem)
						break
					case 'MileageLineItem' : 
						return new MileageLineItem(lineItem)
						break
					case 'HourlyRateLineItem' :
						if (this.invoice instanceof Invoice) {
							lineItem.rate = this.invoice.getHourlyRate();
						}
						return new HourlyRateLineItem(lineItem)
						break
					case 'AmountLineItem' :
						return new AmountLineItem(lineItem)
						break
					case 'DifferenceInTiersLineItem' :
						return new DifferenceInTiersLineItem(lineItem)
						break
				}
			},
			route(){
				return '/api/claims/' + this.claim.id + '/invoices/' + this.invoice.id
			},
		}
	}
</script>

<style>
	.menu-list a {
		/*color: whitesmoke;*/
	}
	.menu-list a:hover {
		background-color: #209cee;
		color: whitesmoke;
	}
</style>