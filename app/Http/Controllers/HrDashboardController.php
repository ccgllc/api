<?php

namespace CCG\Http\Controllers;

use CCG\Dashboard\HrDashboard;
use CCG\Role;
use CCG\User;
use Illuminate\Http\Request;

class HrDashboardController extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth', 'dashboard']);
	}

    public function show()
    {
    	$data = new HrDashboard;
    	return view('hr.dashboard', compact('data'));
    }
}
