<?php

namespace CCG\Listeners;

use CCG\Events\ClaimReassigned;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UnassignCurrentAdjuster
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
     * @param  ClaimReassigned  $event
     * @return void
     */
    public function handle(ClaimReassigned $event)
    {
        $hasCurrentAdjuster = (boolean) $event->claim->currentAdjuster()->count();

        if ( $hasCurrentAdjuster ) {
            $event->claim->currentAdjuster()->update(['active' => 0]);
        } 
    }
}
