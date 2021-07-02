<?php

namespace CCG\Http\Controllers;

use CCG\Claims\ClaimStatus;
use CCG\Claims\ManagesImportedClaimStatuses;
use CCG\Events\ClaimStatusUpdated;
use CCG\Http\Controllers\Controller;
use CCG\Http\Requests\ClaimStatusRequest;
use CCG\Jobs\ImportXactClaimStatus;
use CCG\Xact\XactClaimStatusImport;
use Event;
use Illuminate\Http\Request;

class ClaimStatusController extends Controller
{
    use ManagesImportedClaimStatuses;

    protected $status;

	public function __construct() 
	{
		$this->middleware('auth', ['except' => ['store']]);
	}

	/**
	* store the status inported for a given claim.
	*
	*/
    public function store(ClaimStatusRequest $request)
    {
        $auth = $request->header('Authorization');
        if ($auth && $auth === env('XACT_KEY')){
            return $this->importStatus();
            // return $this->returnSuccessToXact();
        }
        else {
            $status = $this->createStatus($request);
            event(new ClaimStatusUpdated($status));
            return $status;
        }
    	
    }

    /**
    * show the statuses of a claim.
    *
    */
    public function show()
    {
        
    }

    public function importStatus()
    {
        ImportXactClaimStatus::dispatch($this->receivedClaimData())
            ->onQueue('statuses');
       
       // TODO: dispatch job to handle saving of claimStatus;
       
        return $this->returnSuccessToXact();
    }

    protected function createStatus($request)
    {
       return $request->persist();
    }

    public function getClaimStatuses($id)
    {
        return ClaimStatus::where('claim_id', $id)->get();
    }
    /**
    * grab xml file contents for import.
    *
    */
    private function receivedClaimData()
    {
        return file_get_contents("php://input");
    }
    /**
    * return success to xact.
    *
    */
    private function returnSuccessToXact() 
    {
    	$success = file_get_contents(storage_path('XmlResponses/XactSuccess.xml'));
        return response($success, 200, ['Content-Type', 'xml']);
    }
}
