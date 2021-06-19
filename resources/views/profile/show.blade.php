@extends('layouts.app')

@section('title')
	{{ isset($profile) ? $profile->name : $user->name }}'s Profile.
@endsection

@section('content')
	<div id="profile">
		{{-- <div class="column" style='margin: 0; overflow: hidden;'> --}}
		<search></search>

		<div class="columns" style="margin: .25em;">
			<div class="column" style='margin: 0; overflow: hidden;'>
				{{-- <router-view :user="user"></router-view> --}}
				<personal-information :user="user"></personal-information>
				<licenses></licenses>
				<documents></documents>
				<certifications></certifications>
				<work-history></work-history>
				<avatar :img-path="getAvatarPath()"></avatar>
			</div>
		</div>
	</div>

			{{-- <div class="column is-3">
				@if(auth()->user()->hasRole('administrator'))
					@include('partials.user.info')
				@endif
			</div>
		</div> --}}
		{{-- <div class="columns" > --}}
			{{-- <profile-navigation :user="user" application-date="{{ $user->profile->created_at->diffForHumans() }}"></profile-navigation> --}}
		
		{{-- </div>end columns --}}
	{{-- </div>end container column   --}}
@endsection

@section('scripts')
	<script 
    src="{{ env('GOOGLE_MAPS_API_KEY') }}">
  </script>
	<script>
		window.user = {!! $user->toJson() !!}
		window.userData = {!! isset($profile) ? $profile->toJson() : $user->toJson() !!};
		window.roles = {!! $roles->toJson() !!};
		window.availablePermissions = {!! $permissions->toJson() !!};
	</script>
	<script src="{{ mix('js/profile.js') }}"></script>
@endsection