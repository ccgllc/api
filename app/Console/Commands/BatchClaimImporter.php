<?php

namespace CCG\Console\Commands;

use CCG\Claims\ManagesImportedClaims;
use CCG\Xact\XactClaimImport;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class BatchClaimImporter extends Command
{
    use ManagesImportedClaims;

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
     * The current count of files processed.
     *
     * @var string
     */
    protected $idx;


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->idx = 0;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $files = $this->getFiles();
        $bar = $this->output->createProgressBar(count($files));

        foreach($files as $file) {
            $this->setClaim(new XactClaimImport(file_get_contents($file)));

            if ($this->isNewClaim()) 
            {
                $this->createClaim();
                $this->idx += 1;
            } 
            else if ($this->isExistingClaim()) 
            {                
                if ($this->isReassignment()) $this->reassignClaim();

                if ($this->hasUniqueTransactionId()) $this->updateClaim(); 
                
               if ($this->isReassignment() || $this->hasUniqueTransactionId()) $this->idx += 1;
            }

            $bar->advance();
        }
        $this->info(" $this->idx claims imported.");
    }
    protected function getFiles()
    {
        return glob(storage_path('fnol_xml/in/*.{XML}'), GLOB_BRACE);
    }
}
