<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class Avatar extends Model
{
    protected $guarded = ['id'];

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
