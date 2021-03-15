<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionIdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('transaction_ids');
        Schema::create('transaction_ids', function (Blueprint $table) {
            $table->increments('id');

            $table->string('transaction_id')->unique();

             $table->unsignedInteger('claim_id');
             $table->foreign('claim_id')
                        ->references('id')
                        ->on('claims')
                        ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction_ids');
    }
}
