<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClaimTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('claim_tag', function (Blueprint $table) {
            $table->integer('claim_id')->unsigned();
            $table->foreign('claim_id')
                ->references('id')->on('claims')
                ->onDelete('cascade');
                
            $table->integer('tag_id')->unsigned();
            $table->foreign('tag_id')
                ->references('id')->on('tags')
                ->onDelete('cascade');
                
            $table->primary(['claim_id', 'tag_id']);
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
        Schema::dropIfExists('claim_tag');
    }
}
