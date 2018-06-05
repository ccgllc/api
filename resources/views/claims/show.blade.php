@extends('layouts.app')

@section('title')
    Claim {{ $claim->claim_number }}
@endsection

@section('content')
        
    
<div class="columns">
    {{-- <div class="column is-1"></div> --}}
    <div class="column">
        <div id="claim">
            <claim></claim>
        </div> 
    </div>
</div>
    

@endsection

@section('scripts')
    <script type="text/javascript">
        var claim = {!! json_encode($claim) !!};
        var user = {!! json_encode($user) !!};
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ2-Na1yIv_0zOlDuTbrizwya-5HcL1C0&libraries=places"></script>
    <script src="{{ mix('/js/claim.js') }}"></script>

@endsection