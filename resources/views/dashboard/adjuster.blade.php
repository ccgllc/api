@extends('layouts.app')

@section('title')
	Adjuster Dashboard
@endsection

@section('content')
	<div id="dashboard">
		{{-- <router-view></router-view> --}}
		<h1 class="title">Adjuster Dashboard</h1>
	</div>
@endsection

@section('scripts')
	{{-- <script> window.dashboardData = {!! json_encode($data) !!} </script> --}}
	{{-- <script src="{{ mix('js/dispatch.js') }}"></script> --}}
@endsection