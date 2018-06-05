<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Claims\Estimate;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EstimatesController extends Controller
{
    public function index(Request $request, $id)
    {
    	return Estimate::whereClaimId($id)->get();
    }
}
