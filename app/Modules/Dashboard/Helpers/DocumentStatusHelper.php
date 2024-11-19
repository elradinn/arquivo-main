<?php

namespace Modules\Dashboard\Helpers;

class DocumentStatusHelper
{
    protected static $statusMap = [
        'reviewal_pending' => 'Modules\Document\States\DocumentReviewalPending',
        'reviewal_accepted' => 'Modules\Document\States\DocumentReviewalAccepted',
        'reviewal_rejected' => 'Modules\Document\States\DocumentReviewalRejected',
        'approval_pending' => 'Modules\Document\States\DocumentApprovalPending',
        'approval_accepted' => 'Modules\Document\States\DocumentApprovalAccepted',
        'approval_rejected' => 'Modules\Document\States\DocumentApprovalRejected',
    ];

    public static function getStatusClass(string $status): ?string
    {
        return self::$statusMap[$status] ?? null;
    }
}
