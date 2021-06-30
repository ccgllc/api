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

	 /**
     * Relationships to load.
     *
     * @var array
     */
	public $relationships;


	public function __construct()
	{
		$this->claims = $this->getClaims();
		$this->adjusters = $this->getAdjusters();
		// $this->relationships = $this->getRelationships();
	}

	public function getAdjusters()
	{
		$adjusters = User::whereHas('profile', function($query) {
			$query->whereNotNull('city');
			$query->whereNotNull('street');
			$query->whereNotNull('state');
		})->get();

		$adjusters->load($this->getRelationships());
		
		return array_values($adjusters->toArray());
	}

	public function getClaims()
	{
		$claims = Claim::with('statuses', 'carrier')->doesntHave('assignments')->take(50)->get();
		return $claims->toArray();
	}

	protected function getRelationships()
	{
		return ['profile', 'workHistory', 'adjusterLicenses', 'certifications', 'avatar', 'roles'];
	}
}
