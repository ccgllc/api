<?php

namespace CCG\Jobs;

use CCG\Claims\ManagesImportedClaimStatuses;
use CCG\Xact\XactClaimStatusImport;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportXactClaimStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, ManagesImportedClaimStatuses;

    public $tries = 1;
    // public $backoff = [2, 10, 20];

    // public $xactnetAddress;
    // public $claimRef;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($statusData)
    {
        $this->setStatus(new XactClaimStatusImport($statusData));
        $this->findXactnetAddress();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->createable()) {
            $this->createStatus();
        }
        else {
            throw new \Exception('Couldn\'t locate claim to link to');
        }
    }

     public function tags()
    {
        return [
            'claim#: '.$this->status->getProperty('claim_number'), 
            'transId: '. $this->status->getProperty('transaction_id')];
    }
}
