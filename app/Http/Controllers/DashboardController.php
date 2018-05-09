<?php

namespace CCG\Http\Controllers;

use CCG\Dashboard\Dashboard;
use CCG\Role;
use CCG\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth', 'dashboard']);
	}

    public function show()
    {
    	$data = new Dashboard;
    	return view('dashboard', compact('data'));
    }
}
