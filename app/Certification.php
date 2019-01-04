<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Certification extends Model
{
    protected $guarded = ['id'];

    /** 
     * set User realtionship
     */ 
	 public function user()
	{
		return $this->belongsTo(\CCG\User::class);
	}

	public function getExpirationAttribute($value)
	{
		if ($value == null) return null;
		$dt = Carbon::parse($value);
		return $dt->format('m/y');
	}

	public function setTypeAttribute($value)
	{
		 $this->attributes['type'] = ucwords(str_replace('"', '', $value));
	}

	public function getTypeAttribute($value)
	{
		 return str_replace('"', '', $value);
	}

	public function scopeOfType($query, $type)
	{
		return $query->where('type', $type);
	}
}