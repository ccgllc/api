<?php

namespace CCG\Http\Requests;

use CCG\Claims\Assignment;
use Illuminate\Foundation\Http\FormRequest;

class ValidateAssignment extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => Rule::in(['adjuster', 'reviewer']),
            'user_id' => 'required|numeric|min:1',
            'claim_id' => 'required|numeric|min:1',
        ];
    }

    public function persist()
    {
        return Assignment::create($this->all());
    }
}
