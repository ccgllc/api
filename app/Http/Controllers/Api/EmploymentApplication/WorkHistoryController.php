<?php

namespace CCG\Http\Controllers\Api\EmploymentApplication;

use CCG\Http\Controllers\Controller;
use CCG\Http\Requests\ValidateWorkHistory as Validate;
use Illuminate\Http\Request;

class WorkHistoryController extends Controller
{
    public function store(Validate $request)
    {
    	$request->merge(['user_id' => $request->user()->id]);

    	if(!$request->user()->workHistory){
    		$request->createWorkHistory();
    	}else{
    		$request->updateWorkHistory();
    	}
    	
    	return response('Work History Saved', 200)
                  ->header('Content-Type', 'text/plain');
    }
}
