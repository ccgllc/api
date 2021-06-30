<?php

namespace CCG\Http\Controllers;

use CCG\Claims\ManagesImportedClaims;
use CCG\Jobs\ImportXactClaim;
use CCG\Xact\XactClaimImport;
use Carbon\Carbon;
use Illuminate\Foundation\Http\response;
use Illuminate\Http\Request;
use \Event;

class ClaimsImportController extends Controller
{
	use ManagesImportedClaims;

	/**
	 * Check our request for the xact-key and either proceed or abort.
	 * @return CCG\Xact\XactClaimImport
	*/
	public function import(Request $request)
	{
		$auth = $request->header('Authorization');
		if ($auth && $auth === env('XACT_KEY')){
    		return $this->importClaim();
    	};
		return response('Unauthorized, No authorization provided, or your credentials are invalid.', '401')->header('Content-Type', '');
	}

	/**
	 * Parse the imported XMl and create a new claim.
	 * @return Illuminate\Foundation\Http\response;
	*/
    public function importClaim()
    {
    	// create an instance of our claim importer with xml file recieved.
    	// $claim = new XactClaimImport($this->receivedClaimData());
    	// ray($claim);

    	ImportXactClaim::dispatch($this->receivedClaimData());

    	// dd($claim);
        // 2. Create New Claim From Parsed XML.
        // $newClaim = $this->saveClaim($claim);
        // dd($newClaim); /// REMOVE FOR PRODUCTION.
        // 3. Return the success XML Response to Xactanalysis.
        $success = file_get_contents(storage_path('XmlResponses/XactSuccess.xml'));
        return response($success, 200, ['Content-Type', 'xml']);
    }

	 /**
	 * @return array|\Symfony\Component\HttpFoundation\File\UploadedFile
	 */
    private function receivedClaimData()
    {
        return file_get_contents("php://input");
    }
}
