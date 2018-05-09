<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;

class RiskLocation extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];

    public function claim()
    {
    	return $this->belongsTo('CCG\Claims\Claim');
    }

    public static function store($locations, $claimId)
    {
    	foreach ($locations as $location) {
    		$address['claim_id'] = $claimId;
    		$address['type'] 	 = $location->type;
    		$address['street']   = $location->street;
    		$address['city']	 = $location->city;
            $address['state']    = $location->state;
    		$address['postal']   = $location->postal;
    		if(isset($location->lat) && isset($location->lon))
    		{
	    		$address['lat']      = $location->lat;
	    		$address['lon']      = $location->lon;
	    	}

    		self::create($address);
    		$address = [];
    	}
    }
}
