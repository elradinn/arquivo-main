<?php

namespace Modules\Common\Middlewares;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\User\Models\User;

class RoleRedirectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * Redirect users based on their roles:
     * - Admins to /dashboard
     * - Non-admin authenticated users to /item/shared-with-me
     * - Guests to /login
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user = User::find($user->id);

            if ($user->hasRole('admin')) {
                // If the user is already on the dashboard route, proceed
                if (!$request->is('dashboard*')) {
                    return redirect()->route('dashboard');
                }
            } else {
                // If the user is already on the shared-with-me route, proceed
                if (!$request->is('item/shared-with-me')) {
                    return redirect()->route('item.sharedWithMe');
                }
            }
        } else {
            // For guests, redirect to login if not already on login
            if (!$request->is('login') && !$request->is('forgot-password') && !$request->is('reset-password/*')) {
                return redirect()->route('login');
            }
        }

        return $next($request);
    }
}
