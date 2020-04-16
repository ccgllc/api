<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>CCG Invoice For Claim #{{ $invoice->claim->claim_number }}</title>
	<link rel="stylesheet" href="{{ base_path('/public/css/app.css') }}">
	<style>
		body {
			font-family: sans-serif !important; 
			font-size: 12px;
		}
		tr td strong {
			vertical-align: center;
		}
		.container {
			padding: 0 2em 0 2em;
		}
		.logo {
			width: 20%;
			height: auto;
			margin-bottom: 2em;
		}
		.subtitle {
			margin-bottom: 2em;
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
	<section class="section">
		<div class="container">

			<div class="logo">
				<img src="{{ base_path('/public/images/ccg-logo.png') }}" width="100%" height="auto" alt="CCG">
			</div>
			
			<h1 class="title">Invoice</h1>
			<h3 class="subtitle">Claim #{{ $invoice->claim->claim_number }}</h3>

			<table class="table is-fullwidth">
				<thead>
					<tr>
						<th>Description</th>
						<th class="has-text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					@foreach($invoice->data->lineItems as $lineItem)
					<tr>
						<td>
							{{ $lineItem->description }} 
							@if(isset($lineItem->quantity))
								<span class="has-text-weight-bold">({{ $lineItem->quantity }})</span>
							@elseif($lineItem->type == 'ServiceFeeLineItem')
								<span class="has-text-weight-bold">(GLA: {{$lineItem->amount}})</span>
							@endif
						</td>
						<td class="has-text-right">{{ $lineItem->total }}</td>
					</tr>
					@endforeach
					<tr>
						<td><span class="has-text-weight-bold">Sub Total</span></td>
						<td class="has-text-right has-text-weight-bold">${{ $invoice->data->subTotal }}</td>
					</tr>
					<tr>
						<td><span class="has-text-weight-bold">Tax</span></td>
						<td class="has-text-right has-text-weight-bold">${{ $invoice->data->tax }}</td>
					</tr>
					<tr>
						<td><span class="has-text-weight-bold">Total</span></td>
						<td class="has-text-right has-text-weight-bold">${{ $invoice->data->total }}</td>
					</tr>
				</tbody>
			</table>
			<br><br><br><br>
			<table class="table is-fullwidth">
				<tbody>
					
				</tbody>
			</table>

		</div>{{-- end container --}}
	</section>
	
</body>
</html>