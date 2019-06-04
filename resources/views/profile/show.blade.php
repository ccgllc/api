@extends('layouts.app')

@section('title')
	{{ $user->name }}'s Profile.
@endsection

@section('content')

	<div class="columns is-gapless" id="profile">

	<div class="options column is-1 has-text-centered">
		 {{-- @include('partials.user.options') --}}
	 </div>

    <div class="column is-10">
		<div class="columns">

			<div class="column is-9">
				@include('partials.user.card')
			</div>

			<div class="column is-3">
				@if(auth()->user()->hasRole('administrator'))
					@include('partials.user.info')
				@endif
			</div>
		</div>
		<div class="columns" style="margin-top: 4rem;">
			<div class="column is-12">
				<profile-navigation></profile-navigation>
				<router-view></router-view>
			</div><!-- end column -->
		</div><!-- end columns -->
	</div><!--end container column --> 
	</div>
@endsection

@section('scripts')
	<script 
      src="{{ env('GOOGLE_MAPS_API_KEY') }}">
    </script>
	<script>
		window.userData = {!! $user->toJson() !!};
		window.roles = {!! $roles->toJson() !!};
	</script>
	<script src="{{ mix('js/profile.js') }}"></script>
@endsection