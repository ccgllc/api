<?php

namespace CCG\Http\Controllers\Api\Claims;

use CCG\Accounting\Invoice;
use CCG\Http\Controllers\Controller;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        return Invoice::create([
            'data' => json_encode($request->all()),
            'is_supplement' => $request->is_supplement,
            'claim_id' => $id,
            'user_id'  => $request->userId,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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
    public function update(Request $request, $claimId, $id)
    {
        $invoice = Invoice::findOrFail($id);
        $invoice->update(['data' => json_encode($request->all())]);
        return $invoice;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($claimId, $id)
    {
       return Invoice::destroy($id);
    }
}
