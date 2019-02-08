<?php

namespace Tests\Feature;

use CCG\Profile;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    /** @test */
    public function profile_has_a_user_and_licenses()
    {
     	$profiles = Profile::all();   
     	foreach($profiles as $profile) {
     		var_dump($profile->user->id);
     		$profile->user->adjusterLicenses->count();
     	}
    }
}
