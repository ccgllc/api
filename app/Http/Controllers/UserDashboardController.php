<?php

namespace CCG\Http\Controllers;

use CCG\Dashboard\UserDashboard;
use CCG\Role;
use CCG\User;
use Illuminate\Http\Request;

class UserDashboardController extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth', 'dashboard']);
	}

    public function show()
    {
    	$data = new UserDashboard;
    	return view('user.dashboard', compact('data'));
    }
}
