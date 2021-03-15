@component('mail::message')

# Thanks for signing up, **{{ $user->name }}**! 
<br>
Click the button below to verify your account, and start your application. We look forward to working with you in the future.

@component('mail::button', ['url' => $user->verificationLink()])
Verify My Account
@endcomponent

Regards,<br>
**Claim Consultant Group**
@endcomponent
