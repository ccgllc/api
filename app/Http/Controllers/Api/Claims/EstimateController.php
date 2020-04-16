<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Claims\Estimate;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EstimateController extends Controller
{
    public function index(Request $request, $id)
    {
    	return Estimate::whereClaimId($id)->get();
    }

    public function store(Request $request)
    {
    	$valid = $request->validate([
    		'gross_loss' => 'required',
    		'user_id' => 'required|exists:users,id',
    		'claim_id' => 'required|exists:claims,id',
    	]);

    	$estimate = Estimate::create($valid);
    	// event(new EstimateCreated, $estimate);
    	return $estimate;
    }
}
