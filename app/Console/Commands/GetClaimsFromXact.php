<?php

namespace CCG\Console\Commands;

use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Console\Command;
use CCG\Xact\FtpClient;

class GetClaimsFromXact extends Command
{
    use FtpClient;

    public $path;
    public $statuses;

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
    protected $signature = 'claims:get {--statuses}';

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
        $this->statuses = $this->option('statuses');
        $this->path = $this->getPath();
        $this->sftp = $this->connectToFtp();
        // $this->sftp = $this->connectToTestFtp();
        $this->sftp->chdir($this->setFtpDirectory());
        $files = collect($this->sftp->rawlist())->sortByDesc('mtime');
        $transferable = $files->where('mtime', '>', $this->getMarker());
        // dd($transferable->count());
        $transferable->each(function ($file) {
            $extFilename = $this->getExtFileName($file);
            $this->sftp->get($file['filename'], $extFilename);
        });

        $this->updateMarker($transferable);
        
        $this->info($transferable->count().' files transferred.');

        return $this->statuses
            ? $this->call('claims:unzip --statuses')
            : $this->call('claims:unzip');
        // eval(\Psy\sh());
    }

     protected function getPath()
    {
        return $this->statuses
            ? storage_path('status_xml/in/')
            : storage_path('fnol_xml/in/');
    }

    protected function getExtFileName($file)
    {
       return $this->statuses
            ? storage_path('status_xml').'/in/'.$file['filename']
            : storage_path('fnol_xml').'/in/'.$file['filename'];
    }

    protected function setFtpDirectory()
    {
       return $this->statuses 
            ? '/ClaimDeck/Status/'
            : '/ClaimDeck/FNOL/';
    }

    protected function updateMarker($transferable)
    {
        return $this->statuses
            ? Cache::forever('xactStatusTimeMarker', Carbon::createFromTimeStamp($transferable->max('mtime')))
            : Cache::forever('xactTimeMarker', Carbon::createFromTimeStamp($transferable->max('mtime')));
    }

    protected function getMarker()
    {
        return $this->statuses 
            ? cache('xactStatusTimeMarker')->timestamp
            : cache('xactTimeMarker')->timestamp;  
    }
}
