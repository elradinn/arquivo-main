<?php

namespace App\Modules\Archive\Controllers;

use App\Modules\Archive\Models\ArchiveFrequency;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Modules\Common\Controllers\Controller;

class ArchiveFrequencyController extends Controller
{
    /**
     * Retrieve the current archive frequency.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getYears(): JsonResponse
    {
        $frequency = ArchiveFrequency::first();

        return response()->json([
            'years' => $frequency ? $frequency->years : null,
        ]);
    }

    /**
     * Update the archive frequency.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateYears(Request $request): RedirectResponse
    {
        $request->validate([
            'years' => 'required|integer|min:1',
        ]);

        $years = $request->input('years');

        $frequency = ArchiveFrequency::first();

        if ($frequency) {
            $frequency->update(['years' => $years]);
        } else {
            ArchiveFrequency::create(['years' => $years]);
        }

        return redirect()->back();
    }
}
