@extends('layouts.app')

@section('title')
    Claim {{ $claim->claim_number }}
@endsection

@section('content')
  <div id="claim">

    <search></search> 

    <page :title="claimTitle" :description="claim.carrier.name"  style="margin: 1em;">

      <template v-slot:top-right>
        <div class="is-flex is-justify-content-flex-end  is-align-items-center">
        <div class="is-flex is-flex-direction-column has-text-right" style="margin-right: .5em;">
          <span class="is-size-5 has-text-weight-bold" v-text="getAdjuster"></span>
          <div class="is-size-6">Assigned Adjuster</div>
        </div>
          <img v-if="adjuster.user !== undefined && adjuster.user.avatar != undefined" width="50px" height="auto" style="border-radius:1000px; border: 5px solid #3e8ed0;" :src="adjuster.user.avatar.path" alt="getAdjuster">
        </div>
      </template>

      <template v-slot:default>
        <div class="columns" style=" background: #f2f2f2; margin-left: .025em; margin-right: .025em;">
          <div id="left-side" class="column">
            <claim-nav></claim-nav>
            <router-view></router-view>
          </div>  
        </div>
      </template>

      {{-- 
      <new-status 
        @new-status-toggle="toggleCreatingNewStatus()"
      >   
      </new-status> 
      --}}

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