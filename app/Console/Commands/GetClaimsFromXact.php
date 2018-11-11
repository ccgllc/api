<?php

namespace CCG\Console\Commands;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Console\Command;
use CCG\Xact\FtpClient;

class GetClaimsFromXact extends Command
{
    use FtpClient;
     /**
     * sftp instance.
     *
     * @var  phpspeclib\Net\SFTP;.
     */
    protected $sftp;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:get';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transfer new claim files (xml) from xact to application.';

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
        $this->sftp->chdir('OUT');
        $files = collect($this->sftp->rawlist())->sortByDesc('mtime');
        $transferable = $files->where('mtime', '>', cache('xactTimeMarker')->timestamp);
        // $transferable->count();
        $transferable->each(function ($file) {
            $extFilename = storage_path('fnol_xml').'/in/'.$file['filename'];
            if ($this->sftp->pwd() === "/OUT")  $this->sftp->get($file['filename'], $extFilename);
        });
        Cache::forever('xactTimeMarker', Carbon::createFromTimeStamp($transferable->max('mtime')));
         $this->info($transferable->count().' files transferred.');
        eval(\Psy\sh());
    }
}
