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
		// $this->middleware(['auth', 'dashboard']);
	}

    public function show(Request $request)
    {
       // $user = Auth::onceUsingId(20);
        $user = User::find(677);
          // dd($user);
        // $user->load('claims', 'claims.invoices');
        // dd($user);
        // $user = $request->user();
        if ($user->role) {
            $data = $this->getDashboardData($user);
            $view = 'dashboard.'.$user->role;
            return view($view, compact('data'));
        }
        else {
            return redirect('/profle');
        }
       	
    }

    protected function getDashboardData($user)
    {
    	$type = ucwords($user->role);
    	$dashboard = '\CCG\Dashboard\\' . $type . 'Dashboard';
        if($type == 'Adjuster') {
            $d = new $dashboard($user);
        } else {
            $d =  new $dashboard;
        }
    	return $d;
    }
}
