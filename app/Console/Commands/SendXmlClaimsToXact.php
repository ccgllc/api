<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;
use CCG\Xact\FtpClient;

class SendXmlClaimsToXact extends Command
{
    use FtpClient;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send xml claims to xactanalysis';

     /**
     *  phpseclib\Net\SFTP instance
     *
     * @var string
     */
    protected $sftp;

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
        $this->sftp = $this->connectToFtp();
        $this->sftp->chdir('IN');
        $idx = 0;
        $files = glob(storage_path('fnol_xml/out/*.{XML}'), GLOB_BRACE);
        $bar = $this->output->createProgressBar(count($files));
            foreach($files as $file)
            {
                //dd(str_replace('/Users/brandon/code/ccg/api/storage/fnol_xml/out/', '', $file));
                $idx ++;
                $extFilename = str_replace(storage_path('fnol_xml').'/out/', '', $file);
                //dd($extFilename);
              if ($this->sftp->pwd() === "/IN")  $this->sftp->put($extFilename, $file, SFTP::SOURCE_LOCAL_FILE);
               // dd($this->sftp->pwd());
                unlink($file);
                $bar->advance();
            }
            $this->info(" $idx claims exported.");
    }
}
