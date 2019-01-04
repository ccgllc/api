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

     public function setTypeAttribute($value)
    {
    	$this->attributes['type'] = ucwords(str_replace('"', '', $value));
    }

    public function getTypeAttribute($value)
    {
    	return ucwords(str_replace('"', '', $value));
    }
}
