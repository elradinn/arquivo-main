<?php

namespace Modules\Document\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Modules\Document\States\DocumentState;

class DocumentHasVersion extends Model
{
    use HasUuids;

    protected $fillable = [
        'document_item_id',
        'file_path',
        'current',
        'name',
        'size',
        'mime',
        'review_status',
        'approval_status',
    ];

    protected $casts = [
        'review_status' => DocumentState::class,
        'approval_status' => DocumentState::class,
    ];

    public function document(): BelongsTo
    {
        return $this->belongsTo(Document::class, 'document_item_id');
    }
}
