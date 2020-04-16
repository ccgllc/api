<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;

class MigrateXactnetAddresses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'xactnet-addresses:migrate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'migrate xactnet addresses from profile to XactnetAddress model.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $profiles = \CCG\Profile::where('xactnet_address', "!=", null)->get();
        $profiles->each(function ($profile, $key) {
            $primary = 1;
            // $xactnetAddresses = \CCG\XactnetAddress::where('address', $profile->xactnet_address)->get();
            if(\DB::table('xactnet_addresses')->where('address', $profile->xactnet_address)->exists()) {
                $profile->xactnet_address = $profile->xactnet_address . '-' . random_int(1,10);
                $primary = 0;
            }
            \CCG\XactnetAddress::create([
                'address' => $profile->xactnet_address,
                'primary' => $primary,
                'user_id' => $profile->user_id
            ]);
        });
    }
}
