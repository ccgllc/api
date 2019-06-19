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
    <script src="{{ env('GOOGLE_MAPS_API_KEY') }}"></script>
    <script src="{{ mix('/js/claim.js') }}"></script>

@endsection