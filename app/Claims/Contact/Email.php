<?php

namespace CCG\Claims\Contact;

class Email
{
    public $data;
    public $address;
    public $type;

    public function __construct($data)
    {
        $this->data = $data;
        $this->address = $this->setAddress();
        $this->contactMethods = $this->setType();
    }

    public function setAddress()
    {
        return $this->data->{'@attributes'}->name;
    }

     public function setType()
    {
        return $this->data->{'@attributes'}->name;
    }
}
