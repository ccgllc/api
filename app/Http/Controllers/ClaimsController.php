<?php 

namespace CCG\Http\Controllers;

// use CCG\Claims\AccessContact;
use CCG\Claims\Claim;
use CCG\Events\ClaimWasReceived;
use CCG\Http\Controllers\Controller;
use CCG\Http\Requests\PersistClaimForm;
use CCG\User;
use CCG\Xact\XactClaimImport;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Log;
use \Event;

class ClaimsController extends Controller {

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['store', 'getClaimStatuses']]);
    }

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(Request $request)
	{
		if (!$request->ajax()){
			// auth()->loginUsingId(5);
			$superAdmin = auth()->user();
		   $claims = Claim::with('statuses', 'assignments.user')->take(100)->get();
		   // dd(json_decode($claim->claim_data));
			// dd($superAdmin);
			return view('claims.dashboard', compact('superAdmin', 'claims'));
		}

		return Claim::with('statuses', 'assignments.user')->orderBy('date_of_loss', 'desc')->take(200)->get();

	}


	public function payable()
	{
		return Claim::with([
            'invoices' => function($query){
                $query->where('invoice_total', '>', 0)
                ->where('balance', '!=', 0);
            }, 
            // 'invoice',
            ])->get();
	}

    /**
     * Store a newly created resource in storage.
     * @return Response
     * @internal param CCG\Http\Requests\PersistClaimForm $claimData
     */
	public function store(PersistClaimForm $claimData)
    {	
        //otherwise we create it with the Claim form data.
        //Validation and persistance occurs CCG\Http\Requests\PersistClaimForm.  
        $claim = $claimData->persist();
        //finally we throw an event and create the invoice 
        //for the created claim inside the event handler. 
       Event::fire(new ClaimWasReceived($claim));

       return $claim;
       
    }

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show(Request $request, $id)
	{
		$claim = Claim::whereId($id)->with([
			'statuses' => function($query){
		 		$query->orderBy('time', 'desc');
		 	},
		 	'tags' => function($query) {
		 		$query->orderBy('created_at', 'asc');
		 	},
		 	'assignments' => function ($query) {
		 		$query->orderBy('created_at', 'asc');
		 	},
      'statuses.user.avatar', 'statuses.user.roles', 'carrier.feeSchedules', 'assignments.user.avatar', 'estimates', 'invoices',  //'invoices.payments.check.deposit','invoices.supplements', 'reviewer', 'adjuster', 'carrier'
		])->firstOrFail();
		// $claim->statuses->load('user.avatar');
		// dd($claim);
		$user = $request->user();
		if ($claim->currentAdjuster()->count()) {
			$claim->adjuster = $claim->currentAdjuster()->user->load('avatar');
		}
		// dd($claim->carrier->feeSchedules);
		return view('claims.show', compact('claim', 'user'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		return Claim::find($id);
	}
	/**
	 * retreive statuses for a given claim.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function getClaimStatuses($id)
	{
		return Claim::where('id', $id)->with('statuses')->firstOrFail();
	}
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(PersistClaimForm $formData, $id)
	{
		//update claim data here.
		$claim = $formData->update($id);
		return $claim;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		return Claim::destroy($id);
	}

}
