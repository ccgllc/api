<?php

namespace CCG\Console\Commands;

use CCG\Claims\CreateClaimFromImport;
use CCG\Xact\XactClaimImport;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class BatchClaimImporter extends Command
{
    use CreateClaimFromImport;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Batch import transferred XML claim data';

     /**
     * Files array to loop through.
     *
     * @var array
     */
    protected $files;

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
        if ($this->confirm('Do you wish to continue? [y|N]')) {
            // $this->info('Importing...');
            $idx = 0;
            $files = glob(storage_path('fnol_xml/in/*.{XML}'), GLOB_BRACE);
            $bar = $this->output->createProgressBar(count($files));
            foreach($files as $file)
            {
                // var_dump($file);
                $data = file_get_contents($file);
                $claim = new XactClaimImport($data);
                // var_dump($claim->transactionId);
                if(DB::table('claims')->where('transaction_id', $claim->transactionId)->doesntExist())
                {
                    $this->persistClaimData($claim);
                    // $this->saveJsonFile($claim->claim_data);
                    $idx += 1;
                }
                //unlink($file);
                $bar->advance();
            }
            $this->info(" $idx claims imported.");
        }
    }
}
