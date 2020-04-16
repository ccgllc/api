<?php

namespace CCG\Http\Requests;

use CCG\Accounting\Invoice;
use Illuminate\Foundation\Http\FormRequest;

class ValidateInvoice extends FormRequest
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
            'total' => 'required'
        ];
    }

    public function persist()
    {
        var_dump('storing called');
        $invoice = Invoice::create([
            'data'     => json_encode($this->all()),
            'claim_id' => $this->claimId,
            'user_id'  => 1,
        ]);
        return $invoice;
    }
}
