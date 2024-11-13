<?php

namespace Modules\Item\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Common\Controllers\Controller;
use Modules\Item\Data\ItemContentsResourceData;
use Modules\Item\Models\Item;

class ShareController extends Controller
{
    /**
     * Display folders shared with the authenticated user.
     */
    public function sharedWithMe(): Response
    {
        $user = Auth::user();

        // Fetch Items that have an associated Folder with userAccess for the current user
        $sharedItems = Item::whereHas('folder.userAccess', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
            ->with(['folder']) // Eager load folder
            ->get();

        // Transform the shared items using ItemContentsResourceData
        $sharedFolders = ItemContentsResourceData::collect($sharedItems);

        return Inertia::render('SharedWithMe', [
            'sharedFolders' => $sharedFolders,
        ]);
    }
}
