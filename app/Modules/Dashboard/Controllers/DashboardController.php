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

class DashboardController extends Controller
{
    public function __construct(
        protected SelectDashboardReportMetadataColumnAction $selectDashboardReportMetadataColumnAction,
        protected DashboardAuthorization $dashboardAuthorization
    ) {}

    public function dashboard(): Response
    {
        // Enforce admin authorization
        $this->dashboardAuthorization->isAdmin(Auth::user());

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
                    ->whereHas('item')
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
                    ->whereHas('item')
                    ->count();
                $approvalStatusCounts[$statusKey] = $count;
            } else {
                $approvalStatusCounts[$statusKey] = 0;
            }
        }

        // Fetch recently uploaded documents, ensuring associated Items are not soft-deleted
        $recently_uploaded_documents = Document::whereHas('item')
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
            number_of_documents: Document::whereHas('item')->count(),
            recently_uploaded_documents: $recently_uploaded_documents
        );

        return Inertia::render('Dashboard', [
            'dashboard' => $dashboardData,
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
        // Extract filters from query parameters
        $documentStatus = $request->query('document_status'); // e.g., reviewal_pending, approval_accepted, etc.
        $startDate = $request->query('start_date');
        $endDate = $request->query('end_date');

        // Get selected metadata columns from the dashboard_report_metadata_columns table
        $selectedMetadataIds = DB::table('dashboard_report_metadata_columns')->pluck('metadata_id')->toArray();
        $selectedMetadata = Metadata::whereIn('id', $selectedMetadataIds)->get();

        // Get all available metadata
        $availableMetadata = Metadata::all();

        // Query documents based on filters, ensuring associated Items are not soft-deleted
        $documentsQuery = Item::with('document')
            ->whereHas('document')
            ->whereNull('deleted_at'); // Ensure Item is not soft-deleted

        // Apply document status filter
        if ($documentStatus) {
            $statusClass = DocumentStatusHelper::getStatusClass($documentStatus);
            if ($statusClass) {
                $documentsQuery->whereHas('document', function ($query) use ($statusClass) {
                    $query->where(function ($query) use ($statusClass) {
                        $query->where('review_status', $statusClass)
                            ->orWhere('approval_status', $statusClass);
                    });
                });
            }
        }

        // Apply date range filter
        if ($startDate && $endDate) {
            $documentsQuery->whereHas('document', function ($query) use ($startDate, $endDate) {
                $query->whereBetween('updated_at', [$startDate, $endDate]);
            });
        }

        // The metadata filtering section has been removed

        // Paginate results
        $documents = $documentsQuery->paginate(15);

        // Pass data to Inertia
        return Inertia::render('DashboardReport', [
            'documents' => ItemContentsResourceData::collect($documents),
            'filters' => [
                'document_status' => $documentStatus,
                'start_date' => $startDate,
                'end_date' => $endDate,
            ],
            'selectedMetadata' => DashboardMetadataResourceData::collect($selectedMetadata),
            'availableMetadata' => DashboardMetadataResourceData::collect($availableMetadata),
            'existingMetadataIds' => $selectedMetadataIds,
        ]);
    }

    public function selectDashboardMetadataColumn(SelectDashboardMetadataColumnData $data)
    {
        $this->selectDashboardReportMetadataColumnAction->execute($data);

        return redirect()->back();
    }
}
