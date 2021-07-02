<?php

namespace CCG\Xact;

use CCG\Claims\Claim;
use CCG\Claims\TransactionId;
use CCG\Xact\XmlImporter;
use CCG\XactnetAddress;

class XactClaimStatusImport extends XmlImporter{ 

    protected $xml;
    protected $orig_transaction_id;
    protected $transaction_id;
    protected $xact_net_address;
    protected $status_type;
    protected $type;
    protected $name;
    protected $role;
    protected $status_time;
    protected $claim_number;
    protected $claim;

    public function __construct($xml)
    {
        $this->xml = $this->loadString($xml);
        $this->parse();
    }

	public function parse()
	{
        //save the incoming xml for reference.
        // $this->saveXMLFile($this->getTransactionId'.xml');
		// transform our SimpleXMLObj into JSON Representaion.
        $json = $this->convertXmlToJson();

        return $this->setStatusData($json);
	}

    public function setStatusData($json)
    {
        $this->transaction_id      = $this->getTransactionId($json);
        $this->orig_transaction_id = $this->getOriginalTransactionId($json);
        $this->xact_net_address    = $this->getXactNetAddress($json); 
        $this->status_type         = $this->getStatusType($json);
        $this->name                = $this->getName($json);
        $this->role                = $this->getRole($json);
        $this->status_time         = $this->getStatusTime($json); 
        $this->claim_number        = $this->getClaimNumber($json);
        $this->claim               = $this->findClaim();
        $this->user                = $this->findUser();

         unset($this->xmlObj, $this->rawXml);

        return $this;
    }

    /**
    * Find Claim by imported claim number.
    *
    */
    protected function findClaim()
    {
        $claim = Claim::whereClaimNumber($this->claim_number)->first();

        return $claim 
            ? $this->setProperty('claim', $claim)
            : $this->setProperty('claim', (object)['id' => 0]);
    }

    protected function findUser()
    {
        $address = XactnetAddress::whereAddress($this->xact_net_address)->first();
        $address ? $user = $address->user : $user = false;

        return $user
            ? $this->setProperty('user', $user)
            : $this->setProperty('user', (object)['id' => 0]);
    }

     /**
    * determine which transaction id to search by.
    *
    */
    protected function determineTransactionId()
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
            return $this->status_time = $carbon->format('F jS\\, Y h:i:s A');
        }
    }
    protected function getClaimNumber($status)
    {
        if(!empty($status->ADM->TYPESOFLOSS->TYPEOFLOSS->{'@attributes'}->claimNumber))
        {
            return $this->claim_number = $status->ADM->TYPESOFLOSS->TYPEOFLOSS->{'@attributes'}->claimNumber;
        }
    }

    public function getProperty($prop)
    {
        return $this->{$prop};
    }

    public function setProperty($prop, $data)
    {
        return $this->{$prop} = $data;
    }

}