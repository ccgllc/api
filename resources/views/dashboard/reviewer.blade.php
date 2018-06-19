@extends('layouts.app')

@section('title')
	Reviewer Dashboard
@endsection

@section('content')
	<div id="dashboard">
		{{-- <router-view></router-view> --}}
		<h1 class="title">Reviewer Dashboard</h1>
	</div>
@endsection

@section('scripts')
	{{-- <script> window.dashboardData = {!! json_encode($data) !!} </script> --}}
	{{-- <script src="{{ mix('js/dispatch.js') }}"></script> --}}
@endsection