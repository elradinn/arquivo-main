<?php

namespace Modules\Document\Actions;

use Modules\Document\Data\UploadDocumentData;
use Modules\Document\Models\Document;
use Modules\DocumentApproval\Actions\CreateDocumentApprovalFromWorkflowAction;
use Modules\Item\Actions\CreateItemAction;
use Modules\Item\Data\CreateItemData;
use Modules\NumberingScheme\Actions\ApplyDocumentNumberAction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UploadDocumentAction
{
    public function __construct(
        protected CreateItemAction $createItemAction,
        protected CreateDocumentApprovalFromWorkflowAction $createDocumentApprovalFromWorkflowAction,
        protected ApplyDocumentNumberAction $applyDocumentNumberAction,
    ) {}

    public function execute(UploadDocumentData $data): array
    {
        $documents = [];

        foreach ($data->files as $fileData) {
            $uploadedFile = $fileData->getUploadedFile();

            // Generate a unique name within the folder
            $originalName = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $extension = $uploadedFile->getClientOriginalExtension();
            $newName = $originalName . '.' . $extension;
            $counter = 1;

            while (
                Document::where('name', $newName)
                ->whereHas('item', function ($query) use ($data) {
                    $query->where('parent_id', $data->parent_id);
                })
                ->exists()
            ) {
                $counter++;
                $newName = $originalName . " ({$counter})." . $extension;
            }

            // Create item for the document
            $item = $this->createItemAction->execute(
                CreateItemData::from([
                    'parent_id' => $data->parent_id,
                ])
            );

            // Store the file with the unique name
            $filePath = $uploadedFile->storeAs('documents', $newName, 'public');

            // Create the document
            $document = $item->document()->create([
                'name' => $newName,
                'owned_by' => $data->owned_by ?? Auth::id(),
                'mime' => $uploadedFile->getMimeType(),
                'size' => $uploadedFile->getSize(),
                'file_path' => $filePath,
            ]);

            // Log activity
            activity()
                ->performedOn($document)
                ->causedBy(Auth::id())
                ->log("Document '{$document->name}' uploaded");

            // Apply numbering scheme and create approval workflow
            $this->applyDocumentNumberAction->execute($document);
            $this->createDocumentApprovalFromWorkflowAction->execute($document);

            $documents[] = $document;
        }

        return $documents;
    }
}
