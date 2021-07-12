<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Claims\Claim;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClaimController extends Controller
{
    public function geometry(Request $request, $claimId)
    {
        $claim = \DB::table('claims')
            ->where('id', $claimId)
            ->update([
                'claim_data->client->addresses' => $request->all()
            ]);
    }
}
