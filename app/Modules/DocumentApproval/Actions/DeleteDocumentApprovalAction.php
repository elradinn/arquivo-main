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

        $documentApproval->document()->update([
            'status' => null
        ]);

        $documentApproval->delete();
    }
}
