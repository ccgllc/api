import Vue from 'vue';
import UserService from './structur/src/services/Resource.js';
import userData from './data/userData.js';
import states from './data/states.js';
// import search from './components/Search.vue';

Vue.component('search', search);

let app = new Vue({
	name: 'User Administration',
	el: '#user',
	data: {
		userData,
		states,
		certifications: [
			// { name: 'none', label: 'None' },
			{ name: 'AIC', label: 'AIC' },
			{ name: 'CPCU', label: 'CPCU' },
			{ name: 'TWIA', label: 'TWIA / TFPA' },
			{ name: 'NFIP', label: 'NFIP' },
			{ name: 'HAAG', label: 'HAAG' },
			{ name: 'IIRC', label: 'IIRC' },
			{ name: 'rope', label: 'Rope & Harness' },
			{ name: 'Earthquake', label: 'Earthquake' },
			{ name: 'Umpire', label: 'Umpire' },
			{ name: 'Appraiser', label: 'Appraiser' },
		],
		selected: [],
		allSelected: false,
		userService: new UserService({
			uri: {
				prefix: 'api',
				resource: 'users',
			},
			current_page: 0,
		}),
		autocomplete: {},
		bounds: {},
		map: {},
		marker: {},
		home: {lat: 30.2702208, lng:  -97.7453625},
		filename: 'FilteredUsers.csv'
	},
	computed: {
		resetUsers() {
			return this.userData.users.length == 0 
				? this.userData.users = window.users.data
				: 'Users in list'
		}
	},
	mounted() {
		// const _home = this.home;
		// console.log(this.home);
		this.bounds = new google.maps.LatLngBounds();
		this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: this.home,
        });
        this.marker = new google.maps.Marker({
          position: this.home,
          map: this.map
        });
        this.autocomplete = new google.maps.places.Autocomplete(
             /* @type {!HTMLInputElement} */
            (document.getElementById('claim-location')),
            {types: ['geocode']}
        );

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
    	this.autocomplete.addListener('place_changed', () => { this.setHome() });

        this.current_page = window.users.current_page;
        return window.users.data 
        	? this.userData.users = window.users.data 
        	: this.userData.users = window.users;
	},
	methods: {
		geolocate() {
			console.log('geolocating');
		},
		setHome(){
			let place = this.autocomplete.getPlace();
			this.home = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
			console.log(this.home);
			this.marker.setPosition(this.home);
			// this.map.fitBounds(this.bounds.extend(this.home));
			this.map.setCenter(this.home);
			this.map.setZoom(12);
		},
		toggleMenu(id) {
			let menu = document.getElementById(id);
			menu.style.display == 'none' 
				? menu.style.display = 'block' 
				: menu.style.display = 'none';
		},
		getUsers(){
			this.userService.get('all').then(response => { 
				this.userData.users = response
			}).catch(error => {
				console.log(error)
			});
		},
		select(user) {
			console.log(user.name);
		},
		selectAll(evt) {
			let checkboxes = document.getElementsByClassName('has-user');
			if (this.allSelected) {
				for (let checkbox in checkboxes) {
					if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
						checkboxes[checkbox].checked = true;
						// console.log(checkboxes[checkbox].value);
						this.selected.push(checkboxes[checkbox].value);
					}
				}
			} else {
				for (let checkbox in checkboxes) {
					if (typeof(checkboxes[checkbox]) !== 'function' && typeof(checkboxes[checkbox]) !== 'number') {
						checkboxes[checkbox].checked = false;
						this.selected = [];
					}
				}
			}
		},
		deleteUser(user) {
			window.axios.delete('/api/users/' + user.id).then(response => {
				let idx = this.userData.users.indexOf(user);
				return this.userData.users.splice(idx, 1);
			}).catch(error => {
				console.error(error);
			})
		},
		deleteSelected(){
			window.axios.post('/api/users/', {users: this.selected}).then(response => {
				for (let idx in this.selected) {
					let userIdx = this.userData.users.indexOf(this.findUser(idx));
					this.userData.users.splice(userIdx, 1);
				}
			})
		},
		findUser(idx) {
			return this.userData.users.find(user => user.id == this.selected[idx])
		},
		exportToCsv: function(filename, rows) {

       		var processRow = function (row) {
       			// console.log(row);
       			var finalVal = '';
       			Object.keys(row).forEach(function(key){
       				if (rows.indexOf(row) == 0) {
       					// console.log(key);
       				 	key === 'distance' 
       				 		? finalVal += '"' + key + '"' + '\n' 
       				 		: finalVal += '"' + key + '"' + ',';
       				}
       			});
       			Object.keys(row).forEach(function(key){
       				var innerValue = row[key] === null ? 'n/a' : row[key].toString();
   	 				var result = innerValue.replace(/"/g, '""');
                    // result = '"' + result + '"';
                    key == 'id' ? finalVal : finalVal += ','; 
                	finalVal += result;
       			});
				// console.log(finalVal);
            	return finalVal + '\n';
    		};

        	var csvFile = '';
        	for (var i = 0; i < rows.length; i++) {
            	csvFile += processRow(rows[i]);
       		}

        	var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    		if (navigator.msSaveBlob) { // IE 10+
          	  navigator.msSaveBlob(blob, filename);
        	} else {
            	var link = document.createElement("a");
	            if (link.download !== undefined) { // feature detection
	                // Browsers that support HTML5 download attribute
	                var url = URL.createObjectURL(blob);
	                link.setAttribute("href", url);
	                link.setAttribute("download", filename);
	                link.style.visibility = 'hidden';
	                document.body.appendChild(link);
	                link.click();
	                document.body.removeChild(link);
	            }
        	}
    	}
	}
});