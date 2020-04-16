<?php

namespace CCG\Carrier;

use Illuminate\Database\Eloquent\Model;

class FeeSchedule extends Model
{
    public function carrier()
    {
    	return $this->belongsTo(CCG\Carrier::class);
    }

    public function getDataAttribute($data)
    {
    	return json_decode($data);
    }
}
