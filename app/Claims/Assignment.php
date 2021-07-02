<?php

namespace CCG\Claims;

use CCG\Claims\Claim;
use CCG\User;
use CCG\XactnetAddress;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assignment extends Model
{
	use SoftDeletes;
	
 	protected $guarded = ['id'];

 	public function claim()
 	{
 		return $this->belongsTo(Claim::class);
 	}

 	public function user()
 	{
 		return $this->belongsTo(User::class);
 	}

 	public function xactnetAddress()
 	{
 		return $this->belongsTo(XactnetAddress::class);
 	}

 	public function scopeCurrentAdjuster($query)
 	{
 		return $query->where([['type',  '=', 'adjuster'], ['active', '=',  '1']])->first();
 	}

 	// public function scopeLatest($query)
 	// {
 	// 	return $query->max('updated_at');
 	// }

}
