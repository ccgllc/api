<template>
	<!-- <div class="columns"> -->
		<!-- <div class="column"> -->
			<div class="map is-flex is-flex-shrink-1" id="map"></div>
			<!-- <label for="claim-location" class="label">Claim Location</label>
			<input type="text" id="claim-location" class="input" @focus="geolocate"> -->
		<!-- </div> -->
	<!-- </div> -->
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Map',
		data(){
			return claimData;
		},
		created() {
			// this.home.lat = this.findCoords();
			// this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
			this.findCoords();
		},
		mounted() {
			this.bounds = new google.maps.LatLngBounds();
			this.map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 10,
	          center: this.home,
	        });
	        this.marker = new google.maps.Marker({
	          position: this.home,
	          map: this.map
	        });
		},
		methods: {
			findCoords() {
				// cache addresses for syntactic sugar.
				let addresses = this.claim.claim_data.client.addresses;
				// find the first client address with geometric data...
				let address = 
					addresses.find(
						address => address.latitude != null && address.longitude != null
					);

				// if we dont have geometric data for any client address..
				if (!address) {
					// so we have to geocode it by an address string...
					this.geocodeAddress(addresses);
				} else {
					// otherwise just set our coords to what we have in memory..
					this.home.lat = +address.latitude;
					this.home.lng = +address.longitude;
				}
			},
			geocodeAddress(addresses) {
				let address = 
					addresses.find(address => address.type == 'Property');

				// if no property addresses found use whatever is first 
				// and add it as the property address.
				if(!address && addresses){
					address = addresses[0];
					address.type = 'Property';
					addresses.push(address);
				} 

				// otherwise instanitate Geocoder
				let geocoder = new google.maps.Geocoder();
				// address string for google api.
				let addressString = `${address.street} ${address.city} ${address.state}, ${address.zip}`;
				// geocode address string.
				geocoder.geocode({address: addressString}, (results, status) => {
					//remove marker
					this.marker.setMap(null);
					//reset bounds to result
					this.map.setCenter(results[0].geometry.location);

					//set location
					this.home.lat = results[0].geometry.location.lat();
					this.home.lng = results[0].geometry.location.lng();

					//create new marker with results
					this.marker = new google.maps.Marker({
	          position: this.home,
	          map: this.map
        	});

					// update state of local client address because its much easier 
					// and cleaner to update all client addreseses in db. 
					let idx = addresses.indexOf(address);
					// make a cords obj to merge with our exisitng address obj.
					let cords = {latitude: this.home.lat, longitude: this.home.lng};
					// merge the cords object with our local address data.
					// then replace the original address with cords. 
					// This will be reactive in the view! 
					addresses.splice(idx, 1, Object.assign(address, cords))

					// persist modified client addresses to storage.
					window.axios.put(`/api/claims/${this.claim.id}/geometry`, addresses)
						.then(response => console.log(response))
						.catch(error => console.error(error))

				})
			}
		}
	}
</script>