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
		   $claims = Claim::all();
		   // dd(json_decode($claim->claim_data));
			// dd($superAdmin);
			return view('claims.dashboard', compact('superAdmin', 'claims'));
		}

		return Claim::orderBy('date_received', 'desc')->get();

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
		 		$query->orderBy('created_at', 'desc');
		 	},
		 	'tags' => function($query) {
		 		$query->orderBy('created_at', 'asc');
		 	},
            'statuses.user.avatar', 'statuses.user.roles', 'carrier', 'assignments', 'estimates',  //'invoices.payments.check.deposit','invoices.supplements', 'reviewer', 'adjuster', 'carrier'
		])->first();
		// $claim->statuses->load('user.avatar');
		// dd($claim);
		$user = $request->user();
		// $adjuster = 
		// return Claim::find($id);
		// $claim = Claim::findOrFail($id)->load('carrier');
		// dd(json_encode($claim->claim_data));
		// dd($claim);
		// $user = User::find(87); //15
		// $user->load('avatar');
		// $reviewer = User::find(13); //17
		// $reviewer->load('avatar');
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
