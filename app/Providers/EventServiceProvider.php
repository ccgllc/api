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
            'CCG\Listeners\CreateDefaultClaimStatus'
        ],
        'CCG\Events\ClaimWasReceived' => [
            'CCG\Listeners\CreateClaimInvoice'
        ],
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
