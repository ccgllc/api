<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClaimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claims', function (Blueprint $table) {
            $table->increments('id'); 
            $table->string('claim_type');// eg daily,cat
            $table->boolean('is_commercial')->default(0);
            $table->string('claim_number')->index();
            $table->string('transaction_id')->unique()->nullable(); //only for xact imported claims
            $table->string('carrier_name'); // just for convenience...
            $table->string('current_status')->nullable();
            $table->string('insured');
            // $table->string('email')->nullable();
            $table->string('type_of_loss');  // wind, hail, windstorm, hurricane, flood, theft, auto, other,
            $table->string('job_type')->nullable(); 
            $table->string('catastrophe')->nullable();
            $table->string('price_list_area')->nullable();
            $table->text('description')->nullable();
            // $table->dateTime('appointment_date')->nullable();
            $table->date('date_of_loss')->nullable();
            $table->date('date_received')->nullable();
            $table->json('claim_data');
            // $table->integer('adjuster_id')->unsigned()->nullable();
            // $table->foreign('adjuster_id')->references('id')->on('users');
            // $table->integer('reviewer_id')->unsigned()->nullable();
            // $table->foreign('reviewer_id')->references('id')->on('users');
            $table->integer('carrier_id')->unsigned()->nullable();
            $table->foreign('carrier_id')->references('id')->on('carriers');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('claims');
    }
}
