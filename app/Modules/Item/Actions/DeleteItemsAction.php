<?php

namespace Modules\Item\Actions;

use Modules\Item\Models\Item;
use Modules\Item\Data\DeleteItemsData;

class DeleteItemsAction
{
    public function execute(DeleteItemsData $data): void
    {
        // Fetch the items to be deleted
        $items = Item::whereIn('id', $data->ids)->get();

        // Iterate over each item and delete its children
        foreach ($items as $item) {
            $this->deleteWithChildren($item);
        }
    }

    private function deleteWithChildren(Item $item): void
    {
        // Fetch child items
        $children = Item::where('parent_id', $item->id)->get();

        // Recursively delete each child
        foreach ($children as $child) {
            $this->deleteWithChildren($child);
        }

        // Soft delete the item
        $item->delete();
    }
}
