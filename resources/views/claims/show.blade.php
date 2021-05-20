@extends('layouts.app')

@section('title')
    Claim {{ $claim->claim_number }}
@endsection

@section('content')
  <div id="claim">

    <search></search> 

    <page :title="`Claim # ${claim.claim_number} • ${claim.statuses[0].name}`" :description="claim.carrier.name"  style="margin: 1em;">
     {{--  <div class="columns" style="padding:; 2em;">
        <div class="column"> --}}
          <div class="columns" style=" background: #f2f2f2; margin-left: .025em; margin-right: .025em;">
            <div id="left-side" class="column">
              {{-- <title-header></title-header> --}}
              {{-- <claim-menu @status-set="setStatus" @new-status-toggle="toggleCreatingNewStatus"></claim-menu> --}}
              <claim-nav></claim-nav>
              <router-view></router-view>
            </div>  

            {{-- <div id="right-side" class="column is-2">
                <assignees @status-set="setStatus" @new-status-toggle="toggleCreatingNewStatus"></assignees>
                <timeline></timeline>
            </div> --}}
        </div>

          <new-status 
              @new-status-toggle="toggleCreatingNewStatus()"
          >   
          </new-status>

        </div>
      {{-- </div> --}}
    {{-- </page> --}}
  </div>
@endsection

@section('scripts')
    <script type="text/javascript">
        var claim = {!! $claim->toJson() !!};
        var user = {!! $user->toJson() !!};
    </script>
    <script src="{{ env('GOOGLE_MAPS_API_KEY') }}"></script>
    <script src="{{ mix('/js/claim.js') }}"></script>

@endsection