<?php

namespace CCG\Listeners\Claim;

use CCG\Claims\Assignment;
use CCG\Events\Claim\ClaimAssigned;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AssignClaim
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ClaimAssigned  $event
     * @return void
     */
    public function handle(ClaimAssigned $event)
    {
        return Assignment::updateOrCreate([
            'type'    => 'adjuster',
            'user_id' => $event->user->id,
            'claim_id' => $event->claim->id,
            'xactnet_address_id' => $event->xactnetAddress->id,
            'active' => 1,
        ]);
    }
}
