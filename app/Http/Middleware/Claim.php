<?php

namespace CCG\Http\Middleware;

use CCG\Claims\Claim as C;
use Closure;

class Claim
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
      if ( ! $this->hasAccess($request->user(), $this->getPermissions($request)) ) 
        {
          return redirect()->back();
        } 
      return $next($request);
    }

     /**
     * Determine user access permissions.
     *
     * @param  \CCG\User  $user
     * @param  string  $permission
     * @return Boolean
     */
    protected function hasAccess($user, $permission)
    {
      return $user->hasRole(['administrator']) || $user->hasPermissionTo($permission)  
        ? true : false;
    }

     /**
     * Build permission string to determine claim access
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function getPermissions($request)
    {
      preg_match('/\d{1,}/', $request->path(), $matches);
      $claimId = $matches[0];
      $claim = C::find($claimId);
      return "access-{$claim->carrier_id}-claims";
    }
}
