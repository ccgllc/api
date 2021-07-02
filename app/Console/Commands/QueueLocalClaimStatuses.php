<?php

namespace CCG\Console\Commands;

use CCG\Jobs\ImportXactClaimStatus;
use Illuminate\Console\Command;

class QueueLocalClaimStatuses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:queue-local-statuses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Queue local xml claim statuses';

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
     * @return int
     */
    public function handle()
    {
        $files = $this->getFiles();
        $bar = $this->output->createProgressBar(count($files));

        foreach($files as $file) {
            ImportXactClaimStatus::dispatch(file_get_contents($file))
                ->onQueue('statuses');

            $this->idx += 1;
            $bar->advance();
        }

        $this->info("$this->idx claim statuses queued for import.");
    }

    protected function getFiles()
    {
        return glob(storage_path('status_xml/in/*.{XML}'), GLOB_BRACE);
    }
}
