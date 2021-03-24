<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

	<title>CCG Invoice For Claim #{{ $invoice->claim->claim_number }}</title>
	<link rel="stylesheet" href="{{ public_path('/css/bootstrap.css') }}">

	{{-- <link rel="stylesheet" href="{{ base_path('/public/css/app.css') }}"> --}}
	<style>
		body {
			font-size: 1em;
			color: #353c4e;
		}
		thead tr {
			border-top: none;
		}
		tr td  {
			vertical-align: center;
		}
		/*.columns: {
			width: 100%;
		}
		.column:{
			width: 33.33%;
			padding: 1em;
		}*/
		.logo {
			display:block;
			width: 80%;
			height: auto;
			margin-bottom: 2em;
		}
		.heading {
			font-family: sans-serif;
			font-weight: 500;
			font-size: 2em;
			color: #353c4e;
		}
		.subtitle {
			margin-bottom: .5em;
		}
		.compact {
			margin-top: -20px;
		}
		.flag {
			color: red;
		}
	</style>
</head>
<body>
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-6">
					<img src="{{ public_path('images/ccg-logo-updated.png') }}" width="181px" height="65px" alt="CCG"><br><br>
					{{-- <hr> --}}
					<p>
						<strong>Remit Payment To</strong>: <br>
						Claim Consultant Group, LLC <br>
						308 S. Meadowlark St. <br>
						Lakeway TX, 78734
					</p>
				</div>
				<div class="col-xs-5 text-right">
					<span style="font-family:sans-serif; font-weight: 700; font-size:6em; text-transform: uppercase; line-height: 1.1em;text-shadow: 5px 5px #3882b0;">Invoice</span> <br>
					<strong>Date:</strong> <span style="color: #3a81af;font-size:1.25em;">{{ $invoice->created_at->format('m/d/Y') }}</span>&nbsp;
					<span >|</span>&nbsp;
					<strong>Invoice #:</strong> <span style="color: #3a81af; font-size:1.25em;">{{ $invoice->claim->claim_number }}</span>&nbsp;
					{{-- <span></span>  --}}
				</div>
			</div>	

			<hr>		

			<span style="font-family: sans-serif; font-size: 1.75em; margin-bottom: 1em;">
				{{ $invoice->claim->carrier->name }}
				</span>
				<br><br>
				<strong style="">Claim Number</strong>:
				<span style="color: #3a81af;">{{ $invoice->claim->claim_number }}</span> 
				&nbsp;<span >|</span>&nbsp;
				<strong style="">Gross Loss Amount</strong>:
				<span style="color: #3a81af; margin-right: 2em;">{{ $invoice->data->lineItems[0]->amount }}</span> &nbsp;| &nbsp;
				<strong style="">Policy Number</strong>:
				<span style="color: #3a81af; margin-right: 2em;">{{ $invoice->claim->claim_data->policy->policyNumber }}</span>
			<hr>


			<div class="row" style="margin-top: 2em;">
				<div class="col-xs-4">
					<p>
							<strong>Insured</strong>:<br>
						{{ ucwords(strtolower($invoice->claim->claim_data->client->name)) }}<br>
						{{ ucwords(strtolower($invoice->claim->claim_data->client->addresses[0]->street)) }}<br>
						{{ ucwords(strtolower($invoice->claim->claim_data->client->addresses[0]->city)) }}
						{{ $invoice->claim->claim_data->client->addresses[0]->state }},
						{{ $invoice->claim->claim_data->client->addresses[0]->zip }}
					</p>
				</div>
				<div class="col-xs-3">
					
					<p><strong>Claim Type</strong>: {{ $invoice->claim->claim_type }}</p>
					<p><strong>Type Of Loss</strong>: {{ $invoice->claim->type_of_loss }}</p>
					<p><strong>Adjuster</strong>: {{ $invoice->claim->assignments->last()->user->name ?? 'na' }}</p>
				</div>
				<div class="col-xs-3">
					<p><strong>Date of Loss</strong>: {{ $invoice->claim->date_of_loss }}</p>
					<p><strong>Date Received</strong>: {{ $invoice->claim->date_received }}</p>
					<p><strong>Date Contacted</strong>: 
						@if($contacted = $invoice->claim->statuses->where('name', 'Contacted')->first())
							{{ \Carbon\Carbon::parse($contacted->date)->format('m/d/Y') }}
						@else
							n/a
						@endif
					</p>
					<p><strong>Date Inspected</strong>: 
						@if($contacted = $invoice->claim->statuses->where('name', 'Site Inspected')->first())
							{{ \Carbon\Carbon::parse($contacted->date)->format('m/d/Y') }}
						@else
							n/a
						@endif
					</p>
				</div>
			</div>


			{{-- <hr> --}}

			<table class="table table-striped" style="margin-top: 1em;">
				<thead>
					<tr>
						<th style="border: none;">Qty</th>
						<th style="border: none;">Description</th>
						<th style="border: none;">Rate</th>
						<th style="border: none;" class="text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					@foreach($invoice->data->lineItems as $lineItem)
					@if($lineItem->total > 0)
						<tr>
							<td>
								@if(isset($lineItem->quantity))
									<span><strong>{{ isset($lineItem->minimum) ? ($lineItem->quantity - $lineItem->minimum) : $lineItem->quantity }}</strong></span>
								@else
									<span><strong>1</strong></span>
								@endif	
							</td>
							<td>
								{{ $lineItem->description }} 
								@if($lineItem->type == 'ServiceFeeLineItem')
									<span><em>(Gross Loss Amount: {{$lineItem->amount}})</em></span>
								@elseif($lineItem->description == 'Mileage')
									{{-- 28.9 billable miles ( 78.9 total miles less 50 included miles ) --}}
									<span><em>({{$lineItem->quantity }} total, less {{ ($lineItem->minimum) }} included)</em></span>
								@endif
							</td>
							<td>
								@if(isset($lineItem->rate))
									{{  number_format($lineItem->rate, 2, '.', ',')}}
								@else	
									{{ $lineItem->total }}
								@endif
							</td>
							<td class="text-right">${{ $lineItem->total }}</td>
						</tr>
						@endif
					@endforeach
				</tbody>
				{{-- <tfoot>
				<tr>
						<th> Claim Consultant Group - 308 South Meadowlark Street Lakeway TX, 12345</th>
						<th></th>
					</tr>
					</tfoot> --}}
			</table>

			<div class="row">
				<div class="col-xs-3 col-xs-offset-8">
					<table class="table" style="position: relative; left: 3.25em;">
					<tr>
						<td style="border: none;"><strong>Sub Total</strong></td>
						<td style="border: none;" class="text-right has-text-weight-bold">${{ $invoice->data->subTotal }}</td>
					</tr>
					<tr>
						<td style="border: none;"><strong>Tax</strong></td>
						<td style="border: none;" class="text-right has-text-weight-bold">${{ number_format($invoice->data->tax, 2, '.', ',') }}</td>
					</tr>
					<tr>
						<td><strong>Total</strong></td>
						<td class="text-right"><strong>${{ $invoice->data->total }}</strong></td>
					</tr>
			</table>
				</div>
			</div>

			<div class="footer" style="position: absolute; bottom:95; width: 100%;">
				<div class="text-center" style="margin: 0 auto; width: 100%;">
					{{-- <hr> --}}
					<p>Make all checks payable to:</p>
					<span style="font-size: 1.25em; font-weight:700; color: #3a81af;">Claim Consultant Group, LLC</span><br>
					<span style="font-size: 1.25em; font-weight:700;">Please include invoice number on all checks</span><br>
					<span style="font-size: 1.25em; font-weight:700;">Thank you for your business!</span>
					<hr>
					<div class="text-center">
						<p>308 S. Meadowlark St. Lakeway TX, 78734 • Toll Free: 888.645.1480 • info@claimconsultantgroup.com</p>
					</div>
					
				</div>
			</div>
			
		</div>{{-- end container --}}
	
</body>
</html>