<?php

namespace Modules\User\Controllers;

use App\Modules\User\Data\UserResourceData;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\Common\Controllers\Controller;
use Modules\User\Models\User;
use Modules\User\Actions\DeleteUserAction;
use Modules\User\Actions\RegisterUserAction;
use Modules\User\Actions\UpdateUserAction;
use Modules\User\Data\RegisterUserData;
use Modules\User\Data\UpdateUserData;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(
        protected RegisterUserAction $registerUserAction,
        protected UpdateUserAction $updateUserAction,
        protected DeleteUserAction $deleteUserAction
    ) {}

    public function index(Request $request)
    {
        $search = $request->input('search');

        $users = User::query()
            ->when($search, function ($query, $search) {
                $searchableColumns = ['name', 'email'];

                $query->where(function ($query) use ($search, $searchableColumns) {
                    foreach ($searchableColumns as $column) {
                        $query->orWhere($column, 'like', "%{$search}%");
                    }
                });
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('User', [
            'users' => UserResourceData::collect($users),
            'filters' => $request->only(['search']),
        ]);
    }

    public function register(RegisterUserData $registerUserData): RedirectResponse
    {
        $user = $this->registerUserAction->execute($registerUserData);

        return redirect()->back();
    }

    public function update(User $user, UpdateUserData $updateUserData): RedirectResponse
    {
        $updatedUser = $this->updateUserAction->execute($user, $updateUserData);

        return redirect()->back();
    }

    public function delete(User $user): RedirectResponse
    {
        $this->deleteUserAction->execute($user);

        return redirect()->back();
    }

    public function getUsersApprovalRole(string $type): JsonResponse
    {
        if (!in_array($type, ['reviewal', 'approval'])) {
            return response()->json(['error' => 'Invalid workflow type'], 400);
        }

        if ($type == 'reviewal') {
            $users = User::where('workflow_role', 'reviewer')->get();
        } else if ($type == 'approval') {
            $users = User::where('workflow_role', 'approver')->get();
        }

        return response()->json($users);
    }
}
