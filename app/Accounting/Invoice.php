<?php

namespace CCG\Accounting;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
	use SoftDeletes; 

    protected $guarded = ['id'];
	
    public function claim()
    {
    	return $this->belongsTo(\CCG\Claims\Claim::class);
    }

    public function bills()
    {
    	return $this->hasMany(\CCG\Accounting\Bill::class);
    }

    public function getDataAttribute($data)
    {
        return json_decode($data);
    }
}
