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

</head>
<body>
    <div id="app">
        
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
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    @yield('scripts')
</body>
</html>
