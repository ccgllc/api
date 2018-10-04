<?php

namespace CCG\Http\Controllers;

use CCG\Document;
use CCG\User;
use Illuminate\Http\Request;

class UserDocumentsController extends Controller
{
    public function index($id)
    {
    	$user = User::find($id)->firstOrFail();
    	$user->load('documents');
    	return $user;
    }
    public function show($userId, $id)
    {
    	$document = Document::whereId($id)->firstOrFail();
  		$disk = storage_path().'/hr/';
    	$file = $disk.$document->path;
        // dd(file_exists($file));
		return response()->file($file);
    }
}
