<?php

namespace Modules\Metadata\Controllers;

use App\Modules\Metadata\Data\MetadataResourceData;
use Modules\Common\Controllers\Controller;
use Modules\Metadata\Models\Metadata;
use Modules\Metadata\Data\CreateMetadataData;
use Modules\Metadata\Data\UpdateMetadataData;
use Modules\Metadata\Actions\CreateMetadataAction;
use Modules\Metadata\Actions\UpdateMetadataAction;
use Modules\Metadata\Actions\DeleteMetadataAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MetadataController extends Controller
{
    public function __construct(
        protected CreateMetadataAction $createMetadataAction,
        protected UpdateMetadataAction $updateMetadataAction,
        protected DeleteMetadataAction $deleteMetadataAction
    ) {}

    /**
     * Display a listing of the metadata.
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $metadata = Metadata::query()
            ->when($search, function ($query, $search) {
                $searchableColumns = ['name', 'type'];

                $query->where(function ($query) use ($search, $searchableColumns) {
                    foreach ($searchableColumns as $column) {
                        $query->orWhere($column, 'like', "%{$search}%");
                    }
                });
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Metadata', [
            'metadata' => MetadataResourceData::collect($metadata),
            'filters' => $request->only(['search']),
        ]);
    }

    /**
     * Store a newly created metadata in storage.
     */
    public function store(CreateMetadataData $data): RedirectResponse
    {
        $this->createMetadataAction->execute($data);

        return redirect()->back();
    }

    /**
     * Update the specified metadata in storage.
     */
    public function update(UpdateMetadataData $data, Metadata $metadata): RedirectResponse
    {
        $this->updateMetadataAction->execute($metadata, $data);
        return redirect()->back();
    }

    /**
     * Remove the specified metadata from storage.
     */
    public function destroy(Metadata $metadata): RedirectResponse
    {
        $this->deleteMetadataAction->execute($metadata);
        return redirect()->back();
    }

    /**
     * Fetch all available metadata.
     */
    public function fetchMetadata()
    {
        $metadata = Metadata::all();
        return response()->json([
            'metadata' => MetadataResourceData::collect($metadata),
        ]);
    }
}
