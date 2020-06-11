<?php

namespace CCG\Http\Middleware;

use Closure;

class Cors
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
        if (method_exists($request, 'header')) {
          $request->header('Access-Control-Allow-Origin', '*')
          $request->header('Access-Control-Allow-Headers', 'X-REQUESTED-WITH, Content-Type');
        }
        return $next($request)
    }
}
