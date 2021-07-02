<template>
	<page title="Filter Users" description="Sort, filter and export system users">
				 <!-- <h1 class="title hr-title"> -->
				<!-- 	@if (isset($status)) {{ $status}} : @endif
					Users  
					@if(isset($state)) From {{ $state }} @endif  -->
				<!-- </h1> -->
				<!-- <h2 class="subtitle">Update and filter system users</h2> -->
			<div style="margin: 1em 0 0 2em;">
				<button class="button" :class="{ 'is-light': showFilters, 'is-dark': !showFilters }" @click='showFilters = !showFilters'>
					<i v-if="showFilters != true" class="fa fa-filter" aria-hidden="true"></i>
					<i v-if="showFilters != false" class="delete" aria-hidden="true"></i>
				</button>

				<button class="button is-dark" @click='showColumns = !showColumns'>
					<i class="fa fa-columns" aria-hidden="true"></i>
				</button>

				<!-- <div class="dropdown is-hoverable">
				  <div class="dropdown-trigger">
	       		    <button class="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
	       		    	<span>Saved Filters</span>
					    <span class="icon is-small">
					      	<i class="fa fa-caret-down" aria-hidden="true"></i>
				     	</span>
				    </button>
				  </div>
				  <div class="dropdown-menu" role="menu">
				  	<div class="dropdown-content">
					    <a href="" class="dropdown-item">Coming Soon!</a>
					</div>
				  </div>
				</div> -->

				<span style="margin-left: .5em; font-weight:700; font-size: 1.25em;">
					<span v-text="userCount"></span> <span>Users in list</span> 
				</span>

				</div>


				<div v-if="showFilters" style="width: 100%; padding: 1em;">
					<div class="columns">

						<div class="column is-2">
							<div class="field" style="margin-top: 1em; margin-bottom: 1em;">
								<label class="label">Date Ranges</label>
								<div class="select is-full-width">
							  		<select v-model="selectedRange" v-on:change="setRangeDates()">
							  			<option value="0">Select A Date</option>
								      	<option class="dropdown-item" :value="dateRange" v-for="dateRange in dateRanges">@{{ dateRange.name }}</option>
							        </select>
								</div>		
							</div>
							<div class="field" >
							  <label class="label">Start Date</label>
							  <div class="control has-icons-right">
							    <input class="input" type="text" v-model="filters.startDate" :placeholder="'example ' + getDateString()">
							    <span class="icon is-small is-medium is-right">
								    <i class="fa fa-calendar"></i>
							  	</span>
							  </div>
							  <!-- {{-- <p class="help">This is a help text</p> --}} -->
							</div>
							<div class="field" style="margin-top: 1em; margin-bottom: 1em;">
							  <label class="label">End Date</label>
							  <div class="control has-icons-right">
							    <input class="input" type="text" v-model="filters.endDate" :placeholder="'example ' + getDateString()">
							    <span class="icon is-small is-medium is-right">
								    <i class="fa fa-calendar"></i>
							  	</span>
							  </div>
							  <!-- {{-- <p class="help">This is a help text</p> --}} -->
							</div>
					    </div>

						<div class="column is-2">
							<filterable-dropdown v-bind:list="states" v-on:selected="updateFilters" model="licenseState" property="abbr" placeholder-text="state">
								<template v-slot:label>License State</template>
							</filterable-dropdown>

							<filterable-dropdown v-bind:list="states" v-on:selected="updateFilters" model="state" property="abbr" placeholder-text="state">
								<template v-slot:label>State Of Residence</template>
							</filterable-dropdown>

							
						</div>

						<div class="column is-2">
							<filterable-dropdown v-bind:list="certifications" v-on:selected="updateFilters" model="certification" property="name" placeholder-text="certification">
								<template v-slot:label>Certification</template>
							</filterable-dropdown>

							<filterable-dropdown v-bind:list="workHistory" v-on:selected="updateFilters" model="workHistory" property="name" placeholder-text="Select A Work History">
								<template v-slot:label>Work History</template>
							</filterable-dropdown>

							<filterable-dropdown v-bind:list="software" v-on:selected="updateFilters" model="software" property="name" placeholder-text="software">
								<template v-slot:label>Software</template>
							</filterable-dropdown>
						</div>

						<div class="column is-2">
								<filterable-dropdown v-bind:list="userStatuses" v-on:selected="updateFilters" model="status" property="name" placeholder-text="User Status">
								<template v-slot:label>User Status</template>
							</filterable-dropdown>
						</div>

					</div>	

			<!-- 	{{-- <div class="columns">
					<div class="column">
						<div class="field">
						  <input id="applied" v-model="filters.applied" type="checkbox" name="applied" class="switch is-small is-rounded">
						  <label for="applied">only show users with incomplete applications</label>
						</div>
						<div class="field">
						  <input id="applied" v-model="filters.applied" type="checkbox" name="applied" :value="1" class="switch is-small is-rounded">
						  <label for="applied">Only show users with completed applications.</label>
						</div>
					</div>
				</div> --}} -->

				<div class="columns">
					<div class="column">
						<button class="button is-dark" @click="getUsers()">Filter Users</button>
					</div>
				</div>

			</div> <br>

				<div class="modal" v-bind:class="{ 'is-active': showColumns }">
					<div class="modal-background" style="background: rgba(0, 0, 0, .75);"></div>
					<div class="modal-card">
					    <header class="modal-card-head">
					      <p class="modal-card-title">Display Columns</p>
					      <button class="delete" aria-label="close" @click="showColumns = false"></button>
					    </header>
				    	<section class="modal-card-body" style="background: #fff;">
				    		<div class="select">
				    			<select @change="addColumn()" v-model="selectedColumn" :disabled="availableColumns.length < 1">
				    				<option value="0">Add Column</option>
				    				<option v-for="item in availableColumns" :value="item" v-text="item.label"></option>
				    			</select>
				    		</div><br><br>
				    		<div class="field">
							  <input id="applied" @change="toggleAllWorkHistory" type="checkbox" name="applied" class="switch is-small is-rounded">
							  <label for="applied">Include All Work History</label>
							</div><br>
				    		<div class="tags">
								<span class="tag is-primary" v-for="column in activeColumns">@{{ column.label }} <button class="delete" v-if="column.removable" @click="removeColumn(column)"></button></span>
							</div>
				    	</section>
				    	 <footer class="modal-card-foot">
					      	<button class="button is-success" @click="showColumns = false">Ok</button>
					    </footer>
					  </div>
				    </div>
										 
					
					<div class="field is-grouped" v-show="selected.length > 0">
					<p class="control">
					    <a class="button" @click="uncheckAll()">
					      Cancel
					    </a>
					  </p>
					  <p class="control">
					    <a class="button is-link" disabled>
					    	<span class="icon"><i class="fa fa-users"></i></span>
					      	&nbsp; Add To Candidates
					    </a>
					  </p>
					  <p class="control">
					    <a class="button is-danger" @click="deleteSelected" disabled>
					    	<span class="icon is-small"><i class="fa fa-trash"></i></span>
					      	&nbsp; Delete Selected
					    </a>
					  </p>
					  <p class="control">
					  	<div class="button is-success" @click="exportToCsv(filename, selected)">
					  		<span class="icon is-small"><i class="fa fa-download"></i></span>
					  		&nbsp; Export To Csv
					  	</div>
					  </p>
					</div>

				<table class="table is-striped" v-if="userData.users.length" style="background: transparent">
					<thead>
						<tr>
							<th>
								<input v-model="allSelected" type="checkbox" @change="selectAll" id="selectAll" name="selectAll" class="is-checkbox is-circle is-small">
			 					<label for="selectAll">&nbsp;</label>
			 				</th>
							<th v-for="column in activeColumns" v-text="column.label"></th>
							<!-- {{-- <th>Actions</th> --}} -->
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in userData.users" :key="user.id">
							<td style="vertical-align: middle; padding-right: 0;">
								<input type="checkbox" v-model="selected" :value="parseRow(user)" :id="user.id" :name="user.id" class="is-checkbox is-circle is-small has-user">
			 					<label :for="user.id">&nbsp;</label>
			 				</td>
			 				
							<td v-for="column in activeColumns" style="margin-top: .5rem; vertical-align: middle;">
								<a v-if="!column.removable" :href="/users/+ user.id" target="_blank" style="display: flex; flex-direction: row; align-items: center;">
									<img v-if="user.avatar" style="border-radius: 512px; border: 3px solid #343b4d; width:2em; height:2em;" :src="user.avatar.path" :alt="user.name" width="100%" height="100%">
									<span v-else style="padding-right: 1em; width:2em; height:2em;"><i class="fa fa-user-circle-o fa-2x has-text-dark"></i></span>
									<span v-text="parseColumnData(user, column)" style="font-weight: 700; margin-left: 1em;"></span>
								</a>
								<span v-else>
									<span v-text="parseColumnData(user, column)"></span>
								</span>
							</td>
							<!-- {{-- <td>
								<div class="dropdown is-right" @click="toggleMenu(user.email)">
								  <div class="dropdown-trigger">
					       		    <button class="button is-small" aria-haspopup="true" aria-controls="dropdown-menu">
							    		<span class="icon is-small">
									       	<i class="fa fa-th-list" aria-hidden="true"></i>
							     	  	</span>
									    <span class="icon is-small">
									      	<i class="fa fa-caret-down" aria-hidden="true"></i>
								     	</span>
								    </button>
								  </div>
								  <div class="dropdown-menu" :id="user.email" role="menu" style="display:none">
								  	<div class="dropdown-content" @pointerleave="toggleMenu(user.email)">
								  		 <a :href="'/users/'+ user.id" class="dropdown-item">View Profile</a>
									   <a :href="'/users/'+ user.id + '/roles'" class="dropdown-item">Manage Roles</a>
									   <a href="#" class="dropdown-item">Suspend Account</a>
									   <a href="#" class="dropdown-item">Send Message</a>
									    <hr class="dropdown-divider">
									      	<div class="level">
										      	<div class="level-item">
											    	<a @click.prevent="deleteUser(user)" class="button is-danger is-fullwidth">
											    		<span>Delete</span>
														<span class="icon is-small">
															<i class="fa fa-trash"></i>
														</span>
													</a>
												</div>
										    </div>
										</div>
									</div>
								</td> --}} -->
						</tr>
					</tbody>
				</table>

				<p v-if="userData.users.length == 0">No results</p>
					
					<!-- {{-- {{ method_exists($users, 'links') ? $users->links() : null }} --}} -->

		<br><br>
	</page>
</template>

<script>
	import UserService from '../../../structur/src/services/Resource.js';
	import userData from '../../../data/userData.js';
	import states from '../../../data/states.js';
	import certifications from '../../../data/certifications.js';
	import software from '../../../data/software.js';
	import workHistory from '../../../data/workHistory.js';
	import userStatuses from '../../../data/userStatuses.js';
	import filterableDropdown from '../../../structur/src/components/SearchableDropdown.vue';
	import availableColumns from '../../../data/availableColumns.js';
	import { DateTime } from "luxon";
	import Page from '../../../components/Page.vue';

	export default {
		name: 'UserLlist',
		props: [],
		components: { filterableDropdown, Page },
		mounted() {
			this.date = DateTime.local();
			this.setupDates();
	      this.current_page = window.dashboardData.current_page;
	      return window.dashboardData.users 
	      	? this.userData.users = window.dashboardData.users 
	      	: this.userData.users = window.dashboardData.users;
		},
		data() {
			return {
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
					// { label: 'Email', property: 'email', model: 'user', removable: true},
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
			}
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
	}
</script>