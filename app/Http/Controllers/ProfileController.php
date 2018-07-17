<?php

namespace CCG\Http\Controllers;

use CCG\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Contracts\Routing\ResponseFactory;

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
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar']);
		// $user->role = $this->prepareRolesForDisplay($user->roles);
		return response()
					->view('profile.show', compact('user'), 200);
					//->header('X-TOKEN', 'klajdbflkajhfa');
	}

	public function show(Request $request, $id)
	{
		$user = User::findOrFail($id);
		$request->session()->put('api_key', $request->user()->api_token);
		// $userRoles = $request->user()->roles;
		// $roles = $userRoles->map(function ($role) {
		// 	return $role->name;
		// });
		\Cache::put('app.stats.test', 32);
		$request->session()->put('roles', $request->user()->roles->pluck('name')->toArray());
		// dd($request->session()->all());
		// dd($request->session()->all());
		$user->load(['roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar']);
		$user->role = $this->prepareRolesForDisplay($user->roles);
		return view('profile.show', compact('user'));
	}

	protected function prepareRolesForDisplay($roles)
	{
		return ucwords(implode(', ', $roles->pluck('name')->toArray()));
	}
}
