<?php 

namespace CCG\ModelFilters;

use CCG\ModelFilters\QueryFilter;

class UserFilters extends QueryFilter {

	public function licenseState($state = null)
	{
		if ($state) {
			return $this->builder->whereHas('adjusterLicenses', function($query) use ($state) {
				$query->where('license_state', $state);
			});
		}
		return $this->builder;
	}

	public function certification($cert = null)
	{
		if ($cert !== true) {
			return $this->builder->whereHas('certifications', function($query) use ($cert) {
				$query->where('type', $cert);
			});
		}
		return $this->builder->whereHas('certifications');
	}

	public function software($type = null)
	{
		if($type) {
			return $this->builder->whereHas('softwareExperiences', function($query) use ($type) {
				$query->where('type', $type);
			});
		}
	}

	public function state($state)
	{
		return $this->builder->whereHas('profile', function($query) use ($state) {
			$query->where('state', $state);
		});
	}

	public function startDate($date=null)
	{
		if ($date) {
			$d = \Carbon\Carbon::createFromFormat('m/d/Y', $date);
			return $this->builder->whereDate('created_at', '>', $d);
		}
	}

	public function endDate($date=null)
	{
		if ($date) {
			$d = \Carbon\Carbon::createFromFormat('m/d/Y', $date);
			return $this->builder->whereDate('created_at', '<', $d);
		}
	}

	public function workHistory($val = null)
	{
	 	return $this->builder->whereHas('workHistory', function($query) use($val) {
	 		$query->where($val, '>', 0);
	 	});
	}

	public function status($val = null)
	{
	 	return $this->builder->where('status', $val);
	}	

	public function applied($applied = null)
	{
		return $applied	? $this->builder->where('applied', 1) : $this->builder->where('applied', 0);
	}

}