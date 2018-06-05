<?php

namespace CCG\Claims;

use CCG\Carrier;
use CCG\Claims\Claim;
use CCG\Events\ClaimImported;
use \Event;

trait CreateClaimFromImport {

	public $carrier; 

	 /**
	 * @return array
	 */
    private function persistClaimData($data)
    {
        $claim = [];
        $claim['carrier_id']      = $this->mapCarrier($data->carrierName);
        $claim['claim_type']      = $data->claimType;
        $claim['is_commercial']   = $data->isCommercial;
        $claim['claim_number']    = $data->claimNumber;
        $claim['transaction_id']  = $data->transactionId;
        // $claim['current_status']  = 'In Assign Queue';
        $claim['carrier_name']    = $this->carrier->name;
        $claim['insured']         = $data->insured;
        $claim['type_of_loss']    = $data->typeOfLoss;
        $claim['catastrophe']      = $data->catastrophe;
        $claim['price_list_area'] = $data->priceListArea;
        // $claim['gross_loss']      = 0;
        $claim['description']     = $data->description;
        $claim['date_of_loss']    = $data->dateOfLoss;
        $claim['date_received']   = $data->dateReceived;
        $claim['claim_data']      = json_encode($data);
        
        // $claims = Claim::whereClaimNumber($data->claimNumber);

        // if($claims->count() > 0)
        // {
        //     $newclaim = $claims->first();
        //     var_dump($newclaim);
        //     $newclaim->update($claim);
        //     return Claim::find($claims->first()->id);
        // }else {
            $newClaim = Claim::create($claim);
            Event::fire(new ClaimImported($newClaim));
            return $newClaim;
        // }
       
       
    }

    /**
	 * @return int
	 */
    private function mapCarrier($label)
    {
        // var_dump($label);
    	$this->carrier = Carrier::where('label', $label)->firstOrFail();
    	return $this->carrier->id;
    }
}