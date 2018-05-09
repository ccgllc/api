<?php

namespace CCG\Dashboard;

class Dataset 
{
	public $data = [];

	public function setData($data)
	{
		return $this->data[] = $data;
	}
}