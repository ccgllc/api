<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Estimate extends Model
{
	use SoftDeletes;
	
	protected $guarded = ['id'];

    public function claim()
 	{
 		return $this->belongsTo(CCG\Claims\Claim::class);
 	}

 	public function user()
 	{
 		return $this->belongsTo(CCG\User::class);
 	}
}
