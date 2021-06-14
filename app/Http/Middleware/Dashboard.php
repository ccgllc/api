<?php

namespace CCG\Http\Middleware;

use Closure;

class Dashboard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // dd($request->url);
        if(!$request->user()->hasRole('administrator')) {
            return redirect()->back();
        }
       return $next($request);
    }
}
