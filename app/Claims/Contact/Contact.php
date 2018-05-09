<?php

namespace CCG\Claims\Contact;

use CCG\Claims\Contact\PhoneNumber;
use CCG\Claims\Contact\Address;
use CCG\Claims\Contact\Email;


class Contact
{
    public $name;
    public $phoneNumbers;
    public $addresses;
    public $email;

    public function __construct($data)
    {
        // $this->data = $data;
        // $this->type = $this->setType();
        $this->name = $this->setName($data);
        $this->phoneNumbers = $this->setPhoneNumbers($data);
        $this->addresses = $this->setAddresses($data);
        $this->email = $this->setEmailAddress($data);
    }

    protected function setName($data)
    {
        if (isset($data->{'@attributes'}->accessName))
        {
            return $data->{'@attributes'}->accessName;
        }
        return isset($data->{'@attributes'}->name) ?  $data->{'@attributes'}->name : null;
    }

     protected function setAddresses($data)
    {
        // dd($data);
         if (isset($data->ADDRESSES->ADDRESS))
        {
            foreach($data->ADDRESSES->ADDRESS as $address)
           {
                $newAddress =  new Address($address);
                $addresses[] = $newAddress;
           }
           return $addresses;
        }
    }

    protected function setPhoneNumbers($data)
    {
         if (isset($data->{'@attributes'}->accessPhone))
        {
            $number = new PhoneNumber($data);
            $numbers[] = $number;
            return $numbers;
        }
        if (isset($data->CONTACTMETHODS->PHONE))
        {
            foreach($data->CONTACTMETHODS->PHONE as $phone)
           {
                $number = new PhoneNumber($phone);
                $numbers[] = $number;
           }
           return $numbers;
        }
    }
    protected function setEmailAddress($data)
    {
        return isset($data->CONTACTMETHODS->EMAIL->{'@attributes'}->address) ?  $data->CONTACTMETHODS->EMAIL->{'@attributes'}->address : null;
    }
}
