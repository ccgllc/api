<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class SoftwareExperience extends Model
{
    //

    protected $guarded = ['id'];

    /** 
     * set our user relationship
     */ 
    public function user()
    {
    	return $this->belongsTo(CCG\User::class);
    }
}
