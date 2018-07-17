<?php

namespace CCG\Http\Controllers;

use CCG\Dashboard\DispatchDashboard;
use CCG\Role;
use CCG\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth', 'dashboard']);
	}

    public function show(Request $request)
    {
       // $user = Auth::onceUsingId(20);
        if ($request->user()->role) {
            $data = $this->getDashboardData($request->user()->role);
            $view = 'dashboard.'.$request->user()->role;
            return view($view, compact('data'));
        }
        else {
            return redirect('/profle');
        }
       	
    }

    protected function getDashboardData($role)
    {
    	$type = ucwords($role);
    	$dashboard = '\CCG\Dashboard\\' . $type . 'Dashboard';
    	$d =  new $dashboard;
    	return $d;
    }
}
