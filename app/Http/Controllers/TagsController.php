<?php

namespace CCG\Http\Controllers;

use Illuminate\Http\Request;

class TagsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all tags
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //store a new tag
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // display a particular tag
    }

    /**
     * Display the specified resource.
     *
     * @param  CCG\Http\Requests\Request  $tagId
     * @param  int  $tagId
     * @return \Illuminate\Http\Response
     */
    public function claims(Request $request, $tagId)
    {
        $tag = Tag::find($tagId);
        $claims = $tag->claims()->get();
        return view('claims.dashboard');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //update a tag record.
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //remove a record.
    }
}
