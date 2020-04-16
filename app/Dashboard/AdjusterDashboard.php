<?php

namespace CCG\Dashboard;

use CCG\Claims\Claim;
use CCG\Dashboard\Chart;
use CCG\Role;
use CCG\User;

class AdjusterDashboard
{
	public $claims;
	public $user; 

	public function __construct(User $user)
	{
		$this->user = $user;
		$this->claims = $user->claims();
		// $this->claims->each(function($claim, $key) {
		// 	$claim->load('invoices');
		// });
		// // $this->claims->with(['invoices']);
	}


}
