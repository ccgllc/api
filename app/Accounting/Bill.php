<?php

namespace CCG\Accounting;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    public function invoice()
    {
    	return $this->belongsTo(\CCG\Accounting\Invoice::class);
    }
    public function user()
    {
    	return $this->belongsTo(\CCG\User::class);
    }
}
