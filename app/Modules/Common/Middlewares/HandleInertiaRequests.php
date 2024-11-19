<?php

namespace Modules\Common\Middlewares;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Modules\Folder\Data\FolderLinksData;
use Modules\Folder\Models\Folder;
use Modules\Item\Models\Item;
use Modules\Notification\Actions\RetrieveNotificationAction;
use Spatie\LaravelData\DataCollection;

class HandleInertiaRequests extends Middleware
{
    public function __construct(private RetrieveNotificationAction $retrieveNotificationAction) {}
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        if ($user && ($user->hasRole('admin') || $user->hasRole('viewer'))) {
            // If the user is an admin or viewer, retrieve all root items with their folders
            $workspaces = Item::whereNull('parent_id')
                ->with('folder')
                ->get();
        } elseif ($user) {
            // If the user is authenticated but not an admin/viewer, retrieve only root items where the folder is shared with the user
            $workspaces = Item::whereNull('parent_id')
                ->whereHas('folder.userAccess', function ($query) use ($user) {
                    $query->where('user_id', $user->id);
                })
                ->with('folder')
                ->get();
        } else {
            // If the user is not authenticated, set workspaces to an empty collection
            $workspaces = collect(); // Empty collection or define as needed
        }

        $notifications = $this->retrieveNotificationAction->execute();

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $user,
                'systemRole' => ($user && ($user->hasRole('admin') || $user->hasRole('viewer'))) ? $user->system_role : null,
            ],
            'workspaces' => FolderLinksData::collect($workspaces, DataCollection::class),
            'csrf_token' => csrf_token(),
            'notifications' => $notifications,
        ]);
    }
}
