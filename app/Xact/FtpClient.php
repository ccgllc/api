<?php

namespace CCG\Xact;

use phpseclib\Net\SFTP;

trait FtpClient {

	// protected $creds = ['SFTP_HOST'. 'SFTP_USERNAME', 'SFTP_PASSWORD'];
	
	public function connectToFtp()
    {
        $sftp = new SFTP(env('SFTP_HOST'));
        if (! $sftp->login(env('SFTP_USERNAME'), env('SFTP_PASSWORD')))
        {
         throw new \Exception('Login failed');
        }
        $idx = 0;
        return $sftp;
    }
    public function connectToTestFtp()
    {
    	 $sftp = new SFTP(env('TEST_SFTP_HOST'));
        if (! $sftp->login(env('TEST_SFTP_USERNAME'), env('TEST_SFTP_PASSWORD')))
        {
         throw new \Exception('Login failed');
        }
        $idx = 0;
        return $sftp;
    }
}