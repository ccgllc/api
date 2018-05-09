<?php

namespace CCG\Listeners;

use CCG\Events\ClaimWasReceived;
use CCG\Invoice;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateClaimInvoice
{

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
       
    }

    /**
     * Handle the event.
     *
     * @param  ClaimWasReceived  $event
     * @return void
     */
    public function handle(ClaimWasReceived $event)
    {
        $invoice = new Invoice;
        $invoice->claim_id = $event->claim->id;
        $invoice->claim_type = $event->claim->claim_type;
        $invoice->carrier = $event->claim->carrier->name;
        $invoice->insured = $event->claim->insured;
        $invoice->claim_number = $event->claim->claim_number;
        $invoice->carrier_id = $event->claim->carrier_id;
        $invoice->adjuster_id = $event->claim->adjuster_id;
        $invoice->reviewer_id = $event->claim->reviewer_id;
        $invoice->invoice_number = Invoice::max('invoice_number') + 1;
        $invoice->save();
    }
}
