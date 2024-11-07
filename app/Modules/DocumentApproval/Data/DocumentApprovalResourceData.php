<?php

namespace Modules\DocumentApproval\Data;

use Modules\DocumentApproval\Models\DocumentApproval;
use Modules\DocumentApprovalHasUser\States\UserApprovalPending;
use Modules\DocumentApprovalHasUser\States\UserReviewalPending;
use Spatie\LaravelData\Resource;
use Illuminate\Support\Facades\Auth;

class DocumentApprovalResourceData extends Resource
{
    public function __construct(
        public string $id,
        public string $document_id,
        public string $document_name,
        public string $type,
        public ?string $destination,
        public ?string $resolution,
        public string $overall_state,
        public array $document_user_approvals,
        public string $created_at,
        public string $updated_at,
        public ?string $current_user_approval_id,
        public bool $is_done
    ) {}

    public static function fromModel(DocumentApproval $documentApproval): self
    {
        $currentUserApproval = $documentApproval->documentApprovalUsers
            ->where('user_id', Auth::id())
            ->first();

        $isDone = false;
        if ($currentUserApproval) {
            $isDone = !(
                $currentUserApproval->user_state instanceof UserApprovalPending ||
                $currentUserApproval->user_state instanceof UserReviewalPending
            );
        }

        return new self(
            id: $documentApproval->id,
            document_id: $documentApproval->document_id,
            document_name: $documentApproval->document->name ?? 'No Name',
            type: $documentApproval->type,
            destination: $documentApproval->destination,
            resolution: $documentApproval->resolution,
            overall_state: $documentApproval->overall_state->label(),
            document_user_approvals: $documentApproval->documentApprovalUsers->map(fn($documentUserApproval) => [
                'user_id' => $documentUserApproval->user_id,
                'user_name' => $documentUserApproval->users->name,
                'user_state' => $documentUserApproval->user_state->label(),
                'comment' => $documentUserApproval->comment,
                'created_at' => $documentUserApproval->created_at,
                'updated_at' => $documentUserApproval->updated_at,
            ])->toArray(),
            created_at: $documentApproval->created_at,
            updated_at: $documentApproval->updated_at,
            current_user_approval_id: $currentUserApproval?->id,
            is_done: $isDone
        );
    }
}
