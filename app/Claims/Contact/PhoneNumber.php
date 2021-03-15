<?php

namespace CCG\Claims\Contact;

class PhoneNumber
{
    public $number;
    public $type;
    public $primary;

    public function __construct($data)
    {
        $this->type = $this->setType($data);
        $this->number = $this->setNumber($data);
        $this->primary = $this->isPrimary($data);
    }

    public function setNumber($data)
    {
        if(isset($data->number)) {
            return $data->number;
        }
        if (isset($data->{'@attributes'}->accessPhone))
        {
            return $data->{'@attributes'}->accessPhone; 
        }
        return isset($data->{'@attributes'}->number) ? $data->{'@attributes'}->number : null;  
    }

     public function setType($data)
    {
         if(isset($data->type)) {
            return $data->type;
        }
        if (isset($data->{'@attributes'}->accessPhone))
        {
            return 'Access'; 
        }
        return isset($data->{'@attributes'}->type) ? $data->{'@attributes'}->type : null;
    }

    public function isPrimary($data)
    {
        if (isset($data->{'@attributes'}->accessPhone))
        {
            return 1; 
        }
        return isset($data->{'@attributes'}->primary) ? 1 : 0;
    }
}
