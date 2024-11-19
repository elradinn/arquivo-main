<?php

namespace Modules\Notification\Actions;

use Illuminate\Support\Facades\Auth;
use Modules\DocumentApproval\Data\DocumentApprovalResourceData;
use Modules\User\Models\User;

class RetrieveNotificationAction
{
    public function execute()
    {
        $user = Auth::user();
        $user = User::find($user->id);

        $pendingApprovals = $user->documentApprovalUsers()
            ->whereIn('user_state', [
                'Modules\DocumentApprovalHasUser\States\UserApprovalPending',
                'Modules\DocumentApprovalHasUser\States\UserReviewalPending',
            ])
            ->with('documentApproval.document')
            ->get()
            ->map(fn($approval) => DocumentApprovalResourceData::fromModel($approval->documentApproval));

        return $pendingApprovals;
    }
}
