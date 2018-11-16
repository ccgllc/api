<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;
use CCG\Xact\FtpClient;
use phpseclib\Net\SFTP;

class GetClaimDocuments extends Command
{
    use FtpClient;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:get-documents';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'get claim documents';

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
        $this->sftp->chdir('OutParsed');
        $files = collect($this->sftp->rawlist())->sortByDesc('mtime');
        // eval(\Psy\sh());
        // dd($files->all());
        $transferable = $files->filter(function($item, $key) {
            // eval(\Psy\sh());    
            preg_match('/(\.[PpDdFf]{3,})/', $item['filename'], $matches);
           if (count($matches) > 0) return $item;
        });
        // $transferable->count();
         // eval(\Psy\sh());
        $transferable->each(function ($file) {
            $extFilename = storage_path('fnol_xml').'/docs/'.$file['filename'];
            if ($this->sftp->pwd() === "/OutParsed")  $this->sftp->get($file['filename'], $extFilename);
            $this->info($file['filename']. ' transferred.');
            $this->sftp->delete($file['filename'], false);
        });
        $this->info($transferable->count().' files transferred.');
    }
}
