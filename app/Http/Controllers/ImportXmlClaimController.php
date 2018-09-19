<?php

namespace CCG\Http\Controllers;

use Illuminate\Http\Request;
use CCG\Xact\Export\GeneratesXmlClaim;

class ImportXmlClaimController extends Controller
{
	use GeneratesXmlClaim;

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
    	//dd($request->all());
    	// dd(file_get_contents('php://input'));
    	// $xml = simplexml_load_file($request->file('xml'));
    	$xml = simplexml_load_string(file_get_contents('php://input'), 'SimpleXMLElement', LIBXML_NOCDATA);
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
		// dd(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.zip');
		// dd($zip->open(storage_path('fnol_xml').'/'.$doc->claimNumber.'.zip'));
		// dd(file_exists(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'. $doc->claimNumber.'.pdf'));
		if ($zip->open(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.XML', \ZIPARCHIVE::CREATE | \ZIPARCHIVE::OVERWRITE) == true) {
		    $zip->addFile(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.'XACTDOC.XML', 'XACTDOC.XML');
		    $zip->addFile(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'. $doc->claimNumber.'.pdf', $doc->claimNumber.'.pdf');
		    $zip->close();
		    echo 'ok'; 
		} else {
		    echo 'failed';
		}

		rename(storage_path('fnol_xml').'/'.$doc->claimNumber.'/'.$doc->claimNumber.'.XML', storage_path('fnol_xml').'/out/'.$doc->claimNumber.'.XML');

    }

    protected function generatePdfFilename ($claimNumber)
    {
    	return storage_path('fnol_xml').'/'.$claimNumber.'/'.$claimNumber.'.pdf';
    }
}
