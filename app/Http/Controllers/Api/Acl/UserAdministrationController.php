<?php

namespace CCG\Http\Controllers\Api\Acl;

use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserAdministrationController extends Controller
{
    public function getAll()
    {
    	return \CCG\User::exclude('api_token')->get();
    }

    public function destroyUsers(\Illuminate\Http\Request $request)
    {
        // return $request->users;
        return \CCG\User::destroy($request->users);
    }

    public function destroy($id)
    {
        return \CCG\User::destroy($id);
    }

    public function getRoles($id)
    {
    	return \CCG\User::with('roles')->whereId($id)->firstOrFail();
    }

    public function syncRoles(Request $request, $id)
    {
    	$user = \CCG\User::findOrFail($id);
    	// dd($request->all());
    	$user->roles()->sync($request->all());
    	return $user->roles->toJson();
    }
}
