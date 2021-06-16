<?php

namespace CCG\Claims;

use CCG\Carrier\Carrier;
use CCG\Claims\Claim;
use CCG\Claims\TransactionId;
use CCG\Events\ClaimImported;
use CCG\Events\ClaimReassigned;
use CCG\Xact\XactClaimImport;
use CCG\XactnetAddress;
use Illuminate\Support\Facades\DB;
use \Event;

trait ManagesImportedClaims {

	protected $carrier;
    protected $claim;
    protected $adjuster;

	 /**
	 * @return array
	 */
    private function createClaim()
    {
        $newClaim = Claim::create($this->generateClaimData($this->claim));
        Event::dispatch(new ClaimImported($newClaim, $this->adjuster));
    }

     private function updateClaim()
    {
        $existingClaim = Claim::where('claim_number', $this->claim->claimNumber)->first();
        $existingClaim->update($this->generateClaimData());

        if($this->hasUniqueTransactionId()) {
            TransactionId::create([
                'transaction_id' => $this->claim->transactionId,
                'claim_id' => $existingClaim->id,
            ]);
        }
        
        // Event::dispatch(new ClaimImportUpdated($existingClaim));
        // var_dump('updating...');
        return $existingClaim;
    }

    private function reassignClaim()
    {
        $existingClaim = $this->updateClaim();
        Event::dispatch(new ClaimReassigned($existingClaim, $this->adjuster));
    }

    /**
     * determine if claim has a unique transaction id & claim number,
     * meaning it doesn't yet exist in the system - a new claim..
     * @return boolean
     */
    protected function isNewClaim()
    {
        return $this->hasUniqueClaimNumber() && $this->hasUniqueTransactionId() ? true : false;
    }

    /**
     * determine if claim with the claim number provided already exists.
     * @return boolean
     */
    protected function isExistingClaim()
    {
        return ! $this->hasUniqueClaimNumber() ? true : false;
    }

    /**
     * determine if claim is likely a reassignment.
     * @return boolean
     */
    protected function isReassignment()
    {
        if ($exists = Claim::where('claim_number', $this->claim->claimNumber)->first()) {
            return $exists->assignee !== $this->claim->assignee ? true : false;
        } else {
            return false;
        }
    }

    /**
     * determine a user has the Xactnet Address in iported XML.
     * @return boolean
     */
    protected function getUser()
    {
        $address = XactnetAddress::address($this->claim->assignee)->first();
        return $address ? $this->adjuster = $address->user : $this->adjuster = null;
    }

    /**
     * determine if claim is assignable.
     * @return boolean
     */
    protected function isClaimAssignable()
    {
        $this->getUser();
        return $this->adjuster ? 1 : 0;
    }

    /**
     * determine if claim has a unique claim number.
     * @return boolean
     */
    protected function hasUniqueClaimNumber()
    {
       return Claim::where('claim_number', $this->claim->claimNumber)->exists() ? false : true;
    }

     /**
     * determine if claim has a unique transaction id.
     * @return boolean
     */
    protected function hasUniqueTransactionId()
    {
        return TransactionId::where('transaction_id', $this->claim->transactionId)->exists() ? false : true;
        //return Claim::where('transaction_id', $this->claim->transactionId)->exists() ? false : true;
    }

     /**
     * Create $claim variable with data from claim import.
     * @return CCG\Xact\XactClaimImport
     */
    protected function setClaim(XactClaimImport $data)
    {
        return $this->claim = $data;
    }

   /**
     * determine carrier in our system..
     * @return int
     */
    private function mapCarrier($data)
    {
        // $label === 'Capital Insurance Group' ? $label = 'CIGP' : $label;
        // $label === 'TWIA - Claim Consultant Group' ? $label = 'TWIA' : $label;
        // $label === 'TFPA - Claim Consultant Group' ? $label = 'TFPA' : $label;
        // var_dump($label);
        is_numeric($data) ? $column = 'xact_carrier_id': $column = 'label';
    	$this->carrier = Carrier::where($column, $data)->first();
        if (!$this->carrier) var_dump($data); //$this->carrier = Carrier::find(16);
    	return $this->carrier->id;
    }

    /**
     * configure claim for storage..
     * @return array
     */
    protected function generateClaimData()
    {
        $claim = [];
        $claim['carrier_id']      = $this->mapCarrier($this->claim->carrierName);
        $claim['claim_type']      = $this->claim->claimType;
        $claim['is_commercial']   = $this->claim->isCommercial;
        $claim['claim_number']    = $this->claim->claimNumber;
        $claim['transaction_id']  = $this->claim->transactionId;
        $claim['assignee']        = $this->claim->assignee;
        // $claim['current_status']  = 'In Assign Queue';
        $claim['carrier_name']    = $this->carrier->name;
        $claim['insured']         = $this->claim->insured;
        $claim['type_of_loss']    = $this->claim->typeOfLoss;
        $claim['catastrophe']      = $this->claim->catastrophe;
        $claim['price_list_area'] = $this->claim->priceListArea;
        // $claim['gross_loss']      = 0;
        $claim['description']     = $this->claim->description;
        $claim['date_of_loss']    = $this->claim->dateOfLoss;
        $claim['date_received']   = $this->claim->dateReceived;
        $claim['claim_data']      = json_encode($this->claim);
        $claim['assignable']      = $this->isClaimAssignable();
        return $claim;
    }
}