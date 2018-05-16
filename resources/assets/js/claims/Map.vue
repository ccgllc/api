<template>
	<div class="columns">
		<div class="column">
			<div class="map" id="map"></div>
			<!-- <label for="claim-location" class="label">Claim Location</label>
			<input type="text" id="claim-location" class="input" @focus="geolocate"> -->
		</div>
	</div>
</template>

<script>
	import claimData from './claimData.js';
	export default {
		name: 'Map',
		data(){
			return claimData;
		},
		created() {
			this.home.lat = parseFloat(this.claim.claim_data.client.addresses[1].latitude);
			this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
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
	     //    this.autocomplete = new google.maps.places.Autocomplete(
	     //         /* @type {!HTMLInputElement} */
	     //        (document.getElementById('claim-location')),
	     //        {types: ['geocode']}
	     //    );
	     //    // When the user selects an address from the dropdown, populate the address
	     //    // fields in the form.
	    	// this.autocomplete.addListener('place_changed', () => { this.setHome() });
		}
	}
</script>