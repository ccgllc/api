<template>
	<div class="is-line-item" style="line-height: 1; border: 1px solid #e0e0e0;">
		<div class="is-line-item-data" :class="{'items-center': lineItem.type !== 'MileageLineItem'}" style="width: 85%;">

			<!-- description -->
			<div class="control has-icons-right" style="display: flex; flex-direction: column; align-items: flex-end; width: 30%;">

				<input class="input" v-model="lineItem.description" @change="updateTotal()" type="input" >

				<span 
					@click="toggleOptions(lineItem)" 
					v-if="lineItem.has('locations')" 
					class="icon tooltip is-right has-tooltip-info is-small is-rounded" data-tooltip="Toggle mileage options"
					style="cursor: pointer;"
				>
				<span class="is-small has-text-bold " :class="{'has-text-info': lineItem.showOptions, 'has-text-grey': !lineItem.showOptions}">
				  	<i class="fa" :class="{'fa-toggle-off': !lineItem.showOptions, 'fa-toggle-on': lineItem.showOptions}" style="font-size: 16px;"></i>
				  </span>
			  </span>

				<div class="mileage-options is-flex" v-if="lineItem.has('locations') && lineItem.showOptions" style="padding: .5em; display: flex; align-items: space-between; width: 100%;">

					<div class="left" style="display: flex; align-items: flex-start; width: 100%;">

						<span class="" v-if="lineItem.has('locations')">
						<!-- round trip toggle -->
					  <input :disabled="lineItem.quantity == 0 || !lineItem.locations.start" v-model="lineItem.locations.roundTrip" @change="toggleRoundTrip(lineItem)" type="checkbox" :id="`round-trip-${id}`" :name="`round-trip-${id}`" class="switch is-rounded is-small is-info">
					  <label :for="`round-trip-${id}`"><small>Round trip?</small></label>
					</span>

					</div><!-- end left -->

					<div class="right" style="display: flex; align-items: flex-end;">
						
						<button 
							@click="getDirections()"
							data-tooltip="get directions"
							class="button is-rounded is-small is-dark tooltip"
						>
							<span class="icon is-small" style="justify-content: flex-start">
							  <i class="fa fa-location-arrow"></i>
							</span>
					  </button>

					</div><!-- end right -->
				</div>
			</div>

			<!-- mileage options -->
			<!-- <div class="control" v-if="lineItem.has('locations')" style="margin-top: .25em;">
			
	  </div> -->

			<!-- start address if mileage -->
			<div class="is-line-item-column" style="line-height: 1; width: 30%;" v-if="lineItem.has('locations')" >
				<autocomplete-address 
					placeholder="Start Address"
					v-model="lineItem.locations.start.address"
					:text="lineItem.locations.start.address"
					:style="lineItem.showOptions ? 'margin-bottom: .5em;' : 'margin-bottom: 0;'"
					leftIcon="fa-map-marker"
					rightIcon="fa-plus-circle"
					iconColor="#31c9a1"
					@address-selected="updateStartAddress"
					@new-destination="addLocation"
				></autocomplete-address>

				<!-- any additional stops before risk location -->
				<autocomplete-address 
					v-for="(destination, idx) in lineItem.locations.start.destinations"
					v-if="lineItem.showOptions"
					:text="destination.address"
					:key="(idx + 1) * 100"
					:idx="idx"
					style="margin-bottom: .5em;"
					leftIcon="fa-map-marker"
					rightIcon="fa-times-circle"
					iconColor="#ff3860"
					placeholder="Destination before loss address"
					:deleteable="true"
					@address-selected="updateBeforeLossAddress"
					@delete-item="deleteDestination"
				></autocomplete-address>

				<autocomplete-address  
					:text="getLossAddressString()"
					v-if="lineItem.showOptions"
					placeholder="Loss Address"
					leftIcon="fa-map-pin"
					rightIcon="fa-plus-circle"
					iconColor="#209cee"
					@address-selected="updateLossAddress"
					@new-destination="addPostLossAddress"
				></autocomplete-address>

					<!-- any additional stops after risk location -->
				<autocomplete-address 
					v-for="(destination, idx) in lineItem.locations.loss.destinations" 
					v-if="lineItem.showOptions"
					:key="(idx + 1) * 51"
					:idx="idx"
					:text="destination.address"
					leftIcon="fa-map-marker"
					rightIcon="fa-times-circle"
					iconColor="#ffdd57"
					placeholder="Destination after loss address"
					style="margin-top: .5em;"
					:deleteable="true"
					@address-selected="updateAfterLossAddress"
					@delete-item="deleteDestination"
				></autocomplete-address>
			</div>

			<!-- quantity -->
			<div class="control has-icons-left" v-if="lineItem.has('quantity')" style="width: 12.5%;">
		    <input class="input" @change="updateTotal()" v-model="lineItem.quantity" type="text">
		    <span class="icon is-small is-left has-text-bold">
			   <small>qty</small>
			  </span>
			</div>

			<!-- <span class="icon" style="width: 10%;" v-if="usesEstimates(lineItem) && creatingGrossLoss">
				 <i class="fa fa-toggle-off"></i>&nbsp;<span>erroneous</span>
			</span>
			&nbsp;
			<span class="icon" style="width: 10%;" v-if="usesEstimates(lineItem) && creatingGrossLoss">
				 <i class="fa fa-toggle-off"></i>&nbsp;<span>cwop</span>
			</span> -->

			<!-- amount -->
			<div class="control has-icons-left has-icons-right" v-if="lineItem.has('amount')" style="width: 30%;">
				
				<!-- <div class="tooltip" data-tooltip="Gross Loss Amount"> -->
					<div class="select is-fullwidth" v-if="usesEstimates(lineItem) && !creatingGrossLoss">
						<div class="tooltip"  data-tooltip="Gross Loss Amount">
							<select v-model="lineItem.amount" @change="updateTotal()" ref="grossLossSelect">
								<option value="0" disabled>Select Gross Loss Amount</option>
								<option v-for="estimate in estimates" :value="estimate.gross_loss" v-text="estimate.gross_loss"></option>
								<option v-if="invoice.feeSchedule.erroneous" value="erroneous">erroneous</option>
  							<option v-if="invoice.feeSchedule.cwop"value="cwop">CWOP</option>
							</select>
						</div>
					</div>


				<!-- <form method="post" @submit.prevent="submit" @keydown="appData.personalInfo.errors.clear($event.target.name)"> -->
					<input v-if="creatingGrossLoss && usesEstimates(lineItem)" v-model="newGrossLoss.gross_loss" type="input" placeholder="Add a gross loss amount" class="input" ref="grossLoss" @keyup.enter="createNewGrossLoss" @keyup.tab="createNewGrossLoss">
					<span v-if="creatingGrossLoss && usesEstimates(lineItem)" class="icon is-left"><i class="fa fa-usd"></i></span>
					<span v-if="creatingGrossLoss && usesEstimates(lineItem)" @click="createNewGrossLoss" class="icon is-right" style="background:#209cee; color: whitesmoke;border-radius: 0 6px 6px 0; border: 1px solid; border-color: #209cee; border-left:none; cursor: pointer;" data-tooltip="Save gross loss amount"><i class="fa fa-check"></i></span>
				<!-- </form> -->
				<!-- </div> -->

				<span v-if="hasEstimates() && usesEstimates(lineItem) && !creatingGrossLoss" class="icon is-small is-left has-text-bold"><small>gla</small></span>
				
				
		    <div class="control has-icons-left" v-if="!usesEstimates(lineItem)">
		    	<input  class="input" @change="updateTotal()" v-model="lineItem.amount" type="text">
			    <span class="icon is-small is-left has-text-bold"><small>amt</small></span>
				</div>
			</div>



			<a class="button is-small is-dark is-outlined is-rounded" v-if="usesEstimates(lineItem)" @click="toggleCreatingGrossLoss">
					<span class="is-small" style="margin-right: .5em;"><i class="fa" :class="{'fa-plus-circle' : !creatingGrossLoss, 'fa-times-circle': creatingGrossLoss}"></i></span>
					<span v-text="!creatingGrossLoss ? 'Add Gross Loss Amount' : 'Cancel'"></span>
				</a>


			<!-- new amount -->
			<div class="field" v-if="usesEstimates(lineItem) && lineItem.has('newAmount')">
  				<div class="control has-icons-left">
						<div class="select is-fullwidth" v-if="hasEstimates()">
  						<select v-model="lineItem.newAmount" @change="updateTotal()" style="">
  							<option value="0" disabled>Select Gross Loss Amount</option>
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
				    	<input  class="input" @change="updateTotal()" v-model="lineItem.amount" type="text">
					    <span class="icon is-small is-left has-text-bold">
						   <small>amt</small>
						</span>
					</div>
				</div>
			</div>

			<!-- Rate -->
			<div class="control has-icons-left" v-if="lineItem.has('rate')" style="width: 12.5%">
				<div class="select"
					v-if="lineItem.type == 'HourlyRateLineItem' && invoice.hasMultipleHourlyRates() " 
				>
					<select v-model="lineItem.rate" @change="updateTotal()" style="">
						<option v-for="rate in invoice.feeSchedule.hourly" :value="rate.amount" v-text="'$' + rate.amount"></option>
					</select>
				</div>
		    <input v-else class="input is-static" placeholder="rate" v-model="lineItem.rate" type="text" @change="updateTotal()" :disabled="lineItem.type == 'amount' || !lineItem.has('name')" :readonly="!lineItem.has('name')">
		   <span class="icon is-small is-left has-text-bold">
				<small>rate</small>
		   </span>
			</div>

			

		</div><!-- end left -->

		<div class="right is-line-item-totals" style="width: 15%;">
		  <span v-text="'$' + lineItem.total" style="font-weight: 700; padding: 0 .5em 0 0; color: #343b4c"></span>
		 	<button class="delete is-small" @click="$emit('line-item-removed', lineItem)" style=""></button>
		</div><!-- end right -->
	</div>
</template>

<script>
	import dropdown from '../../Dropdown.vue'
	import claimData from '../claimData';
	import autocompleteAddress from './AutocompleteAddress';
	// import Form from '../../structur/src/form/Form'
	// import lossAddress from './AddressGeocoder';

	export default {
		name: 'LineItem',
		props: ['lineItem', 'estimates', 'invoice', 'id'],
		components: {
			dropdown,
			autocompleteAddress,
		},
		data() {
			return claimData
		},
		mounted() {
			if (this.lineItem.has('locations')){
				this.directions = new google.maps.DirectionsService();
			}
		},
		computed: {
			finalDestination() {				
				return this.isLossAddressFinalDestination
					? this.getLossAddressString()
					: this.getFinalDestination()
			},
			isLossAddressFinalDestination() {
					return this.lineItem.locations.loss.destinations.length > 0
					 	? false
					 	: true;
			},
			hasDestinationsBeforeLoss() {
					return this.lineItem.locations.start.destinations.length > 0 
						? true
						: false;
			},
			getWaypoints() {
					let waypoints = [];

					const model = () => ({location: '', stopover: true});

					if (this.hasDestinationsBeforeLoss) {
						this.lineItem.locations.start.destinations.forEach(destination => { 
							if (destination.address) {
								let preLossDestinations = model();
								preLossDestinations.location = destination.address;
								waypoints.push(preLossDestinations)
							}
						});

					}

					if (!this.isLossAddressFinalDestination) {
						this.lineItem.locations.loss.destinations.forEach(destination => {
						  if (destination.address) {
						  	let postLossDestination = model();
						  	postLossDestination.location = destination.address;
						  	waypoints.push(postLossDestination);
						  }
						});

						waypoints.pop();

						let loss = model();
						loss.location = this.getLossAddressString();
						waypoints.unshift(loss);
					}

					// waypoints.forEach(address => result += `${address}|` );

					return waypoints;
			}
		},
		methods: {
			addLocation(){
				this.lineItem.locations.start.destinations.push({address: ''});
				return this.updateTotal()
			},
			addPostLossAddress(){
				this.lineItem.locations.loss.destinations.push({address: ''});
				return this.updateTotal()
			},
			updateStartAddress(value) {
				this.lineItem.locations.start.address = value;
				return this.updateTotal()
		  },
		  updateLossAddress(value) {
		  	this.lineItem.locations.loss.address = value;
		  	return this.updateTotal()
		  },
		  updateBeforeLossAddress(data) {
		  	// console.log(data);
		  	let destinations = this.lineItem.locations.start.destinations
		  	let destination = destinations[data.idx];
		  	destination.address = data.address;
		  	destinations.splice(data.idx, 1, destination);

		  	return this.updateTotal()
		  },
		  updateAfterLossAddress(data) {
		  	// console.log(data);
		  	let destinations = this.lineItem.locations.loss.destinations;
		  	let destination = destinations[data.idx];
		  	destination.address = data.address;
		  	destinations.splice(data.idx, 1, destination);

		  	return this.updateTotal()
		  },
		  deleteDestination(data){
		  	return this.lineItem.locations[data.type].destinations.splice(data.idx, 1);
		  },
			updateTotal() {
				this.lineItem.calculate();
				return this.$emit('line-item-updated');
			},
			toggleRoundTrip(lineItem) {
				lineItem.toggleRoundTripQuantity(); 
				return this.updateTotal()
			},
			toggleOptions(lineItem) {
				this.lineItem.showOptions = !this.lineItem.showOptions
				return this.updateTotal()
			},
			async toggleCreatingGrossLoss() {
				// this.$emit('creating-gross-loss-toggled');
				this.creatingGrossLoss = !this.creatingGrossLoss;

				if (this.creatingGrossLoss) {
					await this.getGrossLossInput().then(ele => ele.focus())
				}
			},
			async getGrossLossInput() {
				const self = this;
				return new Promise((resolve, reject) => {
					self.$nextTick(() => resolve(self.$refs.grossLoss))
		 		});
			},
			async getGrossLossSelect() {
				const self = this;
				return new Promise((resolve, reject) => {
					self.$nextTick(() => resolve(self.$refs.grossLossSelect))
		 		});
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
				// this.updateTotal();
			},
		  usesEstimates(lineItem) {
				return lineItem.type == 'ServiceFeeLineItem' 
					|| lineItem.type == 'DifferenceInTiersLineItem'
					? true : false;
			},
		  hasEstimates(){
				return this.estimates.length > 0 
					? true : false
			},
		  getLossCoords() {
				return this.claim.claim_data.client.addresses.find(
					address => address.latitude && address.longitude
				)
			},
		  getLossAddressString() {
				let address = this.claim.claim_data.client.addresses.find(
					address => address.latitude && address.longitude
				);
				let value = `${address.street}, ${address.city} ${address.state}, ${address.zip}`;
				this.lineItem.locations.loss.address = value;
				return value;
			},
			getFinalDestination() {
				let dest = this.lineItem.locations.loss.destinations.slice(-1);
				return dest !== undefined ? dest[0].address : 'undetermined';
				// return dest.address;
			},
			getDirections() {
				this.directions.route(
			    {
			      origin: `${this.lineItem.locations.start.address}`,
			      waypoints: this.getWaypoints,
			      destination: `${this.finalDestination}`,
			      travelMode: google.maps.TravelMode.DRIVING,
			    },
			    (response, status) => {
			    	let qty = 0;
			      if (status === "OK") {
			        //directionsRenderer.setDirections(response);
			        console.log(response);
			        let route = response.routes[0];

			        //loop through legs calculate qty,
			        route.legs.forEach(
			        	//convert meteres to miles...
			        	leg => qty += parseFloat(leg.distance.value * 0.00062137)
		        	);
			        this.lineItem.quantity = +qty.toFixed(2);
			        this.updateTotal(this.lineItem);
			      } else {
			      	console.error(status);
			        window.alert("Directions request failed due to " + status);
			      }
			    }
			  );
			}
		}
	}
</script>

<style>
	.is-line-item input.input {
		/*border: none;*/
		border-radius: 0;
		font-weight: 400;
		background: #f8f7f7;
		/*background: #fff;*/
		/*font-size: .85em;
		line-height: .85em;*/
		color: #343b4b;
		border-radius: 6px;
	}
	.select:not(.is-multiple) {
		height: 100%;
	}
	.is-line-item input.input:hover {
		/*border-bottom: 1px solid #f0f0f0;*/
	}
	label.label {
		color: #bbb;
	}
	.control {
		margin-right: .5em;
	}
	.tooltip:hover::after {
		background: #343b4c;
	}
	.tooltip:focus::before, .tooltip:hover::before {
		border-color: #343b4c transparent transparent transparent;
	}
	.control.has-icons-left .icon, .control.has-icons-right .icon {
		pointer-events: auto;
	}

	.select select{
		/*border: none;*/
		background: #f8f7f7;
		/*background: #fff;*/
		/*border-bottom: 1px solid #f0f0f0;*/
		border-radius: 6px;
		/*font-size: .85em;*/
		/*height: 2em;*/
		font-weight: 500;
	}
	.select select:focus{
		/*border: none;*/
	}
	.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {
		border-color: #cccccc;
	}
	.is-line-item {
		background: #eeeeee;
		/*margin: 0 0 .5em 0;
		padding: .5em;*/
		/*background-color: white;*/
		border-radius: 5px;
		/*box-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 0 rgba(10, 10, 10, 0.1);*/
		color: #343b4c;
		display: flex;
		margin: 0 0 .6em 0;
		padding: .5em;
	}
	.is-line-item-data {
		display: flex;
		/*justify-content: flex-start;*/
		/*align-items: center;*/
	}
	.items-start {
		align-items: flex-start;
	}
	.items-center {
		align-items: center;
	}
	.is-line-item-totals {
		display: flex;
		justify-content: flex-end;
		/*justify-items: center;*/
		align-items: center;
	}
	.is-line-item-column {
		display: flex;
		flex-direction: column;
	}
	.is-line-item .card-content {
		padding: .60rem;
	}
	.is-line-item .icon small {
		font-size: .75em;
	}
	.icon {
		/*line-height: .85em;
		font-size: .85em;*/
	}
	.control.has-icons-left .icon, .control.has-icons-right .icon {
		color: #bbb;
	}
	span.icon.is-xsmall {
		width: .75em;
		height: .75em;
	}
	table thead tr th {
		font-size: .6em;
	}
</style>