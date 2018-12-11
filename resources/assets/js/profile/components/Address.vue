<template>
	<div class="columns" style="margin-top: 1rem;">
		<div class="column is-2">
			<p><strong>Address</strong>:</p>
		</div>

		<div class="column is-10">
			<form @submit.prevent="submit" @keydown="location.errors.clear($event.target.name)">
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left">
							<i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
						</span>
						<input 
							type="text" 
							class="input" 
							 id="location"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							@keyup.enter="toggleEditing"
							autocomplete="off" 
						>
					</div>
				</div>
				<!-- <div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="sreet-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.street" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('street')" v-text="address.errors.get('street')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.city" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('city')" v-text="address.errors.get('city')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.state" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('state')" v-text="address.errors.get('state')"></span>
				</div>
				<div class="field" v-show="editing" style="margin-top: -5px;">
					<div class="control has-icons-left">
						<span class="icon is-small is-left" >
					      <i @click="close" class="fa fa-times" style="cursor:pointer;"></i>
					    </span>
						<input 
							id="city-input"
							type="text"
							class="input"
							style="border: none; border-bottom: 1px solid #ccc; background: transparent; box-shadow: none;" 
							v-model="address.zip" 
							@keyup.enter="toggleEditing"
						>
					</div>
					<span class="help is-danger" v-if="address.errors.has('zip')" v-text="address.errors.get('zip')"></span>
				</div> -->
			</form>
			<span v-if="!editing" @dblclick.prevent="toggleEditing" @mouseover="showEdit = true" @mouseleave="showEdit = false; copyText='copy'" style="cursor:pointer">
				{{ location.street }} <br>
				{{ location.city }} {{ location.state }}, {{ location.zip }}
				&nbsp;
				<span v-show="showEdit">
				<a 
					@click.prevent="copyToClipboard"
					v-if="!editing"
					v-text="copyText"
				>
				</a>
				&nbsp;|&nbsp; 
				<a 
					@click.prevent="toggleEditing"
					v-if="!editing"
				>
					edit
				</a>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
	import Form from "../../structur/src/form/Form.js";	
	export default {
		name: 'Address',
		mounted() {
			// this.input = document.getElementById('street-input');
			this.location.street = window.userData.profile.street;
			this.location.city = window.userData.profile.city;
			this.location.state = window.userData.profile.state;
			this.location.zip = window.userData.profile.zip;
			// this.location.api_token = window.userData.api_token;
			this.userId = window.userData.id;
			this.location.place_id = window.userData.place_id;
			this.location.lat = window.userData.lat;
			this.location.lng = window.userData.lng;
			this.location.formatted_address = window.userData.formatted_address;
			// console.log(window.google);
			this.geocoder = new window.google.maps.Geocoder();
			this.autocomplete = new window.google.maps.places.Autocomplete(
	            (document.getElementById('location')),
	            	{types: ['geocode']}
	        );
	        this.autocomplete.addListener('place_changed', this.setAddressFields);
		},
		data() {
			return {
				editing: false,
				showEdit: false,
				copyText: 'copy',
				geocoder: {},
				input: {},
				currentValue: '',
				userId: '',
				location: new Form({
					street: '',
					city: '',
					state: '',
					zip: '',
					place_id: '',
					lat: '',
					lng: '',
					formatted_address: ''
				}),
				autocomplete: {},
				componentForm: {
			        street_number: 'short_name',
			        route: 'long_name',
			        locality: 'long_name',
			        administrative_area_level_1: 'short_name',
			        country: 'long_name',
			        postal_code: 'short_name'
		      	}
			}
		},
		computed: {
			submitable() {
				return this.location.street === "" ||
					this.location.city === '' ||
					this.location.state === '' ||
					this.location.zip === ''
					? false 
					: true;
			}
		},
		methods: {
			// submit newly edited 
			submit() {
				if (this.submitable) {
					this.location.put('/api/user/' + this.userId + '/address', false)
						.then(response => {
							console.log(response);
							this.location.street = response['street'];
							this.location.city = response['city'];
							this.location.state = response['state'];
							this.location.zip = response['zip'];
							this.location.place_id = response['place_id'];
							this.location.lat = response['lat'];
							this.location.lng = response['lng'];
							this.location.formatted_address = response['formatted_address'];
							// this.location.api_token = window.userData.api_token;
						}).catch(error => {
							console.log(error)
						});
				}else{
					this.edit = false;
					this.location.street = window.userData.profile.street;
					this.location.city = window.userData.profile.city;
					this.location.state = window.userData.profile.state;
					this.location.zip = window.userData.profile.zip;
				}
			},
			close() {
				console.log('close');
			},
			toggleEditing() {
				this.editing = !this.editing;
				return this.editing === false ? this.submit() : null;
				// this.input.focus();
			},
			setAddressFields() {
				let place = this.autocomplete.getPlace();
				console.log(place);
				for (let i = 0; i < place.address_components.length; i++) {
		          let addressType = place.address_components[i].types[0];

		          if (this.componentForm[addressType]) {
		          	switch (addressType){
		          		case 'street_number' : 
		          			this.location.street = place.address_components[i][this.componentForm[addressType]];
		          			break;
	          			case 'route' : 
	          				this.location.street += ' ' + place.address_components[i][this.componentForm[addressType]];
	          				break;
          				case 'locality' :
          					this.location.city = place.address_components[i][this.componentForm[addressType]];
          					break;
      					case 'administrative_area_level_1' :
      						this.location.state = place.address_components[i][this.componentForm[addressType]];
      						break;
  						case 'postal_code' :
  							this.location.zip = place.address_components[i][this.componentForm[addressType]];
		          	}
		          }
		        }
		        this.location.lat = place.geometry.location.lat();
		        this.location.lng = place.geometry.location.lng();
		        this.location.formatted_address = place.formatted_address;
		        this.location.place_id = place.place_id;
		        this.submit();
		        // this.toggleEditing();
			},
			copyToClipboard() {
				this.createEmptyTextArea();
				let successful = document.execCommand('copy');
				return successful ? this.copyText = 'copied!' : this.copyText = 'oops not copied :(';
			},
			createEmptyTextArea() {
				let textArea = document.createElement("textarea");
			 	textArea.style.position = 'fixed';
			  	textArea.style.top = -1000;
			  	textArea.style.left = -1000;
			  	textArea.style.width = '2em';
			  	textArea.style.height = '2em';
			  	textArea.style.padding = 0;
			  	textArea.style.border = 'none';
			  	textArea.style.outline = 'none';
			  	textArea.style.boxShadow = 'none';
			  	textArea.style.background = 'transparent';
			  	textArea.value = this.location.street + " " + this.location.city + " " + this.location.state + ", " + this.location.zip;
			  	document.body.appendChild(textArea);
			  	textArea.select();
			}
		},
	}
</script>