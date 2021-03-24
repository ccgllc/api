<?php

use CCG\Mail\CallToAction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api\EmploymentApplication')
	->middleware('auth:api')
	->group(function () {
	    // Controllers Within The "App\Http\Controllers\Api\EmploymentApplication" Namespace
		Route::post('/user/personal-information/', 'PersonalInformationController@store');
		Route::post('/user/work-history/', 'WorkHistoryController@store');
		Route::post('/user/certifications/', 'CertificationsController@store');
});

Route::namespace('Api\Profile')
	->middleware('auth:api')
	->group(function () {
		Route::put('users/{id}/role', 'ProfileController@role');
		Route::patch('user/{id}/status', 'ProfileController@status');
		Route::patch('user/{id}/referral', 'ProfileController@referral');
		Route::put('user/{id}/xactnet_address', 'ProfileController@xactnetAddress');
		Route::patch('user/{id}/xactnet_address', 'ProfileController@updateXactnetAddress');
		Route::delete('/xactnet_address/{id}', 'ProfileController@deleteXactnetAddress');
		Route::put('user/{id}/phone', 'ProfileController@phone');
		Route::put('user/{id}/email', 'ProfileController@email');
		Route::put('user/{id}/address', 'ProfileController@address');
		Route::post('user/{id}/license', 'ProfileController@license');
		Route::delete('user/{id}/license/{licenseId}', 'ProfileController@destroyLicense');
		Route::patch('user/{id}/license/{licenseId}', 'ProfileController@updateLicense');
		Route::post('user/{id}/avatar/', 'ProfileController@createAvatar');
		Route::delete('user/avatar/{id}', 'ProfileController@destroyAvatar');
		 //temporary and only for batch updating exisitng profile data 
		// where no lat lng data exists.
		Route::post('users/locations', 'ProfileController@location');
		Route::post('user/{id}/documents', 'UserDocumentsController@store');
		Route::delete('user/documents/{id}', 'UserDocumentsController@destroy');
		Route::post('user/{id}/certifications', 'UserCertificationsController@store');
		Route::delete('user/certifications/{id}', 'UserCertificationsController@destroy');
		Route::post('user/{id}/software-experiences', 'UserSoftwareExperiencesController@store');
		Route::post('user/{id}/work-history', 'UserWorkHistoriesController@store');
		Route::delete('user/software-experiences/{id}', 'UserSoftwareExperiencesController@destroy');
});

Route::namespace('Api\Acl')
	->middleware('auth:api')
	->group(function (){
		Route::get('users', 'UserAdministrationController@filter');
		Route::get('users/all', 'UserAdministrationController@getAll');
		Route::post('users', 'UserAdministrationController@destroyUsers');
		Route::delete('users/{id}', 'UserAdministrationController@destroy');
		Route::get('user/{id}/roles', 'UserAdministrationController@getRoles');
		Route::put('user/{id}/roles', 'UserAdministrationController@syncRoles');
		Route::put('user/{id}/available', 'UserAdministrationController@toggleAvailability');
		Route::put('user/{id}/priority', 'UserAdministrationController@updatePriority');
		Route::put('user/{id}/notes', 'UserAdministrationController@updateNotes');
		Route::put('user/{id}/status', 'UserAdministrationController@updateStatus');
		Route::post('role','RolesController@create');
		Route::delete('role/{id}', 'RolesController@destroy');
});

Route::namespace('Api\Claims')
	// ->middleware('auth:api')
	->group(function() {
		Route::put('claims/{claim_id}/geometry', 'ClaimController@geometry');
		Route::apiResource('claims/{claim_id}/assignments', 'AssignmentController');
		Route::apiResource('claims/{claim_id}/estimates', 'EstimateController');
		Route::apiResource('claims/{claim_id}/statuses', 'StatusController');
		Route::apiResource('claims/{claim_id}/invoices', 'InvoiceController');
	});

Route::post('/admin/client-error', function(Request $request){
       Log::error($request->all());
       return response('success', 200);
});

Route::post('search', function(Request $request){
	$query = $request->get('query');
	// $query = str_replace("#", '', $query);
	$results = collect([]);

	// if ($request->scope == 'users') {
		 $users = CCG\User::with('roles')->where('name', 'like', "%$query%")->exclude('api_token')->take(5)->get();
	// }
		 if ($users) {

		 	 $users = $users->each(function($user, $key){
		 			$user->scope = 'users';
		 	 });

		 	 $results->push($users);
		 } 

		 $claims = CCG\Claims\Claim::where('claim_number', 'like', "%$query%")
							->orWhere('transaction_id', 'like', "%$query%")->take(5)->get();

			if ($claims) {

				$claims->each(function($claim, $key){
			 		$claim->scope = 'claims';
			 	});

				$results->push($claims);

			}
				
	
		// return CCG\Claims\Claim::where('claim_number', 'like', "%$query%")
		// 					->orWhere('transaction_id', 'like', "%$query%")->take(5)->get();
		// 					// ->orWhere('insured', 'like', "%$query%")
	//}
	return $results->flatten();	
});

Route::post('call-to-action/email', function(Request $request){
	Log::info($request->all());
	Mail::to('info@claimconsultantgroup.com')->send(new CallToAction($request->all()));
   // return json_encode($request->body);
   // return response('success', 200);
});