<?php

namespace Modules\Notification\Controllers;

use Modules\Common\Controllers\Controller;
use Modules\Notification\Actions\RetrieveNotificationAction;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class NotificationController extends Controller
{
    protected RetrieveNotificationAction $retrieveNotificationAction;

    public function __construct(RetrieveNotificationAction $retrieveNotificationAction)
    {
        $this->retrieveNotificationAction = $retrieveNotificationAction;
    }

    /**
     * Retrieve notifications for the logged-in user.
     */
    public function retrieveNotifications(): JsonResponse
    {
        $notifications = $this->retrieveNotificationAction->execute();

        return response()->json(['notifications' => $notifications], 200);
    }
}
