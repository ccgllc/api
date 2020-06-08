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
        return $next($request)
            ->headers->set('Access-Control-Allow-Origin', '*')
            ->headers->set('Access-Control-Allow-Headers', 'X-REQUESTED-WITH, Content-Type');
    }
}
