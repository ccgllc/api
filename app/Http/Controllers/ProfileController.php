<?php

namespace CCG\Http\Controllers;

use CCG\Role;
use CCG\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('dashboard')->only('show');
	}
    
	public function index()
	{
		$user = Auth::user();
		$user->load(['roles', 'profile', 'xactnetAddresses', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar']);
		// $user->role = $this->prepareRolesForDisplay($user->roles);
		$roles = Role::all();
		$user->claims = $user->claims();
		return response()
					->view('profile.show', compact('user', 'roles'), 200);
					//->header('X-TOKEN', 'klajdbflkajhfa');
	}

	public function show(Request $request, $id)
	{
		$user = User::findOrFail($id);
		$request->session()->put('api_key', $request->user()->api_token);
		\Cache::put('app.stats.test', 32);
		$request->session()->put('roles', $request->user()->roles->pluck('name')->toArray());
		$user->load(['roles', 'profile', 'adjusterLicenses', 'xactnetAddresses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar',]);
		// $user->role = $this->prepareRolesForDisplay($user->roles);
		return view('profile.show', compact('user'));
	}

	protected function prepareRolesForDisplay($roles)
	{
		return ucwords(implode(', ', $roles->pluck('name')->toArray()));
	}
}
