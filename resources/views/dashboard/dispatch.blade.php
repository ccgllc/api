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
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ2-Na1yIv_0zOlDuTbrizwya-5HcL1C0&libraries=places">
    </script>
	<script src="{{ mix('js/dispatch.js') }}"></script>
@endsection