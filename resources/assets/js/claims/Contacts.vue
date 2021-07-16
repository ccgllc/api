<template>
	<div class="columns is-gapless">
		<div class="column">
			<!-- <div class="card"> -->
				<!-- <div class="card-content"> -->
					<div class="content" style="background: #f8f7f7">
						<div class="columns is-gapless">

							<div class="column is-4">
								<claim-map></claim-map>
							</div>

	    				<div class="column" style="margin: 1em;">
		    				<h3 class="subtitle" style="color: #bbb; font-size: .8em;">Insured</h3>
								<h2 class="title" style="font-size: 2em; font-weight: 700; color:#499BE8">{{ ucwords(claim.claim_data.client['name']) }}</h2>
								<p><strong>Claim# </strong> {{ claim.claim_number }}</p>
								<p><strong>Email: </strong> {{ claim.claim_data.client.email || 'Not Provided' }}</p>
								<div v-for="phone in claim.claim_data.client.phoneNumbers">
									<p v-if="phone.number != null"><strong>{{ phone.type  }} #:</strong> <a :href="'tel:+' + phone.number">{{ phone.number || '000-000-0000' }}</a></p>
								</div>
	    				</div><!-- end column -->

							<div class="column" style="margin: 1em;">
								<!-- <h3 class="" style="color: #bbb; font-size: .8em;">Addresses</h3> -->
								<div v-for="address in claim.claim_data.client.addresses" style="margin-bottom: 1em;">
									<p style="color: #bbb; font-size: .8em; font-weight: 700">{{ address.type }} Address</p>
		    					<!-- <div class="card" style="margin-bottom: 1em; background: #f6f6f6;">
		    						<div class="card-content"> -->
		    							
											<p>{{ address.street }} <br> 
												 {{ address.city }} {{ address.state }}, {{ address.zip }} 
												 <span v-if="address.latitude && address.longitude"><br> 
												 	{{ address.latitude }} <span> | </span> {{ address.longitude }}</span>
											 </p>
		    					<!-- 	</div>
		    						</div> -->
		    					</div>
		    				</div><!-- end column -->

		    				<div class="column" style="margin: 1em;">
		    					<div v-if="claim.claim_data.accessContact">
			    					<h3 class="subtitle" style="color: #aaa; font-size: .8em;" v-if="accessContact">Access Contact</h3>
									<h2 class="title" style="font-size: 1.25em;" v-if="claim.claim_data.accessContact.name">{{ claim.claim_data.accessContact.name }}</h2>
									<p v-for="phone in claim.claim_data.accessContact.phoneNumbers" style="margin-bottom: 1.5rem;">
										<span v-if="phone.number"><strong>{{ phone.type }}</strong>: {{ phone.number }}</span>
									</p>
								</div>

								<div v-if="claim.claim_data.claimant">
									<h3 class="subtitle" style="color: #aaa; font-size: .8em;" v-if="claim.claim_data.claimant.name">Claimant</h3>
									<h2 class="title" style="font-size: 1.25em;">{{ claim.claim_data.claimant.name }}</h2>
									<p v-for="phone in claim.claim_data.claimant.phoneNumbers">
										<span v-if="phone.number"><strong>{{ phone.type }}</strong>: <a :href="'tel:+' + phone.number">{{ phone.number }}</a></span></p>
			    				</div>

			    				<div v-if="claim.claim_data.deskAdjuster">
									<h3 class="subtitle" style="color: #aaa; font-size: .8em;" v-if="claim.claim_data.deskAdjuster.name">Desk Adjuster</h3>
									<h2 class="title" style="font-size: 1.25em;">{{ claim.claim_data.deskAdjuster.name }}</h2>
									<p v-for="phone in claim.claim_data.deskAdjuster.phoneNumbers">
										<span v-if="phone.number"><strong v-if="phone.type">{{ phone.type }}</strong>: <a :href="'tel:+' + phone.number">{{ phone.number }}</a></span></p>
										<p v-if="claim.claim_data.deskAdjuster.email"><strong>Email</strong>: {{ claim.claim_data.deskAdjuster.email }}</p>
			    				</div>
							</div>

						</div><!-- end columns -->
					</div>
				<!-- </div> -->
			<!-- </div> -->
		</div><!-- end column -->
	</div><!-- end columns -->
</template>

<script>
	import claimData from './claimData.js';
	import claimMap from './Map.vue';

	export default {
		name: 'Contacts',
		components: {
			claimMap
		},
		data() {
			return claimData;
		},
		mounted() {
			// console.log(claim.claim_data.accessContact.name);
		},
		methods: {
			ucwords(val) {
				// console.log(val);
				return val.toLowerCase().replace(/\b[a-z]/g, function(letter) {
					return letter.toUpperCase();
				});	
			}
		},
		computed: {
			accessContact() {
				return claim.claim_data.accessContact.name
			}
		}
	}
</script>

<style>
	dl > dt {
		font-weight: 700;
		/*padding:  1em;*/
	}
	dl > dd {
		padding:  1em;
		background: #f0f0f0;
	}
</style>