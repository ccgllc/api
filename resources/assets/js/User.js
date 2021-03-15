import Vue from 'vue';
import UserService from './structur/src/services/Resource.js';
import userData from './data/userData.js';
import states from './data/states.js';
import certifications from './data/certifications.js';
import software from './data/software.js';
import workHistory from './data/workHistory.js';
import userStatuses from './data/userStatuses.js';
import filterableDropdown from './structur/src/components/SearchableDropdown.vue';
import availableColumns from './data/availableColumns.js';
import { DateTime } from "luxon";
// Vue.component('search', search);

let app = new Vue({
	name: 'User Administration',
	el: '#user',
	components: {
		filterableDropdown,
	},
	data: {
		date: {},
		userData,
		states,
		certifications,
		software,
		workHistory,
		userStatuses,
		availableColumns,
		showColumns: false,
		showAllWorkHistory: false,
		filteredStates: states,
		selectedState: 0,
		showFilters: false,
		selected: [],
		allSelected: false,
		dateRanges: [],
		selectedRange: 0,
		filters: {
			startDate: '',
			endDate: '',
			certification: 0,
			state: 0,
			licenseState: '',
			software: 0,
			experience: false,
			workHistory: '',
			applied: 0,
			status: '',
		},
		selectedColumn: 0,
		activeColumns: [
			{ label: 'Name', property: 'name', model: 'user', removable: false },
			{ label: 'Email', property: 'email', model: 'user', removable: true},
			{ label: 'Licenses', property: 'license_state', model: 'adjuster_licenses', removable: true },
			{ label: 'Certifications', property: 'type', model: 'certifications',  removable: true },
			{ label: 'Sign Up Date', property: 'date_string', model: 'user', removable: true},
			// { label: 'Actions', property: '', model: '',  removable: false },
		],
		userService: new UserService({
			uri: {
				prefix: 'api',
				resource: 'users',
				params: []
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
		userCount() {
			return '(' + this.userData.users.length + ')';
		},
		month() {
			return this.date.month;
		},
		day() {
			return this.date.day;
		},
		year() {
			return this.date.year;
		},
		today() {
			return this.month + '/' +  this.day + '/' + this.year; 
		},
		getUrl() {
			return this.getQueryString;
		},
		activeFilters() {
			let active = {};
			let self = this;
			for (let prop in self.filters) {
				if(self.filters[prop])
			 		active[prop] = self.filters[prop];
			}
			return active;
		},
		getQueryString() {
			let self = this;
			let str = '?';
			for (let prop in self.activeFilters) {
				self.activeFilters[prop] !== true 
					? str += prop + '=' + self.activeFilters[prop] + '&'
					: str += prop + '&';
			}
			return str;
		}
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
  		// this.filters.endDate = 
  		this.date = DateTime.local();
  		this.setupDates();
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
		updateFilters(payload) {
			this.filters[payload.model] = payload.selection;
		},
		getUsers(){
			let self = this;
			this.userService.get(this.getUrl).then(response => { 
				console.log(response);
				// window.users = [];
				self.userData.users = response
			}).catch(error => {
				console.error(error)
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
		parseRow(user) {
			let row = [];
			for (let column in this.activeColumns) {
				let result = this.parseColumnData(user, this.activeColumns[column])
				// result = result.replace(',', '\\,').toString();
				row.push(result);
			};
			return row;
		},
		parseColumnData(user, column) {
 			if (column.model == 'user') {
				return user[column.property];
			}
			if (column.model == "profile" && user[column.model] !== null) {
				return user[column.model][column.property];
			}
			if(column.model == 'work_history' && user[column.model] !== null) {
				return user[column.model][column.property];
			}
			// if(column.model == 'certifications' && user[column.model] !== null) {
			// 	// console.log(column.model);
			// 	return user[column.model][column.property];
			// }
			let str = '';
			for (let property in user[column.model]) {
				// console.log([column.model]);
				if (column.model == 'certifications') {
					str+= user[column.model][property][column.property];
					if (user[column.model][property].hasOwnProperty('expiration') && user[column.model][property]['expiration'] !== null ) {
						str += ' (exp.' + user[column.model][property]['expiration'] + ') ';
					}
					return str;
				}
				str+= user[column.model][property][column.property] + ' ';
			}
			return str;
		},
		removeColumn(column) {
			let idx = this.activeColumns.indexOf(column);
			this.availableColumns.push(column);
			return this.activeColumns.splice(idx, 1);
		},
		addColumn(){
			let idx = this.availableColumns.indexOf(this.selectedColumn)
			this.activeColumns.push(this.selectedColumn);
			this.availableColumns.splice(idx, 1);
			return this.selectedColumn = 0;
		},
		toggleAllWorkHistory() {
			this.showAllWorkHistory = !this.showAllWorkHistory
			this.showAllWorkHistory
				? this.getAllWorkHistory() 
				: this.removeAllWorkHistory();
		},
		getAllWorkHistory() {
			let self = this;
			let history = this.availableColumns.filter(item => item.model === 'work_history');
			history.forEach(item => self.addColumn(self.selectedColumn = item));
		},
		removeAllWorkHistory() {
			let self = this;
			let history = this.activeColumns.filter(item => item.model === 'work_history');
			history.forEach(item => self.removeColumn(item));
		},
		select(user) {
			console.log(user.name);
		},
		selectAll() {
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
		uncheckAll(){
			// this.selected = []; 
			this.allSelected = false;
			return this.selectAll();
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
        	let csvFile = this.createCsvHeader();
        	for (var i = 0; i < rows.length; i++) {
            	csvFile += this.processRow(rows[i]);
       		}
        	var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    		return this.downloadCsv(blob, filename);
    	},
    	processRow(row) {
   			let rowData = '';
        	return rowData += row + '\n';
		},
		createCsvHeader() {
			let csvFile = '';
        	let count = 0;
   			for (let column in this.activeColumns) {
   				count ++;
   				csvFile += this.activeColumns[column]['label'];
   				if (count < this.activeColumns.length)
   				{
   					csvFile += ', ';
   				}
   			}
   			csvFile += '\n';
   			return csvFile;
		},
		downloadCsv(blob, filename) {
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
		},
		setupDates() {
			let thirtyDatys = { 
				name: 'Last 30 Days', 
				startDate:  (this.month - 1) + '/' + this.day + '/' + this.year, 
				endDate: this.today 
			}
			this.dateRanges.push(thirtyDatys);
			
			let yearToDate = { 
				name: 'Year To Date', 
				startDate: '1/1/' + this.year,
				endDate: this.today 
			}
			this.dateRanges.push(yearToDate);

			let twelveMonths = { 
				name: 'Last 12 Months', 
				startDate:   this.month + '/' +  this.day + '/' + (+this.year - 1),
				endDate: this.today 
			}
			this.dateRanges.push(twelveMonths);

			let lastYear = { 
				name: 'Last Year', 
				startDate:  '1/1/' + (+this.year - 1),
				endDate: '12/31/' + (+this.year - 1) 
			}
			this.dateRanges.push(lastYear);

			let lastWeek = { 
				name: 'Last Week', 
				startDate:  this.date.minus({days:7}).toLocaleString(DateTime.DATE_SHORT),
				endDate: this.getDateString(),
			}
			this.dateRanges.push(lastWeek);
		},
		setRangeDates() {
			this.filters.startDate = this.selectedRange.startDate;
			return this.filters.endDate = this.selectedRange.endDate;
		},
		getDateString() {
			return this.date.toLocaleString(DateTime.DATE_SHORT);
		}
	}
});