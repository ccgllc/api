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
        return view('dashboard.show');
        // $user = \Auth::user();
       // $user = \Auth::onceUsingId(779);
        // $user = User::find(677);
        // $user = User::find(683);
          // dd($user);
        // $user->load('claims', 'claims.invoices');
        // dd($user);
        // $user = $request->user();
        // $user->role = 'dispatch';
        // if ($user->role) {
        //     $data = $this->getDashboardData($user);
        //     $view = 'dashboard.'.$user->role;
        //     return view($view, compact('data'));
        // }
        // else {
        //     return redirect('/profile');
        // }
       	
    }

    public function showDispatch(Request $request)
    {
        $user = \Auth::user();
        $data = new DispatchDashboard($user);

        return view('dashboard.dispatch', compact('data'));
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
