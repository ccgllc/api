<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;

class AccessContact extends Model
{
    protected $guarded = ['id'];
    public $timestamps = false;

    public function claim()
    {
    	return $this->belongsTo('CCG\Claims\Claim');
    }
    /**
    * store a new Acccess contact
    *
    */
    public static function store($accessContact, $claimId)
    {
    	if($accessContact)
    	{
	    	$contact['claim_id']   = $claimId;
	    	foreach ($accessContact as $key => $value) 
	    	{
	    		$contact["$key"] = $value;
	    	}
	    	self::create($contact);
	    }
	    return;
    }
}
