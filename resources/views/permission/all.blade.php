@extends('layouts.app')

@section('title') Manage Permissions @endsection

@section('content')
	<div id="permissions">
		<permissions :permissions="permissions"></permissions>
	</div>
@endsection

@section('scripts')
	<script>window.permissions = {!! $permissions->toJson() !!};</script>
	<script src="{{ mix('/js/managePermissions.js') }}"></script>
@endsection