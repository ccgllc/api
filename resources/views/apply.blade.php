@extends('layouts.app')

@section('title') Employment Application @endsection

@section('content')
	<section id="apply" class="section">
		<div class="container">
			<div class="columns">
				<div class="column is-half is-offset-one-quarter">

					<section-title></section-title>	
					<br>
					<application-progress></application-progress>
					<br>
			   		<router-view></router-view>

		   		</div>
	   		</div>
	  	</div>
	</section>
@endsection

@section('scripts')
	<script> 
		window.userData = {!! $user->toJson() !!};
	</script>
	<script
      src="{{ env('GOOGLE_MAPS_API_KEY') }}">
    </script>
	<script src="{{ mix('/js/apply.js') }}"></script>
@endsection