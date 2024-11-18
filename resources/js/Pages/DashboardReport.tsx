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
} from "@mantine/core";
import { IconDownload, IconTable } from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";
import { useSearchDataTable } from "@/Modules/Common/Hooks/use-search-datatable";
import { usePaginateDataTable } from "@/Modules/Common/Hooks/use-paginate-datatable";
import useGenerateReport from "@/Modules/Reports/Hooks/use-generate-dashboard-report";
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
}

export default function DashboardReportPage({
    documents,
    filters,
    selectedMetadata,
    availableMetadata,
    existingMetadataIds,
}: DashboardReportProps) {
    const [documentStatus, setDocumentStatus] = useState<string | null>(filters.document_status);
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
        filters.start_date ? new Date(filters.start_date) : null,
        filters.end_date ? new Date(filters.end_date) : null,
    ]);

    const { openDocument } = useDocumentProperties();

    const { search, setSearch, handleSearch } = useSearchDataTable("", `/dashboard/reports`);
    const { page, setPage, handlePageChange } = usePaginateDataTable(documents.current_page);

    const { generateDashboardReport } = useGenerateReport();

    const { openModal } = useModalStore();

    const handleFilter = (updatedFilters: { document_status?: string | null; start_date?: string | null; end_date?: string | null }) => {
        const query: any = { ...updatedFilters };

        // Navigate with Inertia to apply filters
        router.get(route("dashboard.reports"), query, { replace: true, preserveState: true });
    };

    const handleDocumentStatusChange = (value: string | null) => {
        setDocumentStatus(value);
        handleFilter({ document_status: value });
    };

    const handleDateRangeChange = (value: [Date | null, Date | null]) => {
        setDateRange(value);
        handleFilter({
            start_date: value[0] ? value[0].toISOString().split('T')[0] : null,
            end_date: value[1] ? value[1].toISOString().split('T')[0] : null,
        });
    };

    const handleGenerateReport = () => {
        const payload = {
            document_status: documentStatus,
            start_date: dateRange[0] ? dateRange[0].toISOString().split('T')[0] : null,
            end_date: dateRange[1] ? dateRange[1].toISOString().split('T')[0] : null,
            metadata_ids: existingMetadataIds,
        };

        generateDashboardReport(payload);
    };

    return (
        <Authenticated>
            <Head title="Dashboard Report" />
            <Stack px={8} gap={24} py={8}>
                <Group>
                    <Text component="h2" size="xl" fw={600} c="gray.8">
                        Dashboard Report
                    </Text>
                </Group>

                <Stack>
                    {/* Filter Options */}
                    <Group justify="space-between">
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
                                    { value: "reviewal_accepted", label: "Review Accepted" },
                                    { value: "reviewal_rejected", label: "Review Rejected" },
                                    { value: "reviewal_pending", label: "Review Pending" },
                                    { value: "approval_accepted", label: "Approval Accepted" },
                                    { value: "approval_rejected", label: "Approval Rejected" },
                                    { value: "approval_pending", label: "Approval Pending" },
                                ]}
                                style={{ width: 200 }}
                            />

                            <DatePickerInput
                                type="range"
                                placeholder="Select date range"
                                value={dateRange}
                                onChange={handleDateRangeChange}
                                style={{ width: 300 }}
                            />

                            <Button
                                onClick={() => openModal("selectDashboardMetadataColumns")}
                                leftSection={<IconTable size={16} />}
                                variant="subtle"
                                color="dark.5"
                            >
                                Columns
                            </Button>
                        </Flex>

                        {/* Generate Report Button */}
                        <Button onClick={handleGenerateReport} leftSection={<IconDownload size={16} />} color="blue" variant="subtle">
                            Generate Report
                        </Button>
                    </Group>

                    {/* Existing SelectMetadataColumnForm */}
                    <SelectDashboardMetadataColumnForm
                        availableMetadata={availableMetadata}
                        existingMetadataIds={existingMetadataIds}
                    />

                    {/* Documents Table */}
                    <DataTable
                        columns={[
                            {
                                accessor: "name",
                                render: ({ mime, type, name, missing_required_metadata }) => (
                                    <Group align="center" gap={12}>
                                        <ItemIcon
                                            mime={mime ?? ""}
                                            isFolder={type === "folder"}
                                            missingRequiredMetadata={missing_required_metadata}
                                        />
                                        <span>{name}</span>
                                    </Group>
                                ),
                            },
                            { accessor: "updated_at", title: "Last Modified" },
                            {
                                accessor: "status",
                                render: ({ status }) => <StateBadge state={status} />,
                            },
                            {
                                accessor: "due_in",
                                title: "Due in",
                                render: ({ due_in }) => {
                                    return due_in !== undefined && due_in !== null ? (
                                        due_in < 0 ? (
                                            <Text c="red" size="sm">{Math.abs(due_in)} days overdue</Text>
                                        ) : (
                                            <Text size="sm">{`${due_in} day${due_in !== 1 ? 's' : ''} remaining`}</Text>
                                        )
                                    ) : (
                                        "Deadline not set"
                                    );
                                },
                            },
                            // Dynamic columns based on selected metadata
                            ...selectedMetadata.map((meta) => ({
                                accessor: `metadata_${meta.metadata_id}`,
                                title: meta.name,
                                render: (record: ItemContentsResourceData) => {
                                    const metaValue = record.metadata?.find((m) => m.metadata_id === meta.metadata_id);
                                    return metaValue ? metaValue.value : "N/A";
                                },
                            })),
                        ]}
                        records={documents.data}
                        totalRecords={documents.total}
                        recordsPerPage={documents.per_page}
                        page={page}
                        onPageChange={() => { }}
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
