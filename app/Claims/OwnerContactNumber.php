<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;

class OwnerContactNumber extends Model
{
	public $timestamps = false;
    protected $guarded = ['id'];

    public function claim ()
    {
    	return $this->belongsTo(CCG\Claim::class);
    }

    public static function store ($numbers, $claimId)
    {
    	foreach($numbers as $number)
        {
        	//dd($numbers);
        	$contact['claim_id'] = $claimId;
        	$contact['type'] = $number->type;
        	$contact['number'] = $number->number;

        	if (isset($number->extension))
        	{
        		$contact['extension'] = $number->extension;
        	}
        		
        	if (isset($number->primary))
    		{
    			$contact['primary'] = $number->primary;
    		} 
        	self::create($contact);
        	$contact = [];
        }
        return;
    }
}
