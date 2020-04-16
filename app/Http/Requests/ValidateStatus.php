<?php

namespace CCG\Http\Requests;

use CCG\Claims\ClaimStatus;
use Illuminate\Foundation\Http\FormRequest;

class ValidateStatus extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'date' => 'required',
            'time' => 'required',
            'type' => 'required',
            'value' => 'required_if:type,value',
            'claim_number' => 'required'
        ];
    }

    public function persist()
    {
        return ClaimStatus::create($this->all());
    }
}
