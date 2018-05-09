<?php

namespace CCG\Claims;

use Illuminate\Database\Eloquent\Model;

class PolicyCoverage extends Model
{
    public $timestamps = false;
    protected $guarded = ['id'];

    public function policy()
    {
    	return $this->belongsTo('CCG\Claims\Policy');
    }

    public static function store($coverage, $policyId)
    {
    	$policyCoverage = [];
    	foreach ($coverage as $key => $value) 
    	{
    		$policyCoverage['policy_id'] = $policyId;
    		$policyCoverage['cov_name'] = $value->covName;
    		$policyCoverage['cov_type'] = $value->covType;
    		$policyCoverage['policy_limit'] = $value->policyLimit;
    		$policyCoverage['deductible'] = $value->deductible;
    		$policyCoverage['apply_to'] = $value->applyTo;
    		$policyCoverage['co_ins'] = $value->coIns;
    		$policyCoverage['reserve_amt'] = $value->reserveAmt;
    		$policyCoverage['cov_id'] = $value->id;
    		self::create($policyCoverage);
    	}
    	
    }
}
