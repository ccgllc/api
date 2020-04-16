<template>
	<div class="card" style="margin-bottom: 1em;" v-if="invoice.options !== undefined">
		<div class="card-content">
			
			<div class="level">
				<!-- Show / Hide Button  -->
				<div class="level-left">
					<div class="level-item">
						<button 
							class="button is-dark is-rounded is-small" 
							:class="{'is-dark' : invoice.options.show }" 
							@click="toggle()"
						>
							<span class="icon is-small">
						      <i class="fa" 
						      	:class="{'fa-caret-down': !invoice.options.show, 'fa-times': invoice.options.show}"
					      	  >
					      	</i>
						    </span>
						</button>
					</div>
				</div>
				
				<!-- Hidden state Total -->
				<div class="level-right">
					<div class="level-item">
						<strong>Total: <span v-text="'$' + invoice.total"></span></strong>
					</div>
		       	</div>
			</div>


			<div id="invoice" v-if="invoice.options.show">
				<invoice-options
					:invoice="invoice"
					:lineItemTypes="lineItemTypes"
					@new-line-item="addLineItem"
					@remove-line-item="removeLineItem"
					@invoice-deleted="remove"
					@toggle-estimate="createEstimate"
					@fee-schedule-changed="updateFeeSchedule"
				> <!-- :carrier="claim.carrier" -->
				</invoice-options>

				<line-item 
					v-for="lineItem in invoice.lineItems" 
					:invoice="invoice"
					:lineItem="lineItem" 
					:estimates="claim.estimates"
					:key="lineItem.id"
					@line-item-removed="removeLineItem"
					@line-item-updated="caclulate"
					@toggle-estimate="createEstimate"
				>
				</line-item>

				<div class="level" style="padding: 1em; border-radius: .5em;">
					<div class="level-left">
						<div class="level-item">
							<!-- <dropdown :items="lineItemTypes" @new-line-item="addLineItem" event-name="new-line-item" up="true" buttonStyle="is-rounded is-small">Add Line Item</dropdown> -->
						</div>
					</div>

					<div class="level-right">
						<span style="padding-right: 2em;">Sub Total: <span v-text="invoice.subTotal"></span></span>
			       		<strong>Total: <span v-text="'$' + invoice.total"></span></strong>
			       	</div>
				</div>
				
			</div>
        </div>
   </div>
</template>

<script>
	import claimData from '../claimData.js';
	import invoiceOptions from './InvoiceOptions.vue';
	import dropdown from '../../Dropdown.vue';
	import Invoice from './Invoice.js'
	import lineItem from './LineItem.vue';
	import QuantifiableLineItem from './QuantifiableLineItem'
	import ServiceFeeLineItem from './ServiceFeeLineItem'
	import AmountLineItem from './AmountLineItem'
	import DifferenceInTiersLineItem from './DifferenceInTiersLineItem'
	export default {
		name: 'Invoice',
		props: ['invoice', 'carrier'],
		components: {
			lineItem,
			dropdown,
			invoiceOptions,
		},
		created() {
			if (!(this.invoice instanceof Invoice)) this.buildInvoice()
		},
		data() {
			return claimData
		},
		methods: {
			toggle() {
				this.invoice.options.show = !this.invoice.options.show 
				this.update()
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
				this.invoice.recalculateLineItems()
				return this.update()
			},
			buildInvoice() {
				let invoice = new Invoice()
				invoice.id = this.invoice.id
				invoice.carrier = this.carrier
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