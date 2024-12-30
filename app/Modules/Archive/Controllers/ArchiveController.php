<?php

namespace Modules\Archive\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Modules\Common\Controllers\Controller;
use Modules\Archive\Actions\GetArchiveDataAction;
use Modules\Folder\Models\Folder;
use Modules\Item\Models\Item;

class ArchiveController extends Controller
{
    protected GetArchiveDataAction $getArchiveDataAction;

    public function __construct(GetArchiveDataAction $getArchiveDataAction)
    {
        $this->getArchiveDataAction = $getArchiveDataAction;
    }

    /**
     * Display the archive page.
     *
     * @param string|null $folderUuid
     * @return \Inertia\Response
     */
    public function show(string $folderUuid = null)
    {
        // If a folder UUID is provided, find the corresponding folder
        $folder = null;
        if ($folderUuid) {
            $folder = Folder::where('item_id', $folderUuid)->firstOrFail();
        }

        // Retrieve archive data using the action
        $data = $this->getArchiveDataAction->execute($folder);

        // Render the Archive.tsx page with the retrieved data
        return Inertia::render('Archive', $data);
    }
}
