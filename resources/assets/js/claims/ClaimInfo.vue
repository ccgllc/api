<template>
	<div class="columns">

  	<div class="column">
  		 <div class="card">
  		 	<header class="card-header is-info">
			    <p class="card-header-title">
			      Loss Info
			    </p>
		  	</header>
    		<div class="card-content">
					<dl>
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
  	</div><!-- end column -->

  	<div class="column">
  		 <div class="card">
  		 	<header class="card-header is-info">
			    <p class="card-header-title">
			      Policy Info
			    </p>
		  	</header>
    		<div class="card-content">
					<dl>
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
						<dd>{{ claim.claim_data.policy.applyDeductible || 'Not Provided' }}</dd>
					</dl>
  			</div>
  		</div>
  	</div><!-- end column -->

  	<div class="column" v-if="claim.claim_data.policy.coverages.length">
  		<div class="card">
  		 	<header class="card-header is-info">
			    <p class="card-header-title">
			      Coverages
			    </p>
		  	</header>
    		<div class="card-content">
					<dl v-for="coverage in claim.claim_data.policy.coverages">
						<dt>Coverage Name:</dt>
						<dd>{{ coverage.covName || 'Not Provided' }}</dd>
						<dt>Deductible:</dt>
						<dd>{{ coverage.deductible || 'Not Provided'}}</dd>
						<dt>Policy Limit:</dt>
						<dd>{{ coverage.policyLimit || 'Not Provided'}}</dd>
						<dt>Reserve Ammount:</dt>
						<dd>{{ coverage.reserveAmt || 'Not Provided'}}</dd><hr>
					</dl>
				</div>
			</div>
		</div>

	</div><!-- ends columns -->
</template>
<script>
	import claimData from './claimData.js';
	export default {
		name: 'Info',
		data() {
			return claimData;
		}
	}
</script>

<style>
	/*dl > dt:nth-of-type(odd) {
    background-color: #e9e9e9 ;
	}*/
	dl > dt {
		font-weight: 700;
		padding: 1em;
	}
	dl > dd {
    background-color: #f0f0f0;
    padding: .5em;
}
</style>