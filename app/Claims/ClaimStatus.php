<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use \Carbon\Carbon;

class ClaimStatus extends Model
{
    use SoftDeletes;
    
    protected $guarded = ['id'];

    protected $dates = ['created_at', 'deleted_at', 'updated_at'];

    public function claim() 
    {
    	return $this->belongsTo(\CCG\Claims\Claim::class);
    }

    public function user()
    {
        return $this->belongsTo(\CCG\User::class);
    }

    public function setDateAttribute($query)
    {
        $date = Carbon::parse($query);
    	$this->attributes['date'] = $date->toDateString();
    }

    // public function setTimeAttribute($query)
    // {
    //     $time = Carbon::parse($query);
    //     $this->attributes['time'] = $time->toW3cString();
    // }

    public function getDateAttribute($query)
    {
    	$date = Carbon::parse($query);
    	return $date->toFormattedDateString();
    }

    public function getTimeAttribute($query)
    {
    	$time = Carbon::parse($query);
        $time->tz = 'America/Chicago';
    	return $time->toTimeString();
    }
}
