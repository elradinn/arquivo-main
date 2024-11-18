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
        $documentApproval->document->update([
            'status' => $approvalType === 'reviewal' ? StatesDocumentReviewalPending::class : StatesDocumentApprovalPending::class,
        ]);

        $this->sendDocumentApprovalNotificationAction->execute($documentApproval);

        activity()
            ->performedOn($documentApproval->document)
            ->causedBy(Auth::id())
            ->log("Started " . $approvalType . " workflow");

        return $documentApproval;
    }
}
