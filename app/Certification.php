<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $guarded = ['id'];

    /** 
     * set User realtionship
     */ 
	 public function user()
	{
		return $this->belongsTo(CCG\User::class);
	}

	public function scopeOfType($query, $type)
	{
		return $query->where('type', $type);
	}
}