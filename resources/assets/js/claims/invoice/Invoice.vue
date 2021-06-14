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
					    <div class="select is-info">
					      <select v-model="invoice.feeSchedule" @change="updateFeeSchedule()" id="feeSchedule">
					        <option value="default" disabled>Select a fee schedule to begin</option>
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
				
				<component 
					v-for="(lineItem, key) in invoice.lineItems"
					:is="lineItem.type"
					v-if="hasInteractedWithFeeSchedule"
					:invoice="invoice"
					:lineItem="lineItem"
					:estimates="claim.estimates"
					:id="key"
					:key="key"
					@line-item-removed="removeLineItem"
					@line-item-updated="calculate"
					@service-fee-updated="notifyDependentLineItems"
					@toggle-estimate="createEstimate"
					@creating-gross-loss-toggled="toggleCreatingGrossLoss"
				>
				</component>
				
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
	import lineItemModels from './lineItemModels';
	import ServiceFeeLineItem from './ServiceFeeLineItem.vue';
	import MileageLineItem from './MileageLineItem.vue';
	import QuantifiableLineItem from './QuantifiableLineItem.vue';
	import HourlyRateLineItem from './HourlyRateLineItem.vue';
	import CitySurchargeLineItem from './CitySurchargeLineItem.vue';
	import AmountLineItem from './AmountLineItem.vue';
	import DifferenceInTiersLineItem from './DifferenceInTiersLineItem.vue';

	export default {
		name: 'Invoice',
		props: ['invoice', 'carrier'],
		components: {
			lineItem,
			newLineItem,
			dropdown,
			invoiceOptions,
			ServiceFeeLineItem,
			MileageLineItem,
			QuantifiableLineItem,
			HourlyRateLineItem,
			CitySurchargeLineItem,
			AmountLineItem,
			DifferenceInTiersLineItem
		},
		created() {
			let supplementInvoice = false;
			if (!(this.invoice instanceof Invoice)) {
				if (this.invoice.is_supplement) supplementInvoice = true;
				this.buildInvoice(supplementInvoice)
			}
		},
		mounted() {
			
		},
		data() {
			return claimData
		},
		computed: {
			hasInteractedWithFeeSchedule() {
				return this.invoice.feeSchedule === 'default' ? false : true;
			},
			isSupplement() {

			}
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
			calculate() {
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
				this.setRates()
				this.setMinimums()
				this.invoice.recalculateLineItems()

				return this.update()
			},
			notifyDependentLineItems() {
				const surcharge = this.invoice.lineItems.find(item => item.type === 'CitySurchargeLineItem')
				const serviceFees = this.invoice.lineItems.filter(item => item.type === 'ServiceFeeLineItem')
				let total = 0
				if (surcharge) {
					// we need to eventually pull the multiplier (.10) from the foreach callback from the feeschedule..
					if (serviceFees.length) serviceFees.forEach(item => total += (+item.total * .10) )
					surcharge.amount = (total).toFixed(2);
					return surcharge.calculate()
				}
				// return 0;
			},
			setRates() {
				const hourly = this.invoice.lineItems.find(item => item.type === 'HourlyRateLineItem');
				if (hourly) hourly.rate = this.invoice.getHourlyRate();

				// const photo = this.invoice.lineItems.find(item => item.type === 'QuantifiableLineItem');
				// if (photo) photo.rate = this.invoice.getPhotoRate();

				const mileage = this.invoice.lineItems.find(item => item.type === 'MileageLineItem');
				if (mileage) mileage.rate = this.invoice.getMileageRate();
			},
			setMinimums() {
				const photo = this.invoice.lineItems.find(item => item.type === 'QuantifiableLineItem');
				if (photo) photo.minimum = this.invoice.getPhotoMinimum();

			  const mileage = this.invoice.lineItems.find(item => item.type === 'MileageLineItem');
			  if (mileage) mileage.minimum = this.invoice.getMileageMinimum();
			},
			buildInvoice(supplement) {
				const invoice = new Invoice({
					id: this.invoice.id,
					carrier: this.carrier,
					is_supplement: supplement,
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
				if (this.invoice instanceof Invoice) {
					if (lineItem.type === 'ServiceFeeLineItem'){
							lineItem.feeSchedule = this.invoice.feeSchedule;
							lineItem.amount = 'default'
						}

					if (lineItem.type === 'DifferenceInTiersLineItem') lineItem.feeSchedule = this.invoice.feeSchedule;
						
					if (lineItem.type === 'MileageLineItem') {
							lineItem.rate = this.invoice.getMileageRate()
						  lineItem.minimum = this.invoice.getMileageMinimum()
						}
					}

				return new lineItemModels[lineItem.type](lineItem);
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
	.control.has-icons-left .icon, .control.has-icons-right .icon{
		height:  2.25em;
	}
</style>