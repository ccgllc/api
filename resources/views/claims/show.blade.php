@extends('layouts.app')

@section('title')
    Claim {{ $claim->claim_number }}
@endsection

@section('content')
  <div id="claim">

    <search></search> 

    <page :title="claimTitle()" :description="claim.carrier.name"  style="margin: 1em;">
      <div class="columns" style=" background: #f2f2f2; margin-left: .025em; margin-right: .025em;">
        <div id="left-side" class="column">
          <claim-nav></claim-nav>
          <router-view></router-view>
        </div>  
      </div>

      <new-status 
        @new-status-toggle="toggleCreatingNewStatus()"
      >   
      </new-status>

        {{-- </div> --}}
      {{-- </div> --}}
    </page>
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