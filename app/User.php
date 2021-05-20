<?php

namespace CCG;

use CCG\Carrier\Carrier;
use CCG\Claims\Claim;
use CCG\ModelFilters\QueryFilter;
use CCG\Notifications\ResetPassword;
use CCG\Role;
use CCG\Traits\Excludable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, Excludable, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'api_token', 'verification_token', 'verified', 'applied', 'role', 'notes', 'priority'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token', 'verification_token'
    ];

     protected $appends = ['distance', 'date_string'];


    public function getCreatedAtAttribute($value)
    {
       return \Carbon\Carbon::parse($value)->diffForHumans();
    }

    /** 
     * Define role relationship.
     * @return Void
     */ 
    public function roles()
    {
        return $this->belongsToMany(\CCG\Role::class);
    }

    public function permissions()
    {
      return $this->morphToMany('CCG\Permission', 'permissionable');
    }

    public function assignRole($role)
    {
        return $this->roles()->save(
            Role::whereName($role)->firstOrFail()
        );
    }

    public function revokeRole($role)
    {
        return $this->roles()->detach(
              Role::whereName($role)->firstOrFail()
            );
    }

    public function hasRole($role)
    {
         if (is_string($role))
        {
            return $this->roles->contains('name', $role);
        }
        return !! $role->intersect($this->roles)->count();
    }

    public function hasPermissionTo($permission)
    {
        // \DB::enableQueryLog();
        foreach($this->roles as $role) {
          if ($role->hasPermissionTo($permission)) return true;
        }
        foreach ($this->permissions as $perm) {
          if ($permission === $perm->name) return true;
        }
        // dd(\DB::getQueryLog());
        return false;
    }

    public function isFrom($location)
    {
        return $this->profile->contains('state', $location) ? true : false;
    }

    public function isConfirmed()
    {
        return $this->attributes['verified'] == 1 ? true : false;
    }

    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    public function xactnetAddresses()
    {
        return $this->hasMany(\CCG\XactnetAddress::class);
    }

    public function workHistory()
    {
        return $this->hasOne(\CCG\WorkHistory::class);
    }

    public function adjusterLicenses()
    {
        return $this->hasMany(\CCG\AdjusterLicense::class);
    }

    public function certifications()
    {
        return $this->hasMany(\CCG\Certification::class);
    }

    public function softwareExperiences()
    {
        return $this->hasMany(\CCG\SoftwareExperience::class);
    }

    public function documents()
    {
        return $this->hasMany(\CCG\Document::class);
    }

    public function avatar()
    {
        return $this->hasOne(\CCG\Avatar::class);
    }

    public function claimStatuses()
    {
      return $this->hasMany(\CCG\Claims\ClaimStatus::class);
    }

    public function estimates()
    {
      return $this->hasMany(\CCG\Claims\Estimate::class);
    }

     public function assignments()
    {
      return $this->hasMany(\CCG\Claims\Assignment::class);
    }

    // public function claims()
    // {
    //   return $this->hasManyTrough(\CCG\Claim)
    // }

    public function getDistanceAttribute()
    {
        return $this->attributes['distance'] = (object) [
          'text' => '',
          'xp' => 0,
          'value' => 0
        ];
    }

    public function getDateStringAttribute()
    {
        return $this->attributes['date_string'] =  \Carbon\Carbon::parse($this->attributes['created_at'])->toDateString();
    }

    /**
     * Scope a query to only include only users with
     * an employment status of applicant.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }

    // public function claims()
    // {
    //   return $this->hasManyThrough(\CCG\Claims\Claim::class, \CCG\Claims\Assignment::class);
    // }

    public function scopeClaims()
    {

      $assignments = $this->assignments->load([
        'claim' => function($query) {
          $query->orderBy('date_of_loss', 'desc');
        }, 
        'claim.carrier'
      ]);

     if ($assignments->isNotEmpty()) 
        return $assignments->pluck('claim');

      else if ($assignments->isEmpty() && $this->hasRole('reviewer')) {
        $filtered = $this->permissions->filter(function($permission) {
          return str_contains($permission->name, 'claims');
        });
        $carrierIds = $filtered->map(function($permission){
          return $permission->embedded_id;
        });
        $claims = Claim::with('carrier')->whereIn('carrier_id', $carrierIds)->get();
        // $claims = $carriers->map(function($carrier) {
        //   return $carrier->claims;
        // });
        return $claims->all();
      } 
      
    }

      /**
     * Scope a query to only select  recent users 
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRecent($query)
    {
        return $query->orderBy('created_at', 'desc');
    }

    /**
     * Scope a query to only include only users with
     * filter matches in query string ex. "http://localhost/users?status=active"
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($query, QueryFilter $filters)
    {
        return $filters->apply($query);
    }


    public function sendPasswordResetNotification($token)
  {
      $this->notify(new ResetPassword($token));
  }

  public function verificationLink()
  {
    return url("users/verify/$this->verification_token");
  }
}