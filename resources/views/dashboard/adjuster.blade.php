@extends('layouts.app')

@section('title')
	Adjuster Dashboard
@endsection

@section('content')
	<div id="dashboard">
		<router-view></router-view>
		{{-- <h1 class="title">Adjuster Dashboard</h1><hr style="background: #dfdfdf;"> --}}
	</div>
@endsection

@section('scripts')
	<script> window.adjusterData = {!! json_encode($data) !!} </script>
	<script src="{{ mix('js/AdjusterDashboard.js') }}"></script>
@endsection