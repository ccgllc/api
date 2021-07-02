@extends('layouts.app')

@section('title')
	User Dashboard
@endsection

@section('content')
	<div id="dashboard">
		<search></search>
		<div class="columns" style="margin: 0">
			<div class="column" style='margin: 0;'>
				<router-view></router-view>
			</div>
		</div>
		<div class="columns" style="margin: 0">
			<div class="column" style='margin: 0;'>
				<user-list></user-list>
			</div>
		</div>
	</div>
@endsection

@section('scripts')
	<script> window.dashboardData = {!! json_encode($data) !!} </script>
	<script src="{{ mix('js/UserDashboard.js') }}"></script>
@endsection