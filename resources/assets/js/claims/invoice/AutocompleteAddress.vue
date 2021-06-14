<template>
<div class="control has-icons-left has-icons-right tooltip" :data-tooltip="tooltip ? tooltip : placeholder">
  <input 
  	class="input"
  	:class="[color]"
  	type="input"
  	:placeholder="placeholder"
  	@input="getAddress()" 
  	@keyup.down="selectedAutocompleteResult < 4 ? selectedAutocompleteResult ++ : selectedAutocompleteResult = 0"  
  	@keyup.up="selectedAutocompleteResult > 0 ? selectedAutocompleteResult -- : selectedAutocompleteResult = 0" 
  	@keyup.enter="selectAddress()"
  	@keyup.tab="selectAddress()"
  	@keyup.esc="autocompleteResults = []"
  	v-model="search" 
	>
  <span class="icon is-small is-right has-text-bold" style="">
   <i class="fa" :class="[leftIcon]" :style="{color: iconColor}"></i>
  </span>
	<span class="icon is-left is-small has-text-bold tooltip is-tooltip-left"
		:data-tooltip="placeholder == 'Loss Address' ? 'Add location after loss' : 'Add location before loss'"
		@click="deleteable !== undefined ? deleteItem() : addLocation()"
		style="cursor: pointer;"
	>
	  	<i class="fa" :class="[rightIcon]" style="font-size: 16px; color: #343b4c;"></i>
  </span>
  <aside class="menu" style="font-size: .75em"  v-if="autocompleteResults.length">
  	<ul class="menu-list" style="margin: 0">
  		<li v-for="(result, idx) in autocompleteResults" style="list-style: none;">
  			<a 
  				:class="{'is-active': idx == selectedAutocompleteResult}" 
  				v-text="result.description"
  				@click="setSelectedAutocompleteResult(idx)"
				></a>
  		</li>
  	</ul>
  </aside>
</div>
</template>

<script>
export default {
	name: 'AddressAutocomplete',
	props: ['text', 'placeholder', 'color', 'leftIcon', 'rightIcon', 'iconToolTip', 'iconColor', 'tooltip', 'deleteable', 'idx'],
	data(){
		return {
			search: '',
			autocomplete: {},
			autocompleteResults: [],
			selectedAutocompleteResult: 0,
		}
	},
	mounted() {
		// if (this.lineItem.locations) {
		if (this.text) this.search = this.text;

		this.autocomplete = new google.maps.places.AutocompleteService();
			
			// this.addresses 
			// 	?  this.lineItem.locations.loss = this.getLossCoords()
			// 	: this.lineItem.locations.loss = '';

			
			// this.directions = new google.maps.DirectionsService();
			
		// }
	},
	methods: {
		addLocation(type) {
			return this.$emit('new-destination', type);
		},
		deleteItem() {
			let type;
			this.placeholder == 'Destination before loss address'
				? type = 'start' : type = 'loss';
			return this.$emit('delete-item', {idx: this.idx, type: type});
		},
		getAddress() {
			const self = this;

			if (this.search == '') this.autocompleteResults = [];

			const displaySuggestions = function (predictions, status) {
   			if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
      		alert(status);
      		return;
    		}
	    	self.autocompleteResults = predictions;
			};

			this.autocomplete.getQueryPredictions({ input: this.search }, displaySuggestions);
		},
		setSelectedAutocompleteResult(index) {
			this.selectedAutocompleteResult = index;
			return this.selectAddress();
		},
		selectAddress(){
			if (this.autocompleteResults.length){
				this.search = this.autocompleteResults[this.selectedAutocompleteResult].description;

				this.selectedAutocompleteResult = 0;
				this.autocompleteResults = [];
			}

				if (this.idx != undefined) {
					let updatedAddress = {
						address: this.search, 
						idx: this.idx
				};

					return this.$emit('address-selected', updatedAddress);
				}

				return this.$emit('address-selected', this.search);
		},
		}
	}

</script>

<style>
	.icon small {
		font-size: .75em;
	}
</style>