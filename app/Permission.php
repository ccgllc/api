<?php

namespace CCG;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
	protected $fillable = ['name', 'label'];
	protected $appends = ['embedded_id'];
	
	/** 
	 * Define role relationship
	 *	@return Void
	 */ 
    public function roles()
    {
    	return $this->morphedByMany('CCG\Role', 'permissionable');
    }

    public function users()
    {
    	return $this->morphedByMany('CCG\User', 'permissionable');
    }

    public function getEmbeddedIdAttribute()
    {
    	preg_match('/\d{1,}/', $this->name, $matches);
    	if ($matches) {
    		return (int)$matches[0];
    	}
    	return false;
    }

    // public function setLabelAttribute($value)
    // {
    // 	$this->attributtes['label'] = ucwords($value);
    // }

 }
