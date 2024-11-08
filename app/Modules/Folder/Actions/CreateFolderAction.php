<?php

namespace Modules\Folder\Actions;

use Modules\Folder\Data\CreateFolderData;
use Modules\Folder\Models\Folder;
use Modules\Item\Actions\CreateItemAction;
use Modules\Item\Data\CreateItemData;
use Illuminate\Support\Facades\Auth;

class CreateFolderAction
{
    public function __construct(
        protected CreateItemAction $createItemAction
    ) {}

    public function execute(CreateFolderData $data): Folder
    {
        $item = $this->createItemAction->execute(
            CreateItemData::from([
                'parent_id' => $data->parent_id,
            ])
        );

        $folder = $item->folder()->create([
            'name' => $data->name,
            'owned_by' => $data->owned_by ?? Auth::id(),
        ]);


        activity()
            ->performedOn($folder)
            ->causedBy(Auth::id())
            ->log("Folder created");

        return $folder;
    }
}
