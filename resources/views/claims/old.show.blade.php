@extends('app')
<?php \DB::getQueryLog(); ?>
@section('content')
 	@include('dashboard._nav')
 	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
 		<a href="/claims"><span class="glyphicon glyphicon-chevron-left"></span>back to all claims</a>
		<h1>Claim Detail</h1>
		
		<div class="pad"></div>

		<h3 class="page-header">Summary</h3>
			<div class="row">
				<div class="col-md-4">
					<table style="width: 100%;">
						<tr>
							<td><b>Insurred Name:</b></td>
							<td>{{$claim->insured}}</td>
						</tr>
						<tr>
							<td><b>Claim Number: </b></td>
							<td>{{$claim->claim_number}}</td>
						</tr>
						<tr>
							<td><b>Carrier: </b></td>
							<td>{{$claim->carrier_name}}</td>
						</tr>
						<tr>
							<td><b>Assigned To:</b></td>
							<td>Unassigned</td>
						</tr>
						<tr>
							<td><b>Status:</b></td>
							<td>TBD</td>
						</tr>
					</table>
				</div>
			</div>

			<div class="pad"></div>

		<h3 class="page-header">Property Owner / Risk Information</h3>
			<div class="row">
				<div class="col-md-4">
					<table style="width: 100%;">
						<tr>
							<td><b>Contact</b></td>
							<td>
								<address>
								  <strong>{{$claim->name}}</strong><br>
								  {{$claim->riskLocations[0]->street}}<br>
								  {{$claim->riskLocations[0]->city}}, 
								  {{$claim->riskLocations[0]->state}},
								  {{$claim->riskLocations[0]->postal}}<br>
								</address>
								
							</td>
						</tr>
						@if ($claim->riskLocations->count() < 2)
						<tr>
							<td><b>Lat x Lon:</b></td>
							<td>
								 
									{{$claim->riskLocations[0]->lat}} <b>x</b>
									{{$claim->risklocations[0]->lon}}
							</td>
						</tr>
						@endif
						@foreach($claim->ownerContactNumbers as $number)
						<tr>
							<td><b>{{$number->type}}:</b></td>
							<td>{{$number->number}} @if($number->extension) - <b>ext:</b> {{$number->extension}} 
							@elseif($number->primary == 1) - <b>Primary</b> @endif
							</td>
						</tr>
						@endforeach
						<tr>
							<td><b>email:</b></td>
							<td>
								{{$claim->email}}
							</td>
						</tr>
					</table>
				</div>

				<div class="col-md-4 col-md-4-offset-4">
					<table style="width: 100%;">
					@if($claim->claimant)
						<tr>
							<td><b>Claimant:</b></td>
							<td>
								<address>
									<strong>{{$claim->claimant->name}}</strong><br>
									{{$claim->claimant->street}} <br>
									{{$claim->claimant->city}} 
									{{$claim->claimant->state}}, {{$claim->claimant->postal}} <br>
									<abbr title="Claimant Phone">P:</abbr> 
								   {{$claim->claimant->phone}} 
								   @if($claim->claimant->extension) - <b>ext</b> {{$claim->claimant->extension}} @endif
								</address>
							</td>
						</tr>
					@endif
					
					@if($claim->riskLocations->count() > 1)
						<tr>
							<td><b>Risk Location:</b></td>
							<td>
								<address>
									<strong>{{$claim->riskLocations[1]->name}}</strong><br>
									{{$claim->riskLocations[1]->street}} <br>
									{{$claim->riskLocations[1]->city}} 
									{{$claim->riskLocations[1]->state}}, {{$claim->riskLocations[1]->postal}} <br>
									{{$claim->riskLocations[1]->lat}} <b>x</b> {{$claim->riskLocations[1]->lon}}
								</address>
							</td>
						</tr>
					@endif
					</table>
				</div>
				<div class="col-md-4 col-md-4-offset-8">
					@if($claim->accessContact)
					<table style="width:100%;">
						<tr>
							<td><b>Access Contact:</b></td>
							<td>
								<strong>{{$claim->accessContact->name}}</strong><br>
								{{$claim->accessContact->phone}}
								@if($claim->accessContact->extension) - <b>{{$claim->extension}}</b> @endif
							</td>
						</tr>
						</table>
					@endif
				</div>
			</div>

			<div class="pad"></div>

		<h3 class="page-header">Claim Information</h3>
			<div class="row">
				<div class="col-md-4">
					<table style="width:100%">
						<tr>
							<td><b>Type Of Loss:</b></td>
							<td>{{$claim->type_of_loss}}</td>
						</tr>
						<tr>
							<td><b>Job Type:</b></td>
							<td>{{$claim->job_type}}</td>
						</tr>
						<tr>
							<td><b>Job Size:</b></td>
							<td>{{$claim->job_size}}</td>
						</tr>
						<tr>
							<td><b>Claim #:</b></td>
							<td>{{$claim->claim_number}}</td>
						</tr>
						<tr>
							<td><b>Cat Code:</b></td>
							<td>{{$claim->catastrophe}}</td>
						</tr>
						<tr>
							<td><b>Carrier:</b></td>
							<td>{{$claim->carrier_name}}</td>
						</tr>
						<tr>
							<td><b>Date of Loss:</b></td>
							<td>{{$claim->date_of_loss->toDayDateTimeString()}}</td>
						</tr>
						<tr>
							<td><b>Date Received: </b></td>
							<td>{{$claim->date_received->toDayDateTimeString()}}</td>
						</tr>
					</table>
				</div>
				@if($claim->description)
				<div class="col-md-8 col-md-8-offset-4">
					<h5>Description</h5>
					<p>{{$claim->description}}</p>
				</div>
				@endif
			</div>

			<div class="pad"></div>

		<h3 class="page-header">Policy Information</h3>
			<div class="row">
				<div class="col-md-4">
					<table style="width:100%;">
						<tr>
							<td><b>Policy Number: </b></td>
							<td>{{$claim->policy->policy_number}}</td>
						</tr>
					</table>
				</div>
				<div class="col-md-4 col-md-4-offset-4">
					<table style="width:100%;">
					@unless($claim->policy->inception_date->toDateString() == "-0001-11-30")
						<tr>
							<td><b>Inception Date: </b></td>
							<td>{{$claim->policy->inception_date->toFormattedDateString()}}</td>
						</tr>
					@endunless
						<tr>
							<td><b>Effective Date: </b></td>
							<td>{{$claim->policy->effective_date->toFormattedDateString()}}</td>
						</tr>
					@unless($claim->policy->expiration_date->toDateString() == "-0001-11-30")
						<tr>
							<td><b>Expiration Date: </b></td>
							<td>{{$claim->policy->expiration_date->toFormattedDateString()}}</td>
						</tr>
					@endunless
					</table>
					<br>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<table style="width:100%;">
						<tr>
							<td><b>Apply Deductible: </b></td>
							<td>{{$claim->policy->apply_deductible}}</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<table class="table">
						<thead>
							<tr>
								<th>Coverage</th>
								<th>Type</th>
								<th>Policy Limit</th>
								<th>Deductable</th>
								<th>Apply To</th>
								<th>ITV</th>
								<th>Reserve</th>
							</tr>
						</thead>
						<tbody>
						@foreach($claim->policy->policyCoverages as $coverage)
							<tr>
								<td>{{$coverage->cov_name}}</td>
								<td>{{$coverage->type}}</td>
								<td>{{$coverage->policy_limit}}</td>
								<td>{{$coverage->deductible}}</td>
								<td>{{$coverage->apply_to}}</td>
								<td>{{$coverage->co_ins}}</td>
								<td>{{$coverage->reserve_amt}}</td>
							</tr>
						@endforeach
						</tbody>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<table style="width:100%">
						<tr>
							<td><b>Mortgage Holder:</b></td>
							<td>{{$claim->policy->mortgage_holder}}</td>
						</tr>
						<tr>
							<td><b>Loan Number:</b></td>
							<td>{{$claim->policy->mortgage_loan_number}}</td>
						</tr>						
					</table>
				</div>
			</div>
	</div>
@endsection

@section('scripts')
	<script type="text/javascript">
        $('#claims').addClass('active');
    </script>
@endsection