<?php

namespace CCG;

use CCG\Claims\Assignment;
use CCG\User;
use Illuminate\Database\Eloquent\Model;

class XactnetAddress extends Model
{
    protected $guarded = ['id'];

    public function setAddressAttribute($address)
    {
    	return $this->attributes['address'] = strtoupper($address);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }

    public function scopeAddress($query, $address)
    {
    	return $query->where('address', $address);
    }

    // public function scopeHasAssignments($query, $address)
    // {
    // 	return $query->$this->
    // }
}
