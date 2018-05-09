<?php

namespace CCG\Xact;

use CCG\Xact\XmlImporter;

class InvoiceImport extends XmlImporter {



	 public function __construct($xml)
    {
        $this->xml = $this->loadString($xml);
        // $this->saveXmlFile();
        $this->parse();
        \Log::info('New Invoice Imported');
    }


     public function parse()
    {
        // transform our SimpleXMLObj into JSON Representaion.
        $this->invoices = $this->convertXmlToJson($this->getXmlObj());
        // dd($json);
       // unset($this->xmlObj);
        return $this->invoices;
        // set up and return claim.
        // return $this->setClaimData($json);
    }

     /**
     * @param $xml
     * @return mixed
     */
    private function convertXmlToJson($xml)
    {
    	$data = [];
    	foreach ($xml->QBXMLMsgsRs->InvoiceQueryRs->InvoiceRet as $invoice)
    	{
    		$data[] = $invoice;
    		// dd($invoice);
    	}
       return $data;
    }
}