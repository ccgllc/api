@extends('layouts.app')

@section('title') Manage Users @endsection

@section('content')
		<div class="columns is-gapless">
			<div class="column" id="user">
				<h1 class="title hr-title">Users (@{{ userData.users.length }})</h1>
				<h2 class="subtitle">Update and filter system users</h2>

				<button class="button" :class="{ 'is-light': showFilters, 'is-dark': !showFilters }" @click='showFilters = !showFilters'>
					<i v-if="showFilters != true" class="fa fa-filter" aria-hidden="true"></i>
					<i v-if="showFilters != false" class="delete" aria-hidden="true"></i>
				</button>

				<button class="button is-dark" @click='showColumns = !showColumns'>
					<i class="fa fa-columns" aria-hidden="true"></i>
				</button>

				<div class="dropdown is-hoverable">
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
				</div><!--end dropdown -->

				<br>

				<div v-if="showFilters" style="width: 100%; padding: 1em;">
					<div class="columns">

						<div class="column is-2">
							<filterable-dropdown v-bind:list="states" v-on:selected="updateFilters" model="licenseState" property="abbr" placeholder-text="state">
								<template v-slot:label>License State</template>
							</filterable-dropdown>

							<filterable-dropdown v-bind:list="states" v-on:selected="updateFilters" model="state" property="abbr" placeholder-text="state">
								<template v-slot:label>State Of Residence</template>
							</filterable-dropdown>

							<label class="label">Date Ranges</label>
							<div class="select is-full-width">
						  		<select v-model="selectedRange" @change="setRangeDates()">
						  			<option value="0">Select A Date</option>
							      	<option class="dropdown-item" :value="dateRange" v-for="dateRange in dateRanges">@{{ dateRange.name }}</option>
						        </select>
							</div>		
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

					</div>	


				<div class="columns">


					<div class="column is-2">
						<div class="field">
						  <label class="label">Start Date</label>
						  <div class="control has-icons-right">
						    <input class="input" type="text" v-model="filters.startDate" :placeholder="'example ' + getDateString()">
						    <span class="icon is-small is-medium is-right">
							    <i class="fa fa-calendar"></i>
						  	</span>
						  </div>
						  {{-- <p class="help">This is a help text</p> --}}
						</div>
					</div>
					<div class="column is-2">
						<div class="field">
						  <label class="label">End Date</label>
						  <div class="control has-icons-right">
						    <input class="input" type="text" v-model="filters.endDate" :placeholder="'example ' + getDateString()">
						    <span class="icon is-small is-medium is-right">
							    <i class="fa fa-calendar"></i>
						  	</span>
						  </div>
						  {{-- <p class="help">This is a help text</p> --}}
						</div>
					</div>

				</div>

				{{-- <div class="columns">
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
				</div> --}}

				<div class="columns">
					<div class="column">
						<button class="button is-dark" @click="getUsers()">Filter Users</button>
					</div>
				</div>

			</div> <br>

				<div class="modal" v-bind:class="{ 'is-active': showColumns }">
					<div class="modal-background" style="background: rgba(0, 0, 0, .75)"></div>
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

				<table class="table is-striped is-fullwidth" v-if="userData.users.length" style="background: transparent">
					<thead>
						<tr>
							<th>
								<input v-model="allSelected" type="checkbox" @change="selectAll" id="selectAll" name="selectAll" class="is-checkbox is-circle is-small">
			 					<label for="selectAll">&nbsp;</label>
			 				</th>
							<th v-for="column in activeColumns" v-text="column.label"></th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="user in userData.users" :key="user.id">
							<td>
								<input type="checkbox" v-model="selected" :value="parseRow(user)" :id="user.id" :name="user.id" class="is-checkbox is-circle is-small has-user">
			 					<label :for="user.id">&nbsp;</label>
			 				</td>
							<td v-for="column in activeColumns" v-text="parseColumnData(user, column)"></td>
							<td>
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
									    {{-- <a :href="'/users/'+ user.id + '/roles'" class="dropdown-item">Manage Roles</a> --}}
									    {{-- <a href="#" class="dropdown-item">Suspend Account</a> --}}
									    {{-- <a href="#" class="dropdown-item">Send Message</a> --}}
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
									</div><!--end dropdown -->
								</td>
						</tr>
					</tbody>
				</table>

				<p v-if="userData.users.length == 0">No results</p>
					
					{{-- {{ method_exists($users, 'links') ? $users->links() : null }} --}}

			</div>
		</div>
		<br><br>
@endsection

@section('scripts')
	<script>
		window.users = {!! $users->toJson() !!}
	</script>
	<script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ2-Na1yIv_0zOlDuTbrizwya-5HcL1C0&libraries=places">
    </script>
	<script src="{{ mix('/js/user.js') }}"></script>
@endsection