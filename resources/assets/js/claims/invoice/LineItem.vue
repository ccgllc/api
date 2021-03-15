<template>
	<div class="is-line-item" style="border-color: #fff;">
  		<div class="level" style="margin-bottom: 0">
  			<!-- <div class="columns" style="margin-bottom: 0"> -->
			<div class="level-left is-mobile" style="width: 50%">
		  		<div class="level-item" style="width: 66%">
						<input class="input" v-model="lineItem.description" @change="updateTotal(lineItem)" type="text" style="">
		  		</div>

		  		<div class="level-item is-flex" v-if="lineItem.has('locations')" style="width:44%; position: 'relative';">
		  			<div class="control has-icons-left has-icons-right">
					    <input 
					    	class="input"
					    	id="start-address" 
					    	type="text"
					    	@input="getAddress()" 
					    	@keyup.down="selectedAutocompleteResult < 4 ? selectedAutocompleteResult ++ : selectedAutocompleteResult = 0"  
					    	@keyup.up="selectedAutocompleteResult > 0 ? selectedAutocompleteResult -- : selectedAutocompleteResult = 0" 
					    	@keyup.enter="selectAddress()"
					    	v-model="lineItem.locations.start" 
				    	>
					    <span class="icon is-small is-left has-text-bold">
						   <i class="fa fa-map-marker"></i>
						  </span>
						  <aside class="menu" style="font-size: .75em">
						  	<ul class="menu-list">
						  		<li v-for="(result, idx) in autocompleteResults">
						  			<a 
						  				:class="{'is-active': idx == selectedAutocompleteResult}" 
						  				v-text="result.description"
						  				@click="setSelectedAutocompleteResult(idx)"
					  				></a>
						  		</li>
						  	</ul>
						  </aside>
		  			</div>	
		  		</div>

		  		<div class="level-item is-flex" v-if="lineItem.has('quantity')" style="width: 20%">
	  				<div class="control has-icons-left has-icons-right">
					    <input class="input" @change="updateTotal(lineItem)" v-model="lineItem.quantity" type="text">
					    <span class="icon is-small is-left has-text-bold">
						   <small>qty</small>
						  </span>
		  			</div>	
		  	    </div>

		  	    <!-- <div class="level-item" v-if="lineItem.has('rate')" style="width: 15%;">
	  				<small>Qty</small>
	  			</div> -->

		  		<div class="level-item" v-if="lineItem.has('amount')" style="justify-content: flex-start;">
		  			<!-- <div class="field"> -->
		  				<!-- <label class="label is-small" v-text="isServiceFee(lineItem) ? 'Gross Loss' : 'Amount'"></label> -->
		  				<div class="control has-icons-left">
	  						<div class="select" v-if="usesEstimates(lineItem) && hasEstimates()">
		  						<select v-model="lineItem.amount" @change="updateTotal(lineItem)" style="">
		  							<option value="0" disabled>Select Estimate</option>
		  							<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
		  						</select>
		  						 <span class="icon is-small is-left has-text-bold">
									<small>gla</small>
						   		</span>
		  					</div>
		  					<button class="button is-small is-info is-rounded" v-else-if="usesEstimates(lineItem) && !hasEstimates()" @click="$emit('toggle-estimate')">
		  						Create Estimate
		  					</button>
						    <div class="control has-icons-left" v-else>
						    	<input  class="input" @change="updateTotal(lineItem)" v-model="'$' + lineItem.amount" type="text">
							    <span class="icon is-small is-left has-text-bold">
								   <small>amt</small>
								</span>
							<!-- </div> -->
						</div>
					</div>
				</div>
				
				<div class="level-item" v-if="usesEstimates(lineItem) && lineItem.has('newAmount')" style="justify-content: flex-start;">
					<div class="field">
		  				<!-- <label class="label is-small" v-text="isServiceFee(lineItem) ? 'Gross Loss' : 'Amount'"></label> -->
		  				<div class="control has-icons-left">
	  						<div class="select is-fullwidth" v-if="hasEstimates()">
		  						<select v-model="lineItem.newAmount" @change="updateTotal(lineItem)" style="">
		  							<option value="0" disabled>Select Estimate</option>
		  							<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="'$' + estimate.gross_loss"></option>
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

		  		<div class="level-item" v-if="lineItem.has('rate')" style="justify-content: flex-start; width: 20%">
	  				<div class="control has-icons-left">
	  					<div class="select"
	  						v-if="lineItem.type == 'HourlyRateLineItem' && invoice.hasMultipleHourlyRates() " 
	  					>
	  						<select v-model="lineItem.rate" @change="updateTotal(lineItem)" style="">
	  							<option v-for="rate in invoice.feeSchedule.hourly" :value="rate.amount" v-text="'$' + rate.amount"></option>
	  						</select>
	  					</div>
					    <input v-else class="input is-static" placeholder="rate" v-model="lineItem.rate" type="text" @change="updateTotal(lineItem)" :disabled="lineItem.type == 'amount' || !lineItem.has('name')" :readonly="!lineItem.has('name')">
					   <span class="icon is-small is-left has-text-bold">
							<small>rate</small>
					   </span>
		  			</div>	
	  	    </div>
	  	  <!-- <div class="level-item">
	  	    	<div class="field">
						  <input v-model="lineItem.taxable" @change="updateTotal(lineItem)" type="checkbox" :id="`Taxable-${lineItem.id}`" :name="`Taxable-${lineItem.id}`" class="switch is-rounded is-small is-info">
						  <label :for="`Taxable-${lineItem.id}`"><small>taxable</small></label>
						</div>
	  	    </div> -->
	  		</div>
				
			<div class="level-right">
	  		<div class="level-item has-text-centered">
					  <span v-text="'$' + lineItem.total" style="font-size: .9em; font-weight: 700; padding: .5em .75em; color: #343b4c"></span>
				</div>
				<div class="level-item">
				 	<button class="delete is-small" @click="$emit('line-item-removed', lineItem)"></button>
				</div>
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
		mounted() {
			if (this.lineItem.locations) {

				this.claim.claim_data.client.addresses 
					?  this.lineItem.locations.loss = this.getLossCoords()
					: this.lineItem.locations.loss = '';

				this.autocomplete = new google.maps.places.AutocompleteService();
				this.directions = new google.maps.DirectionsService();
				
			}
		},
		methods: {
			updateTotal(lineItem) {
				lineItem.calculate();
				return this.$emit('line-item-updated');
			},
			getAddress() {
				// const input = document.getElementById("start-address")
				const self = this;

				if (this.lineItem.locations.start == '') this.autocompleteResults = [];

				const displaySuggestions = function (predictions, status) {
	   			if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
	      		alert(status);
	      		return;
	    		}
		    	self.autocompleteResults = predictions;
  			};

				this.autocomplete.getQueryPredictions({ input: this.lineItem.locations.start }, displaySuggestions);
			},
			setSelectedAutocompleteResult(index) {
				this.selectedAutocompleteResult = index;
				return this.selectAddress();
			},
			getLossCoords() {
				return this.claim.claim_data.client.addresses.find(
					address => address.latitude && address.longitude
				)
			},
			selectAddress(){
				this.lineItem.locations.start = 
					this.autocompleteResults[this.selectedAutocompleteResult].description;
					this.selectedAutocompleteResult = 0;
					this.autocompleteResults = [];
					this.directions.route(
			    {
			      origin: {
			        query: `${this.lineItem.locations.start}`,
			      },
			      destination: {
			        query: `${this.lineItem.locations.loss.latitude},${this.lineItem.locations.loss.longitude}`,
			      },
			      travelMode: google.maps.TravelMode.DRIVING,
			    },
			    (response, status) => {
			      if (status === "OK") {
			        //directionsRenderer.setDirections(response);
			        // console.log(response.routes[0].legs[0].distance.text.replaceAll(/\D/g, ''));
			        this.lineItem.quantity = +response.routes[0].legs[0].distance.text.replaceAll(/\D/g, '');
			        this.updateTotal(this.lineItem);
			      } else {
			      	console.error(status);
			        window.alert("Directions request failed due to " + status);
			      }
			    }
			  );
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
	.is-line-item input.input {
		border: none;
		border-radius: 0;
		font-weight: 700;
		background: #f8f7f7;
		/*background: #fff;*/
		font-size: .85em;
		color: #343b4b;
		border-radius: 6px;
	}
	.select:not(.is-multiple) {
		height: 100%;
	}
	.is-line-item input.input:hover {
		border-bottom: 1px solid #f0f0f0;
	}
	label.label {
		color: #bbb;
	}
	.select select{
		border: none;
		background: #f8f7f7;
		/*background: #fff;*/
		/*border-bottom: 1px solid #f0f0f0;*/
		border-radius: 6px;
		font-size: .85em;
		/*height: 2em;*/
		font-weight: 700;
	}
	.select select:focus{
		border: none;
	}
	.is-line-item {
		background: #eeeeee;
		/*margin: 0 0 .5em 0;
		padding: .5em;*/
		/*background-color: white;*/
		border-radius: 6px;
		/*box-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);*/
		color: #343b4c;
		display: block;
		margin: 0 0 .5em 0;
		padding: .5em;
	}
	.is-line-item .card-content {
		padding: .60rem;
	}
	.is-line-item .icon small {
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