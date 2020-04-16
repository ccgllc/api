<?php

namespace CCG\Listeners;

use CCG\Claims\ClaimStatus;
use CCG\Events\ClaimReassigned;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateReassignmentClaimStatus
{
    protected $date;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        $this->date = \Carbon\Carbon::now();
    }

    /**
     * Handle the event.
     *
     * @param  ClaimReassigned  $event
     * @return void
     */
    public function handle(ClaimReassigned $event)
    {
        if ($event->claim->assignable){
            ClaimStatus::create([
                'name' => 'Reassigned',
                'value' => '',  
                'type' => 'Adjuster',
                'date' => $this->date->toDateString(),
                'transaction_id' => $event->claim->transaction_id,
                'orig_transaction_id' => $event->claim->transaction_id,
                'claim_number' => $event->claim->claim_number,
                'time' => $this->date->toDateTimeString(),
                'claim_id' => $event->claim->id,
                'user_id' => $event->user->id
            ]);
        } else {
            // $event->claim->
            ClaimStatus::create([
                'name' => 'Unassignable Reassignment',
                'value' => '',  
                'type' => 'date',
                'date' => $this->date->toDateString(),
                'transaction_id' => $event->claim->transaction_id,
                'orig_transaction_id' => $event->claim->transaction_id,
                'claim_number' => $event->claim->claim_number,
                'time' => $this->date->toDateTimeString(),
                'claim_id' => $event->claim->id,
            ]); 
        }
    }
}
