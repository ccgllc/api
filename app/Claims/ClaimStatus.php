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

    public function scopeUnassignable($query)
    {
        return $query->where([
            ['name', '=', 'Unassignable'],
            ['value', '!=', 'XACTNET.QUEUE']
        ]);
    }

    public function setDateAttribute($query)
    {
        $date = Carbon::parse($query);
    	$this->attributes['date'] = $date->toDateString();
    }

    public function setTimeAttribute($query)
    {
        $time = Carbon::parse($query);
        $this->attributes['time'] = $time->format("Y-m-d H:i:s");
    }

    public function getDateAttribute($query)
    {
    	$date = Carbon::parse($query);
        $date->addHours(7);
        $date->tz = 'America/Chicago';
    	return $date->toFormattedDateString();
    }

    public function getTimeAttribute($query)
    {
    	$time = Carbon::parse($query);
        //$time->tz = 'America/Chicago';
        $time->addHours(7);
        $time->tz = 'America/Chicago';
    	return $time->toTimeString();
    }
}
