<?php

namespace CCG\Dashboard;

use CCG\Dashboard\Chart;
use CCG\Role;
use CCG\User;

class UserDashboard {
	public $newHires;
	public $candidates;
	public $applicants;
	public $roles;
	public $userRoleChart;
	public $activeCount;
	public $inActiveCount;
	public $total;
	public $applicantCount;
	public $noHireCount;
	public $candidateCount;
	public $newHireCount;
	public $sates;

	public function __construct()
	{
		$this->userRolesChart = new Chart;
		$this->newHires = $this->getUsers('new-hire', 4);
		$this->candidates = $this->getUsers('candidate', 4);
		$this->applicants = $this->getUsers('applicant', 4);
		$this->roles = $this->getRoles();
		$this->states = $this->getUserStateCounts();
		$this->setCounts();
		// dd($this);
	}

	protected function getUsers($status, $quanity)
	{
		return User::recent()->status($status)->get()->take($quanity)->all();
	}

	protected function getRoles()
	{
		$roles = Role::with('users')->get();
		// dd($roles);
		$dataset = $this->userRolesChart->addDataset();
		foreach($roles as $role){
    		$this->userRolesChart->addLabel($role->name);
    		$this->userRolesChart->setData('roles', count($role->users));
    	}
	}

	protected function setCounts()
	{
		$this->activeCount = $this->getUserTypeCounts('active');
		$this->inActiveCount = $this->getUserTypeCounts('in-active');
		$this->noHireCount = $this->getUserTypeCounts('no-hire');
		$this->applicantCount = $this->getUserTypeCounts('applicant');
		$this->candidateCount = $this->getUserTypeCounts('candidate');
		$this->newHireCount = $this->getUserTypeCounts('new-hire');
	}

	protected function getUserStateCounts()
	{
		$states = [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 
	    	'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
		];

		$stateCounts = [];

		foreach ($states as $state) {
			$profiles = \CCG\Profile::with('user')->whereState($state)->get();
			$s  = new \stdClass();
			$count = 0;
			if ($count = $profiles->count()) {
				$s->label = $state;
				$s->count = $count;
				$stateCounts[] = $s;
			}
		}
		return $stateCounts;
	}

	protected function getUserTypeCounts($status)
	{
		return User::status($status)->count();
	}
}
