import React from "react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import {
    Button,
    Group,
    Select,
    Stack,
    Text,
    Flex,
    TextInput,
} from "@mantine/core";
import {
    IconDownload,
    IconSearch,
    IconTable,
    IconFilter,
} from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";
import { useSearchDataTable } from "@/Modules/Common/Hooks/use-search-datatable";
import { usePaginateDataTable } from "@/Modules/Common/Hooks/use-paginate-datatable";
import useGenerateDashboardReport from "@/Modules/Reports/Hooks/use-generate-dashboard-report";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { PaginationData } from "@/Modules/Common/Types/CommonPageTypes";
import { MetadataResourceData } from "@/Modules/Metadata/Types/MetadataResourceData";
import SelectDashboardMetadataColumnForm from "@/Modules/Dashboard/Components/SelectDashboardMetadataColumnForm";
import { DashboardMetadataResourceData } from "@/Modules/Dashboard/Types/DashboardMetadataResourceData";
import { ItemContentsResourceData } from "@/Modules/Item/Types/ItemContentsResourceData";
import { DatePickerInput } from "@mantine/dates";
import { ItemIcon } from "@/Modules/Common/Components/ItemIcon/ItemIcon";
import StateBadge from "@/Modules/Common/Components/StateBadge/StateBadge";
import { useDocumentProperties } from "@/Modules/Item/Hooks/use-document-properties";

interface DashboardReportProps {
    documents: PaginationData<ItemContentsResourceData>;
    filters: {
        document_status: string | null;
        start_date: string | null;
        end_date: string | null;
    };
    selectedMetadata: MetadataResourceData[];
    availableMetadata: DashboardMetadataResourceData[];
    existingMetadataIds: number[];
    users: { id: number; name: string }[];
}

export default function DashboardReportPage({
    documents,
    filters,
    selectedMetadata,
    availableMetadata,
    existingMetadataIds,
    users,
}: DashboardReportProps) {
    const [documentStatus, setDocumentStatus] = useState<string | null>(
        filters.document_status
    );
    const [startDate, setStartDate] = useState<Date | null>(
        filters.start_date ? new Date(filters.start_date) : null
    );
    const [endDate, setEndDate] = useState<Date | null>(
        filters.end_date ? new Date(filters.end_date) : null
    );
    const [uploader, setUploader] = useState<string | null>(null);
    const [dueIn, setDueIn] = useState<string | null>(null);

    const { openDocument } = useDocumentProperties();

    const { search, setSearch, handleSearch } = useSearchDataTable(
        "",
        `/dashboard/reports`
    );
    const { page, setPage, handlePageChange } = usePaginateDataTable(
        documents.current_page
    );

    const { generateDashboardReport } = useGenerateDashboardReport();

    const { openModal } = useModalStore();

    /**
     * Consolidated handleFilter function that merges all active filters.
     */
    const handleFilter = (
        updatedFilters: Partial<{
            document_status: string | null;
            start_date: string | null;
            end_date: string | null;
            uploader: string | null;
            due_in: string | null;
            search: string;
            page: number;
        }>
    ) => {
        const query: any = {
            document_status: documentStatus,
            start_date: startDate
                ? startDate.toISOString().split("T")[0]
                : null,
            end_date: endDate ? endDate.toISOString().split("T")[0] : null,
            uploader: uploader || undefined,
            due_in: dueIn || undefined,
            page: page || undefined,
            ...updatedFilters, // Override with any updated filters
        };

        // Remove null or undefined query parameters
        Object.keys(query).forEach((key) => {
            if (query[key] === null || query[key] === undefined) {
                delete query[key];
            }
        });

        // Navigate with Inertia to apply filters
        router.get(route("dashboard.reports"), query, {
            replace: true,
            preserveState: true,
        });
    };

    const handleDocumentStatusChange = (value: string | null) => {
        setDocumentStatus(value);
        handleFilter({ document_status: value, page: 1 }); // Reset to first page on filter change
    };

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
        handleFilter({
            start_date: date ? date.toISOString().split("T")[0] : null,
            page: 1, // Reset to first page on filter change
        });
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
        handleFilter({
            end_date: date ? date.toISOString().split("T")[0] : null,
            page: 1, // Reset to first page on filter change
        });
    };

    const handleUploaderChange = (value: string | null) => {
        setUploader(value);
        handleFilter({ uploader: value, page: 1 });
    };

    const handleDueInChange = (value: string | null) => {
        setDueIn(value);
        handleFilter({ due_in: value, page: 1 });
    };

    const handlePageChangeInternal = (newPage: number) => {
        setPage(newPage);
        handleFilter({ page: newPage });
    };

    const handleGenerateReport = () => {
        const payload = {
            document_status: documentStatus,
            start_date: startDate
                ? startDate.toISOString().split("T")[0]
                : null,
            end_date: endDate ? endDate.toISOString().split("T")[0] : null,
            uploader: uploader,
            due_in: dueIn,
            metadata_ids: existingMetadataIds,
        };

        generateDashboardReport(payload);
    };

    /**
     * Handle clearing all filters.
     */
    const handleClearFilters = () => {
        setDocumentStatus(null);
        setStartDate(null);
        setEndDate(null);
        setUploader(null);
        setDueIn(null);
        setSearch("");
        handleFilter({
            document_status: null,
            start_date: null,
            end_date: null,
            uploader: null,
            due_in: null,
        });
    };

    /**
     * Function to render dynamic columns with special handling for 'status' and 'due_in'.
     */
    const renderDynamicColumns =
        (): DataTableColumn<ItemContentsResourceData>[] => {
            return selectedMetadata.map((meta) => {
                // Check if the metadata corresponds to 'review status'
                if (meta.name.toLowerCase() === "review status") {
                    return {
                        accessor: `review_status`,
                        title: "Review Status",
                        render: ({ review_status }) => (
                            <StateBadge state={review_status} />
                        ),
                    };
                }

                // Check if the metadata corresponds to 'approval status'
                if (meta.name.toLowerCase() === "approval status") {
                    return {
                        accessor: `approval_status`,
                        title: "Approval Status",
                        render: ({ approval_status }) => (
                            <StateBadge state={approval_status} />
                        ),
                    };
                }

                // Check if the metadata corresponds to 'due_in'
                if (meta.name.toLowerCase() === "due_in") {
                    return {
                        accessor: `due_in`,
                        title: "Due in",
                        render: ({ due_in }) => {
                            return due_in !== undefined && due_in !== null ? (
                                due_in < 0 ? (
                                    <Text color="red" size="sm">
                                        {Math.abs(due_in)} days overdue
                                    </Text>
                                ) : (
                                    <Text size="sm">{`${due_in} day${
                                        due_in !== 1 ? "s" : ""
                                    } remaining`}</Text>
                                )
                            ) : (
                                "Deadline not set"
                            );
                        },
                    };
                }

                // Default rendering for other metadata columns
                return {
                    accessor: `metadata_${meta.metadata_id}`,
                    title: meta.name,
                    render: (record: ItemContentsResourceData) => {
                        const metaValue = record.metadata?.find(
                            (m) => m.metadata_id === meta.metadata_id
                        );
                        return metaValue ? metaValue.value : "N/A";
                    },
                };
            });
        };

    return (
        <Authenticated>
            <Head title="Dashboard Report" />
            <Stack px={8} gap={24} py={8}>
                <Group>
                    <Text component="h2" size="xl" color="gray.8">
                        Dashboard Report
                    </Text>
                </Group>

                <Stack>
                    {/* Filter Options */}
                    <Group align="flex-end">
                        <Flex
                            gap="md"
                            justify="flex-start"
                            align="flex-end"
                            direction="row"
                            wrap="wrap"
                        >
                            <Select
                                placeholder="Select document status"
                                value={documentStatus}
                                onChange={handleDocumentStatusChange}
                                data={[
                                    {
                                        value: "reviewal_accepted",
                                        label: "Review Accepted",
                                    },
                                    {
                                        value: "reviewal_rejected",
                                        label: "Review Rejected",
                                    },
                                    {
                                        value: "reviewal_pending",
                                        label: "Review Pending",
                                    },
                                    {
                                        value: "approval_accepted",
                                        label: "Approval Accepted",
                                    },
                                    {
                                        value: "approval_rejected",
                                        label: "Approval Rejected",
                                    },
                                    {
                                        value: "approval_pending",
                                        label: "Approval Pending",
                                    },
                                ]}
                                style={{ width: 200 }}
                            />

                            <Select
                                placeholder="Select uploader"
                                value={uploader}
                                onChange={handleUploaderChange}
                                data={users.map((user) => ({
                                    value: user.id.toString(),
                                    label: user.name,
                                }))}
                                style={{ width: 200 }}
                            />

                            <Select
                                placeholder="Select due in"
                                value={dueIn}
                                onChange={handleDueInChange}
                                data={[
                                    { value: "7", label: "Due in 7 days" },
                                    { value: "30", label: "Due in 30 days" },
                                    { value: "60", label: "Due in 60 days" },
                                ]}
                                style={{ width: 200 }}
                            />

                            <DatePickerInput
                                placeholder="Start Date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                style={{ width: 200 }}
                                required
                            />

                            <DatePickerInput
                                placeholder="End Date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                style={{ width: 200 }}
                                required
                            />

                            <Button
                                onClick={() =>
                                    openModal("selectDashboardMetadataColumns")
                                }
                                leftSection={<IconTable size={16} />}
                                variant="subtle"
                                color="dark.5"
                            >
                                Columns
                            </Button>
                        </Flex>

                        <Flex gap="sm">
                            {/* Clear Filters Button */}
                            <Button
                                onClick={handleClearFilters}
                                variant="subtle"
                                color="gray"
                                leftSection={<IconFilter size={16} />}
                            >
                                Clear Filters
                            </Button>

                            {/* Generate Report Button */}
                            <Button
                                onClick={handleGenerateReport}
                                leftSection={<IconDownload size={16} />}
                                color="blue"
                                variant="subtle"
                            >
                                Generate Report
                            </Button>
                        </Flex>
                    </Group>

                    {/* Select Dashboard Metadata Columns Modal */}
                    <SelectDashboardMetadataColumnForm
                        availableMetadata={availableMetadata}
                        existingMetadataIds={existingMetadataIds}
                    />

                    {/* Documents Table */}
                    <DataTable
                        columns={[
                            {
                                accessor: "name",
                                render: ({
                                    mime,
                                    type,
                                    name,
                                    missing_required_metadata,
                                }) => (
                                    <Group align="center" gap={12}>
                                        <ItemIcon
                                            mime={mime ?? ""}
                                            isFolder={type === "folder"}
                                            missingRequiredMetadata={
                                                missing_required_metadata
                                            }
                                        />
                                        <span>{name}</span>
                                    </Group>
                                ),
                            },
                            { accessor: "updated_at", title: "Last Modified" },
                            // Dynamic columns including 'status' and 'due_in'
                            ...renderDynamicColumns(),
                        ]}
                        records={documents.data}
                        totalRecords={documents.total}
                        recordsPerPage={documents.per_page}
                        page={page}
                        onPageChange={handlePageChangeInternal}
                        highlightOnHover
                        verticalSpacing="lg"
                        horizontalSpacing="xl"
                        customRowAttributes={({ type, id }) => ({
                            onDoubleClick: (e: MouseEvent) => {
                                if (e.button === 0) {
                                    openDocument(id);
                                }
                            },
                        })}
                    />
                </Stack>
            </Stack>
        </Authenticated>
    );
}
