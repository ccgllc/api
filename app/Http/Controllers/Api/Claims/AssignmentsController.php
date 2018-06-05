<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Claims\Assignment;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AssignmentsController extends Controller
{
    public function index(Request $request, $id)
    {
    	return Assignment::whereClaimId($id)->get();
    }
}
