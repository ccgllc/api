<?php

namespace CCG\Http\Requests;

use CCG\Certification;
use CCG\Document;
use CCG\SoftwareExperience;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class ValidateCertification extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
       return  'Bearer ' . $this->user()->api_token == $this->header('Authorization') ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'certifications' => 'array',
            'software' => 'array',
            // 'resume' => 'mimetypes:application/pdf,application/msword,text/rtf,application/octet-stream,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
    }

    /**
     * set some custom validation messages.
     *
     * @return array
     */
    public function messages()
    {
        return [
            // 'certifications.' => 'Please select at least one certification option.',
            // 'software.required' => 'please select at least one software option.',
            'resume.mimetypes' => 'You may only upload a .pdf .doc .docx or .rtf file'
        ];
    }

    /** 
     * create our certifications
     * @ return CCG\Certification
     */ 
    public function createCertifications()
    {
        if($this->certifications)
        {
           foreach($this->certifications as $cert)
            {
                $certData = [];
                $certification = json_decode($cert);
                $certData['type'] = $certification->name;
                $certData['user_id'] = $this->user_id;
                if ($certification->expiration) 
                    $certData['expiration'] = $this->setDate($certification->expiration);
                Certification::create($certData); 
            } 
        }
    }
    /** 
     * create software experiences
      @return CCG\SoftwareExperience 
     */ 
    public function createSoftwareExperiences()
    {
        if ($this->software) {
            foreach($this->software as $s)
            {
                SoftwareExperience::create(['type' => $s, 'user_id' => $this->user_id]);
            }
        }
    }
    public function storeResume()
    {
        $ext = $this->file('resume')->clientExtension();
        $name = $this->user()->name;
        $filename = str_random(40).'.'.$ext;
        // dd($this->file('resume'));
        $path = $this->file('resume')->storeAs('resumes', $filename, 'hr');
        $doc = new Document;
        $doc->name = $name;
        $doc->extension = $ext;
        $doc->type = 'resume';
        $doc->path = $path;
        $doc->user_id = $this->user()->id;
        return $doc->save();
    }

    public function setDate($date)
    {
        $dt = Carbon::now();
        preg_match('/\d{2}/', $date, $month);
        preg_match('/\d{4}/', $date, $year);
        return $dt->year($year[0])->month($month[0])
                    ->endOfMonth()
                    ->toDateString();
    }
}
