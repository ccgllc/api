<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeeSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fee_schedules', function (Blueprint $table) {
            $table->increments('id');
            $table->string('label');
            $table->json('data');

            // Claim Relation (BelongsTo)
            $table->integer('carrier_id')->unsigned();
            $table->foreign('carrier_id')->references('id')->on('carriers');

            //dates
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
        Schema::dropIfExists('fee_schedules');
    }
}
