<?php 

namespace CCG;

use CCG\Claims\Claim;
use Illuminate\Database\Eloquent\Model;

class Carrier extends Model {

	protected $fillable = ['carrier'];

	public function claims()
	{
		return $this->hasMany(Claim::class);
	}

	// public function deposits()
	// {
	// 	return $this->hasMany(Deposit::class);
	// }

}
