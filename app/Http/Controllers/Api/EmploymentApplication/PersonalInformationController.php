<?php

namespace CCG\Http\Controllers\Api\EmploymentApplication;

use CCG\Http\Controllers\Controller;
use CCG\Http\Requests\ValidatePersonalInfo as Validate;
use Illuminate\Http\Request;

class PersonalInformationController extends Controller
{
    public function store(Validate $request)
    {
    	$request->merge(['user_id' => $request->user()->id]);

    	if (!$request->user()->profile) {
    		$profile = $request->createUserProfile();
    	} else {
    		$profile = $request->updateUserProfile();
    	}

    	$license = $request->createAdjusterLicense();
    	return response('Information Saved', 200)
                  ->header('Content-Type', 'text/plain');
    }
}
