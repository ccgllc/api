<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstimatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estimates', function (Blueprint $table) {
            $table->increments('id');
            $table->decimal('gross_loss', 15,2)->default(0);
            $table->enum('type', ['normal', 'cwop', 'erroneous', 'withdrawn', 'reinspection'])->default('normal');
             // user id foreign key.
            $table->integer('user_id')->unsigned(); 
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            // user id foreign key.
            $table->integer('claim_id')->unsigned();
            $table->foreign('claim_id')->references('id')->on('claims')->onDelete('cascade');
            //active
            $table->boolean('active')->default(0);
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
        Schema::dropIfExists('estimates');
    }
}
