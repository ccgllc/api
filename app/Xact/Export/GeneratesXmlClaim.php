<?php

namespace CCG\Xact\Export;

use CCG\Xact\Export\XactClaimXml;
use \Carbon\Carbon;

trait GeneratesXmlClaim {

	public $data;
	public $doc;

	public function createXml($data)
	{
		$this->data = $data;
		$this->doc = new XactClaimXml();
		$this->doc->claimNumber = $this->data->claim_number;
		$this->doc->pdfLink = $this->data->media_link_original;
		$this->buildXactnetInfo();
		$this->buildProjectInfo();
		$this->buildAdm();
		$this->buildCoverages();
		$this->buildContacts();
		$this->addAttachments();
		$this->doc->save();
		return $this->doc;
		// $this->buildCoverageLoss();
	}

	protected function buildXactnetInfo()
	{
		$this->doc->createXmlNode('xactnetInfo', 'rootNode');
		$this->doc->addAttribute('carrierId', '3975005', 'xactnetInfo');
		// $this->doc->addAttribute('transactionType', 'EST,PRJ', 'xactnetInfo');
		$this->doc->addAttribute('sendersXNAddress', 'CLAIM_CONSULTANT_GROUP.HOME.WEB', 'xactnetInfo');
		$this->doc->addAttribute('businessUnit', 'NCUA', 'xactnetInfo');
		$this->doc->addAttribute('rotationTrade', 'General', 'xactnetInfo');
		$this->doc->addAttribute('jobSizeCode', '1', 'xactnetInfo');
		$this->doc->addAttribute('recipientsXNAddress', 'CLAIM_CONSULTANT_GROUP.HOME.WEB', 'xactnetInfo');
		// dd($this->doc->save());
	}

	protected function buildProjectInfo ()
	{
		$projectInfo = $this->doc->createXmlNode('projectInfo', 'rootNode');
		$notes = $this->doc->createXmlNode('notes', 'projectInfo');
		$note = $this->doc->document->createCDATASection($this->data->description_of_loss . "\n\n" . $this->data->endorsments);
		$this->doc->notes->appendChild($note);
	}

	protected function buildAdm ()
	{
		$dateReceived = $this->formatDate((string)$this->data->reported_date->formatted);
		$dateOfLoss =  $this->formatDate((string)$this->data->date_of_loss->formatted);
		$adm = $this->doc->createXmlNode('adm', 'rootNode');		
		$this->doc->addAttribute('dateReceived', $dateReceived, 'adm');
		$this->doc->addAttribute('dateOfLoss', $dateOfLoss, 'adm');
	}

	protected function buildCoverages()
	{
		$this->doc->createXmlNode('coverageLoss', 'adm');
		$this->doc->addAttribute('policyStart', $this->formatDate((string)$this->data->effective_date->formatted), 'coverageLoss');
		$this->doc->addAttribute('policyEnd', $this->formatDate((string)$this->data->expiration_date->formatted), 'coverageLoss');
		$this->doc->addAttribute('claimNumber', htmlspecialchars($this->data->claim_number), 'coverageLoss');
		$this->doc->addAttribute('policyNumber', htmlspecialchars($this->data->policy_number), 'coverageLoss');
		$this->doc->addAttribute('isCommercial', 0, 'coverageLoss');
		$this->buildTypeOfLoss();
		$coverages = $this->doc->createXmlNode('coverages', 'coverageLoss');
		$this->hasNamedStorm() 
			? $this->doc->addAttribute('catastrophe', 1, 'coverageLoss') 
			: $this->doc->addAttribute('catastrophe', 0, 'coverageLoss');
		$count = 0;
		foreach($this->data->coverage as $cov) {
			$count ++;
			$coverage = $this->doc->createXmlNode('coverage', 'coverages');
			$this->doc->addAttribute('id', "COV$count", 'coverage');
			$this->doc->addAttribute('covName', htmlspecialchars($cov->name), 'coverage');
			$this->doc->addAttribute('policyLimit', str_replace(',', '', $cov->limit), 'coverage');
			// ternary for wp_deductible and op_ded based on :named_storm_loss: wp_ded == % of coverage_limit
			// dd((int)str_replace('%', '', $cov->wh_ded) / 100);
			// dd(((int)str_replace('%', '', $cov->wh_ded) / 100) * (int)str_replace(',', '', $cov->coverage_limit));
			// dd($this->hasNamedStorm());
			
			$this->hasNamedStorm()
				? $this->doc->addAttribute('deductible', $this->calculateNamedStormDeductible($cov), 'coverage')
				: $this->doc->addAttribute('deductible', $this->calculateDeductible($cov), 'coverage');
			$this->doc->addAttribute('applyTo', 2, 'coverage');
		}
	}

	protected function buildTypeOfLoss ()
	{
		$tol = $this->doc->createXmlNode('tol', 'coverageLoss');
		$this->doc->addAttribute('desc', 'Wind', 'tol');
		$this->doc->addAttribute('code', 'WIND', 'tol');
	}

	protected function buildContacts()
	{
		$contacts = $this->doc->createXmlNode('contacts', 'rootNode');
		$client = $this->doc->createXmlNode('contact', 'contacts');
		$this->doc->addAttribute('type', 'Client', 'contact');
		$this->doc->addAttribute('name', htmlspecialchars($this->data->insured_names_combined), 'contact');
		$this->doc->createXmlNode('addresses', 'contact');
		// property address assignment
		$this->doc->createXmlNode('address', 'addresses');
		$this->doc->addAttribute('type', 'Property', 'address');
		$this->doc->addAttribute('street', htmlspecialchars($this->data->property_street), 'address');
		$this->doc->addAttribute('city', htmlspecialchars($this->getPropertyCity()), 'address');
		$this->doc->addAttribute('state', 'NC', 'address');
		$this->doc->addAttribute('postal', htmlspecialchars($this->data->property_postal), 'address');
		$this->doc->addAttribute('country', 'US', 'address');
		// mailing address assignment
		$this->doc->createXmlNode('address', 'addresses');
		$this->doc->addAttribute('type', 'Home', 'address');
		$this->doc->addAttribute('street', htmlspecialchars($this->data->mailing_street), 'address');
		$this->doc->addAttribute('city', htmlspecialchars($this->data->mailing_city), 'address');
		$this->doc->addAttribute('state', 'NC', 'address');
		$this->doc->addAttribute('postal', htmlspecialchars($this->data->mailing_postal), 'address');
		$this->doc->addAttribute('country', 'US', 'address');
		// phone number assignment
		$this->doc->createXmlNode('contactmethods', 'contact');
		$this->doc->createXmlNode('phone', 'contactmethods');
		$this->doc->addAttribute('type', 'Home', 'phone');
		$this->doc->addAttribute('number', htmlspecialchars($this->data->home_phone_number), 'phone');
		// dd($this->doc->save());
	}

	protected function addAttachments()
	{
		$attachments = $this->doc->createXmlNode('attachments', 'rootNode');
		$client = $this->doc->createXmlNode('attachment', 'attachments');
		$this->doc->addAttribute('id', 'ATT1', 'attachment');
		$this->doc->addAttribute('type', 'CD', 'attachment');
		$this->doc->addAttribute('name', $this->doc->claimNumber.' FNOL', 'attachment');
		$this->doc->addAttribute('origFilename', $this->doc->claimNumber.'.pdf', 'attachment');
		$this->doc->addAttribute('dateTime', $this->getTime(), 'attachment');
		$this->doc->addAttribute('extFile_attach', 'EXT1', 'attachment');
		$this->doc->addAttribute('sendToXm8', '0', 'attachment');
		// create and configure extFiles...
		$extFiles = $this->doc->createXmlNode('extFiles', 'rootNode');
		$extFile = $this->doc->createXmlNode('extFile', 'extFiles');
		$this->doc->addAttribute('id', 'EXT1', 'extFile');
		$this->doc->addAttribute('fileName', $this->doc->claimNumber.'.pdf', 'extFile');
	}

	public function getPropertyCity()
	{
		return $this->data->property_address->city 
			? $this->data->property_address->city 
			: $this->data->property_city;
	}

	public function hasNamedStorm()
	{
		// dd($this->data->named_storm_loss);
		return (string) $this->data->named_storm_loss === 'Yes' ? true : false;
	}

	protected function calculateNamedStormDeductible ($cov)
	{
		// dd($this->hasNamedStormDeductible($cov));
		if ($this->hasNamedStormDeductible($cov)) {
			if ($this->hasPercentageDeductible($cov, 'ns_ded'))
			{
				return $this->calculatePercentageDeductible($cov, 'ns_ded');
			}
			return $cov->ns_ded;
		}
		else if ($this->hasWindCode()) 
		{
			if ($this->hasPercentageDeductible($cov, 'wh_ded')) 
			{
				return $this->calculatePercentageDeductible($cov, 'wh_ded');
			}
			return str_replace(',', '', $cov->wh_ded);
		} 
		else 
		{
			if ($this->hasPercentageDeductible($cov, 'op_ded')) 
			{
				return $this->calculatePercentageDeductible($cov, 'op_ded');
			}
			return str_replace(',', '', $cov->op_ded);
		}
	}

	protected function calculateDeductible($cov)
	{
		if($this->hasWindCode())
		{
			return $this->hasPercentageDeductible()
			?  $this->calculatePercentageDeductible($cov, 'wh_ded')
			: str_replace(',', '', $cov->wh_ded);
		}
		else 
		{
			return str_replace(',', '', $cov->op_ded);
		}
		
	}

	protected function calculatePercentageDeductible ($cov, $type)
	{
		return ((int)str_replace('%', '', $cov->{$type}) / 100) * (int)str_replace(',', '', $cov->limit);
	}

	public function hasNamedStormDeductible($cov)
	{
		// dd($this->data->named_storm_loss);
		// dd($cov->ns_ded);
		return (string) $cov->ns_ded ? true : false;
	}

	public function hasPercentageDeductible($cov, $type)
	{
		// dd($cov->{$type} > 0);
		return preg_match('/%/', $cov->{$type}) > 0 ? true : false;
	}

	public function hasWindCode()
	{
		return $this->data->type_of_loss == '04' || $this->data->type_of_loss == '06'
			? true
			: false;
	}

	protected function getTime ()
	{
		 $date = Carbon::now();
		 return $date->format('Y-m-d\TH:i:s');
	}

	public function formatDate ($date)
	{
		$d = \DateTime::createFromFormat('m-d-y', $date);
		return gettype($d) == "boolean" ? '0000-00-00' :  $d->format('Y-m-d');
	}

}