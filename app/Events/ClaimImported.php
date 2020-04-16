<?php

namespace CCG\Events;

use CCG\Claims\Claim;
use CCG\Events\Event;
use CCG\User;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class ClaimImported extends Event
{
    use SerializesModels;

    public $claim;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Claim $claim, $user)
    {
        $this->claim = $claim;
        $this->user = $user;
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
