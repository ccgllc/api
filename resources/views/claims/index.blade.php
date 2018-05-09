@extends('app')

@section('content')

    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <div class="row">
                <h1 class="page-header">Claims</h1>
                @if(!$claims->isEmpty())
				<div class="table-responsive">
                	<table class="table table-striped table-hover">
                    <thead>
                        <tr>
                        	<!-- <th>Status</th> -->
                       		<th>Claim #</th>
                            <th>Insureds Name</th>
                            <th>Type Of Loss</th>
                            <th>Carrier</th>
                            <th>Date Of Loss</th>
                            <!-- <th>Location</th> -->
                        </tr>
                    </thead>
                    <tbody>
                	@foreach($claims as $claim)
                        <tr>
							{{-- 
							<td>
                        	<a href="/claims/{{$claim->id}}">
                        		{{$claim->claimStatuses->last()->status_type}}
                    		</a>
                    		</td>
                            --}}

                        	<td>
                        	<a href="/claims/{{$claim->id}}">
                        		{{$claim->claim_number}}
                    		</a>
                    		</td>

                            <td>
                            <a href="/claims/{{$claim->id}}">
                            	{{$claim->insured}}
                            </a>
                            </td>

                            <td>
                            <a href="/claims/{{$claim->id}}">
                            	{{$claim->claim_type}}
                        	</a>
                            </td>

                            <td>
                            <a href="/claims/{{$claim->id}}">
                            	{{$claim->carrier_name}}
							</a>
                        	</td>

                            <td>
                            <a href="/claims/{{$claim->id}}">
                            	{{$claim->date_of_loss->toFormattedDateString()}}
                        	</a>
                        	</td>
                            {{-- 
                            <td>
                            <a href="/claims/{{$claim->id}}">
                            	{{$claim->riskLocations[0]->city}}, {{$claim->riskLocations[0]->state}}
							</a>
                            </td>
                            --}}
                        </tr>
                    @endforeach
					</tbody>
				</table>
				@else
				<div class="row">
					<p class="center-block">No claims yet, go make some.</p>
				</div>		
				@endif
			</div>
        </div>
    </div>
@endsection
@section('scripts')
    <script type="text/javascript">
        $('#claims').addClass('active');
    </script>
@endsection