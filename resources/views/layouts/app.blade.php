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
    {{-- <meta user="{{ Auth::user() }}"/> --}}

</head>
<body>
    <!--[if lte IE 11]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->
    <div class="columns is-gapless" style="">
        <div id="app" class="column is-2" style="padding: 0; position: sticky; top: 0; z-index: 100000000; max-height: 100vh" >
            <navigation 
                version="{{ env('APP_VERSION') }}" 
                application-date="{{ $user->profile->created_at->diffForHumans() }}" 
                year="{{\Carbon\Carbon::now()->format('Y')}}"
                logout-route="{{ route('logout') }}"
            >
            </navigation>
        </div>

      <div class="column" style="background: #e0e0e0;">
       {{--  <div class="navbar-item" style="background: #f0f0f0; width: 100%; border-bottom: 1px solid #ccc; box-shadow: 0 2px 3px #d6d6d6; position: sticky; top: 0; z-index: 100000">
            <div class="control has-icons-left ml-4">
                <input type="text" class="input is-medium" placeholder="search..." style="background: transparent; border:none; position: sticky; top:0;">
                <span class="icon is-left"><i class="fa fa-search has-text-grey"></i></span>
            </div>
        </div> --}}

            @yield('content')

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
