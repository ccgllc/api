<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;
use phpseclib\Net\SFTP;

class SendJsonClaimData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:send-json';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send simplified claim data in JSON to FTP folder.';

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
        
    }
}
