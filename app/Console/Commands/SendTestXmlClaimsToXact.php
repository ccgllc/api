<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;
use phpseclib\Net\SFTP;

class SendTestXmlClaimsToXact extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:send-tests'; 

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send test xml claims to xactanalysis test enviornnment.';

    public $sftp; 

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->sftp = new SFTP(env('TEST_SFTP_HOST'));
        if (! $this->sftp->login(env('TEST_SFTP_USERNAME'), env('TEST_SFTP_PASSWORD')))
        {
         throw new \Exception('Login failed');
        }
        $this->sftp->chdir('IN');
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $idx = 0;
        $files = glob(storage_path('fnol_xml/test/*.{XML}'), GLOB_BRACE);
        $bar = $this->output->createProgressBar(count($files));
            foreach($files as $file)
            {
                $idx ++;
                $extFilename = str_replace(storage_path('fnol_xml').'/test/', '', $file);
                //dd($extFilename);
              if ($this->sftp->pwd() === "/IN")  $this->sftp->put($extFilename, $file, SFTP::SOURCE_LOCAL_FILE);
               // dd($this->sftp->pwd());
                unlink($file);
                $bar->advance();
            }
            $this->info(" $idx claims exported.");
    }
}
