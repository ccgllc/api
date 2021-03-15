<?php

namespace CCG\Claims\Contact;

class Address
{
    public $type;
    public $street;
    public $city;
    public $state;
    public $zip;
    public $latitude;
    public $longitude;

    public function __construct($data)
    {
        // dd($data);
        $this->type = $this->setType($data);
        $this->street = $this->setStreet($data);
        $this->city = $this->setCity($data);
        $this->state = $this->setState($data);
        $this->zip = $this->setZip($data);
        $this->latitude = $this->setLatitude($data);
        $this->longitude = $this->setLongitude($data);
    }

    public function setType($data)
    {
        return isset($data->{'@attributes'}->type) ? $data->{'@attributes'}->type : null;
    }

    public function setStreet($data)
    {
        return isset($data->{'@attributes'}->street) ? $data->{'@attributes'}->street : null;
    }

    public function setCity($data)
    {
        return isset($data->{'@attributes'}->city) ? $data->{'@attributes'}->city : null;
    }

    public function setState($data)
    {
        return isset($data->{'@attributes'}->state) ? $data->{'@attributes'}->state : null;
    }

    public function setZip($data)
    {
        return isset($data->{'@attributes'}->postal) ? $data->{'@attributes'}->postal : null;
    }

    public function setLatitude($data)
    {
      return isset($data->{'@attributes'}->lat) ? $data->{'@attributes'}->lat : null;
    }

    public function setLongitude($data)
    {
       return isset($data->{'@attributes'}->lon) ? $data->{'@attributes'}->lon : null;
    }
}
