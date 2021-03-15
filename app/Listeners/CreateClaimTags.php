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
            $event->claim->only(['claim_type', 'type_of_loss', 'claim_data'])
        );
        // attach tags to claim
        $event->claim->tags()->sync($this->tags);
    }

     /**
     * Add A Tag.
     *
     * @param  String $tag
     * @return void
     */
    protected function addTag($tag)
    {
        // if we already have a tag of this type, we dont need to persist
        // it we just need to return its id to sync. 
        $currentTag = Tag::where('name', strtolower($tag))->first();
        if ($currentTag) 
        {
           return $this->tags[] = $currentTag->id;
        }
        else {
            $newTag = Tag::create(['name' => strtolower($tag)]);
            return $this->tags[] = $newTag->id;
        }
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

     /**
     * Parse location attributes from claim_data.
     *
     * @param  Object $data
     * @return void
     */
    protected function parseLocationData($data)
    {
        //add an item to the props collection to parse further.
        if (isset($data->client->addresses[1])) {
            $props = collect(['city', 'state', 'zip']);
            $props->each(function($item, $key) use ($data) {
            return $this->addTag($data->client->addresses[1]->{$item});
        });
        }
    }
}
