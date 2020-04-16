<?php

namespace CCG\Listeners\XactnetAddress;

use CCG\Claims\Assignment;
use CCG\Claims\Claim;
use CCG\Claims\ClaimStatus;
use CCG\Events\XactnetAddress\XactnetAddressCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AssignExistingClaims
{
    public $date; 
    
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
     * @param  XactnetAddressCreated  $event
     * @return void
     */
    public function handle(XactnetAddressCreated $event)
    {
        $claims = Claim::unassignable()->assignee($event->xactnetAddress->address)->get();
        $claims->each(function($claim, $key) use ($event) {
            $claim->update(['assignable' => 1]);

            $assignment = Assignment::create([
                'type' => 'adjuster',
                'user_id' => $event->xactnetAddress->user->id,
                'claim_id' => $claim->id,
                'active' => 1,
            ]);

            $status = ClaimStatus::create([
                'name' => 'Adjuster Assigned',
                'value' => $assignment->user->name,  
                'type' => 'assignment',
                'date' => $this->date->toDateString(),
                'transaction_id' => $claim->transaction_id,
                'orig_transaction_id' => $claim->transaction_id,
                'claim_number' => $claim->claim_number,
                'time' => $this->date->toDateTimeString(),
                'claim_id' => $claim->id,
            ]);
        });
    }
}
