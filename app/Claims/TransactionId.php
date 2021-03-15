<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;

class TransactionId extends Model
{
	 /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id', 'created_at', 'deleted_at'];
    
    public function claim()
    {
    	return $this->belongsTo(CCG\Claims\Claim::class);
    }
}
