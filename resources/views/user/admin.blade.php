@extends('layouts.app')

@section('title') Manage Users @endsection

@section('content')
		<div class="columns is-gapless">
			<div class="column is-1">
				
			</div>
			<div class="column is-10" id="user">
				<h1 class="title hr-title">{{ 'Manage ' . $status }}</h1>
				<h2 class="subtitle">Update and make changes to system users</h2>
				{{-- <label for="claim-location" class="label">Claim Location</label> --}}
				{{-- <input type="text" id="claim-location" class="input" @focus="geolocate"> --}}

				{{-- <div id="map" style="width: 100%; height: 200px;"></div><br> --}}

			
				<button class="button is-primary" @click='showFilters = !showFilters'>
					<i class="fa fa-filter" aria-hidden="true"></i>
				</button>

				<button class="button is-gray" @click='showColumns = !showColumns'>
					<i class="fa fa-columns" aria-hidden="true"></i>
				</button><br><br>

				<div v-if="showFilters" style="width: 100%; padding: 1em; background: #ddd;">
					<div class="columns">
						<div class="column">
							{{-- <label class="label">State Of Residence</label> --}}
							<div class="select">
						  		<select>
						  			<option value="0">State of residence</option>
							      	<option class="dropdown-item" v-for="state in states">
							        	@{{ state.name }}
							        </option>
						        </select>
							</div>				
						</div>

					<div class="column">
						{{-- <label class="label">License State</label> --}}
						<div class="select">
					  		<select>
					  			<option value="0">License</option>
						      	<option class="dropdown-item" v-for="state in states">
						        @{{ state.name }}
						      </option>
					        </select>
						</div>						
					</div> {{-- end column --}}

					<div class="column">
						{{-- <div class="label">Certification</div> --}}
						<div class="select">
							<select v-model="filters.certification">
								<option value="0">Select A Certification</option>
								<option v-for="cert in certifications" :value="cert.name">@{{ cert.name }}</option>
							</select>
						</div>
					</div>

					<div class="column">
						{{-- <div class="label">Software:</div> --}}
						<div class="select">
							<select v-model="filters.software">
								<option value="0">Select software</option>
								<option v-for="s in software" value="s.name">@{{ s.name }}</option>
							</select>
						</div>
					</div>
				</div>

				{{-- <div class="columns">
					<div class="column">
						<div class="field">
						  <input id="includeXactnetAddress" type="checkbox" name="includeXactnetAddress" class="switch is-rounded">
						  <label for="includeXactnetAddress">Include incomplete</label>
						</div>
					</div>
				</div> --}}

				</div>

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
					    <a class="button" @click="selected = []; allSelected = false;">
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
					    <a class="button is-danger" @click="deleteSelected">
					    	<span class="icon is-small"><i class="fa fa-trash"></i></span>
					      	&nbsp; Delete Selected
					    </a>
					  </p>
					  <p class="control">
					  	<div class="button is-success" @click="exportToCsv(filename, activeColumns)">
					  		<span class="icon is-small"><i class="fa fa-download"></i></span>
					  		&nbsp; Export To Csv
					  	</div>
					  </p>
					</div>

				<table class="table is-striped is-fullwidth" style="background: transparent">
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
								<input type="checkbox" v-model="selected" :value="user.name" :id="user.id" :name="user.id" class="is-checkbox is-circle is-small has-user">
			 					<label :for="user.id">&nbsp;</label>
			 				</td>
							<td v-for="column in activeColumns" v-text="parseColumnData(user, column)"></td>
							<td>
								<div class="dropdown" @click="toggleMenu(user.email)">
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
									</div><!--end dropdown -->
								</td>
						</tr>
					</tbody>
				</table>
					
					{{ method_exists($users, 'links') ? $users->links() : null }}

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