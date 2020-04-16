<?php

namespace CCG\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // 'CCG\Events\Event' => [
        //     'CCG\Listeners\EventListener',
        // ],
        'Illuminate\Auth\Events\Registered' => [
            'CCG\Listeners\SendAccountVerificationEmail', 
        ],
         'CCG\Events\ClaimImported' => [
            'CCG\Listeners\AssignAdjuster',
            'CCG\Listeners\CreateDefaultClaimStatus',
            'CCG\Listeners\CreateClaimTags',
        ],
        'CCG\Events\ClaimReassigned' => [
            'CCG\Listeners\UnassignCurrentAdjuster',
            'CCG\Listeners\CreateReassignmentClaimStatus',
            'CCG\Listeners\ReassignClaim',
        ],
        'CCG\Events\Claim\ClaimAssigned' => [
            'CCG\Listeners\Claim\AssignClaim',
        ],
        'CCG\Events\XactnetAddress\XactnetAddressCreated' => [
            'CCG\Listeners\XactnetAddress\AssignExistingClaims',
        ],
        //  'CCG\Events\Claim\EstimateCreated' => [
        //     'CCG\Listeners\Claim\CreateEstimateStatus',
        // ],  
        // 'CCG\Events\ClaimWasReceived' => [
        //     'CCG\Listeners\CreateClaimInvoice'
        // ],
        'CCG\Events\ClaimStatusUpdated' => [
            'CCG\Listeners\UpdateClaimStatus'
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
