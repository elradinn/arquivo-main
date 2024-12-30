<?php

namespace Modules\Item\Actions;

use Modules\Item\Models\Item;
use Modules\Item\Data\ArchiveItemsData;

class ArchiveItemsAction
{
    public function execute(ArchiveItemsData $data): string
    {
        // Fetch the items to be archived
        $items = Item::whereIn('id', $data->ids)->get();

        // Determine the redirect URL before archiving
        $redirectUrl = route('dashboard'); // Default redirect to dashboard

        if ($items->isNotEmpty()) {
            $firstItem = $items->first();
            if ($firstItem->parent_id) {
                // Assuming there's a named route 'folder.show' that displays a folder
                $redirectUrl = route('folder.show', ['folder' => $firstItem->parent_id]);
            }
        }

        // Iterate over each item and archive its children
        foreach ($items as $item) {
            $this->archiveWithChildren($item);
        }

        return $redirectUrl;
    }

    private function archiveWithChildren(Item $item): void
    {
        // Fetch child items
        $children = Item::where('parent_id', $item->id)->get();

        // Recursively archive each child
        foreach ($children as $child) {
            $this->archiveWithChildren($child);
        }

        // Mark the item as archived
        $item->is_archived = true;
        $item->save();
    }
}
