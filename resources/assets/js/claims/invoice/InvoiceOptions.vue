<template>
<div class="level" style="padding: .5em;">
	<div class="level-left">
		<div class="level-item">
			<dropdown :items="lineItemTypes" @new-line-item="addLineItem" :carrier="invoice.carrier" event-name="new-line-item" buttonStyle="is-rounded is-small is-secondary">Add Line Item</dropdown>
		</div>
		<div class="level-item">
			<!-- <div class="level-item" > -->
				<div class="field" style="margin: 0 1em 0 0" v-if="invoice.carrier.label == 'TWIA'">
				  <input v-model="invoice.options.mcm" @change="toggleMcmLineItem" id="isMcm" type="checkbox" name="isMcm" class="switch is-rounded is-small is-info">
				  <label for="isMcm">MCM</label>
				</div>
			<!-- </div> -->
			<!-- <div class="level-item"> -->
			<!-- 	<div class="field">
				  <input v-model="invoice.options.taxable" @change="toggleTaxable" id="Taxable" type="checkbox" name="Taxable" class="switch is-rounded is-small is-info">
				  <label for="Taxable">Taxable</label>
				</div> -->
			<!-- </div> -->
	    </div>
	</div>
	<div class="level-right">
		<div class="level-item">
			<div class="field">
			  <div class="control">
			  	 <!-- <label class="label is-small" for="feeSchedule">Fee Schedule</label> -->
			    <div class="select is-small is-rounded">
			      <select v-model="invoice.feeSchedule" @change="$emit('fee-schedule-changed')" id="feeSchedule" style="font-size: 1em;">
			        <option value=""  disabled>Select Fee Schedule</option>
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
		<div class="level-item">
			<button class="button is-rounded is-small" @click="$emit('toggle-estimate')">
				<span class="icon is-small">
			      <i class="fa fa-file-text-o"></i>
			    </span>
				<span>New Estimate</span>
			</button>
		</div>
		<div class="level-item">
			<a :href="'/invoices/' + invoice.id" class="button is-rounded is-small"> <!-- @click="$emit('preview-invoice')" --> 
				<span class="icon is-small">
			      <i class="fa fa-file-pdf-o"></i>
			    </span>
				<span>Preview</span>
			</a>
		</div>
		<!-- <div class="level-item">
			<button class="button is-info is-rounded is-small" @click="$emit('invoice-saved')">
				<span class="icon is-small">
			      <i class="fa fa-floppy-o"></i>
			    </span>
				<span>Save Invoice</span>
			</button>
		</div> -->
		<div class="level-item">
			<button class="button is-danger is-rounded is-small" @click="$emit('invoice-deleted')">
				<span class="icon is-small">
			      <i class="fa fa-trash-o"></i>
			    </span>
				<!-- <span>Delete Invoice</span> -->
			</button>
		</div>
	</div>
</div>
</template>

<script>
	import Vue from 'vue'
	import dropdown from '../../Dropdown.vue'
	import claimData from '../claimData.js'
	import QuantifiableLineItem from './QuantifiableLineItem.js';
	import AmountLineItem from './AmountLineItem.js';
	export default {
		name: 'InvoiceOptions',
		props: ['invoice'],
		components: {
			dropdown
		},
		mounted() {
			//
		},
		data() {
			return claimData
		},
		methods: {
			addLineItem(lineItem) {
				lineItem.feeSchedule = this.invoice.feeSchedule
				return this.$emit('new-line-item', lineItem)
			},
			toggleMcmLineItem(){
				let mcmItem = this.lineItemTypes.find(type => type.name == 'MCM')
				mcmItem.amount = this.invoice.feeSchedule['mcm']
				return this.invoice.options.mcm 
					? this.addLineItem(mcmItem)
					: this.$emit('remove-line-item', mcmItem)
			},
			toggleTaxable() {
				return this.$emit('toggle-taxable');
			}
		}
	}
</script>
<style>
	.level .select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {
		border-color: #ccc;
	}
</style>