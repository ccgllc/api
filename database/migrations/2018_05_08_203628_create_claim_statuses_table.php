<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClaimStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claim_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name'); // status name: Adjuster Reassigned, site inspected etc..
            $table->string('value')->nullable(); // actual status value: null, date, user name, address, dollar amount,  
            $table->string('type'); // eg. date, value, assignment, reassignment,
            $table->date('date');
            $table->datetime('time')->nullable(); // time of status (when submitted).
            $table->string('transaction_id')->nullable(); // identifier from exact.
            $table->string('orig_transaction_id')->nullable(); // identifier from exact.
            $table->string('claim_number'); // claim number just for reference.
            $table->integer('claim_id')->unsigned(); // claim id foreign key.
            $table->foreign('claim_id')->references('id')->on('claims')->onDelete('cascade');
            $table->integer('user_id')->unsigned(); // user id foreign key.
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->softDeletes();
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
        Schema::drop('claim_statuses');
    }
}
