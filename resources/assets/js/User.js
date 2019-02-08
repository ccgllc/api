import Vue from 'vue';
import UserService from './structur/src/services/Resource.js';
import userData from './data/userData.js';
import states from './data/states.js';
import certifications from './data/certifications.js';
import software from './data/software.js';

Vue.component('search', search);

let app = new Vue({
	name: 'User Administration',
	el: '#user',
	data: {
		userData,
		states,
		certifications,
		software,
		showColumns: false,
		filteredStates: states,
		selectedState: 0,
		showFilters: true,
		selected: [],
		allSelected: false,
		filters: {
			certification: 0,
			state: 0,
			license: 0,
			software: 0,
		},
		selectedColumn: 0,
		availableColumns: [
			{ label: 'Relative Date', property: 'created_at', model: 'user',  removable: true },
			{ label: 'Email', property: 'email', model: 'user', removable: true},
			{ label: 'Xactnet Address', property: 'xactnet_address', model: 'profile', removable: true},
			{ label: 'Address', property: 'formatted_address', model: 'profile', removable: true},
			{ label: 'Street', property: 'street', model: 'profile', removable: true},
			{ label: 'City', property: 'city', model: 'profile', removable: true},
			{ label: 'State', property: 'state', model: 'profile', removable: true},
			{ label: 'zip', property: 'zip', model: 'profile', removable: true},
			{ label: 'Phone', property: 'phone', model: 'profile', removable: true},
			{ label: 'Software', property:'type', model:'software_experiences', removable: true },
			{ label: 'Res. Exp (mo)', property: 'residential_experience', model: 'work_history',  removable: true},
			{ label: 'Res. Claims', property: 'residential_claims', model: 'work_history',  removable: true},
			{ label: 'Com. Exp (mo)', property: 'commercial_experience', model: 'work_history',  removable: true},
			{ label: 'Com. Claims', property: 'commercial_claims', model: 'work_history',  removable: true},
			{ label: 'Auto Exp (mo)', property: 'auto_experience', model: 'work_history',  removable: true},
			{ label: 'Auto Claims', property: 'auto_claims', model: 'work_history',  removable: true},
			{ label: 'Inland Marine Exp', property: 'inland_marine_experience', model: 'work_history',  removable: true},
			{ label: 'Inland Marine Claims', property: 'inland_marine_claims', model: 'work_history',  removable: true},
			{ label: 'Casulty Exp', property: 'casualty_experience', model: 'work_history',  removable: true},
			{ label: 'Casulty Claims', property: 'casualty_claims', model: 'work_history',  removable: true},
			{ label: 'Large Loss Exp', property: 'large_loss_experience', model: 'work_history',  removable: true},
			{ label: 'Large Loss Claims', property: 'large_loss_claims', model: 'work_history',  removable: true},
			{ label: 'Environmental Exp', property: 'environmental_experience', model: 'work_history',  removable: true},
			{ label: 'Environmental Claims', property: 'environmental_claims', model: 'work_history',  removable: true},
			{ label: 'Flood Exp', property: 'flood_experience', model: 'work_history',  removable: true},
			{ label: 'Flood Claims', property: 'flood_claims', model: 'work_history',  removable: true},	
			{ label: 'Earthquake Exp', property: 'earthquake_experience', model: 'work_history',  removable: true},
			{ label: 'Earthquake Claims', property: 'earthquake_claims', model: 'work_history',  removable: true},
		],
		activeColumns: [
			{ label: 'Name', property: 'name', model: 'user', removable: false },
			{ label: 'Licenses', property: 'license_state', model: 'adjuster_licenses', removable: true },
			{ label: 'Certifications', property: 'type', model: 'certifications',  removable: true },
			{ label: 'Sign Up Date', property: 'date_string', model: 'user', removable: true},
			// { label: 'Actions', property: '', model: '',  removable: false },
		],
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
		},
	},
	mounted() {
		// const _home = this.home;
		// console.log(this.home);
		// this.bounds = new google.maps.LatLngBounds();
		// this.map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 12,
  //         center: this.home,
  //       });
  //       this.marker = new google.maps.Marker({
  //         position: this.home,
  //         map: this.map
  //       });
  //       this.autocomplete = new google.maps.places.Autocomplete(
  //            /* @type {!HTMLInputElement} */
  //           (document.getElementById('claim-location')),
  //           {types: ['geocode']}
  //       );

  //       // When the user selects an address from the dropdown, populate the address
  //       // fields in the form.
  //   	this.autocomplete.addListener('place_changed', () => { this.setHome() });

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
		getXp(history) {
			// console.log(history);
			let xp = 0;
			if (typeof history == 'object') {
				for (let h in history) {
					if (h !== 'user_id' && h!=='id' && h!== 'created_at' && h!== 'updated_at') {
						xp += history[h];
					}
				}
			}
			return xp;
		},
		parseColumnData(user, column) {
			if ( column.model == '' ) return;
 			if (column.model == 'user') {
				return user[column.property];
			}
			if (column.model == "profile" && user[column.model] !== null) {
				return user[column.model][column.property];
			}
			if(column.model == 'work_history' && user[column.model] !== null) {
				return user[column.model][column.property];
			}
			let str = '';
			for (let property in user[column.model]) {
				str+= user[column.model][property][column.property] + ', ';
			}
			return str;
		},
		removeColumn(column) {
			let idx = this.activeColumns.indexOf(column);
			this.availableColumns.push(column);
			return this.activeColumns.splice(idx, 1);
		},
		addColumn(){
			let idx = this.availableColumns.indexOf(this.selectedColumn);
			this.availableColumns.splice(idx, 1);
			this.activeColumns.push(this.selectedColumn);
			return this.selectedColumn = 0;
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
		capitalize(string) {
			string = string.toLowerCase();
			return string.charAt(0).toUpperCase() + string.slice(1);
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