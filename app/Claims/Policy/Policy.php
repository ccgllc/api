<?php

namespace CCG\Claims\Policy;

use CCG\Claims\Policy\Coverage;


class Policy
{
    public $policyNumber;
    public $policyType;
    public $policyStart;
    public $policyEnd;
    public $overallDeductible;
    public $claimNumber;
    public $isCommercial;
    public $catastrophe; 
    public $blockModificationOfTOL;
    public $blockModificationOfDeduct; 
    public $applyDeductible;
    public $coverages;

    public function __construct($data)
    {
        $this->setCoverageLossData($data);
        $this->setCoverageInfoData($data); 
        $this->setCoverages($data);
    }

     protected function setCoverageLossData($data)
    {
        $this->setPoilcyData($data, 'COVERAGE_LOSS');
    }

    protected function setCoverageInfoData($data)
    {
         $this->setPoilcyData($data, 'COVERAGE_INFO');
    }

    protected function setPoilcyData($data, $type)
    {
        foreach($data->{$type}->{'@attributes'} as $key => $value){
            $this->{$key} = $value;
        }
    }

    protected function setCoverages($data)
    {
        foreach($data->COVERAGE_LOSS->COVERAGES->COVERAGE as $coverage)
        {
            $this->coverages[] = new Coverage($coverage);
        }
    }
}
