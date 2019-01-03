<?php

namespace CCG\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;
use Carbon\Carbon;

class ValidateUserCertification extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return 'Bearer '.$this->user()->api_token == $this->header('Authorization') ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            // 'type' => 'required',
            'type.name' => Rule::unique('certifications', 'type')->where(function ($query) {
                return $query->where('user_id', $this->user()->id);
            }),
            'type.expiration' => 'required_unless:type.expiration,false'
        ];
    }

    public function messages()
    {
        return [
            // 'type.required' => 'A title is required',
            'type.name.unique'  => 'You already have this certification',
        ];
    }

    public function createCertification($user)
    {
        return \CCG\Certification::create([
           'type' => $this->type['name'], 
           'expiration' => $this->type['expiration'] ? $this->setDate() : null, 
           'user_id' => $this['user_id']
        ]);
    }

    public function setDate()
    {
        $dt = Carbon::now();
        preg_match('/\d{2}/', $this->type['expiration'], $month);
        preg_match('/\d{4}/', $this->type['expiration'], $year);
        return $dt->year($year[0])->month($month[0])
                                    ->endOfMonth()
                                    ->toDateString();
    }
}
