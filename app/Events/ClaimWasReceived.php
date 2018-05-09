<?php

namespace CCG\Events;

use CCG\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class ClaimWasReceived extends Event
{
    use SerializesModels;

    public $claim;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($claim)
    {
        $this->claim = $claim;
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return [];
    }
}
