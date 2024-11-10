<?php

namespace Modules\DocumentApprovalHasUser\States;

use Illuminate\Support\Facades\Auth;
use Spatie\ModelStates\Transition;
use Modules\DocumentApprovalHasUser\Models\DocumentApprovalHasUser;
use Modules\DocumentApproval\Actions\RecalculateDocumentStateAction;
use Modules\DocumentApproval\Actions\SendDocumentApprovalNotificationAction;
use Modules\DocumentApprovalHasUser\States\UserApprovalAccepted;
use Modules\User\Models\User;

class UserApprovalPendingToAccepted extends Transition
{
    public function __construct(
        private DocumentApprovalHasUser $documentApprovalHasUser,
    ) {}

    public function handle(
        SendDocumentApprovalNotificationAction $sendDocumentApprovalNotification,
        RecalculateDocumentStateAction $recalculateDocumentStateAction
    ): DocumentApprovalHasUser {

        $this->documentApprovalHasUser->user_state = new UserApprovalAccepted($this->documentApprovalHasUser);
        $this->documentApprovalHasUser->save();

        // $sendDocumentApprovalNotification->execute($this->documentApprovalHasUser->documentApproval);

        $user = User::find(Auth::user()->id);
        $user->notifications()->where('data->document_approval_id', $this->documentApprovalHasUser->documentApproval->id)->markAsRead();

        $recalculateDocumentStateAction->execute($this->documentApprovalHasUser->documentApproval);

        activity()
            ->performedOn($this->documentApprovalHasUser)
            ->causedBy(Auth::id())
            ->log("Document approval accepted");

        return $this->documentApprovalHasUser;
    }
}
