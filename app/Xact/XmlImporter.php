<?php 

namespace CCG\Xact;

abstract class XmlImporter {
    
	protected $xml;
    protected $xmlObj;

    public abstract function __construct($xml);

      /**
     * @param $data
     * @return \SimpleXMLElement
     */
    public function loadString($data)
    {
        $this->setXmlObj(simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA));
        return $this->getXmlObj()->count();
    }

    /**
     * @param $data
     * @return \SimpleXMLElement
     */
    public function loadFile($data)
    {
       $this->setXmlObj(simplexml_load_file($data, 'SimpleXMLElement', LIBXML_NOCDATA));
    }

    /**
     * save the xml to storage ** temporary
    */
    public function saveXMLFile($name = 'fnol.xml')
    {
        $file = $this->getXmlObj()->asXML();
        $filename = storage_path('importedClaimData/'.$name.'.XML');
        file_put_contents($filename, $file);
    }

    /**
     * @return mixed
    */
    public function getXmlObj()
    {
        return $this->xmlObj;
    }

    /**
     * @param mixed $xmlObj
    */
    public function setXmlObj($xmlObj)
    {
        $this->xmlObj = $xmlObj;
    }

    /**
     * @return \SimpleXMLElement $xml
    */
    public function getxml(){
        return $this->xml;
    }
}