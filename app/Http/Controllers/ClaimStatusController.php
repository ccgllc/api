<?php

namespace CCG\Http\Controllers;

use CCG\Claims\ClaimStatus;
use CCG\Http\Controllers\Controller;
// use CCG\Http\Requests;
use CCG\Http\Requests\ClaimStatusRequest;
use CCG\Xact\XactClaimStatusImport;
use Illuminate\Http\Request;
use Event;
use CCG\Events\ClaimStatusUpdated;

class ClaimStatusController extends Controller
{
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

    protected function importStatus()
    {
        //create a new instance of status import.
        $this->status = new XactClaimStatusImport($this->receivedClaimData());
        $parsedStatus = $this->status->parse();
        // persist status.
        ray($parsedStatus)->blue(); 
        // ClaimStatus::create($status->all());
        //notify Xact of success.
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
