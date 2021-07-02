<?php

namespace CCG\Console\Commands;

use CCG\Permission;
use CCG\Carrier\Carrier;
use Illuminate\Console\Command;

class CreateCarrierPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'carrier:create-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'create permissions for accessing a carriers claims';

    public $carriers;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        // $this->carriers = Carrier::all();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        foreach($this->carriers as $carrier) {
            $name = "access-$carrier->id-claims";
            $label = "Access $carrier->label Claims";
            $permission = [
                'name' => $name,
                'label' => $label
            ];
            Permission::create($permission);
        }
    }
}
