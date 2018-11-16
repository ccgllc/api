<?php

namespace CCG\Http\Controllers;

use Illuminate\Http\Request;
use CCG\Xact\Export\GeneratesXmlClaim;
use CCG\Xact\FtpClient;

class ImportXmlClaimController extends Controller
{
	use GeneratesXmlClaim, FtpClient;

	public $test = false; 

	public function __construct()
	{
		//
	}
	public function show() 
	{
		return view('claims.csv-import');
	}

    public function import(Request $request)
    {
    	//capture xml from request body
    	$xml = simplexml_load_string($request->getContent(), 'SimpleXMLElement', LIBXML_NOCDATA);
    	// create xml file in memory 
    	$doc = $this->createXml($xml);
    	
		if ($this->test) {
			rename(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.XML', storage_path('fnol_xml').'/test/'.$doc->claimNumber.'.XML');
		} else {
			rename(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.XML', storage_path('fnol_xml').'/out/'.$doc->claimNumber.'.XML');
		}

    }

    public function testImport(Request $request)
    {
    	$this->test = true; 
    	$this->import($request);
    }

    
}
