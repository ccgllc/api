@component('mail::message')

#**{{ $data['name'] }}** from **{{$data['company']}}** Has responded from claimconsultantgroup.com! 
<br>

### Reply to: {{ $data['email'] }}

<br>

{{ $data['message'] }}

Regards,<br>
**Claim Consultant Group**
@endcomponent
