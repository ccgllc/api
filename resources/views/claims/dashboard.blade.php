@extends('layouts.app')

@section('title')
    Claims
@endsection

@section('content')
        
    
<div class="columns">
    <div class="column is-12">
        <div id="claims">
            {{-- <title :text="titleText" :other="otherText"></title> --}}
            <!-- <navigation></navigation> -->
            <router-view btn-text='Create Claim'></router-view>
        </div>
    </div>
</div>
    

@endsection

@section('scripts')

    <script type="text/javascript">
        // $('#claims').addClass('active');
		var superAdmin = {!! json_encode($superAdmin) !!}
		// console.log(superAdmin);
    </script>
   {{-- <script type="text/javascript" src="/js/claims-dashboard.js"></script> --}}
    <script src="{{ mix('/js/claims.js') }}"></script>

@endsection