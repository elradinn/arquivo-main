<?php

namespace Modules\Dashboard\Controllers;

use Modules\Dashboard\Data\DashboardMetadataResourceData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Common\Controllers\Controller;
use Modules\Dashboard\Actions\SelectDashboardReportMetadataColumnAction;
use Modules\Dashboard\Data\DashboardResource;
use Modules\Dashboard\Data\RecentlyUploadedDocumentResource;
use Modules\Dashboard\Data\SelectDashboardMetadataColumnData;
use Modules\Metadata\Models\Metadata;
use Modules\Document\Models\Document;
use Modules\Dashboard\Helpers\DocumentStatusHelper;
use Modules\Document\Data\DocumentResourceData;
use Modules\Item\Data\ItemContentsResourceData;
use Modules\Item\Models\Item;
use Modules\Dashboard\Authorization\DashboardAuthorization;
use Modules\User\Models\User;

class DashboardController extends Controller
{
    public function __construct(
        protected SelectDashboardReportMetadataColumnAction $selectDashboardReportMetadataColumnAction,
        protected DashboardAuthorization $dashboardAuthorization
    ) {}

    public function dashboard(): Response
    {
        // Enforce admin authorization
        $user = Auth::user();
        $user = User::find($user->id);
        $this->dashboardAuthorization->isAdmin($user);

        // Define the statuses to count
        $reviewStatuses = [
            'reviewal_pending',
            'reviewal_accepted',
            'reviewal_rejected',
        ];

        $approvalStatuses = [
            'approval_pending',
            'approval_accepted',
            'approval_rejected',
        ];

        // Initialize arrays to hold counts
        $reviewStatusCounts = [];
        $approvalStatusCounts = [];

        // Count review statuses
        foreach ($reviewStatuses as $statusKey) {
            $statusClass = DocumentStatusHelper::getStatusClass($statusKey);
            if ($statusClass) {
                $count = Document::where('review_status', $statusClass)
                    ->whereHas('item', function ($query) use ($user) {
                        if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                            $query->where(function ($q) use ($user) {
                                $q->whereHas('document.userAccess', function ($q2) use ($user) {
                                    $q2->where('user_id', $user->id);
                                });
                            });
                        }
                    })
                    ->count();
                $reviewStatusCounts[$statusKey] = $count;
            } else {
                $reviewStatusCounts[$statusKey] = 0;
            }
        }

        // Count approval statuses
        foreach ($approvalStatuses as $statusKey) {
            $statusClass = DocumentStatusHelper::getStatusClass($statusKey);
            if ($statusClass) {
                $count = Document::where('approval_status', $statusClass)
                    ->whereHas('item', function ($query) use ($user) {
                        if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                            $query->where(function ($q) use ($user) {
                                $q->whereHas('document.userAccess', function ($q2) use ($user) {
                                    $q2->where('user_id', $user->id);
                                });
                            });
                        }
                    })
                    ->count();
                $approvalStatusCounts[$statusKey] = $count;
            } else {
                $approvalStatusCounts[$statusKey] = 0;
            }
        }

        // Fetch recently uploaded documents, ensuring associated Items are not soft-deleted and user has access
        $recently_uploaded_documents = Document::whereHas('item', function ($query) use ($user) {
            if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                $query->where(function ($q) use ($user) {
                    $q->whereHas('document.userAccess', function ($q2) use ($user) {
                        $q2->where('user_id', $user->id);
                    });
                });
            }
        })
            ->orderBy('updated_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($doc) {
                return new RecentlyUploadedDocumentResource(
                    id: $doc->item_id,
                    name: $doc->name,
                    review_status: $doc->review_status ? $doc->review_status->label() : null,
                    approval_status: $doc->approval_status ? $doc->approval_status->label() : null,
                    date_uploaded: $doc->updated_at->format('Y-m-d H:i:s'),
                    mime: $doc->mime
                );
            })
            ->toArray();

        // Create DashboardResource instance
        $dashboardData = new DashboardResource(
            number_of_review_pending: $reviewStatusCounts['reviewal_pending'],
            number_of_review_accepted: $reviewStatusCounts['reviewal_accepted'],
            number_of_review_rejected: $reviewStatusCounts['reviewal_rejected'],
            number_of_approval_pending: $approvalStatusCounts['approval_pending'],
            number_of_approval_accepted: $approvalStatusCounts['approval_accepted'],
            number_of_approval_rejected: $approvalStatusCounts['approval_rejected'],
            number_of_documents: Document::whereHas('item', function ($query) use ($user) {
                if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                    $query->where(function ($q) use ($user) {
                        $q->whereHas('document.userAccess', function ($q2) use ($user) {
                            $q2->where('user_id', $user->id);
                        });
                    });
                }
            })
                ->count(),
            recently_uploaded_documents: $recently_uploaded_documents
        );

        // Fetch all users for the uploader filter
        $users = $user->hasRole('admin')
            ? User::select('id', 'name')->get()
            : collect([]);

        return Inertia::render('Dashboard', [
            'dashboard' => $dashboardData,
            'users' => $users,
        ]);
    }

    /**
     * Display the Dashboard Report page.
     *
     * @param Request $request
     * @return Response
     */
    public function showDashboardReport(Request $request)
    {
        $user = Auth::user();
        $user = User::find($user->id);
        $this->dashboardAuthorization->isAdmin($user);

        // Extract filters from query parameters
        $documentStatus = $request->query('document_status'); // e.g., reviewal_pending, approval_accepted, etc.
        $startDate = $request->query('start_date');
        $endDate = $request->query('end_date');
        $uploader = $request->query('uploader');
        $dueIn = $request->query('due_in');

        // Get selected metadata columns from the dashboard_report_metadata_columns table
        $selectedMetadataIds = DB::table('dashboard_report_metadata_columns')->pluck('metadata_id')->toArray();
        $selectedMetadata = Metadata::whereIn('id', $selectedMetadataIds)->get();

        // Get all available metadata
        $availableMetadata = Metadata::all();

        // Get all users for the uploader filter
        $users = $user->hasRole('admin')
            ? User::select('id', 'name')->get()
            : collect([]);

        // Query documents based on filters, ensuring associated Items are not soft-deleted and user has access
        $documentsQuery = Item::with('document')
            ->whereHas('document', function ($query) use ($user) {
                if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                    $query->where(function ($q) use ($user) {
                        $q->whereHas('document.userAccess', function ($q2) use ($user) {
                            $q2->where('user_id', $user->id);
                        });
                    });
                }
            })
            ->whereNull('deleted_at'); // Ensure Item is not soft-deleted

        // Apply document status filter
        if ($documentStatus) {
            $statusClass = DocumentStatusHelper::getStatusClass($documentStatus);
            if ($statusClass) {
                $documentsQuery->whereHas('document', function ($query) use ($statusClass, $user) {
                    if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                        $query->where(function ($q) use ($statusClass, $user) {
                            $q->where('review_status', $statusClass)
                                ->orWhere('approval_status', $statusClass)
                                ->where(function ($q2) use ($user) {
                                    $q2->whereHas('document.userAccess', function ($q3) use ($user) {
                                        $q3->where('user_id', $user->id);
                                    });
                                });
                        });
                    } else {
                        $query->where(function ($q) use ($statusClass) {
                            $q->where('review_status', $statusClass)
                                ->orWhere('approval_status', $statusClass);
                        });
                    }
                });
            }
        }

        // Apply uploader filter
        if ($uploader) {
            $documentsQuery->whereHas('document', function ($query) use ($uploader, $user) {
                $query->where('owned_by', $uploader);
                if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                    $query->where(function ($q) use ($user) {
                        $q->whereHas('document.userAccess', function ($q2) use ($user) {
                            $q2->where('user_id', $user->id);
                        });
                    });
                }
            });
        }

        // Apply due_in filter
        if ($dueIn) {
            $dueDays = intval($dueIn);
            $currentDate = now();
            $documentsQuery->whereHas('document', function ($query) use ($dueDays, $currentDate, $user) {
                $query->whereDate('due_date', '<=', $currentDate->copy()->addDays($dueDays));
                if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                    $query->where(function ($q) use ($user) {
                        $q->whereHas('document.userAccess', function ($q2) use ($user) {
                            $q2->where('user_id', $user->id);
                        });
                    });
                }
            });
        }

        // Apply date range filter
        if ($startDate && $endDate) {
            $documentsQuery->whereHas('document', function ($query) use ($startDate, $endDate, $user) {
                $query->whereBetween('updated_at', [$startDate, $endDate]);
                if (!$user->hasRole('admin') && !$user->hasRole('viewer')) {
                    $query->where(function ($q) use ($user) {
                        $q->whereHas('document.userAccess', function ($q2) use ($user) {
                            $q2->where('user_id', $user->id);
                        });
                    });
                }
            });
        }

        // Paginate results
        $documents = $documentsQuery->paginate(15)->withQueryString();

        // Pass data to Inertia
        return Inertia::render('DashboardReport', [
            'documents' => ItemContentsResourceData::collect($documents),
            'filters' => [
                'document_status' => $documentStatus,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'uploader' => $uploader,
                'due_in' => $dueIn,
            ],
            'selectedMetadata' => DashboardMetadataResourceData::collect($selectedMetadata),
            'availableMetadata' => DashboardMetadataResourceData::collect($availableMetadata),
            'existingMetadataIds' => $selectedMetadataIds,
            'users' => $users, // Pass users to the frontend
        ]);
    }

    public function selectDashboardMetadataColumn(SelectDashboardMetadataColumnData $data)
    {
        $this->selectDashboardReportMetadataColumnAction->execute($data);

        return redirect()->back();
    }
}
