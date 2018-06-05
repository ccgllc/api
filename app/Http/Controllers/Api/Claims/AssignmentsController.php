<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Claims\Assignment;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AssignmentsController extends Controller
{
    public function index(Request $request, $claim_id)
    {
    	return Assignment::whereClaimId($claim_id)->get();
    }

    public function show(Request $request, $claim_id, $id)
    {
    	return Assignment::find($id);
    }

    public function store(ValidateAssignment $validAssignment, $id)
    {
    	return $validAssignment->persist();
    }

     public function destroy(Request $request, $id)
    {
    	return Assignment::destroy($request->all());
    }
}
