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