<?php

namespace CCG\Http\Controllers\Api\Acl;

// use CCG\AdjusterLicense;
use CCG\Http\Controllers\Controller;
use CCG\ModelFilters\UserFilters;
use CCG\User;
use Illuminate\Http\Request;

class UserAdministrationController extends Controller
{
    public function filter(UserFilters $filters)
    {
        $users = User::filter($filters)
                    ->with('adjusterLicenses', 'certifications', 'workHistory', 'softwareExperiences', 'profile')
                    ->get();

        return $users;
    }

    public function getAll()
    {
    	return User::exclude('api_token')->get();
    }

    public function destroyUsers(\Illuminate\Http\Request $request)
    {
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
    	$user->roles()->toggle($request->all());
    	return $user->roles->toJson();
    }

    public function toggleAvailability(Request $request, $id)
    {
        // dd('route');
        $user = User::findOrFail($id);
        $user->available = $request->available;
        $user->save();
        return $user->available;
    }
    public function updatePriority(Request $request, $id) 
    {
        $user = User::findOrFail($id);
        $user->priority = $request->input('text');
        $user->save();
       return response($user->priority, 200);
    }
    public function updateNotes(Request $request, $id) 
    {
        $user = User::findOrFail($id);
        $user->notes = $request->input('text');
        $user->save();
        return response($user->notes, 200);
    }
    public function updateStatus(Request $request, $id) 
    {
        $user = User::findOrFail($id);
        $user->status = $request->input('status');
        $user->save();
        return response($user->status, 200);
    }
}
