<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class AdjusterLicense extends Model
{
	protected $guarded = ['id'];
    /** 
     * User relation
     */ 
    public function user()
    {
    	return $this->belongsTo(CCG\User::class);
    }
}
