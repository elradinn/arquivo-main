<?php

namespace Modules\DocumentApproval\Actions;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Document\States\DocumentApprovalPending as StatesDocumentApprovalPending;
use Modules\Document\States\DocumentReviewalPending as StatesDocumentReviewalPending;
use Modules\DocumentApproval\States\DocumentApprovalPending;
use Modules\DocumentApproval\States\DocumentReviewalPending;
use Modules\DocumentApproval\Data\CreateDocumentApprovalData;
use Modules\DocumentApproval\Models\DocumentApproval;
use Modules\DocumentApprovalHasUser\Models\DocumentApprovalHasUser;
use Modules\DocumentApprovalHasUser\States\UserApprovalPending;
use Modules\DocumentApprovalHasUser\States\UserReviewalPending;
use Modules\Metadata\Models\Metadata;

class CreateDocumentApprovalAction
{
    public function __construct(
        protected SendDocumentApprovalNotificationAction $sendDocumentApprovalNotificationAction
    ) {}

    public function execute(CreateDocumentApprovalData $data): DocumentApproval
    {
        $approvalType = $data->type;

        $documentApproval = DocumentApproval::create([
            'document_id' => $data->document_id,
            'resolution' => $data->resolution,
            'destination' => $data->destination,
            'type' => $data->type,
            'overall_state' => $approvalType === 'reviewal' ? DocumentReviewalPending::class : DocumentApprovalPending::class,
        ]);

        $documentApprovalUsers = collect($data->users)->map(function ($user) use ($approvalType) {
            return new DocumentApprovalHasUser([
                'user_id' => $user->user_id,
                'user_state' => $approvalType === 'reviewal' ? UserReviewalPending::class : UserApprovalPending::class,
            ]);
        });

        $documentApproval->documentApprovalUsers()->saveMany($documentApprovalUsers);

        // Document lang to yung sa taas document workflow yan hayst
        if ($approvalType === 'reviewal') {
            $documentApproval->document->update([
                'review_status' => StatesDocumentReviewalPending::class,
            ]);

            $documentApproval->document->versions()->where('current', true)->update([
                'review_status' => new StatesDocumentReviewalPending($documentApproval->document),
            ]);
        } else {
            $documentApproval->document->update([
                'approval_status' => StatesDocumentApprovalPending::class,
            ]);

            $documentApproval->document->versions()->where('current', true)->update([
                'approval_status' => new StatesDocumentApprovalPending($documentApproval->document),
            ]);
        }

        if ($approvalType === 'reviewal') {
            $reviewStatusMetadata = Metadata::where('name', 'Review Status')->first();
            $documentApproval->document->metadata()->attach($reviewStatusMetadata->id, [
                'value' => $documentApproval->document->review_status->label(),
            ]);
        } else {
            $approvalStatusMetadata = Metadata::where('name', 'Approval Status')->first();
            $documentApproval->document->metadata()->attach($approvalStatusMetadata->id, [
                'value' => $documentApproval->document->approval_status->label(),
            ]);
        }

        $this->sendDocumentApprovalNotificationAction->execute($documentApproval);

        activity()
            ->performedOn($documentApproval->document)
            ->causedBy(Auth::id())
            ->log("Started " . $approvalType . " workflow");

        return $documentApproval;
    }
}
