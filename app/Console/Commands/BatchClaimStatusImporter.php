<?php

namespace CCG\Console\Commands;

use CCG\Xact\XactClaimStatusImport;
use CCG\Claims\ManagesImportedClaimStatuses;
use Illuminate\Console\Command;

class BatchClaimStatusImporter extends Command
{
    use ManagesImportedClaimStatuses;

    public $idx;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:import-statuses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import claim status xml.';

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
          $this->setStatus(new XactClaimStatusImport(file_get_contents($file)));


           // dd($this->status->getProperty('claim'));

         if ($this->createable()) {
            $this->createStatus();
            $this->idx += 1;
         } 

        }
        $this->info(" $this->idx statuses imported.");
    }
    protected function getFiles()
    {
        return glob(storage_path('status_xml/in/*.{XML}'), GLOB_BRACE);
    }
}
