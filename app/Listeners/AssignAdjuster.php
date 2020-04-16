<?php

namespace CCG\Listeners;

use CCG\Claims\Assignment;
use CCG\Events\ClaimImported;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AssignAdjuster
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
     * @param  ClaimImported  $event
     * @return void
     */
    public function handle(ClaimImported $event)
    {
         if ($event->claim->assignable && $event->user) {
            Assignment::create([
                'type' => 'adjuster',
                'user_id' => $event->user->id,
                'claim_id' => $event->claim->id,
                'active' => 1,
            ]);
        }
    }
}
