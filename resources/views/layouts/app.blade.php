<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} | @yield('title')</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="/favicon.ico"> 

</head>
<body>
    <!--[if lte IE 11]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
  
    <div id="app">
        @include('partials.support')
        
        @include('partials.top-bar')

        <div class="columns is-gapless app-content">
            <div class="column">
                <div class="section is-main">
                 @yield('content')
                </div>
            </div> 
        </div>

        <div class="columns is-app-footer">
            <div class="column has-text-centered">
                <span class="has-text-centered"><small><strong>CCG CMS Version {{ env('APP_VERSION') }}</strong></small></span><br>
                <small>© Claim Consultant Group {{ \Carbon\Carbon::now()->format('Y') }}. All rights reserved.</small>
            </div>
        </div>

        
       
    </div>


    <!-- Scripts -->
    <script>window.user = {!! json_encode(Auth::user()) !!}</script>
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    @yield('scripts')
</body>
</html>
