<?php

namespace CCG\Http\Controllers;

use Illuminate\Http\Request;
use CCG\Carrier;
use CCG\Http\Requests;
use CCG\Http\Controllers\Controller;

class CarrierController extends Controller
{
    public function index()
    {
    	return Carrier::all();
    }
}
