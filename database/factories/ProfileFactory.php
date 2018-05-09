<?php

use Faker\Generator as Faker;

$factory->define(CCG\Profile::class, function (Faker $faker) {
    return [
        'street' => $faker->buildingNumber . ' ' . $faker->streetName,
        'city'   => $faker->city,
        'state'  => $faker->state,
        'zip'    => $faker->postcode,
        'phone'  => $faker->phoneNumber,
        'xactnet_address' => strtoupper($faker->lastName . '.' . $faker->stateAbbr)
    ];
});
