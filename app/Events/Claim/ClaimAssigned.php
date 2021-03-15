<?php

namespace CCG\Events\Claim;

use CCG\Claims\Claim;
use CCG\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ClaimAssigned
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $claim;
    public $user; 

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Claim $claim, User $user)
    {
        $this->claim = $claim;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        // return new PrivateChannel('channel-name');
    }
}
