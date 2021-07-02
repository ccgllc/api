<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;

class MigrateTransactionIds extends Command
{
    protected $claims;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:migrate-transaction-ids';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Migrate transaction ids from Claim -> TransactionId';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        // $this->claims = \CCG\Claims\Claim::all();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach($claims as $claim) {
            TransactionId::create([
                'transaction_id' => $claim->transaction_id,
                'claim_id' => $claim->id
            ]);
        } 
    }
}
