<?php

namespace CCG\Claims\Policy;

use CCG\Claims\Policy\Coverage;


class Coverage
{
    public $covName;
    public $covType;
    public $policyLimit;
    public $deductible;
    public $applyTo;
    public $coIns;
    public $reserveAmt;
    public $id;

    public function __construct($data)
    {
        $this->setCoverageData($data);
    }

    protected function setCoverageData($data)
    {
        (isset($data->{'@attributes'})) ? $data = $data->{'@attributes'} : $data = $data;
        foreach($data as $key => $value)
        {
            $this->{$key} = $value;
        }
    }

}
