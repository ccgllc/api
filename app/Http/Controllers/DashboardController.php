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
		$this->middleware(['auth']);
	}

    public function show(Request $request)
    {
       	$data = $this->getDashboardData($request->user()->role);
       	// dd($data);
       	// $data = json_encode($data);
       	$view = 'dashboard.'.$request->user()->role;
    	return view($view, compact('data'));
    }

    protected function getDashboardData($role)
    {
    	$type = ucwords($role);
    	$dashboard = '\CCG\Dashboard\\' . $type . 'Dashboard';
    	$d =  new $dashboard;
    	return $d;
    }
}
