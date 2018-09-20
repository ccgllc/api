<?php

namespace CCG\Http\Controllers;

use Illuminate\Http\Request;
use CCG\Xact\Export\GeneratesXmlClaim;

class ImportXmlClaimController extends Controller
{
	use GeneratesXmlClaim;

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
    	// create a new http client
    	$client = new \GuzzleHttp\Client();
    	//create request object uses pdf link embedded in raw xml data for its uri..
    	$request = new \GuzzleHttp\Psr7\Request('GET', $doc->pdfLink);
    	// open a new (empty) pdf file
    	$file = fopen($this->generatePdfFilename($doc->claimNumber), "w+");
    	// create async http request
		$promise = $client->sendAsync($request)->then(function ($response) use ($file) {
		    // write request body (pdf data) into our $file
		    fwrite($file, $response->getBody());
		    // close newly written file and remove from memory
		    fclose($file);
		    // test sugar -- remove.
		    echo 'I completed! ';
		});
		// wait for promise to resolve.
		$promise->wait();
		$zip = new \ZipArchive();
			if ($zip->open(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.XML', \ZIPARCHIVE::CREATE | \ZIPARCHIVE::OVERWRITE) == true) {
		    $zip->addFile(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.'XACTDOC.XML', 'XACTDOC.XML');
		    $zip->addFile(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'. $doc->claimNumber.'.pdf', $doc->claimNumber.'.pdf');
		    $zip->close();
		    echo 'ok'; 
		} else {
		    echo 'failed';
		}

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

    protected function generatePdfFilename ($claimNumber)
    {
    	return storage_path('fnol_xml').'/'.$claimNumber.'/'.$claimNumber.'.pdf';
    }
}
