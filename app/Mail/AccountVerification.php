<?php

namespace CCG\Mail;

use CCG\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AccountVerification extends Mailable
{
    use Queueable, SerializesModels;

    /**
    * The $user instance.
    *
    * @var $user
    */
    protected $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('no-reply@ccgops.net')
                    ->subject('Please Verify Your CCG Account')
                    ->markdown('emails.account.verify')
                    ->with(['user' => $this->user]);
    }
}
