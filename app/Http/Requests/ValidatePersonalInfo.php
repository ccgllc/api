<?php

namespace CCG\Http\Requests;

use CCG\AdjusterLicense;
use CCG\Events\XactnetAddress\XactnetAddressCreated;
use CCG\Profile;
use CCG\XactnetAddress;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ValidatePersonalInfo extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return   'Bearer ' . $this->user()->api_token == $this->header('Authorization') ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'street'           => 'required',
            'city'             => 'required',
            'state'            => 'required',
            'zip'              => 'required',
            'phone'            => 'required',
            // 'license_state'    => 'required',
            // 'license_number'   => 'required',
            // 'expiration_month' => 'required',
            // 'expiration_year'  => 'required',
            'xactnet_address'   => 'unique:xactnet_addresses,address',
            'user_id'          => ''
        ];
    }

    /** 
     * create users profile from the request data.
     */ 
    public function createUserProfile()
    {
        return Profile::create(
            $this->only([
                'street', 
                'city',
                'state',
                'zip',
                'phone',
                'lat', 'lng',
                'place_id',
                'formatted_address',
                // 'xactnet_address',
                'user_id'
            ])
       );
    }

    /** 
     * update users profile from the request data.
     */ 
    public function updateUserProfile()
    {
        $profile = $this->user()->profile;
        return $profile->update(
            $this->only([
                'street', 
                'city',
                'state',
                'zip',
                'phone',
                // 'xactnet_address',
            ])
       );
    }

    /** 
     * create our new users license.
     */ 
    public function createAdjusterLicense()
    {
        if ($this->hasAllLicenseData()) {
            return AdjusterLicense::create(
                $this->only([
                    'license_state', 
                    'license_number', 
                    'expiration_year',
                    'expiration_month', 
                    'user_id'
                ])
            );
        }
    }

    public function createXactnetAddress()
    {
        if ($this->xactnet_address) {
            $address = XactnetAddress::create([
                'address' => $this->xactnet_address,
                'primary' => '1',
                'user_id' => $this->user()->id,
            ]);
            event( new XactnetAddressCreated($address));
            return $address;
        }
    }

    protected function hasAllLicenseData() {
        if ($this->license_number && $this->license_state && $this->expiration_month && $this->expiration_year)
        {
            return true;
        } 
        else 
        {
            return false;
        }
    }
}
