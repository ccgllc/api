<?php

namespace CCG\Listeners;

use CCG\Claims\Assignment;
use CCG\Events\ClaimReassigned;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ReassignClaim
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
        if ($event->claim->assignable) {
            $event->claim->assignments()->currentAdjuster()->update(['active' => 0]);
            Assignment::create([
                'type' => 'adjuster',
                'user_id' => $event->user->id,
                'claim_id' => $event->claim->id,
                'active' => 1,
            ]);
        }
    }
}
