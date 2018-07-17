<?php

namespace CCG\Dashboard;

use CCG\Claims\Claim;
use CCG\Dashboard\Chart;
use CCG\Profile;
use CCG\Role;
use CCG\User;

class DispatchDashboard
{
	 /**
     * Claims Array
     *
     * @var array
     */
	public $claims;

	 /**
     * Adjusters.
     *
     * @var array
     */
	public $adjusters;

	public function __construct()
	{
		$this->claims = $this->getClaims();
		$this->adjusters = $this->getAdjusters();
	}

	public function getAdjusters()
	{
		//$role = Role::with(['users', 'users.profile'])->whereName('adjuster')->first();
		$profiles = Profile::with('user','user.profile', 'user.workHistory', 'user.adjusterLicenses', 'user.certifications', 'user.avatar')
							->whereNotNull('city')
							->whereNotNull('state')
							->whereNotNull('street')
							->get();

		$adjusters = $profiles->map(function($profile) {
			return $profile->user;
		});

		$adjusters->transform(function ($adjuster, $key) {
		    $adjuster->distance = new \stdClass;
		    $adjuster->distance->text = '';
		    $adjuster->distance->value = 0;
		    $adjuster->xp = 0;
		    return $adjuster;
		});

		$adjusters = $adjusters->filter(function($adjuster) {
			return $adjuster->adjusterLicenses->count();
		});

		return array_values($adjusters->toArray());
	}

	public function getClaims()
	{
		$date = \Carbon\Carbon::create(2018, 1, 1, 0, 0, 0);

		$claims = Claim::with('carrier')
						->where('date_of_loss', '>', $date)
						->orderBy('date_received', 'desc')->paginate(15);

		$unAssignedClaims = $claims->filter(function($claim, $key) { 
			return $claim->statuses->count() <  2; 
		});

		return array_values($unAssignedClaims->toArray());
	}
}
