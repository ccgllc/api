<template>
	<!-- <section> -->
		<div>
		<!-- <div class="columns">
			<div class="column">
				<article class="message is-warning">
				  <div class="message-header">
				    <p>Hurricane Donald</p>
				    <button class="delete" aria-label="delete"></button>
				  </div>
				  <div class="message-body">
				    Please make sure your <a href="/profile">contact info</a> is up-to-date, dispatch teams are assigning claims now. 
				  </div>
				</article>
			</div>
		</div> -->
		<div class="columns">
			<div class="column">
				
				<h3 class="subtitle"><span style="color: #bbb;">Claim#</span></h3>
				<h1 class="title" >
					<span style="font-weight: 300; font-size: 1.1em; letter-spacing: -.03em">{{ claim.claim_number }}</span> 
					<span style="font-weight: 700; padding-left: .2em; padding-right: .2em; position: relative; top: -5px; font-size: 1em; color: #439BD1">|</span> 
					<span style="font-weight: 300; font-size: .5em; position: relative; top: -7px;"> {{ claim.carrier.label }}</span>
				</h1>
				
			</div>
		</div>

		<hr style="background: #ccc;">

    	<div class="columns">
    		<div id="left-side" class="column is-9">

    			<div class="columns">
					<div class="column">
						
						<div id="map" style="width: 100%; height: 400px;"></div>
							
						<!-- <label for="claim-location" class="label">Claim Location</label>
						<input type="text" id="claim-location" class="input" @focus="geolocate"> -->
						
					</div>
				</div>
				
				<div class="columns">
					<div class="column">
						<div class="tags" style="margin-top: 1em">
					<span class="tag is-secondary">Harvey <button class="delete is-small"></button></span>
					<span class="tag is-secondary">CAT  <button class="delete is-small"></button></span> 
					<span class="tag is-secondary">Hail <button class="delete is-small"></button></span>
				</div>
					</div>
				</div>

    			<div class="columns">
					<div class="column is-three-quarters">
						<div class="card">
							<div class="card-content">
								<div class="content">
									<div class="columns">

										

					    				<div class="column">
					    					<h3 class="subtitle" style="color: #bbb; font-size: .8em;">Insured</h3>
											<h1 class="title" style="font-size: 2em; font-weight: 700; color:#499BE8">{{ claim.claim_data.client['name'] | ucwords }}</h1>
											<p><strong>Claim# </strong> {{ claim.claim_number }}</p>
											<p><strong>Email: </strong> {{ claim.claim_data.client.email || 'Not Provided' }}</p>
											<div v-for="phone in claim.claim_data.client.phoneNumbers">
												<p v-if="phone.number != null"><strong>{{ phone.type  }} #:</strong> <a :href="'tel:+' + phone.number">{{ phone.number || '000-000-0000' }}</a></p>
											</div>
					    				</div><!-- end column -->

										
										<div class="column">
					    					<!-- <div class="card"> -->
					    						<!-- <div class="card-content"> -->
					    							<dl class="dl-horizontal">
					    							<div v-for="address in claim.claim_data.client.addresses">
														<dt>{{ address.type }} Address:</dt>
														<dd>{{ address.street }} <br> {{ address.city }} {{ address.state }}, {{ address.zip }} <br> {{ address.latitude }} <br> {{ address.longitude }}</dd>
													</div>
													</dl>
					    						<!-- </div> -->
					    					<!-- </div> -->
					    				</div><!-- end column -->

		    						</div><!-- end columns -->
								</div>
							</div>
						</div>
		    		</div><!-- end column -->
		    		<div class="column">
						<h3 class="subtitle" style="color: #908F8F; font-size: .8em;">Gross Loss Amount</h3>
    					<h1 class="title" style="font-size: 1.75em; font-weight: 700; color:#343b4d;">${{ claim.gross_loss }}</h1>
    					<!-- <h3 class="subtitle" style="color: #bbb; font-size: .8em;">Service Fee</h3>
    					<h1 class="title" style="font-size: 2em; font-weight: 700; color:#30A987">${{ '700' }}</h1> -->
    					<a href="#" class="is-menu-button"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Add Invoice</a><br>
    					<a href="#" class="is-menu-button"><span class="icon has-text-info is-small"> <i class="fa fa-usd"></i> </span> Set Estimate Amount</a><br>
    					<a href="#" class="is-menu-button"><span class="icon has-text-info is-small"><i class="fa fa-usd"></i> </span> Submit Correction</a><br>
    					<a href="#" class="is-menu-button"><span class="icon has-text-info is-small"><i class="fa fa-credit-card"></i> </span> Add Adjuster Expenses</a><br>
    					<a href="#" class="is-menu-button"><span class="icon has-text-info is-small"><i class="fa fa-envelope-o"></i></span> Send Invoice to Carrier</a><br>
    				</div>
    			</div><!-- end columns -->

				<div class="columns">
		    		<div class="column">
		        		<div class="card">
				            <div class="card-content">
				                <div class="content">
					                  <p v-text="claim.description"></p>
				               	 </div>
				        	</div> 
				    	</div>   
					</div><!-- end column -->
		    	</div><!-- end columns -->

		        <div class="columns">
		       
		        	<div class="column">
		        		 <div class="card">
		        		 	<header class="card-header is-info">
							    <p class="card-header-title">
							      Loss Info
							    </p>
						  	</header>
		            		<div class="card-content">
		                		<div class="content">
									<dl class="dl-horizontal" style="width: 100%">
										<dt>Type Of Loss:</dt>
										<dd>{{ claim.type_of_loss || 'Not Provided' }}</dd>
										<dt>Catastrophe:</dt>
										<dd>{{ claim.catastrophe ? claim.catastrophe : 'no' }}</dd>
										<dt>Commercial:</dt>
										<dd>{{ claim.is_commercial ? 'yes' : 'no' }}</dd>
										<dt>Date Of Loss:</dt>
										<dd>{{ claim.date_of_loss || 'Not Provided' }}</dd>
										<dt>Date Received:</dt>
										<dd>{{ claim.date_received || 'Not Provided' }}</dd>
										<dt>Transaction Id:</dt>
										<dd>{{ claim.transaction_id || 'Not Provided' }}</dd>
										<dt>Price List Area:</dt>
										<dd>{{ claim.price_list_area || 'Not Provided' }}</dd>
									</dl>
		            			</div>
		        			</div>
		        		</div>
		        	</div><!-- end column -->

		        	<div class="column">
		        		 <div class="card">
		        		 	<header class="card-header is-info">
							    <p class="card-header-title">
							      Policy Info
							    </p>
						  	</header>
		            		<div class="card-content">
		                		<div class="content">
									<dl class="dl-horizontal" style="width: 100%">
										<dt>Policy #:</dt>
										<dd>{{ claim.claim_data.policy.policyNumber }}</dd>
										<dt>Overall Deductible:</dt>
										<dd>{{ claim.claim_data.policy.overallDeductible || 0 }}</dd>
										<dt>Policy Type:</dt>
										<dd>{{ claim.claim_data.policy.policyType || 'Not Provided' }}</dd>
										<dt>Policy Start Date:</dt>
										<dd>{{ claim.claim_data.policy.policyStart || 'Not Provided' }}</dd>
										<dt>Policy End Date:</dt>
										<dd>{{ claim.claim_data.policy.policyEnd || 'Not Provided' }}</dd>
										<dt>Apply Deductible:</dt>
										<dd>{{ claim.claim_data.policy.applyDeductible }}</dd>
									</dl>
		            			</div>
		        			</div>
		        		</div>
		        	</div><!-- end column -->
		        	<div class="column" v-if="claim.claim_data.policy.coverages.length">
		        		 <div class="card is-warning">
		        		 	<header class="card-header is-info">
							    <p class="card-header-title">
							      Coverages
							    </p>
						  	</header>
		            		<div class="card-content">
		                		<div class="content">
									<dl class="dl-horizontal" style="width: 100%">
										<div v-for="coverage in claim.claim_data.policy.coverages">
											<div class="col-sm-4">
												<dl class="dl-horizontal">
													<dt>Coverage Name:</dt>
													<dd>{{ coverage.covName }}</dd>
													<dt>Deductible:</dt>
													<dd>{{ coverage.deductible || 'not provided'}}</dd>
													<dt>Policy Limit:</dt>
													<dd>{{ coverage.policyLimit || 'not provided'}}</dd>
													<dt>Reserve Ammount:</dt>
													<dd>{{ coverage.reserveAmt || 'not provided'}}</dd><hr>
												</dl>
											</div>
										</div>
									</dl>
		            			</div>
		        			</div>
		        		</div>
		        	</div><!-- end column -->
		        	<div class="column" v-if="claim.claim_data.accessContact">
		        		 <div class="card">
		        		 	<header class="card-header is-info">
							    <p class="card-header-title">
							      Access Contact
							    </p>
						  	</header>
		            		<div class="card-content">
		                		<div class="content">
									<dl class="dl-horizontal" style="width: 100%">
										<dt>Name:</dt>
										<dd>{{ claim.claim_data.accessContact.name }}</dd>
										<div v-for="phone in claim.claim_data.accessContact.phoneNumbers">
											<dt>{{ phone.type }}</dt>
											<dd>{{ phone.number }}</dd>
										</div>
										
										
									</dl>
		            			</div>
		        			</div>
		        		</div><br>
		        		 <div class="card" v-if="claim.claim_data.claimant">
		        		 	<header class="card-header is-info">
							    <p class="card-header-title">
							      Claimant
							    </p>
						  	</header>
		            		<div class="card-content">
		                		<div class="content">
									<dl class="dl-horizontal" style="width: 100%">
										<dt>Name:</dt>
										<dd>{{ claim.claim_data.claimant.name }}</dd>
										<div v-for="phone in claim.claim_data.accessContact.phoneNumbers">
											<dt>{{ phone.type }}</dt>
											<dd>{{ phone.number }}</dd>
										</div>
										
										
									</dl>
		            			</div>
		        			</div>
		        		</div>
		        	</div><!-- end column -->
        		</div><!-- ends columns -->
    		</div>

    		<div class="column is-3" id="right-side">
    			<div class="columns is-mobile">
    				<div class="column is-half-mobile">
						<a :href="'/profile/' + user.id + '#'">
							<img 
				    			v-if="user.avatar"
				    			:src="user.avatar.path"
				    			:alt="user.name"
				    			@click="addingAvatar = true"
				    			style="border-radius: 256px; border: 10px solid #ccc; cursor: pointer;"
				    			width="100%"
				    			height="auto"
			    			>
			    			<span class="icon is-medium" v-else>
			    				<i class="fa fa-11x fa-user-circle-o"></i>
			    			</span>
			    		</a>

		    			<h3 v-text="user.name" style="text-align: center; color: #497da9;"></h3>
		    			<div class="tag is-rounded is-secondary" style="display: flex; justify-content: center; text-align: center; margin-bottom:5%;">Adjuster</div>
	        		</div><!--  end column -->

		    		<div class="column is-half-mobile">
    					
    					<a :href="'/profile/' + reviewer.id + '#'"">
        					<img 
				    			v-if="reviewer.avatar"
				    			:src="reviewer.avatar.path"
				    			:alt="reviewer.name"
				    			style="border-radius: 256px; border: 10px solid #ccc; cursor: pointer;"
				    			width="100%"
				    			height="auto"
			    			>
			    			<span class="icon is-medium" v-else>
			    				<i class="fa fa-11x fa-user-circle-o"></i>
			    			</span>
			    		</a>
						
			    		<h3 v-text="reviewer.name" style="text-align: center; color: #497da9"></h3>      		
			    		<div class="tag is-rounded is-info" style="display: flex; justify-content: center; text-align: center; margin-bottom:5%;">Reviewer</div>		
		    		</div><!--  end column -->
    			</div>

    			<div class="card">
    				<div class="card-content">
		        				<div class="content">
		        					<h3 class="title" style="font-weight: 700;">
    									Claim Timeline
    								</h3>

									<div class="dropdown is-up is-hoverable">
									  <div class="dropdown-trigger">
									    <button class="button" aria-haspopup="true" aria-controls="statuses">
									      <span>Update Status</span>
									      <span class="icon is-small">
									        <i class="fa fa-angle-up" aria-hidden="true"></i>
									      </span>
									    </button>
									  </div>
									  <div class="dropdown-menu" id="statuses" role="menu">
									    <div class="dropdown-content">
									      <div class="dropdown-item">
									        <p>You can add the <code>is-up</code> modifier to have a dropdown menu that appears above the dropdown button.</p>
									      </div>
									    </div>
									  </div>
									</div>

		    						<div class="timeline" style="padding: 5%;">
									  <!-- <header class="timeline-header">
									    <span class="tag is-medium is-secondary">FNOL</span>
									  </header> -->

									  <div class="timeline-item">
									  	<div class="timeline-marker is-image is-secondary is-32x32">
									      <a :href="'/profile/' + user.id"><img :src="user.avatar.path" :alt="user.name"></a>
									    </div>
									  	<div class="timeline-content">
									      <p class="heading">February 05, 2018</p>
									      <p>Estimate Submitted - $7893.12</p>
									    </div>
										</div>
									 	<div class="timeline-item">
										  	<div class="timeline-marker is-image is-32x32" style="border-color: #439BD1;">
										      <a :href="'/profile/' + reviewer.id"><img :src="reviewer.avatar.path" :alt="reviewer.name"></a>
										    </div>
										  	<div class="timeline-content">
										      <p class="heading">February 05, 2018</p>
										      <p>Estimate Requested</p>
										    </div>
										</div>

									  <div class="timeline-item">
									  	<div class="timeline-marker is-secondary"></div>
									  	<div class="timeline-content">
									      <p class="heading">February 03, 2018</p>
									      <p>Site Inspected</p>
									    </div>
										</div>

									  <div class="timeline-item">
									  	<div class="timeline-marker is-secondary"></div>
									  	<div class="timeline-content">
									      <p class="heading">February 01, 2018</p>
									      <p>Customer Contacted</p>
									    </div>
									  </div>
										
									  <div class="timeline-item">
									    <div class="timeline-marker is-image is-32x32">
									      <a :href="'/profile/' + user.id"><img :src="user.avatar.path" :alt="user.name"></a>
									    </div>
									    <div class="timeline-content">
									      <p class="heading">February 01, 2018</p>
									      <p><a :href="'/profile/' + user.id">Aaron York</a> assigned as adjuster</p>
									    </div>
									  </div>
									   <div class="timeline-item">
									    <div class="timeline-marker is-image is-32x32">
									       <a :href="'/profile/' + reviewer.id"><img :src="reviewer.avatar.path" :alt="reviewer.name"></a>
									    </div>
									    <div class="timeline-content">
									      <p class="heading">February 01, 2018</p>
									      <p><a :href="'/profile/' + reviewer.id">Aaron Crain</a> assigned as reviewer</p>
									    </div>
									  </div>

									  <div class="timeline-item">
									    <div class="timeline-marker is-secondary"></div>
									    <div class="timeline-content">
									      <p class="heading">January 31, 2018</p>
									      <p>In Assignment Queue</p>
									    </div>
									  </div>
							
									  <div class="timeline-header">
									    <span class="tag is-medium is-secondary">FNOL</span>
									  </div>
									</div>
		        				</div>
		        			</div>
    			</div>
    		</div>
		</div>
	</div>
    <!-- </section> -->
</template>

<script>
	export default {
		name: 'Claim',
		created() {
			this.claim = claim;
			this.claim.gross_loss = '27,893.12';
			this.claim.claim_data = JSON.parse(this.claim.claim_data);
			this.user = user;
			this.reviewer = reviewer;
			this.home.lat = parseFloat(this.claim.claim_data.client.addresses[1].latitude);
			this.home.lng = parseFloat(this.claim.claim_data.client.addresses[1].longitude);
		},
		mounted() {
			this.bounds = new google.maps.LatLngBounds();
			this.map = new google.maps.Map(document.getElementById('map'), {
	          zoom: 10,
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
		},
		data() {
			return {
				claimId: '',
				claim: {},
				user: {},
				bounds: {},
				map: {},
				marker: {},
				home: {lat: 30.2702208, lng:  -97.7453625}
			}
		},
		filters: {
			ucwords: function(val) {
				if (val) {
					let str = val.toLowerCase().replace(/\b[a-z]/g, function(letter) {
						return letter.toUpperCase();
					});
				return str;
				}
				return;
			}
		}
	}
</script>
<style>
	a.is-menu-button{
		color: #343b4d;
		margin-top: 1em !important;
		margin-bottom: 1em !important;
	}
	a.is-menu-button:hover{
		color: #439BD1;
	};
	.tag .is-delete{
		padding-right: 5px !important;
	}
	.timeline-marker .is-32x32{
		background: #497da9;
	}
	.is-32x32 span.icon{
		position: relative;
		top: 2px;
		left: 2px;
	}
	.dl-horizontal dt, .dl-horizontal div dt{
		font-weight: 700;
		width: 100%;
	}
	.dl-horizontal dd {
		font-weight: 300;
		/*float: left;*/
		width: 100%;
	}
</style>