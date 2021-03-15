<?php

namespace CCG\Console\Commands;

use Illuminate\Console\Command;

class UnzipClaims extends Command
{
    public $zip;
    public $path;
    public $statuses;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:unzip {--statuses}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Unzip tranferred claim zip archives.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->zip = new \ZipArchive();
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

        $files = $this->getFiles();

        foreach($files as $file) {
            $this->zip->open($file);
            $this->zip->extractTo($this->path, 'XACTDOC.XML');
            $this->zip->close();
            // rename xml to trnasaction id from orginal filename.
            $this->renameXmlFile($file);
            // move zip file to archive in $this->path . '/archive'
            // $this->moveZipFile($file);
        }

        $this->info(count($files). 'statuses unziped.');

    }

    protected function getPath()
    {
        return $this->statuses
            ? storage_path('status_xml/in/')
            : storage_path('fnol_xml/in/');
    }

    protected function renameXmlFile($file)
    {
        rename($this->path . 'XACTDOC.XML', $this->path . $this->setXmlFileName($file));
    }

    protected function setXmlFileName($file)
    {
        preg_match('/[A-Za-z0-9]{8}\.?\d*\.?/', $file, $matches);
        return $matches[0].'XML';
    }

    protected function moveZipFile($file)
    {
        rename($file, $this->path . '/archive/' . $this->getOrginalFileName($file));
    }

    protected function getOrginalFileName($file)
    {
        preg_match('/[A-Za-z0-9]{8}\.\d*\.?CLAIMRULER\.ZIP/', $file, $matches);
        return $matches[0];
    }

     protected function getFiles()
    {
        return $this->statuses
            ? glob(storage_path('status_xml/in/*.{ZIP}'), GLOB_BRACE)
            : glob(storage_path('fnol_xml/in/*.{ZIP}'), GLOB_BRACE);
    }
}
