<?php

namespace CCG\Listeners;

use CCG\Claims\Assignment;
use CCG\Claims\ClaimStatus;
use CCG\Events\ClaimImported;
use CCG\XactnetAddress;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateDefaultClaimStatus
{
    public $date;
    protected $userId;
    protected $assignable; 

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        $this->date = Carbon::now();
    }

    /**
     * Handle the event.
     *
     * @param  ClaimImported  $event
     * @return void
     */
    public function handle(ClaimImported $event)
    {
        $this->isAssignable($event->claim);
        $this->assignable ? $this->userId = $event->user->id : $this->userId = 0;
        return ClaimStatus::create($this->buildStatus($event->claim));  
    }

    protected function getStatusName()
    {
        return $this->assignable ? 'Adjuster Assigned' : 'Unassignable';
    }

    protected function getStatusType()
    {
        return $this->assignable ? 'assignment' : 'date';
    }

    protected function isAssignable($claim)
    {
        return $claim->assignable ? $this->assignable = true : $this->assignable = false;
    }

    public function buildStatus($claim)
    {
         // $this->assignable = $this->isAssignable($claim);

        return [
            'name' => $this->getStatusName(),
            'value' => $claim->assignee,  
            'type' => $this->getStatusType(),
            'date' => $this->date->toDateString(),
            'transaction_id' => $claim->transaction_id,
            'orig_transaction_id' => $claim->transaction_id,
            'claim_number' => $claim->claim_number,
            'time' => $this->date->toDateTimeString(),
            'claim_id' => $claim->id,
            'user_id' => $this->userId
        ];
    }
}
