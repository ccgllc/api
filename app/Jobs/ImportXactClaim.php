<?php

namespace CCG\Jobs;

use CCG\Claims\ManagesImportedClaims;
use CCG\Xact\XactClaimImport;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportXactClaim implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, ManagesImportedClaims;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($claimData)
    {
        $this->setClaim(new XactClaimImport($claimData));
        $this->findXactnetAddress();
        $this->getUser();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // ray($this->isNewClaim());
        if ($this->isNewClaim()) {
            return $this->createClaim();
        } 
        elseif ($this->isExistingClaim()) {
            info('claim already exists');
            if ($this->isReassignment()) return $this->reassignClaim();
            if ($this->hasUniqueTransactionId()) return $this->updateClaim();
            // throw new \Exception('Unsure of what to do with this claim... Claim# ' . $this->getClaimNumber());
        } 
        else {
            throw new \Exception('Couldn\'t import or update Claim #: '. $this->getClaimNumber());
        }
       
    }

    /**
     * Get the tags that should be assigned to the job.
     *
     * @return array
     */
    public function tags()
    {
        return ['Claim:'.$this->getClaimNumber()];
    }
}
