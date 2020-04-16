<template>
	<div class="box is-line-item" style="border-color: #fff;">
  		<div class="level" style="margin-bottom: 0">
  			<!-- <div class="columns" style="margin-bottom: 0"> -->
			<div class="level-left" style="width: 80%">
		  		<div class="level-item">
			  		<div class="field">
			  			<!-- <label class="label is-small">Description</label> -->
		  				<div class="control">
						    <input class="input is-fullwidth" v-model="lineItem.description" @change="updateTotal(lineItem)" type="text" style="">
						</div>
		  			</div>
		  		</div>

		  		<div class="level-item" v-if="lineItem.has('quantity')">
		  			<div class="field">
		  				<!-- <label class="label is-small">Quantity</label> -->
		  				<div class="control has-icons-left has-icons-right">
						    <input class="input" @change="updateTotal(lineItem)" v-model="lineItem.quantity" type="text">
						    <span class="icon is-small is-left has-text-bold">
							   <small>qty</small>
							  </span>
						</div>
		  			</div>	
		  	    </div>

		  	    <!-- <div class="level-item" v-if="lineItem.has('rate')" style="width: 15%;">
	  				<small>Qty</small>
	  			</div> -->

		  		<div class="level-item" v-if="lineItem.has('amount')">
		  			<div class="field">
		  				<!-- <label class="label is-small" v-text="isServiceFee(lineItem) ? 'Gross Loss' : 'Amount'"></label> -->
		  				<div class="control has-icons-left">
	  						<div class="select is-fullwidth" v-if="usesEstimates(lineItem) && hasEstimates()">
		  						<select v-model="lineItem.amount" @change="updateTotal(lineItem)" style="font-size: 1em;">
		  							<option value="0" disabled>Select Estimate</option>
		  							<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
		  						</select>
		  						 <span class="icon is-small is-left has-text-bold">
									<small>gla</small>
						   		</span>
		  					</div>
		  					<button class="button is-small is-info" v-else-if="usesEstimates(lineItem) && !hasEstimates()" @click="$emit('toggle-estimate')">
		  						Create Estimate
		  					</button>
						    <div class="control has-icons-left" v-else>
						    	<input  class="input" @change="updateTotal(lineItem)" v-model="lineItem.amount" type="text">
							    <span class="icon is-small is-left has-text-bold">
								   <small>amt</small>
								</span>
							</div>
						</div>
					</div>
				</div>
				
				<div class="level-item" v-if="usesEstimates(lineItem) && lineItem.has('newAmount')">
					<div class="field">
		  				<!-- <label class="label is-small" v-text="isServiceFee(lineItem) ? 'Gross Loss' : 'Amount'"></label> -->
		  				<div class="control has-icons-left">
	  						<div class="select is-fullwidth" v-if="hasEstimates()">
		  						<select v-model="lineItem.newAmount" @change="updateTotal(lineItem)" style="font-size: 1em;">
		  							<option value="0" disabled>Select Estimate</option>
		  							<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
		  						</select>
		  						 <span class="icon is-small is-left has-text-bold">
									<small>gla</small>
						   		</span>
		  					</div>
		  					<button class="button is-small is-info" v-else-if="usesEstimates(lineItem) && lineItem.newAmount && !hasEstimates()" @click="$emit('toggle-estimate')">
		  						Create Estimate
		  					</button>
						    <div class="control has-icons-left" v-else>
						    	<input  class="input" @change="updateTotal(lineItem)" v-model="lineItem.amount" type="text">
							    <span class="icon is-small is-left has-text-bold">
								   <small>amt</small>
								</span>
							</div>
						</div>
					</div>
	  			</div>	

		  		<div class="level-item" v-if="lineItem.has('rate')">
		  			<div class="field">
		  				<!-- <label class="label is-small">Rate</label> -->
		  				<div class="control has-icons-left">
		  					<div class="select"
		  						v-if="invoice.hasMultipleHourlyRates() && lineItem.description == 'Time & Expense Hours'" 
		  					>
		  						<select v-model="lineItem.rate" @change="updateTotal(lineItem)" style="font-size: 1em;">
		  							<option v-for="rate in invoice.feeSchedule.hourly" :value="rate.amount" v-text="rate.label + ' @ ' + rate.amount"></option>
		  						</select>
		  					</div>
						    <input v-else class="input is-static" placeholder="rate" v-model="lineItem.rate" type="text" @change="updateTotal(lineItem)" :disabled="lineItem.type == 'amount' || !lineItem.has('name')" :readonly="!lineItem.has('name')">
						   <span class="icon is-small is-left has-text-bold">
								<small>rate</small>
						   </span>
						</div>
		  			</div>	
		  	    </div>
	  		</div>
				
			<div class="level-right">
		  		<div class="level-item has-text-centered" style="padding-right: .75em;">
			  		<div class="field">
			  			<!-- <label class="label is-small">Item Total</label> -->
		  				<div class="control">
						    <!-- <input class="input is-static" v-model="lineItem.total" type="text" readonly> -->
						    <span v-text="'$' + lineItem.total" style="font-size: 1em; font-weight: 700; color: #45aaf0"></span>
						</div>

		  			</div>
  				</div>
  				<div class="level-item">
  				 	<button class="delete is-small" @click="$emit('line-item-removed', lineItem)"></button>
  				</div>
  				<!-- <div class="level-item">
  				  <dropdown :items="lineItemMenuItems" @item-action="handleAction" event-name="item-action" button-style="is-light is-rounded is-small" right="true">
  				  	<span class="icon is-large"><i class="fa fa-bars"></i></span>
  				  </dropdown>
  				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import dropdown from '../../Dropdown.vue'
	import claimData from '../claimData';
	export default {
		name: 'LineItem',
		props: ['lineItem', 'estimates', 'invoice'],
		components: {
			dropdown
		},
		data() {
			return claimData
		},
		methods: {
			updateTotal(lineItem) {
				lineItem.calculate();
				return this.$emit('line-item-updated');
			},
			usesEstimates(lineItem) {
				return lineItem.type == 'ServiceFeeLineItem' 
					|| lineItem.type == 'DifferenceInTiersLineItem'
					? true : false;
			},
			hasEstimates(){
				return this.estimates.length > 0 
					? true : false
			}
		}
	}
</script>

<style>
	.box.is-line-item input.input {
		border: none;
		border-radius: 0;
		font-weight: 700;
		/*background: #f8f7f7;*/
		background: #fff;
		font-size: .95em;
		color: #343b4b;
	}
	.box.is-line-item input.input:hover {
		border-bottom: 1px solid #f0f0f0;
	}
	label.label {
		color: #bbb;
	}
	.box .select select{
		border: none;
		/*background: #f8f7f7;*/
		background: #fff;
		border-bottom: 1px solid #f0f0f0;
		border-radius: 0;
		font-size: .95em;
		height: 2em;
		font-weight: 700;
	}
	.select select:focus{
		border: none;
	}
	.box.is-line-item {
		/*background: #;*/
		margin: 0 0 .5em 0;
		padding: .5em 1em .5em 1em;
		background-color: white;
		border-radius: 6px;
		box-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);
		color: #343b4c;
		display: block;
		margin: 0 0 .9em 0;
		padding: .5em 1em .5em 1em;
	}
	.box.is-line-item .card-content {
		padding: .60rem;
	}
	.box.is-line-item .icon small {
		font-size: .75em;
	}
	span.icon.is-xsmall {
		width: .75em;
		height: .75em;
	}
	table thead tr th {
		font-size: .6em;
	}
</style>