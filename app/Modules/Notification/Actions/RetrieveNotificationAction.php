<?php

namespace Modules\Notification\Actions;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Modules\Notification\Data\NotificationResource;
use Modules\User\Models\User;
use Spatie\LaravelData\DataCollection;

class RetrieveNotificationAction
{
    public function execute()
    {
        $user = User::find(Auth::user()->id);

        $notifications = $user->notifications()->latest()->get();

        return NotificationResource::collect($notifications);
    }
}
