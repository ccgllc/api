<template>
	<!-- <div class="columns"> -->
		<div class="#" style="margin-bottom: 1em;">
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
					<div class="column">
						<h3 class="main-menu-title">Statuses</h3>
			    		<hr class="dropdown-divider">
			    		<a href="#"  @click="setStatusType(statusesList[1])" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Assign Adjuster</a>
			    		<hr class="dropdown-divider">
			    		<a href="#" @click="setStatusType(statusesList[2])" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Assign Reviewer</a>
			    		<hr class="dropdown-divider">
			    		<a href="#" @click="setStatusType(statusesList[3])" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-user-plus"></i></span> Reassign</a>
			    		<hr class="dropdown-divider">
				    	<a href="#" @click="setStatusType(statusesList[4])" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-mobile"></i></span> Customer Contacted</a>
				    	<hr class="dropdown-divider">
				    	<a href="#" @click="setStatusType(statusesList[5])" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-search"></i> </span> Site Inspected</a>
				    	<!-- <hr class="dropdown-divider"> -->
					</div>

					<div class="column">
						<h3 class="main-menu-title is-hidden-mobile">&nbsp;</h3>
						<hr class="dropdown-divider">
						<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-money"></i> </span> Submit an Estimate</a>
						<hr class="dropdown-divider">
						<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-usd"></i> </span> Issue an Estimate Correction</a>
			    		<hr class="dropdown-divider">
						<a href="#" @click="setStatusType({ type: 'date', name: 'File Closed'})" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"> <i class="fa fa-folder-o"></i> </span> Close File</a>
						<hr class="dropdown-divider">
						<a href="#" @click="setStatusType({ type: 'date', name: 'File Reopened'})" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-folder-open-o"></i></span> Reopen File</a>
					</div>

			    	<div class="column">
			    		<h3 class="main-menu-title">Billing</h3>
			    		<hr class="dropdown-divider">
			    		<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-plus-circle"></i></span> Create an Invoice</a>
				    	<hr class="dropdown-divider">
				    	<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-credit-card"></i> </span> Add Adjuster Expenses</a>
				    	<hr class="dropdown-divider">
						<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-file-pdf-o"></i></span> Preview Invoice</a>
						<hr class="dropdown-divider">
						<a href="#" class="is-menu-button dropdown-item"><span class="icon has-text-info is-small"><i class="fa fa-paper-plane-o"></i></span> Send Invoice to Carrier</a>
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
			     	</div>
				</div>
		  	</div>
		</div>
	<!-- </div> -->
</template>
<script>
	import claimData from './claimData.js';
	// import grossLoss from './GrossLoss.vue';
	export default {
		name: 'ClaimMenu',
		data() {
			return  claimData;
		},
		methods: {
			setStatusType(data) {
				this.$emit('status-set', data);
				return this.$emit('new-status-toggle')
			}
		}
	}
</script>