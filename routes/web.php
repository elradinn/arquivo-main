<?php

use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Storage;

Route::get('/test-zip', function () {
    $zipPath = 'zip/test.zip';
    $publicPath = "public/$zipPath";

    Storage::makeDirectory('public/zip');

    $zipFile = Storage::path($publicPath);
    $zip = new ZipArchive();

    if ($zip->open($zipFile, ZipArchive::CREATE | ZipArchive::OVERWRITE) === true) {
        $testFilePath = Storage::disk('public')->path('documents/Doe, John - Letter Request.pdf'); // Ensure sample.pdf exists
        if (file_exists($testFilePath)) {
            $zip->addFile($testFilePath, 'Doe, John - Letter Request.pdf');
        } else {
            return 'Test file does not exist.';
        }
        $zip->close();
        return 'Zip file created successfully at ' . Storage::url($zipPath);
    } else {
        return 'Failed to create zip file.';
    }
});

require __DIR__ . '/mock_main.php';

require __DIR__ . '/auth.php';

require __DIR__ . '/dashboard.php';

require __DIR__ . '/profile.php';

require __DIR__ . '/item.php';

require __DIR__ . '/workspace.php';

require __DIR__ . '/folder.php';

require __DIR__ . '/folder_activity_log.php';

require __DIR__ . '/document.php';

require __DIR__ . '/document_approval.php';

require __DIR__ . '/document_user_approval.php';

require __DIR__ . '/document_metadata.php';

require __DIR__ . '/document_related.php';

require __DIR__ . '/workflow.php';

require __DIR__ . '/metadata.php';

require __DIR__ . '/numbering_scheme.php';

require __DIR__ . '/user.php';

require __DIR__ . '/admin_tools.php';

require __DIR__ . '/activity_log.php';

require __DIR__ . '/trash.php';

require __DIR__ . '/generate_report.php';

require __DIR__ . '/global_search.php';

require __DIR__ . '/notification.php';
