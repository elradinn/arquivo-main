<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Admin\Controllers\AdminController;

Route::middleware('auth')->group(function () {
    Route::get('/admin-tools', [AdminController::class, 'index'])->name('admin.tools');
});
