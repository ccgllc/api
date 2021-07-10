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

        // Track down any unassignable statuses that match the new xactnet address.
        $unassignableStatuses = 
            ClaimStatus::with(['claim'])
                ->unassignable()
                ->where('value', '=', $event->xactnetAddress->address)
                ->get();

        //if any statuses they are now assignable, so we need to update each status
        $unassignableStatuses->each(
            function($status, $key) use ($event) {
                $status->update([
                    'name' => 'Adjuster Assigned',
                    'type' => 'assignment',
                    'user_id' => $event->xactnetAddress->user->id,
                ]);
            }
        );

        // and then update each claim
        $claims = $unassignableStatuses->pluck('claim');        
        $claims->each(function($claim, $key) use ($event) {
            $claim->update(['assignable' => 1]);

            // finally create the new assignment.
            $assignment = Assignment::create([
                'type' => 'adjuster',
                'user_id' => $event->xactnetAddress->user->id,
                'xactnet_address_id' => $event->xactnetAddress->id,
                'claim_id' => $claim->id,
                'active' => 1,
            ]);

        });
    }
}
