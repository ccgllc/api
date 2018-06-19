<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name', 'label'];

    public function claims()
    {
    	return $this->belongsToMany(\CCG\Claims\Claim::class);
    }
}
