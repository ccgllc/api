<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;


class Claim extends Model
{
    use SoftDeletes;

    protected $guarded = ['id'];

    protected $dates = ['created_at', 'updated_at', 'date_of_loss', 'date_received', 'appointment_date'];

    public function getDateOfLossAttribute($date) 
    {
        $d = Carbon::parse($date);
        return $d->format('m/d/Y');
    }

    public function getDateReceivedAttribute($date) 
    {
       $d = Carbon::parse($date);
        return $d->format('m/d/Y');
    }

    public function getAppointmentDateAttribute($date) 
    {
       $d = Carbon::parse($date);
        return $d->format('m/d/Y');
    }

    public function setInsuredAttribute($name)
    {
        $this->attributes['insured'] = ucwords(strtolower($name));
    }

    public function invoices()
    {
        return $this->hasMany(\CCG\Invoice::class);
    }

    public function payments()
    {
        return $this->hasManyThrough(\CCG\Payment::class, \CCG\Invoice::class);
    }

    public function statuses()
    {
        return $this->hasMany(\CCG\Claims\ClaimStatus::class);
    }

    public function assignments()
    {
        return $this->hasMany(\CCG\Claims\Assignment::class);
    }

     public function estimates()
    {
        return $this->hasMany(\CCG\Claims\Estimate::class);
    }

    public function carrier()
    {
        return $this->belongsTo(\CCG\Carrier::class, 'carrier_id', 'id');
    }

    // public function adjuster()
    // {
    //     return $this->belongsTo(\CCG\User::class, 'adjuster_id', 'id');
    // }

    //  public function reviewer()
    // {
    //     return $this->belongsTo(\CCG\User::class, 'reviewer_id', 'id');
    // }

    // public function ownerContactNumbers()
    // {
    // 	return $this->hasMany('CCG\Claims\OwnerContactNumber');
    // }

    // public function riskLocations()
    // {
    // 	return $this->hasMany('CCG\Claims\RiskLocation');
    // }

    // public function claimant()
    // {
    // 	return $this->hasOne('CCG\Claims\Claimant');
    // }

    // public function accessContact()
    // {
    // 	return $this->hasOne('CCG\Claims\AccessContact');
    // }
    // public function Policy()
    // {
    //     return $this->hasOne('CCG\Claims\Policy');
    // }
    // public function claimStatuses()
    // {
    //     return $this->hasMany('CCG\Claims\ClaimStatus');
    // }
}
