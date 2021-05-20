@extends('layouts.app')

@section('title')
	{{$user->name}}'s Dashboard
@endsection

@section('content')
	<div id="dashboard">
		{{-- <h1>Dashboard</h1> --}}
		{{-- <router-view></router-view> --}}
		{{-- <h1 class="title">Adjuster Dashboard</h1><hr style="background: #dfdfdf;"> --}}
		{{-- <page title="Dashboard" description=""> --}}
		<search></search>
		<dashboard></dashboard>
	</div>
@endsection

@section('scripts')
	<script> window.user = {!! $user->toJson() !!} </script>
	<script src="{{ mix('js/dashboard.js') }}"></script>
@endsection