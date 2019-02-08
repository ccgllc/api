<?php

namespace CCG\Http\Controllers\Api\Acl;

use CCG\Http\Controllers\Controller;
use CCG\User;
use Illuminate\Http\Request;

class UserAdministrationController extends Controller
{
    public function getAll()
    {
    	return User::exclude('api_token')->get();
    }

    public function destroyUsers(\Illuminate\Http\Request $request)
    {
        // return $request->users;
        return User::destroy($request->users);
    }

    public function destroy($id)
    {
        return User::destroy($id);
    }

    public function getRoles($id)
    {
    	return User::with('roles')->whereId($id)->firstOrFail();
    }

    public function syncRoles(Request $request, $id)
    {
        //todo add validation here.
    	$user = User::findOrFail($id);
    	// dd($request->all());
    	$user->roles()->sync($request->all());
    	return $user->roles->toJson();
    }
}
