@extends('layouts.app')

@section('title')
	Dispatch Dashboard
@endsection

@section('content')
	<div id="dashboard">
		<dashboard></dashboard>
	</div>
@endsection

@section('scripts')
	<script> 
		var dispatch = {!! json_encode($data) !!}
	</script>
	<script
      src="{{ env('GOOGLE_MAPS_API_KEY') }}">
    </script>
	<script src="{{ mix('js/dispatch.js') }}"></script>
@endsection