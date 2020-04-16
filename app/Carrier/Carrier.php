<?php 

namespace CCG\Carrier;

use CCG\Claims\Claim;
use Illuminate\Database\Eloquent\Model;

class Carrier extends Model {

	protected $guarded = ['id'];

	public function claims()
	{
		return $this->hasMany(Claim::class);
	}

	public function feeSchedules()
	{
		return $this->hasMany(\CCG\Carrier\FeeSchedule::class);
	}

	// public function deposits()
	// {
	// 	return $this->hasMany(Deposit::class);
	// }

}
