<?php

namespace Modules\DocumentApproval\Actions;

use Illuminate\Support\Facades\Auth;
use Modules\DocumentApproval\Models\DocumentApproval;
use Modules\DocumentApproval\States\DocumentState;
use Modules\User\Models\User;

class DeleteDocumentApprovalAction
{
    public function execute(DocumentApproval $documentApproval): void
    {
        $user = User::find(Auth::user()->id);

        $user->notifications()->where('data->document_approval_id', $documentApproval->id)->delete();

        if ($documentApproval->type === 'reviewal') {
            $documentApproval->document()->update([
                'review_status' => null
            ]);
        } elseif ($documentApproval->type === 'approval') {
            $documentApproval->document()->update([
                'approval_status' => null
            ]);
        }

        $documentApproval->delete();
    }
}
