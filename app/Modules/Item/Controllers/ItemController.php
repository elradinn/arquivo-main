<?php

namespace Modules\Item\Controllers;

use Modules\Common\Controllers\Controller;
use Modules\Item\Models\Item;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Item\Actions\DeleteItemsAction;
use Modules\Item\Actions\DownloadItemsAction;
use Modules\Item\Actions\GetItemDataAction;
use Modules\Item\Actions\ShowMoveItemsAction;
use Modules\Item\Data\DeleteItemsData;
use Modules\Item\Data\DownloadItemsData;

class ItemController extends Controller
{
    public function __construct(
        private DownloadItemsAction $downloadItemsAction,
        private DeleteItemsAction $deleteItemsAction,
        private ShowMoveItemsAction $showMoveItemsAction
    ) {}

    public function index(): JsonResponse
    {
        $items = Item::with(['workspace', 'folder', 'document'])->get();

        return response()->json($items);
    }

    public function showItems(Item $item = null): JsonResponse
    {
        $data = $this->showMoveItemsAction->execute($item);

        return response()->json($data);
    }

    public function download(DownloadItemsData $data): JsonResponse
    {
        $result = $this->downloadItemsAction->execute($data);

        return response()->json($result);
    }

    public function delete(DeleteItemsData $data): RedirectResponse
    {
        $this->deleteItemsAction->execute($data);

        return redirect()->back();
    }
}
