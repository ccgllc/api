<?php

namespace CCG\Http\Controllers;

use CCG\Auth\ConfirmsEmails;
use CCG\Certification;
use CCG\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    use ConfirmsEmails;

    public function __construct()
    {
        $this->middleware('auth', ['except' => ['verifyAccount']], 'dashboard');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->has('status')) {
            $users =  User::status($request->status)->recent()->paginate(36);
            $status = ucwords($request->status).'s';
        }
        else {
            $users = User::recent()->paginate(36);
            $status = 'Users';
            $users->load('roles', 'profile', 'certifications', 'workHistory', 'adjusterLicenses', 'softwareExperiences');
            // $users->each(function($user){
            //     dd($user->workHistory);
            //     // $user->xp = $user->workHistory->sum();
            // });
            return view('user.admin', compact('users', 'status'));
         }
    }

    public function location($location)
    {
        $profiles = \CCG\Profile::state($location)->get();
        $users = $profiles->map(function ($profile, $key){
            return $profile->user;
        });
        $status = ucwords($location. ' users');
        return view('user.admin', compact('users', 'status'));
    }

     public function certifications($certification)
    {
        $certification = $this->parseCertification($certification);
        $certifications = Certification::where('type', '=', $certification)->get();
        // dd($certifications);
        $users = $certifications->map(function ($certification, $key){
            return $certification->user;
        });
        $status = ucwords($certification. ' users');
        return view('user.admin', compact('users', 'status'));
    }

    public function parseCertification($cert)
    {
        switch ($cert) {

            case 'TWIA':
                return "TWIA/TFPA";
                break;

            case 'rope':
                return "rope/harness";
                break;

            default:
                return $cert;
        }
    }

    /**
     * Verify account verification token.
     *
     * @param  int  $token
     * @return \Illuminate\Http\Response
     */
    public function verifyAccount($token)
    {
        $user = $this->verify($token);

        if ($user) {
            // return $user->applied ? redirect("/user/".$user->id) : redirect("/apply");
            return redirect("/apply");
        }

        throw ValidationException::withMessages([
            'error' => [Lang::get('We were unable to verify your account, contact support.')],
        ])->status(422);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id)->load([
            'roles', 'profile', 'adjusterLicenses', 'documents', 'workHistory', 'certifications', 'softwareExperiences', 'avatar'
        ]);
        $user->role = $this->prepareRolesForDisplay($user->roles);
        return view('profile.show', compact('user'));
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function status($status)
    {
        $users =  User::status($status)->recent()->paginate(15);
        $status = ucwords($status);
        return view('user.admin', compact('users', 'status'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    protected function prepareRolesForDisplay($roles)
    {
        return ucwords(implode(', ', $roles->pluck('name')->toArray()));
    }
}
