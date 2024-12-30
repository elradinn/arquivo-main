<?php

namespace Modules\Archive\Actions;

use Illuminate\Support\Facades\Auth;
use Modules\Item\Data\ItemContentsResourceData;
use Modules\Item\Models\Item;
use Modules\Folder\Models\Folder;
use Spatie\LaravelData\DataCollection;

class GetArchiveDataAction
{
    /**
     * Execute the action to retrieve archived items.
     *
     * @param Folder|null $folder
     * @return array
     */
    public function execute(?Folder $folder = null): array
    {
        if ($folder) {
            // Retrieve archived items within the specified folder
            $archivedItems = $folder->item->children()
                ->where('is_archived', true)
                ->with(['folder', 'document'])
                ->get();
        } else {
            // Retrieve all archived root items
            // $archivedItems = Item::whereNull('parent_id')
            //     ->where('is_archived', true)
            //     ->with(['folder', 'document'])
            //     ->get();

            $archivedItems = Item::with(['folder', 'document'])
                ->where('is_archived', true)
                ->get();
        }

        // Prepare the data for the frontend
        return [
            'itemParent' => $folder ? \Modules\Item\Data\ItemParentResourceData::fromModel($folder->item) : null,
            'itemAncestors' => $folder ? \Modules\Item\Data\ItemAncestorsResourceData::collect($folder->item->ancestorsWithSelf()->get(), DataCollection::class) : [],
            'itemContents' => ItemContentsResourceData::collect($archivedItems, DataCollection::class),
            'folderUserRole' => $folder ? $this->determineUserRole($folder) : null,
        ];
    }

    /**
     * Determine the user's role for the folder.
     *
     * @param Folder $folder
     * @return string|null
     */
    protected function determineUserRole(Folder $folder): ?string
    {
        $user = Auth::user();
        if (!$user) {
            return null;
        }

        $userAccess = $folder->userAccess()->where('user_id', $user->id)->first();
        if ($userAccess) {
            return $userAccess->pivot->role; // e.g., 'editor' or 'viewer'
        }

        // Fallback to system-level permissions
        if ($user->hasRole('admin')) {
            return 'admin';
        } elseif ($user->hasRole('viewer')) {
            return 'viewer';
        }

        return null;
    }
}
