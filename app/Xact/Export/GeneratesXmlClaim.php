<?php

namespace CCG\Xact\Export;

use CCG\Xact\Export\XactClaimXml;
use \Carbon\Carbon;

trait GeneratesXmlClaim {

	public $data;
	public $doc;
	public $overallDeductible;

	public function createXml($data)
	{
		$this->data = $data;
		$this->doc = new XactClaimXml();
		$this->doc->claimNumber = $this->getClaimNumber();
		$this->doc->pdfLink = $this->data->media_link_original;
		$this->buildXactnetInfo();
		$this->buildProjectInfo();
		$this->buildAdm();
		$this->buildCoverages();
		$this->buildContacts();
		$this->addAttachments();
		$this->doc->save();
		$this->overallDeductible = 0;
		return $this->doc;
		// $this->buildCoverageLoss();
	}

	protected function buildXactnetInfo()
	{
		$this->doc->createXmlNode('xactnetInfo', 'rootNode');
		$this->doc->addAttribute('carrierId', '3975005', 'xactnetInfo');
		// $this->doc->addAttribute('transactionType', 'EST,PRJ', 'xactnetInfo');
		$this->doc->addAttribute('sendersXNAddress', 'CLAIM_CONSULTANT_GROUP.HOME.WEB', 'xactnetInfo');
		$this->doc->addAttribute('businessUnit', $this->getCarrier(), 'xactnetInfo'); //'NCUA'
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
		$this->doc->addAttribute('claimNumber', htmlspecialchars($this->doc->claimNumber), 'coverageLoss');
		$this->doc->addAttribute('policyNumber', htmlspecialchars($this->data->policy_number), 'coverageLoss');
		$this->doc->addAttribute('isCommercial', 0, 'coverageLoss');
		$this->buildTypeOfLoss();
		$this->doc->createXmlNode('coverages', 'coverageLoss');
		$this->hasNamedStorm() 
			? $this->doc->addAttribute('catastrophe', 1, 'coverageLoss') 
			: $this->doc->addAttribute('catastrophe', 0, 'coverageLoss');
		$coverages = collect();
		$count = 0;
		foreach($this->data->coverage as $cov) {
			$count++;
			$cov->type = $this->getCoverageType($cov);
			$cov->id = $count;
			$coverages->push($cov);
		}
		
		$coverages->each(function ($item, $key) {
			//$types = ['Dwelling', 'OtherStructures', 'Contents']; // indexed by XACT TOL codes 0, 1, 2
			$this->addCoverage($item, e($item->name)); //,$types[(int)$item->type]
		});
		
	}

	protected function addCoverage ($cov, $name)
	{
	// 	if ($cov == null) 
	// 	{
	// 		$cov = new \stdClass();
	// 		$cov->type = "1";
	// 		$cov->limit = ( (int) $this->doc->coverages->firstChild->attributes[2]->value * .1);
	// 	}
		$this->doc->createXmlNode('coverage', 'coverages');
		$this->doc->addAttribute('id', "COV$cov->id", 'coverage');
		$this->doc->addAttribute('covName', $name, 'coverage');
		$this->doc->addAttribute('policyLimit', str_replace(',', '', str_replace('$', '', $cov->limit)), 'coverage');
		$this->doc->addAttribute('covType', $cov->type, 'coverage');
		$max = 0;
		if ($cov->type == 0) {
			$this->hasNamedStorm()
				? $this->doc->addAttribute('overallDeductible', $this->overallDeductible = $this->calculateNamedStormDeductible($cov), 'coverageLoss')
				: $this->doc->addAttribute('overallDeductible', $this->overallDeductible = $this->calculateDeductible($cov), 'coverageLoss');
		} 
		if (!$this->overallDeductible) {
			$ded = collect([['ded' => (int)$cov->op_ded], ['ded' => (int)$cov->ns_ded], ['ded' => (int)$cov->wh_ded]]);

			$max = $ded->pipe(function($ded) use($max){
				return $ded->max('ded') > $max ? $ded->max('ded') : $max;
			});


			$this->doc->addAttribute('overallDeductible', $max, 'coverageLoss');
		}
		$this->doc->addAttribute('applyTo', 2, 'coverage');
	}

	protected function buildTypeOfLoss ()
	{
		$tol = $this->doc->createXmlNode('tol', 'coverageLoss');
		$lossType = $this->getLossType();
		$this->doc->addAttribute('desc', $lossType, 'tol');
		$this->doc->addAttribute('code', strtoupper($lossType), 'tol');
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
		$this->doc->addAttribute('postal', htmlspecialchars($this->data->property_address->zipcode), 'address');
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
		if ($this->getCarrier() == 'CIGP') {
			$phone = str_replace(') ', '-', $this->data->home_phone_number);
			$phone = trim(str_replace('(', '', $phone));
		} else {
			$phone = $this->data->home_phone_number;
		}
		$this->doc->addAttribute('number', $phone, 'phone');
		// dd((string)$this->data->business_phone_number[0] == true);
		if ((string)$this->data->business_phone_number){
			$this->doc->createXmlNode('phone', 'contactmethods');
			$this->doc->addAttribute('type', 'Business', 'phone');
			$this->doc->addAttribute('number', htmlspecialchars($this->data->business_phone_number), 'phone');
		}
		
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

	public function getCoverageType($cov)
	{
		if ($this->getCarrier() == 'CIGP') {
			switch ($cov->name) 
			{
				case $cov->name == 'Dwelling':
					return 0;
					break;
				case $cov->name == 'Contents':
					return 1;
					break;
				default: 
					return 2;
					break;
			}
		}
		if(preg_match('/\d{3}/', $cov->name, $match) > 0) {
			switch ($match[0]) {
				case $match[0] >= 510 && $match[0] <= 559:
					return 2;
					break;
				case $match[0] >= 560: 
					return 1;
					break;
				case $match[0] >= 510 && $match[0] <= 559:
					return 2;
					break;
				case $match[0] >= 560: 
					return 1;
					break;
				default: 
					return 0;
			} 
		}
	}

	public function getLossType()
	{
		if($this->data->type_of_loss > 0) {
			switch ($this->data->type_of_loss) {
				case $this->data->type_of_loss == 4 || $this->data->type_of_loss == 6:
					return 'Wind';
					break;
				case $this->data->type_of_loss == 5: 
					return 'Tornado';
					break;
				case $this->data->type_of_loss == 8:
					return 'Accidental Discharge';
					break;
				case $this->data->type_of_loss == 11:
					return 'Fire';
					break;
				case $this->data->type_of_loss == 12: 
					return 'Lightning';
					break;
				case $this->data->type_of_loss == 14: 
					return 'Hail';
				case $this->data->type_of_loss == 16:
					return 'Freezing';
					break;
				case $this->data->type_of_loss == 29:
					return 'Vmm';
					break;
				case $this->data->type_of_loss == 49:
					return 'All Other Damage';
					break;
			} 
		}
		if ($this->getCarrier() == 'CIGP') return 'Fire';
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
		// eval(\Psy\sh());
		// dd($date);
		$d = \DateTime::createFromFormat('m-d-y', $date);
		return gettype($d) == "boolean" ? '0000-00-00' :  $d->format('Y-m-d');
	}

	protected function getCarrier()
	{
		return $this->data->carrier;
	}

	protected function getClaimNumber ()
	{
		return $this->getCarrier() == 'CIGP' ? $this->getClaimNumberFromFilename() : $this->data->claim_number;
	}
	protected function getClaimNumberFromFilename()
	{
		return trim(preg_replace('/(\D)/', '', $this->data->file_name));
	}

}