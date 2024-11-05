<?php

namespace Modules\DocumentApproval\Actions;

use Modules\DocumentApproval\Models\DocumentApproval;
use Modules\DocumentApproval\States\DocumentState;

class DeleteDocumentApprovalAction
{
    public function execute(DocumentApproval $documentApproval): void
    {
        $documentApproval->document()->update([
            'status' => null
        ]);

        $documentApproval->delete();
    }
}
