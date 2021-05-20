<?php

namespace CCG\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $user = \Auth::loginUsingId(1);
       View::composer('*', function($view){
             $user = \Auth::user();
            // dd($user);
            if ($user) {
                $user->load('avatar', 'permissions', 'roles.permissions', 'assignments.claim');
                $user->claims = $user->claims();
            }
            View::share('user', $user);
       });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
