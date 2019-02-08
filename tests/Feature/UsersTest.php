<?php

namespace Tests\Feature;

use CCG\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UsersTest extends TestCase
{
   /** @test */
   public function license_count_returns_0()
   {
       $user = User::find(406);
       $this->assertEquals(0, $user->adjusterLicenses->count());
   }
}
