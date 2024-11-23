<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('document_approvals', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('document_id');
            $table->text('resolution')->nullable();
            $table->string('overall_state');
            $table->uuid('destination')->nullable();
            $table->string('type');
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('document_id')->references('item_id')->on('documents')->onDelete('cascade');
            $table->foreign('destination')->references('id')->on('items')->onDelete('cascade');

            $table->unique(['document_id', 'type']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('document_approvals');
    }
};
