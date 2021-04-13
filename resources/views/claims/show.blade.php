@extends('layouts.app')

@section('title')
    Claim {{ $claim->claim_number }}
@endsection

@section('content')
        
    
<div class="columns">
    {{-- <div class="column is-1"></div> --}}
    <div class="column">
        <div id="claim">
            <div class="columns">
                <div id="left-side" class="column is-9">
                    <title-header></title-header>
                    {{-- <claim-menu @status-set="setStatus" @new-status-toggle="toggleCreatingNewStatus"></claim-menu> --}}
                    <claim-nav></claim-nav>
                    <router-view></router-view>
                </div>  

                <div  id="right-side" class="column is-3">
                    <assignees @status-set="setStatus" @new-status-toggle="toggleCreatingNewStatus"></assignees>
                    <timeline></timeline>
                </div>
            </div>

            <new-status 
                @new-status-toggle="toggleCreatingNewStatus()"
            >   
            </new-status>

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