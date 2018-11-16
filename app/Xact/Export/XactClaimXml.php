<?php 

namespace CCG\Xact\Export;

class XactClaimXml {

	public $document;
	public $rootNode;
	public $xactnetInfo;
	public $coverages;
	public $contacts;
	public $contact; 
	public $addresses; 
	public $contactmethods;
	public $phone; 
	public $projectInfo;
	public $notes; 
	public $adm;
	public $coverageLoss; 
	public $attachments;
	public $attachment;
	public $extFiles;
	public $extFile; 
	public $carrier; 
	public $claimNumber; 
	public $pdfLink;

	public function __construct() 
	{
		$this->document = $this->createDocument();
		$this->document->formatOutput = false;
		$this->createRootXmlNode('XACTDOC');
	}

	public function createXmlNode($name, $parent)
	{
		$prop = strtoupper(snake_case($name));
		$this->{$name} = $this->createNode($prop);
		$this->append($parent, $this->{$name});
		return $this->{$name};
	}

	public function createRootXmlNode($name)
	{
		$this->rootNode = $this->createNode($name);
		$this->append('document', $this->rootNode);
	}

	public function createNode($name)
	{
		return $this->document->createElement($name);
	}

	public function append($parent, $node)
	{
		$this->{$parent}->appendChild($node);
	}

	public function addAttribute($name, $value, $parent)
	{
		$attr = $this->document->createAttribute($name);
		$attr->value = $value;
		$this->append($parent, $attr);
	}

	protected function createDocument()
	{
		return new \DOMDocument('1.0', 'UTF-8');
	}

	public function save()
	{
		$path = $this->createSavePath();
		\File::makeDirectory($this->createSavePath(), $mode = 0777, $recursive = true, $force = true);
		$this->document->save($path.'XACTDOC.XML');
	}

	private function createSavePath()
	{
		return storage_path('fnol_xml').'/'.$this->claimNumber.'/';
	}

}