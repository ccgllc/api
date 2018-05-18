<template>
	<div class="column">
	<span class="is-hidden-mobile">
		<h3 class="subtitle is-hidden-tablet-only"><span style="color: #bbb;">Claim#</span></h3>

		<h1 class="title is-hidden-tablet-only">
			<span class="claim-number" data-badge="2"> 
				<span class="icon is-large"> 
					<i @click="locked = !locked" class="fa fa-1x is-lock has-text-grey" :class="{'fa-lock': locked, 'fa-unlock-alt': !locked}"></i>
					</span>{{ claim.claim_number }}</span>
				<!--  badge is-badge-info is-badge-left -->
			<span class="divider" style="color: #439BD1">|</span>
			<span class="carrier"> {{ claim.carrier.label }}</span>
		</h1>
	</span>

	<div class="is-hidden-desktop">
		<h3><span style="color: #bbb;">Claim#</span></h3>
		<h1 class="title" style="margin-bottom: -.25rem;">
			<span class="claim-number">{{ claim.claim_number }}</span>
		</h1>
		<h3 style="font-size: 1.5em; margin: 0;">{{ claim.carrier.label }} </h3>
	</div> 
	

		<div class="dropdown" @click="active = !active"> 
		    <button class="button is-menu is-rounded is-grey" v-bind:class="{'is-info': !active,}" style="margin-top: .5rem;" aria-haspopup="true" aria-controls="menu" >
		     	<span v-if="!active">
		     		<span class="icon is-small">
		        		<i class="fa fa-bars" aria-hidden="true"></i>
		      		</span>

		       		<span class="icon is-small">
		       	 		<i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
		      		</span>
		     	</span> 

		     	<span v-else>
		     		 <span class="icon is-small" >
		        		<i class="fa fa-times" aria-hidden="true"></i>
	      			</span>
	      			<span style="font-weight: 700; font-size: .75em; position: relative; top: -1px; left: -4px;">
	      				close
	      			</span>
		     	</span>
		     
		      
		    </button>
		</div>

		<div class="main-menu" id="menu" role="menu" v-if="active">
		    <div class="columns">

				<div class="column is-half">
					<div class="columns">
						<div class="column">
							<h3 class="main-menu-title">Statuses</h3>
				    		<hr class="dropdown-divider">
				    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> In Assign Queue</a>
				    		<hr class="dropdown-divider">
				    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-user-plus"></i></span> Assignment</a>
					    	<hr class="dropdown-divider">
							<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-money"></i> </span> Submit an Estimate</a>
							<hr class="dropdown-divider">
							<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-usd"></i> </span> Issue an Estimate Correction</a>
						</div>
						<div class="column">
							<h3 class="main-menu-title is-hidden-mobile">&nbsp;</h3>
				    		<hr class="dropdown-divider">
				    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-mobile"></i></span> Customer Contacted</a>
					    	<hr class="dropdown-divider">
					    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-search"></i> </span> Site Inspected</a>
					    	<hr class="dropdown-divider">
							<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-times-circle"></i> </span> File Closed</a>
							<!-- <a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-usd"></i> </span> Issue an Estimate Correction</a> -->
							<hr class="dropdown-divider">
							<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-folder-open-o"></i></span> File Reopened</a>
						</div>
					</div>

					
		    	</div>

		    	<!-- <div class="column">
		    		<h3 class="main-menu-title is-hidden-mobile">&nbsp;</h3>
		    		<hr class="dropdown-divider">
		    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-mobile"></i></span> Customer Contacted</a>
			    	<hr class="dropdown-divider">
			    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-search"></i> </span> Site Inspected</a>
			    	<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-times-circle"></i> </span> File Closed</a>
					<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-folder-open-o"></i></span> File Reopened</a>
		    	</div> -->

		    	<div class="column">
		    		<h3 class="main-menu-title">Billing</h3>
		    		<hr class="dropdown-divider">
		    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Create an Invoice</a>
			    	<hr class="dropdown-divider">
			    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-credit-card"></i> </span> Add Adjuster Expenses</a>
			    	<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-file-pdf-o"></i></span> Preview Invoice</a>
					<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-envelope-o"></i></span> Send Invoice to Carrier</a>
		    	</div>

		    	<div class="column">
		    		<h3 class="main-menu-title">Communication</h3>
		    		<hr class="dropdown-divider">
		    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-comments-o"></i></span> Message Reviewer</a>
			    	<hr class="dropdown-divider">
			    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-comment-o"></i></span> Message Dispatch</a>
			    	<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-user-times"></i> </span> Request Reassignment</a>
					<hr class="dropdown-divider">
					<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-map-marker"></i></span> Send Location Data (sms) </a>
		    	</div>

		    	<div class="column is-hidden-desktop">
		    		<a @click="active = !active; scrollTop()" class="delete"></a> <small><span @click="active = !active; scrollTop()" style="cursor: pointer">close menu</span></small>
		     	</span>
		     
		      
		    </button>
		  </div>
		</div>
		    	</div>

		    	
		    	
		    </div>
		  </div>

	</div>
</template>
<script>
	import claimData from './claimData.js';
	import grossLoss from './GrossLoss.vue';
	export default {
		name: 'Title',
		components: {
			grossLoss,
		},
		data() {
			return  claimData;
		},
		methods: {
			scrollTop(){
				window.scrollTo(0,0);			}
		}
	}
</script>