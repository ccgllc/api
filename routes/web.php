<?php

// use Laravel\Socialite\Facades\Socialite;

// Route::get('/mailable', function () {
//     $user = App\User::find(107);
//     return new App\Mail\AccountVerification($user);
// });
// Route::get('/file', function(){
// 	// dd(Storage::url('hr/user_documents/file.docx'));
// 	$file = '../storage/hr/user_documents/Brandon Hamm1/Brandon Hamm.docx';
// 	return response()->download($file, 'Brandon Hamm.docx', ['Content-Type: application/pdf']);
// });


Route::get('/', function () {
    return redirect('register');
});

Route::get('oauth/login', function(){
	return Socialite::driver('facebook')->redirect();
});

Route::get('oauth', function(){
	$user = Socialite::driver('facebook')->user();
	dd($user);
});

route::get('tinker', function() {
	$claims = CCG\Claims\Claim::all();
	 $matches = $claims->mapToGroups(function($claim, $key) {
	 	// if($claim['claim_number'] < 0)
	 	return [$claim['claim_number'] => $claim['id']];
	 });
	 $filtered = $matches->filter(function ($value, $key) {
	 	if(count($value) > 1) return $key;
	});
	 return $filtered;
});

route::get('apply', function(Illuminate\Http\Request $request){
	$user = $request->user();
	$user->token = $user->api_token;
	if($user->applied) {
		return redirect('/profile');
	}
	return view('apply', compact('user'));//->withCookie($cookie);
})->middleware('auth');



Route::get('/claims/import/xml', 'ImportXmlClaimController@show');
Route::post('/claims/import/xml', 'ImportXmlClaimController@import');
Route::post('/claims/import/xml/webhook', 'ImportXmlClaimController@import');
Route::post('/claims/import/xml/webhook/test', 'ImportXmlClaimController@testImport');

// FOR CIG parsed claims.
// Route::post('/claims/import/xml/webhook', 'ImportXmlClaimController@import');
// Route::post('/claims/import/xml/webhook/test', 'ImportXmlClaimController@testImport');

// '/claims/import/xml/webhook'

Route::post('claims/import', 'ClaimsImportController@import');
Route::resource('claims', 'ClaimsController');
Route::resource('claims/status', 'ClaimStatusController');

Route::get('dashboard', 'DashboardController@show');
Route::get('users/dashboard', 'UserDashboardController@show');

Route::resource('users', 'UsersController');
Route::get('users/status/{status}', 'UsersController@status');
Route::get('users/location/{state}', 'UsersController@location');
Route::get('users/certifications/{certification}', 'UsersController@certifications');
Route::resource('users/{id}/documents', 'UserDocumentsController');
Route::resource('users/{id}/roles', 'UserRolesController');
Route::get('users/verify/{token}', 'UsersController@verifyAccount');

Route::resource('roles', 'RolesController');

Route::resource('invoices', 'InvoiceController');

Auth::routes();

Route::get('/profile', 'ProfileController@index')->name('profile');
// Route::get('/profile/{id}', 'ProfileController@show')->middleware('admin');
Route::get('/home', 'HomeController@index')->name('home');
