<?php

namespace CCG\Events\Claim;

use CCG\Claims\Claim;
use CCG\User;
use CCG\XactnetAddress;
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
    public $xactnetAddress; 
    public $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Claim $claim, User $user, XactnetAddress $xactnetAddress)
    {
        $this->claim = $claim;
        $this->user = $user;
        $this->xactnetAddress = $xactnetAddress;
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
