<?php

namespace CCG\Listeners\Claim;

use CCG\Events\Claim\ClaimAssigned;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

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
        //
    }
}
