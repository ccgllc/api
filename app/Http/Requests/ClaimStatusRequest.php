<?php

namespace CCG\Http\Requests;

use CCG\Claims\ClaimStatus;
// use CCG\Events\ClaimStatusUpdated;
// use Event;
use Illuminate\Foundation\Http\FormRequest;
// use CCG\User; 

class ClaimStatusRequest extends FormRequest
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
            // 'name' => 'required',
            // 'type' => 'required',
            // 'value' => 'required',
        ];
    }

    public function persist()
    {
        $status = new ClaimStatus;
        $status->name = $this->setName();
        $status->type = $this->type;
        $status->value = $this->setValue();
        $status->date = $this->date;
        $status->time = $this->time;
        $status->user_id = $this->setAssignee();
        $status->claim_id = $this->claim_id;
        $status->save();
        return $status;
    }

    public function setName()
    {
         if ($this->isReassignmentStatus($this->name))
        {
            return strstr($this->type, ' ', true) . ' ' . $this->name;
        }
        return $this->name;
    }

    // public function setType()
    // {
    //     if ($this->type == 'Adjuster' || $this->type == 'Reviewer')
    //     {
    //         return 'Assignment';
    //     }
    //     if ($this->type == 'Adjuster Reassigned' || $this->type == 'Reviewer')
    //     {
    //         return 'Assignment';
    //     }
    //     return $this->type;
    // }

    public function setValue()
    {
        if (isset($this->assignee))
        { 
            return $this->assignee['fname'] . ' ' .  $this->assignee['lname'];
        }
        if ($this->isEstimateOrCorrectionStatus($this->name))
        {
            return (float)$this->value;
        }
        return $this->value;
    }

    public function setAssignee()
    {
        if (isset($this->assignee))
        {
            return $this->assignee['id'];
        }
        return null;
    }

    public function isReassignmentStatus($name)
    {
        if ($name == 'Reassigned')
        {
            return true;
        }
        return false;
    }

    public function isEstimateOrCorrectionStatus($status)
    {
        if ($status == 'Estimate Received' || $status == 'Correction Received')
        {
            return true;
        }
        return false;
    }
}
