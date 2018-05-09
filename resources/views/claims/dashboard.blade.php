@extends('layouts.app')

@section('title')
    Claims
@endsection

@section('content')
        
    

    <div id="claims-app" class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <title :text="titleText" :other="otherText"></title>
        <!-- <navigation></navigation> -->
        <router-view :title.sync="titleText" :other.sync="otherText" btn-text='Create Claim'></router-view>
    </div>

@endsection

@section('scripts')

    <script type="text/javascript">
        // $('#claims').addClass('active');
		var superAdmin = {!! json_encode($superAdmin) !!}
		// console.log(superAdmin);
    </script>
   <script type="text/javascript" src="/js/claims-dashboard.js"></script>
    {{-- <script src="{{ mix('/js/claims-dashboard.js') }}"></script> --}}

@endsection