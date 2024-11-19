<?php

namespace Modules\User\Actions;

use Modules\User\Data\RegisterUserData;
use Modules\User\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterUserAction
{
    public function execute(RegisterUserData $data): User
    {
        $user = User::create([
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make($data->password),
            'office_position' => $data->office_position,
            'workflow_role' => $data->workflow_role,
            'system_role' => $data->system_role,
        ]);

        $user->assignRole($data->system_role);

        return $user;
    }
}
