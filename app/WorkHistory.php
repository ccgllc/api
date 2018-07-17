<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class WorkHistory extends Model
{
    protected $guarded = ['id'];

     /** 
     * setup our relationsip to the user.
     */ 
    public function getTotal($value)
    {
        return static::sum();
    }

    /** 
     * setup our relationsip to the user.
     */ 
    public function user()
    {
    	return $this->belongsTo(CCG\User::class);
    }
}
