<template>
	<LineItemBase :lineItem="lineItem">
		<template #data>
			<div>
			<div class="control has-icons-right">
				<input v-model="lineItem.description" @change="update()" type="input" class="input">
				<span 
				  @click="toggleOptions(lineItem)"
					class="icon tooltip is-right has-tooltip-info is-small is-rounded" data-tooltip="Toggle mileage options"
					style="cursor: pointer;"
				>
				<span class="is-small has-text-bold " :class="{'has-text-info': lineItem.showOptions, 'has-text-grey': !lineItem.showOptions}">
				  	<i class="fa" :class="{'fa-toggle-off': !lineItem.showOptions, 'fa-toggle-on': lineItem.showOptions}" style="font-size: 16px;"></i>
				  </span>
			  </span>
			  </div>
				<div class="mileage-options is-flex" v-if="lineItem.showOptions" style="padding: .5em; display: flex; align-items: space-between;">

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
							data-tooltip="Get Mileage Quantity"
							class="button is-rounded is-small is-dark tooltip"
						>
							<span class="icon is-small" style="justify-content: center">
							  <i class="fa fa-location-arrow"></i>
							</span>
					  </button>

					</div><!-- end right -->
				</div>
			</div>
			</div>

			<!-- mileage options -->
			<!-- <div class="control" v-if="lineItem.has('locations')" style="margin-top: .25em;">
			
	  </div> -->

			<!-- start address if mileage -->
			<div class="is-line-item-column" style="line-height: 1; width: 30%;">
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
	import AutocompleteAddress from './AutocompleteAddress'
	export default {
		name: 'MileageLineItem',
		props: ['lineItem', 'invoice', 'estimates', 'id'],
		components:{ LineItemBase, AutocompleteAddress	},
		mounted() {
			this.directions = new google.maps.DirectionsService();
		},
		data() {
			return {
				...claimData,
			}
		},
		computed: {
			update() {
				this.lineItem.calculate();
				this.$emit('line-item-updated', this.lineItem)
			},
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

				if (this.lineItem.type === 'ServiceFeeLineItem') {
					this.$emit('service-fee-updated');
				}

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
			getLossCoords() {
				return this.claim.claim_data.client.addresses.find(
					address => address.latitude && address.longitude
				)
			},
		  getLossAddressString() {
		  	//only build address if it hasnt already been set or edited by user...
		  	if (!this.lineItem.locations.loss.address) {
		  			//find address by geocoded location coords...
		  			// note if the following fails, google had trouble geolocating the address
		  	  	// perhaps we should do soemthing with that...
			  		let address = this.claim.claim_data.client.addresses.find(
						address => address.latitude && address.longitude
					);
		  		// if no address from above, hunt one down another way
		  		// should *never* fail, LOL!
					if (!address) address = this.claim.claim_data.client.addresses.find(a => a.type === 'Property' || a.type==="Home")
					// build up address string...
					let value = `${address.street}, ${address.city} ${address.state}, ${address.zip}`;
					// set the loss address
					this.lineItem.locations.loss.address = value;
					return value;
				// otherwise, just returned the one we already built and saved.
		  	} else {
		  		// let address = this.claim.claim_data.client.addresses.find(a => a.type === "Property" || a.type==="Home")
		  		return this.lineItem.locations.loss.address 
		  			? this.lineItem.locations.loss.address
		  			: 'Loss Location';
		  	}
				
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
	.items-center {
		align-items: center;
	}
</style>