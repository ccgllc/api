<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Policy extends Model
{
    protected $guarded = ['id'];
    public $timestamps = false;

    public function getInceptionDateAttribute($date)
    {
        return new Carbon($date);
    }
      public function getEffectiveDateAttribute($date)
    {
        return new Carbon($date);
    }
      public function getExpirationDateAttribute($date)
    {
        return new Carbon($date);
    }

    public function claim()
    {
    	return $this->belongsTo('CCG\Claims\Claim');
    }
     public function policyCoverages()
    {
    	return $this->hasMany('CCG\Claims\PolicyCoverage');
    }

    public static function store($policyInfo, $claimId)
    {
    	$policyData['claim_id'] = $claimId;
    	foreach($policyInfo as $key => $value)
    	{
    		$policyData["$key"] = $value;
    	}
    	return self::create($policyData);
    }
}
