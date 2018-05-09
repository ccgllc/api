<?php

namespace CCG\Http\Controllers\Api\Profile;

use CCG\Http\Controllers\Controller;
use CCG\Http\Requests\ValidateUserSoftwareExperience as Validate;
use CCG\User;
use Illuminate\Http\Request;

class UserSoftwareExperiencesController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function store(Validate $request, $id)
	{
		$request->merge(['user_id' => $id]);
		$user = User::findOrFail($id);
		return $request->createSoftwareExperience($user);
	}

	public function destroy(Request $request, $id)
	{
		return \CCG\SoftwareExperience::destroy($id);
	}

}