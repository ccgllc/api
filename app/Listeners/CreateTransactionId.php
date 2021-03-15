<?php

namespace CCG\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CreateTransactionId
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
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        \CCG\Claims\TransactionId::create([
            'transaction_id' => $event->claim->transaction_id,
            'claim_id' => $event->claim->id,
        ]);
    }
}
