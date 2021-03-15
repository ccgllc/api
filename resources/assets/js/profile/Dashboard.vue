<template>
	<div>
	<div class="columns">
		<div class="column"><h1 class="title">Dashboard</h1></div>
	</div>
	<div class="columns">
		<div class="column">
			<table v-if="user.claims && user.claims.length > 0" class="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>Carrier</th>
						<th>Claim #</th>
						<th>Insured</th>
						<th>Date of Loss</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="claim in user.claims">
						<td>{{ claim.carrier.name }}</td>
						<td><a :href="'/claims/' + claim.id + '/#/'">{{ claim.claim_number }}</a></td>
						<td>{{ claim.insured }}</td>
						<td>{{ claim.date_of_loss }}</td>
					</tr>
				</tbody>
			</table>
			<p v-else>You do not have any claims assigned to you at this time. </p>
		</div>
	</div>
	</div>
</template>

<script>
	import appData from '../data/appData.js';
	export default {
		name: 'Dashboard',
		props: ['user'],
		data () {
			return {
				appData,
				// hasXactimate: false,
				// currentYear: '',
				// btnState: false,
				// geocoder: {},
				// autocomplete: {},
				// componentForm: {
			 //        street_number: 'short_name',
			 //        route: 'long_name',
			 //        locality: 'long_name',
			 //        administrative_area_level_1: 'short_name',
			 //        country: 'long_name',
			 //        postal_code: 'short_name'
		  //     	}
			}
		},
		mounted() {
			this.setupView();
		},
		computed: {
			requiredFieldsBlank() {
				if (this.appData.personalInfo.city  == ''|| this.appData.personalInfo.state  == ''|| this.appData.personalInfo.zip  == ''|| this.appData.personalInfo.street == '')
				{
					return true;
				}
				return false;
			},
		},
		methods: {
			submit () {
				if (!this.requiredFieldsBlank) {
					this.appData.personalInfo.post('/api/user/personal-information', false)
						.then(response => {
							this.$router.push({ path: '/work-history' })
						}).catch(error => {
							this.btnState = false;
							return window.axios.post('/api/admin/client-error', error);
						});
				}
			},
			setupView() {
				this.appData.text.title = "Personal Information";
				this.appData.text.subtitle = "Step One - Tell Us About Yourself";
				this.appData.progress = 1;
				let today = new Date;
				this.currentYear = today.getFullYear();
				this.geocoder = new google.maps.Geocoder();
				this.autocomplete = new google.maps.places.Autocomplete(
		            (document.getElementById('location')),
		            	{types: ['geocode']}
		        );
		        // When the user selects an address from the dropdown, populate the address
		        // fields in the form.
		        // function 
		    	this.autocomplete.addListener('place_changed', this.setAddressFields);
			},
			setAddressFields() {
				let place = this.autocomplete.getPlace();
				console.log(place);
				for (let i = 0; i < place.address_components.length; i++) {
		          let addressType = place.address_components[i].types[0];

		          if (this.componentForm[addressType]) {
		          	switch (addressType){
		          		case 'street_number' : 
		          			this.appData.personalInfo.street = place.address_components[i][this.componentForm[addressType]];
		          			break;
	          			case 'route' : 
	          				this.appData.personalInfo.street += ' ' + place.address_components[i][this.componentForm[addressType]];
	          				break;
          				case 'locality' :
          					this.appData.personalInfo.city = place.address_components[i][this.componentForm[addressType]];
          					break;
      					case 'administrative_area_level_1' :
      						this.appData.personalInfo.state = place.address_components[i][this.componentForm[addressType]];
      						break;
  						case 'postal_code' :
  							this.appData.personalInfo.zip = place.address_components[i][this.componentForm[addressType]];
		          	}
		          }
		        }
		        // console.log(place.geometry.location.lat());
		        // console.log(place.geometry.location.lng());
		        this.appData.personalInfo.lat = place.geometry.location.lat();
		        this.appData.personalInfo.lng = place.geometry.location.lng();
		        this.appData.personalInfo.formatted_address = place.formatted_address;
		        this.appData.personalInfo.place_id = place.place_id;
			}
		}
	}
</script>