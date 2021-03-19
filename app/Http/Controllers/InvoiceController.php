<?php

namespace CCG\Http\Controllers;

use Barryvdh\DomPDF\PDF;
use CCG\Http\Controllers\Controller;
use CCG\Accounting\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller 
{

    public function __construct()
    {
        $this->middleware('auth', ['except' => 'import']);
    }


    public function index()
    {
        return Invoice::with('adjuster')->where([
                ['payment_received', 0],
                //['balance', '!=', 0]
            ])->get();
    }

      /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $invoice = Invoice::with('claim.carrier', 'claim.statuses', 'claim.assignments')->findOrFail($id);
        $pdf = \App::make('dompdf.wrapper');
        // $options = \App::make('')
        $invoice->claim->claim_data = json_decode($invoice->claim->claim_data);
        $pdf->loadView('pdfs.invoice', ['invoice' => $invoice]);
        return $pdf->stream('claim-'.$invoice->claim->claim_number.'-invoice.pdf');
        // return view('pdfs.invoice', ['invoice' => $invoice]);
    }

    /**
     *   Edit Existing Invoice
     *   
     *   @return void
     */
    public function edit(Request $request, $id)
    {
        return Invoice::findOrFail($id);
        // return $invoice->all();
    }

     /**
     *   create New Invoice
     *   
     *   @return void
     */
    public function create(Request $request)
    {
       return collect([
            'carriers' => $this->fetchCarriers(), 
            'adjusters' => $this->fetchAdjusters(),
            'reviewers' => $this->fetchReviewers(),
            'invoiceNumber' => $this->fetchInvoiceNumber()
        ]);
    }

     /**
     *   create New Invoice
     *   
     *   @return void
     */
    public function import(Request $request)
    {
       $data = new InvoiceImport($this->receivedInvoiceData());
       dd($data->invoices[1]);
    }

    /**
     *   Store New Invoice
     *   
     *   @return void
     */
    public function store(Request $request)
    {
        //Initial invoice is created in CCG\Listeners\CreateClaimInvoice event handler.
        // This Store method is only for manual invoice creation.
        // dd($request->all());
        $request['invoice_number'] = Invoice::max('invoice_number') + 1;
        $invoice = Invoice::create($request->all());
        return Invoice::find($invoice->id);
        // $invoice = new Invoice;
        // $invoice->invoice_number = $request->invoice_number;
        // $invoice->carrier = $request->carrier;
        // $invoice->claim_type = $request->claim_type;
        // $invoice->claim_number = $request->claim_number;
        // $invoice->insured = $request->insured;
        // $invoice->claim_id = $request->claim_id;
        // $invoice->adjuster_id = $requeset->adjuster_id;
        // $invoice->reviewer_id = $request->reviewer_id;
        // $invoice->save();
    }

     /**
     * Update the specified resource in storage.
     *
     * @param  app\Http\PersistInvoiceForm  $invoiceForm
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PersistInvoiceForm $invoiceForm, $id)
    {
        // Validation is handled in 
        //CCG\Http\Requests\PersistInvoiceForm
        return $invoiceForm->update($id);
    }

     /**
     *   Remove exsisting invoice
     *   
     *   @return invoice
     */
    public function destroy(Request $request, $id)
    {
        $invoice = Invoice::find($id);
        $invoice->delete();
        return $invoice;
    }

    /**
     *   fetch users with adjsuter role.
     *
     *   @return \CCG\User
     */
    protected function fetchAdjusters()
    {
        return User::whereHas('roles', function ( $query ) {
            $query->where('name', 'adjuster');
        })->orderBy('lname', 'asc')->get();
    }
    /**
     *   fetch users with reviewer role.
     *
     *   @return \CCG\User
     */
    protected function fetchReviewers()
    {
        return User::whereHas('roles', function ( $query ) {
            $query->where('name', 'reviewer');
        })->orderBy('lname', 'asc')->get();
    }

    /**
    *   retrieve carriers.
    *
    *    @return \CCG\Carrier
    */
    protected function fetchCarriers ()
    {
        $carriers = Carrier::all();
        foreach($carriers as $carrier)
        {
           $carrier->pay_scale = json_decode($carrier->pay_scale);
        }
        return $carriers;
    }

     /**
     * @return array|\Symfony\Component\HttpFoundation\File\UploadedFile
     */
    private function receivedInvoiceData()
    {
        return file_get_contents("php://input");
    }

    /**
     * determine new invoice number.
     *
     * @return CCG\Invoice
     */
    protected function fetchInvoiceNumber ()
    {
        return Invoice::max('invoice_number') + 1;
    }
}
