<template>
	<page title="Dispatch Dashboard" description="Filter and assign claims and adjusters">
		<div id="map" style="width: 100%; height: 600px; position: fixed;"></div>
		<div class="columns section is-main">
			<div class="column is-2">
				<h1 class="title" style="font-weight: 700;">Options</h1>
				<div class="columns">
					<div class="column">
						<div class="field">
							<input id="hide" type="checkbox" name="hide" class="switch is-rounded is-small">
							<label for="hide">Hide</label>
						</div>
					</div>
				</div>
				<hr style="background: #ccc;">
				<nav class="panel">
				  <div class="panel-block">
				    <p class="control has-icons-left">
				      <input v-model="search" class="input" type="text" placeholder="search">
				     <!--  <span class="tags is-input"><span class="tag">Daily</span></span> -->
				    </p>
				  </div>
				  	<a @click="clearAllMarkers" class="panel-block">Clear All Markers</a>
					<a @click="addAdjusters" class="panel-block">Add Adjusters to Map</a>
					<a @click="addClaims" class="panel-block">Add Claims to Map</a>
				  <label class="panel-block">
				    <input type="checkbox">
				    Toggle
				  </label>
				  <div class="panel-block">
				    <button class="button is-link is-outlined is-fullwidth">
				      reset all filters
				    </button>
				  </div>
				</nav>
			</div>
			<div class="column">
				<h1 class="title" style="font-weight: 700;">Assign Queue</h1>
				<div class="columns">
					<div class="column">
						<div class="field">
							<input id="hideUnselectedClaim" type="checkbox" name="hideUnselectedClaim" class="switch is-rounded is-small" v-model="hideUnselectedClaims">
							<label for="hideUnselectedClaim">Hide Unselected</label>
						</div>
					</div>
				</div>
				<hr style="background: #ccc;">
				<claim-list-item 
					v-for="claim in claims" 
					:key="claim.id" 
					:claim="claim"
					:selected-claims="selectedClaims"
					@claim-selected="selectClaimToggle" 
					@claim-removed="selectClaimToggle"
				>
				</claim-list-item>
				<nav class="pagination" role="navigation" aria-label="pagination">
					<a class="pagination-previous">Previous</a>
				  	<a class="pagination-next">Next page</a>
				  </nav>
			</div>

			<div class="column is-one-third" v-if="selectedClaims.length">
				<h1 class="title" style="font-weight: 700;">Adjusters</h1>
				<div class="columns">
					<div class="column">
						<div class="field">
						  <input id="addFilteredAdjusters" @change="toggleFilteredAdjusters" type="checkbox" name="addFilteredAdjusters" class="switch is-rounded is-small" v-model="addFilteredAdjustersToMap">
						  <label for="addFilteredAdjusters">Add All</label>
						</div>
					</div>
					<div class="column">
						<div class="field">
						  <input id="getDistanceFromClaim" @change="getDistances()" type="checkbox" name="getDistanceFromClaim" class="switch is-rounded is-small">
						  <label for="getDistanceFromClaim">Get Distance</label>
						</div>
					</div>
				</div>
				
				
			<hr style="background: #ccc;">
			<adjuster-list-item 
				v-for="adjuster in orderedAdjusters" 
				:key="adjuster.id" 
				:adjuster="adjuster" 
				@adjuster-selected="selectAdjusterToggle"
				@adjuster-removed="selectAdjusterToggle"
			>
			</adjuster-list-item>
			</div>
			<div class="column is-2" v-if="actionable">
				<h1 class="title" style="font-weight: 700;">Info</h1>
				<div class="columns">
					<div class="column">
						<div class="field">
							<input id="hideHistory" type="checkbox" name="hideHistory" class="switch is-rounded is-small">
							<label for="hideHistory">Hide HIsstory</label>
						</div>
					</div>
				</div>
				<hr style="background: #ccc;">
				<h3 class="title">Work History</h3>
					<p>{{ workHistory }}</p>
				<div class="card is-dispatch-action">
					<div class="card-content">
						<div class="columns">
							<div class="column is-2 is-icon">
								<span class="icon is-large" style="padding-right: 1em;"><i class="fa fa-paper-plane-o fa-lg has-text-dark"></i></span>
							</div>
							<div class="column">
								<h3 class="title">Send Work Assignment</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</page>
</template>

<script>
	import claimListItem from './DispatchClaimListItem.vue';
	import adjusterListItem from './DispatchAdjusterListItem.vue';
	import page from '../components/Page.vue'
	export default {
		name: 'DispatchDashboard',
		components: {
			claimListItem, adjusterListItem, page
		},
		created() {
			// parse claim_data json column for each claim.
			return this.claims.forEach(claim => {
				claim.claim_data = JSON.parse(claim.claim_data);
			});
		},
		mounted() {
			this.bounds = new google.maps.LatLngBounds();
			this.map = new google.maps.Map(document.getElementById('map'), {
	          	zoom: 7,
	          	center: this.home,
        	});

        	// this.turnOffAxiosHeaders()
        	// this.addMarker('claim', this.claims[0])
        	// this.selectedClaims.push(this.claims[0]);
			// for (let claim of this.claims) {
			// 	this.addMarker('claim', claim);
			// }

			// for (let adjuster of this.adjusters) {
			// 	 this.number = adjuster.profile.street.match(/([\d])\w+/g);
			// 	 this.street = adjuster.profile.street.match(/([\D])/g);
			// 	 this.street = this.street.join('').trim();
			// 	 this.street = this.street.replace(/[\s]/g, '+');
			// 	 this.city = adjuster.profile.city;
			// 	 this.state = adjuster.profile.state;
				 
			// 	window.axios.get(this.address)
			// 				.then(response => {
			// 					adjuster.profile.lat = response.data.results[0].geometry.location.lat;
			// 					adjuster.profile.lng = response.data.results[0].geometry.location.lng;
			// 					adjuster.profile.place_id = response.data.results[0].place_id;
			// 					adjuster.profile.formatted_address = response.data.results[0].formatted_address;
			// 				})
			// 				.catch(error => error);
			// }
		},
		data(){
			return {
				distances : [],
				destinationUri: 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=',
				hideUnselectedClaims: false,
				addFilteredAdjustersToMap: false,
				search: '',
				allSelected: false,
				selectedClaims: [],
				selectedAdjusters: [],
				claims: dispatch.claims,
				adjusters: dispatch.adjusters,
				autocomplete: {},
				bounds: {},
				map: {},
				claimMarkers: [],
				adjusterMarkers: [],
				home: {lat: 30.2702208, lng:  -97.7453625},
				city: '',
				state: '',
				street: '',
				number: 0,
			}
		},
		computed: {
			origin() {
				if(this.selectedClaims.length) {
					let loc = this.selectedClaims[0].claim_data.client.addresses[1];
					return new google.maps.LatLng(loc.latitude, loc.longitude);
				} else {	
					return 'No Origin';
				}
			},
			destinations() {
				let destinations = [];
					for (let adjuster of this.filteredAdjusters) 
					{
						if (typeof(adjuster.profile.lat) == 'number' && typeof(adjuster.profile.lng) == 'number') {
							let dest = new google.maps.LatLng(adjuster.profile.lat, adjuster.profile.lng);
							destinations.push(dest)
						}
					}
				return destinations;
			},
			workHistory() {
				let str = "";
				if(this.selectedAdjusters.length) {
					let history = this.selectedAdjusters[0].work_history;
					console.log(history)
					for (let field in history) {
						// console.log(field);
						if (typeof(history[field]) == 'number' &&  history[field] && field != "id" && field != "user_id") {
							str += `${field}: ${history[field]}, `;
						}
					}
				}
				return str;
			},
			orderedAdjusters: function () {
		   		return window._.orderBy(this.filteredAdjusters, ['distance.value','xp'], ['asc', 'desc']);
		    },
			filteredAdjusters: function () {
				let self = this
				let results = [];
		    	self.adjusters.filter(adjuster => {
		    		if (results.length <= 24) {
						for (let license of adjuster.adjuster_licenses) {
							if (license.license_state === self.selectedClaims[0].claim_data.client.addresses[1].state){
								results.push(adjuster)
							}
						}
					}
		    	});
		    	return results;	
	    	},
		  	actionable() {
		  		return this.selectedClaims.length && this.selectedAdjusters.length
		  			? true
		  			: false
		  }
		},
		methods: {
			saveLocations() {
				window.axios.post(`/api/users/locations`, {adjusters: this.adjusters})
							.then(response => console.log(response))
							.catch(error => error);
			},
			getDistances() {
				let self = this
				let service = new google.maps.DistanceMatrixService()
				return service.getDistanceMatrix({
				    origins: [self.origin],
				    destinations: self.destinations,
				    travelMode: 'DRIVING',
				    unitSystem: google.maps.UnitSystem.IMPERIAL,
				  }, self.filterDistances);				
			},
			filterDistances(response, status) {
				let self = this
				console.log(status);
				return self.filteredAdjusters.forEach(adjuster => {
					let idx = self.filteredAdjusters.indexOf(adjuster);
					console.log(response);
					if(response.rows[0].elements[idx]) {
						adjuster.distance = {text: '', value: 0};
						adjuster.distance.text = response.rows[0].elements[idx].distance.text;///string eg.12.3 mi
						adjuster.distance.value = response.rows[0].elements[idx].distance.value; ///string eg.12.3 mi
					}
				})
			},
			addAdjusters() {
				//if (this.markers.length == 0) {
					for (let a of this.adjusters) {
						this.addMarker('adjuster', a);
					}
				//}
			},
			toggleFilteredAdjusters() {
				if (this.addFilteredAdjustersToMap) {
					for (let a of this.filteredAdjusters) {
						this.addMarker('adjuster', a);
					}
				}
				else {
					this.adjusterMarkers = [];
				}
			},
			addClaims() {
				for (let c of this.claims) {
					this.addMarker('claim', c);
				}
			},
			addMarker(type, data) {
				if (type == 'claim') {
					let position = {
					 	lat: (+data.claim_data.client.addresses[1].latitude),
					 	lng: (+data.claim_data.client.addresses[1].longitude)
					}

					let marker = new google.maps.Marker({
			          position,
			          map: this.map
			        });

			        let infowindow = new google.maps.InfoWindow({
			          content: `
			          	<h1>${data.claim_number}</h1>
			          	<h3>${data.insured} &nbsp;|&nbsp; ${data.type_of_loss} &nbsp;|&nbsp; ${data.date_received}</h3>
						<p>${data.description}</p>
			          `
			        });

			        marker.addListener('click', function() {
			          infowindow.open(map, marker);
			        });

					this.claimMarkers.push(marker);
					this.map.panTo(marker.position);

					// this.adjusters = this.adjusters.filter(adjuster => {
					// 	adjuster.adjuster_licenses.filter(license => license.license_state == data.claim_data.client.addresses[1].state)
					// });
				}
				if (type == 'adjuster') {
					let marker = new google.maps.Marker({
			            position: {
				          	lat: +data.profile.lat, 
				          	lng: +data.profile.lng	
			         	 },
			         	 icon: data.adjuster_licenses.length > 0 ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
			         	 title: data.name,
			          	// icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
			          	 map: this.map
			        });

			        let infowindow = new google.maps.InfoWindow({
			          content: `
			          	<a style="position:relative; top:-1rem; margin-left:.5rem;" href="/users/${data.id}" target="_blank"><h1>${data.name}</h1></a>
			          `
			        });

			        marker.addListener('click', function() {
			          infowindow.open(map, marker);
			        });

			        this.adjusterMarkers.push(marker);
			        this.map.panTo(marker.position);
				}
			},
			clearAdjusterMarker(marker) {
				// console.log(marker);
				marker.setMap(null);
				return this.adjusterMarkers.splice(this.adjusterMarkers.indexOf(marker), 1);
			},
			clearClaimMarker(marker) {
				// console.log(marker);
				marker.setMap(null);
				return this.claimMarkers.splice(this.claimMarkers.indexOf(marker), 1);
			},
			clearAllMarkers() {
				for (let marker of this.claimMarkers) {
					marker.setMap(null);
				}
				for (let marker of this.adjusterMarkers) {
					marker.setMap(null);
				}
				this.claimMarkers, this.adjusterMarkers = [];
			},
			selectClaimToggle(claim) {
				let idx = this.selectedClaims.indexOf(claim)
				// console.log(idx);
				if (idx < 0) {
					claim.isSelected = true;
					this.selectedClaims.push(claim); 
				    this.addMarker('claim', claim); 
				} 
			 	else {
			 		claim.isSelected = false;
			 		this.clearClaimMarker(this.claimMarkers[idx]);
					return this.selectedClaims.splice(idx, 1);
				}
				
			},
			selectAdjusterToggle(adjuster) {
				let idx = this.selectedAdjusters.indexOf(adjuster)
				// console.log(idx);
				if (idx < 0) {
					adjuster.isSelected = true;
					this.selectedAdjusters.push(adjuster); 
				    this.addMarker('adjuster', adjuster); 
				} 
			 	else {
			 		adjuster.isSelected = false;
			 		this.clearAdjusterMarker(this.adjusterMarkers[idx]);
					return this.selectedAdjusters.splice(idx, 1);
				}
				
			},
			setHome(){
				let place = this.autocomplete.getPlace();
				this.home = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
				// console.log(this.home);
				this.marker.setPosition(this.home);
				this.map.fitBounds(this.bounds.extend(this.home));
				this.map.setCenter(this.home);
				this.map.setZoom(12);
			},
			turnOffAxiosHeaders() {
				delete window.axios.defaults.headers.common['X-Requested-With'];
				delete window.axios.defaults.headers.common['Authorization'];
				delete  window.axios.defaults.headers.common['X-CSRF-TOKEN'];
			},
			// selectAll(evt) {
			// 	let checkboxes = document.getElementsByClassName('selectable-claim');
			// 	if (this.allSelected) {
			// 		for (let checkbox in checkboxes) {
			// 			if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
			// 				checkboxes[checkbox].checked = true;
			// 				this.selected.push(checkboxes[checkbox].value);
			// 			}
			// 		}
			// 	} else {
			// 		for (let checkbox in checkboxes) {
			// 			if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
			// 				checkboxes[checkbox].checked = false;
			// 				this.selected = [];
			// 			}
			// 		}
			// 	}
			// },
		}
	}
</script>