<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;

class ImportAdjusters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'adjusters:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import adjusters (Name, email, Xactnet Address) from CSV';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        // $csv = fgetcsv(fopen(storage_path('app/adjusters.csv'), "r"));
        // dd($csv);
        // $csv = array_map('str_getcsv', file(storage_path('app/adjusters.csv')));
        // dd($csv);
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        
    }
}
