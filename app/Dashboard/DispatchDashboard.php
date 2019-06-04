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
		$adjusters = User::whereHas('adjusterLicenses')->whereHas('profile', function($query) {
			$query->whereNotNull('city');
			$query->whereNotNull('street');
			$query->whereNotNull('state');
		})->get();

		$adjusters->load('profile', 'workHistory', 'adjusterLicenses', 'certifications', 'avatar');
		
		return array_values($adjusters->toArray());
		// $profiles = Profile::with('user','user.profile', 'user.workHistory', 'user.adjusterLicenses', 'user.certifications', 'user.avatar')
		// 					->whereNotNull('city')
		// 					->whereNotNull('state')
		// 					->whereNotNull('street')
		// 					->get();

		// $adjusters = $profiles->map(function($profile) {
		// 	return $profile->user;
		// });

		// $list = $adjusters->filter(function($user, $key) {
		// 	return $user->adjusterLicenses->count();
		// });
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
