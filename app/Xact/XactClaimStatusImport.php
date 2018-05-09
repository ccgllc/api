<?php

namespace CCG\Xact;

use CCG\Claims\Claim;
use CCG\Xact\XmlImporter;

class XactClaimStatusImport extends XmlImporter{ 

    protected $orig_transaction_id;
    protected $transaction_id;
    protected $xact_net_address;
    protected $status_stype;
    protected $name;
    protected $role;
    protected $status_time;
    protected $claim_number;

	public function parse()
	{
        //save the incoming xml for reference.
        $this->saveXMLFile('newstatus.xml');
		 // transform our SimpleXMLObj into JSON Representaion.
        $json = json_encode($this->getXmlObj(), JSON_PRETTY_PRINT);
        $json = json_decode($json);
       
        return collect([
        	'transaction_id'     => $this->getTransactionId($json),
            'orig_transaction_id' => $this->getOriginalTransactionId($json),
            'xactNetAddress'     => $this->getXactNetAddress($json), 
        	'status_type'        => $this->getStatusType($json),
            'name'               => $this->getName($json),
            'role'               => $this->getRole($json),
        	'status_time'        => $this->getStatusTime($json), 
        	'claim_number'       => $this->getClaimNumber($json),
            'claim_id'           => $this->findClaim($this->determineTransactionId()),
    	]);
	}
    /**
    * Find Claim by imported transaction id.
    *
    */
    private function findClaim($transactionId)
    {
        $claim = Claim::where('transaction_id', $transactionId)->firstOrFail();
        return $claim->id;
    }
     /**
    * determine which transaction id to search by.
    *
    */
    private function determineTransactionId()
    {
        if ($this->orig_transaction_id !== null)
        {
            return $this->orig_transaction_id;
        }
        else {
            return $this->transaction_id;
        }
    }
     protected function getOriginalTransactionId($status)
    {  
        if (!empty($status->XACTNET_INFO->{'@attributes'}->origTransactionId))
       {
            return $this->orig_transaction_id = $status->XACTNET_INFO->{'@attributes'}->origTransactionId;
       }        
    }
    protected function getTransactionId($status)
    {  
        if (!empty($status->XACTNET_INFO->{'@attributes'}->transactionId))
       {
            return $this->transaction_id = $status->XACTNET_INFO->{'@attributes'}->transactionId;
       }        
    }
     protected function getXactNetAddress($status)
    {  
        if (!empty($status->XACTNET_INFO->{'@attributes'}->recipientsXNAddress))
       {
            return $this->xact_net_address = $status->XACTNET_INFO->{'@attributes'}->recipientsXNAddress;
       }        
    }
    protected function getStatusType($status)
    {
        if(!empty($status->XACTNET_INFO->CONTROL_POINTS->CONTROL_POINT->{'@attributes'}->type))
        {
          return $this->status_type = $status->XACTNET_INFO->CONTROL_POINTS->CONTROL_POINT->{'@attributes'}->type;
        }
    }
    protected function getName($status)
    {
        if(!empty($status->CONTACTS->CONTACT->{'@attributes'}->name))
        {
            return $this->name = $status->CONTACTS->CONTACT->{'@attributes'}->name;
        }
    }
    protected function getRole($status)
    {
        if(!empty($status->CONTACTS->CONTACT->{'@attributes'}->type))
        {
            return $this->role = $status->CONTACTS->CONTACT->{'@attributes'}->type;
        }
    }
    protected function getStatusTime($status)
    {
        if(!empty($status->XACTNET_INFO->CONTROL_POINTS->CONTROL_POINT->{'@attributes'}->stamp))
        {
            $carbon = \Carbon\Carbon::parse($status->XACTNET_INFO->CONTROL_POINTS->CONTROL_POINT->{'@attributes'}->stamp);
            $carbon->timezone = '+1';
            return $this->status_time = $carbon->format('F jS\\, Y h:i A');
        }
    }
    protected function getClaimNumber($status)
    {
        if(!empty($status->ADM->TYPESOFLOSS->TYPEOFLOSS->{'@attributes'}->claimNumber))
        {
            return $this->claim_number = $status->ADM->TYPESOFLOSS->TYPEOFLOSS->{'@attributes'}->claimNumber;
        }
    }

}