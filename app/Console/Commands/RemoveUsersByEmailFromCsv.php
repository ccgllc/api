<?php

namespace CCG\Console\Commands;

use CCG\User;
use Illuminate\Console\Command;

class RemoveUsersByEmailFromCsv extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:remove-csv';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remove users by email address from a single column csv file.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $file = fopen('./storage/app/users.csv', "r");
        $set = [];
        $notFound = collect();
        while(($data = fgetcsv($file) ) !== false) {
            $set[] = $data;
        }

        $collection = collect($set);

        $emails = $collection->flatten()->filter();

        foreach($emails->toArray() as $email) {
          $user = User::where('email', '=', $email)->first();
          $user ? $user->delete() : $notFound->push($email);
        }

        $this->info($emails->count() - $notFound->count().' of '.$emails->count(). " accounts(s) removed.");
        $this->info($notFound->count()." email(s) not found.");

        // var_dump($users);
    }
}
