<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');

             // Claim Info
            $table->json('data');
             // User Id (Creator) -- no foreign key.
            $table->integer('user_id')->unsigned();
            
            // FeeSchedule (fee schedule used to calculate invoice) -- no foreign key.
            // $table->integer('fee_schedule_id')->unsigned();
            
            // Claim Relation (BelongsTo)
            $table->integer('claim_id')->unsigned();
            $table->foreign('claim_id')->references('id')->on('claims')->onDelete('cascade');

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
        Schema::dropIfExists('invoices');
    }

     // $table->integer('invoice_number')->index();
    // $table->string('carrier');
    // $table->string('claim_type');
    // $table->string('claim_number')->index();
    // $table->string('insured');
    // $table->decimal('gross_loss', 9, 2);
    // Invoice Numerical Data
    // $table->decimal('tier_total', 7, 2);
    // $table->integer('hours');
    // $table->integer('milage');
    // $table->integer('time_and_expenses');
    // $table->decimal('milage_rate', 4, 3);
    // $table->integer('photos');
    // $table->decimal('photo_rate', 3, 2);
    // Adjuster 
    // $table->decimal('adjuster_rate', 4, 4);
    // $table->decimal('adjuster_time_expense_payout', 7, 2);
    // $table->decimal('adjuster_photo_payout', 5, 2);
    // $table->decimal('adjuster_milage_payout', 6, 2);
    // $table->decimal('adjuster_reimbursable', 6, 2);
    // $table->decimal('adjuster_payout', 7, 2);
    // CCG Totals
    // $table->decimal('ccg_rate', 4, 4);
    // $table->decimal('ccg_payout', 7, 2);
    // $table->decimal('ccg_photo_payout', 5, 2);
    // $table->decimal('ccg_time_expense_payout', 7, 2);
    // Reviewer Totals
    // $table->decimal('reviewer_payout', 5, 2);
    // Totals
    // $table->decimal('sales_tax', 7, 2);
    // $table->boolean('taxable')->default(0);
    // $table->decimal('total', 7, 2);
    // Accounts Receivable Data
    // $table->string('check_number')->nullable();
    // $table->decimal('check_ammount', 7, 2)->nullable();
    // $table->date('deposit_date')->nullable();
    // $table->boolean('payment_received')->default(0);
    // $table->boolean('paid')->default(0);
    // $table->boolean('discrepancy')->default(0);
}
