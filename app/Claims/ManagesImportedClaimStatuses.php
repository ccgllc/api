<?php 

namespace CCG\Claims;

use CCG\Claims\Claim;
use CCG\Claims\TransactionId;
use CCG\Events\Claim\ClaimAssigned;
use CCG\User;
use CCG\Xact\XactClaimStatusImport;

trait ManagesImportedClaimStatuses {

	protected $status;
	// protected $claim;

	public function createStatus()
	{
		// dd($this->generateStatusData()->all());
		$status =  ClaimStatus::create($this->generateStatusData()->except('xact_net_address')->all());
		if ($this->assignable() && $this->status->getProperty('status_type') === 'Notification Pending')
			event(new ClaimAssigned(
				$this->status->getProperty('claim'), $this->status->getProperty('user')
			));
	}

	public function createable()
    {
    	return $this->status->getProperty('claim')->id === 0
    		? false
    		: true;
    }


	public function assignable() 
	{
		return $this->status->getProperty('user')->id === 0
    		? false
    		: true;
	}

	public function setStatus(XactClaimStatusImport $data)
	{
		return $this->status = $data;
	}

	 /**
     * determine if status has a unique transaction id.
     * @return boolean
     */
    protected function hasUniqueTransactionId()
    {
        return TransactionId::where('transaction_id', $this->status->transactionId)->exists() ? false : true;
        //return Claim::where('transaction_id', $this->claim->transactionId)->exists() ? false : true;
    }

    protected function generateStatusData()
    {
    	return collect([
            'transaction_id'      => $this->status->getProperty('transaction_id'),
            'orig_transaction_id' => $this->status->getProperty('orig_transaction_id'),
            'xact_net_address'    => $this->status->getProperty('xact_net_address'), 
            'type'                => 'date',
            'name'                => $this->status->getProperty('status_type'),
            // 'role'                => $this->status->getProperty('role'),
            'time'                => $this->status->getProperty('status_time'), 
            'date'                => $this->status->getProperty('status_time'), 
            'claim_number'        => $this->status->getProperty('claim_number'),
            'claim_id'            => $this->status->getProperty('claim')->id,
            'user_id'             => $this->status->getProperty('user')->id,
        ]);
    }

}