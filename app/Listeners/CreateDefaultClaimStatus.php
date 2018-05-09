<?php

namespace CCG\Listeners;

use CCG\Claims\ClaimStatus;
use CCG\Events\ClaimImported;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateDefaultClaimStatus
{
    public $date;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        $this->date = Carbon::now();
    }

    /**
     * Handle the event.
     *
     * @param  ClaimImported  $event
     * @return void
     */
    public function handle(ClaimImported $event)
    {
       return ClaimStatus::create($this->buildStatus($event));
    }

    public function buildStatus($event)
    {
        return [
            'name' => 'In Assign Queue', 
            'value' => '',  
            'type' => 'date',
            'date' => $this->date->toDateString(),
            'transaction_id' => $event->claim->transaction_id,
            'orig_transaction_id' => $event->claim->transaction_id,
            'claim_number' => $event->claim->claim_number,
            'time' => $this->date->toDateTimeString(),
            'claim_id' => $event->claim->id
        ];
    }
}
