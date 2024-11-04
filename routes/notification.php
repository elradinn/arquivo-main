<?php

use Illuminate\Support\Facades\Route;
use Modules\Notification\Controllers\NotificationController;

Route::middleware('auth')->group(function () {
    Route::get('/notifications', [NotificationController::class, 'retrieveNotifications'])->name('notification.retrieveNotifications');
});
