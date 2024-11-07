<?php

namespace Modules\Common\Middlewares;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Modules\Folder\Data\FolderLinksData;
use Modules\Folder\Models\Folder;
use Modules\Item\Models\Item;
use Spatie\LaravelData\DataCollection;

class HandleInertiaRequests extends Middleware
{
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

        $workspaces = Item::getRoots()->load('folder');

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user,
                'isAdmin' => $user ? $user->hasRole('admin') : false,
            ],
            'workspaces' => FolderLinksData::collect($workspaces, DataCollection::class),
            'csrf_token' => csrf_token(),
        ];
    }
}
