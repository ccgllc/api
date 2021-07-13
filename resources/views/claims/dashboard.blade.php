@extends('layouts.app')

@section('title')
    Claims
@endsection

@section('content')
        
    <div id="claims">
        
        <search></search>

        <div style="margin: 1em;">
            <page title="Claims" description="A simple list of claims, much more to come...">
                <div class="columns">
                    <div class="column is-12">
                         <router-view btn-text='Create Claim'></router-view>
                    </div>
                </div>
            </page>
        </div>

    </div>
    

@endsection

@section('scripts')

    <script type="text/javascript">
        // $('#claims').addClass('active');
		//var superAdmin = {! json_encode($superAdmin) !!};
        // var claims = { $claims !!};
		// console.log(superAdmin);
    </script>
   {{-- <script type="text/javascript" src="/js/claims-dashboard.js"></script> --}}
    <script src="{{ mix('/js/claims.js') }}"></script>

@endsection