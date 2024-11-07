<?php

namespace App\Modules\User\Data;

use Modules\User\Models\User;
use Spatie\LaravelData\Resource;

class UserResourceData extends Resource
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $workflow_role,
        public string $office_position,
    ) {}

    public static function fromModel(User $user): self
    {
        return new self(
            id: $user->id,
            name: $user->name,
            email: $user->email,
            workflow_role: $user->workflow_role ?? "",
            office_position: $user->office_position ?? "",
        );
    }
}
