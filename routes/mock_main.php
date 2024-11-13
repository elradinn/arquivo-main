<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

Route::get('/', function () {
    return;
})->middleware('role.redirect');

Route::get('/api-tester', function () {
    return Inertia::render('ApiTester');
});

Route::get('/send-test-email', function () {
    Mail::raw('This is a test email from Laravel!', function ($message) {
        $message->to('serenityshoshin@gmail.com')
            ->subject('Test Email');
    });

    return 'Test email sent!';
});
