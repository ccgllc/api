<?php

namespace CCG\Listeners;

use CCG\Events\ClaimImported;
use CCG\Tag;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateClaimTags
{
    /**
     * @array
     */
    protected $tags;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //set our array
        $this->tags = [];
    }

    /**
     * Handle the event.
     *
     * @param  ClaimImported  $event
     * @return void
     */
    public function handle(ClaimImported $event)
    {
        // parse our new tags to assign and create new tags if needed..
        $this->parseTags(
            $event->claim->only(['type_of_loss', 'claim_type', 'claim_data'])
        );
        // attach tags to claim
        $event->claim->tags()->sync($this->tags);
    }

    /**
     * Parse taggable data from claim.
     *
     * @param  Collection $types
     * @return void
     */
    protected function parseTags($types)
    {
        foreach ($types as $key => $type) {
            // if($type != 'not provided') {
               $key == 'claim_data' 
                    ? $this->parseLocationData(json_decode($type))
                    : $this->addtag($type);
            // }
        }
    }

    protected function addTag($tag)
    {
        $currentTag = Tag::where('name', '=', $tag)->first();
        if ($currentTag) 
        {
           return $this->tags[] = $currentTag->id;
        }
        else {
            $newTag = Tag::create(['name' => $tag]);
            return $this->tags[] = $newTag->id;
        }
    }

    protected function parseLocationData($data)
    {
        $this->parseZip($data);
        $this->parseState($data);
    }

    protected function parseZip($data)
    {
        return $this->addTag(
            $data->client->addresses[1]->zip
        );
    }

    protected function parseState($data)
    {
        return $this->addTag(
            $data->client->addresses[1]->state
        );
    }
}
