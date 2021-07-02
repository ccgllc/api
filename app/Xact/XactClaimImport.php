<?php 

namespace CCG\Xact;

use CCG\Claims\Contact\Contact;
use CCG\Claims\Policy\Policy;
use CCG\Xact\XmlImporter;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class XactClaimImport extends XmlImporter {

    public $client;
    public $claimant;
    public $deskAdjuster;
    public $accessContact;
    public $policy;

    public function __construct($xml)
    {
        $this->xml = $this->loadString($xml);
        $this->parse();

        //needs attention!
        // Log::info('New Claim Received');
    }

    /**
     *  Parse the loaded simple_xml object.
     *  @return Illuminate\Support\Collection
     */
    public function parse()
    {
        // transform our SimpleXMLObj into JSON Representaion.
        $json = $this->convertXmlToJson();
        // set up and return claim.
        return $this->setClaimData($json);
    }

    protected function setClaimData($json)
    {
        //grab all contact nodes
        $this->parseContacts($json);
        // dd($this->client);

        // get our cliam specific data ie claim numbers, transaction id's etc.
        $this->claimNumber     = $json->ADM->COVERAGE_LOSS->{'@attributes'}->claimNumber;
        $this->transactionId   = $json->XACTNET_INFO->{'@attributes'}->transactionId;
        $this->assignee        = $json->XACTNET_INFO->{'@attributes'}->recipientsXNAddress; 
        $this->carrierName     = $this->getCarrierName($json);
        $this->insured         = ucwords(strtolower($this->client->name));
        $this->typeOfLoss      = $json->ADM->COVERAGE_LOSS->TOL->{'@attributes'}->desc ?? 'not provided';
        if (isset($json->ADM->COVERAGE_LOSS->{'@attributes'}->catastrophe))
        {
            $this->catastrophe     = $json->ADM->COVERAGE_LOSS->{'@attributes'}->catastrophe;
            $this->catastrophe ? $this->claimType = 'CAT' : $this->claimType = 'Daily';
        }else{
           $this->catastrophe = '';
           $this->claimType = 'Daily';
        }
       
        // $this->claimType       = $json->ADM->COVERAGE_LOSS->{'@attributes'}->catastrophe ? 'CAT' : 'Daily';
        $this->priceListArea = $json->PARAMS->{'@attributes'}->priceList ?? null;
        // var_dump(gettype($json->PROJECT_INFO->NOTES));    
        if (isset($json->PROJECT_INFO->NOTES) && gettype($json->PROJECT_INFO->NOTES) == 'string')
        {
           $this->description = $json->PROJECT_INFO->NOTES;
        }
        else {
             $this->description = 'No notes.';
        }
        $this->dateOfLoss     =  str_replace('Z', '', $json->ADM->{'@attributes'}->dateOfLoss);
        $this->dateOfLoss     =  str_replace('T', ' ', $this->dateOfLoss);
        // dd($this->dateOfLoss);
        $this->dateReceived    = str_replace('Z', '', $json->ADM->{'@attributes'}->dateReceived);
        $this->dateReceived    = str_replace('T', ' ', $this->dateReceived);
        // Drill down policy information
        // dd($json->ADM);
        $this->policy = new Policy($json->ADM);
        !isset($this->policy->isCommerical) ? $this->isCommercial = 0 : $this->isCommercial = $this->policy->isCommercial;
        //because there is one other place we might be able to dicern 
        //wether or not this claims is commercial.
        
        // make sure full xml info is not returned.
        // $this->saveXmlFile($this->transactionId);
        unset($this->xmlObj, $this->rawXml);
        return $this;
    }

   
    /**
      * Parse all contacts.
      * @param $json
      * @return void
    */
    public function parseContacts($json)
    {
        // prepare data for assignmnet
        $contacts = $this->filterContacts($json->CONTACTS->CONTACT);
        $contacts['accessContact'] = $json->CLAIM_INFO->ADMIN_INFO;
        
        //assign each contact.
        $this->setContacts($contacts);
    }

    public function setContacts($contacts)
    {
        // var_dump($contacts);
        foreach ($contacts as $key => $contact ){
            $this->{$key} = new Contact($contact);
        }
    }

    /**
      * filter contacts by their type for proper assignment.
      * @param $contacts
      * @return array
    */
    private function filterContacts($contacts)
    {
        $parsed = [];
        if (gettype($contacts) == 'array' ) {
             foreach ($contacts as $contact) {
                if (isset($contact->{'@attributes'}->type)) {
                    $parsed[camel_case($contact->{'@attributes'}->type)] = $contact;
                }
            }
        }
        if (gettype($contacts) == 'object')
        {
            $parsed[camel_case($contacts->{'@attributes'}->type)] = $contacts;
        }
       
        return $parsed;
    }


    /**
     * @param $coverages
     * @return array
     */
    public function parsePolicyCoverages($coverages)
    {
        $cov = [];
        if (is_array($coverages))
        {
            foreach ($coverages as $coverage) 
            {
                $cov[] = $coverage->{'@attributes'};
            }
           return $cov;
        }
        $cov[] = $coverages->{'@attributes'};
        return $cov;
    }

    /**
     * @param $json
     * @return mixed
     */
    public function getCarrierName($json)
    {
         // $carrier = $json->XACTNET_INFO->{'@attributes'};
        $data = $json->XACTNET_INFO->{'@attributes'};

        if ($data->carrierId == '3975005')
        {
            return $data->businessUnit ?? 'No Carrier';
        }

        return isset($data->carrierId) ? $data->carrierId : 'No Carrier';
    }
}