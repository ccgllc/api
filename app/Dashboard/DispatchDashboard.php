<?php

namespace CCG\Dashboard;

use CCG\Claims\Claim;
use CCG\Dashboard\Chart;
use CCG\Role;
use CCG\User;

class DispatchDashboard
{
	public $claims;

	public function __construct()
	{
		$this->claims = $this->getClaims();
	}

	public function getClaims()
	{
		$claims = Claim::take(100)->orderBy('date_of_loss', 'desc')->get();
		$unAssignedClaims = $claims->filter(function($claim, $key) { 
			return $claim->statuses->count() <  2; 
		});
		return array_values($unAssignedClaims->toArray());
	}
}
