<?php

namespace CCG\Listeners;

use CCG\Events\ClaimStatusUpdated;
use CCG\Claims\Claim;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UpdateClaimStatus
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
     * @param  ClaimStatusUpdated  $event
     * @return void
     */
    public function handle(ClaimStatusUpdated $event)
    {
        $this->updateClaimStatus($event);
        
    }

    private function updateClaimStatus($event)
    {
        $claim = Claim::find($event->status->claim_id);
        $claim->current_status = $event->status->name;
        if ($this->statusIsEstimateOrCorrection($event))
        {
            $claim->gross_loss = $event->status->value;
        }
        if ($this->statusIsAdjusterAssignment($event))
        {
            $claim->adjuster_id = $event->status->user_id;
        }
        if ($this->statusIsReviewerAssignment($event))
        {
            $claim->reviewer_id = $event->status->user_id;
        }
        $claim->save();
    }

    private function  statusIsAdjusterAssignment($event)
    {
        if ($event->status->type == 'Adjuster')
        {
            return true;
        }
        if ($event->status->name == 'Adjuster Reassigned')
        {
            return true;
        }
        return false;
    }
    private function  statusIsReviewerAssignment($event)
    {
        if ($event->status->type == 'Reviewer')
        {
            return true;
        }
        if ($event->status->name == 'Reviewer Reassigned')
        {
            return true;
        }
        return false;
    }
    private function statusIsEstimateOrCorrection($event)
    {
        if ($event->status->name == 'Estimate Received' || $event->status->name == 'Correction Received')
        {
            return true;
        }
        return false;
    }
}
