<?php

namespace CCG\Events\XactnetAddress;

use CCG\XactnetAddress;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class XactnetAddressCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $xactnetAddress;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(XactnetAddress $xactnetAddress)
    {
        $this->xactnetAddress = $xactnetAddress;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
