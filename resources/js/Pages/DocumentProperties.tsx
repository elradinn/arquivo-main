import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
    Anchor,
    Box,
    Breadcrumbs,
    Button,
    FileButton,
    Grid,
    Group,
    Paper,
    Stack,
    Text,
} from "@mantine/core";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";
import {
    IconChevronRight,
    IconEye,
    IconFile,
    IconGitBranch,
    IconLock,
    IconPencil,
    IconShare,
    IconUpload,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { DocumentResourceData } from "@/Modules/Document/Types/DocumentResourceData";
import { ItemAncestorsResourceData } from "@/Modules/Item/Types/ItemAncestorsResourceData";
import ItemBreadcrumbs from "@/Modules/Item/Components/ItemBreadcrumbs";
import { ActivityLogResourceData } from "@/Modules/ActivityLog/Types/ActivityLogResourceData";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import CreateDocumentApprovalForm from "@/Modules/DocumentApproval/Components/CreateDocumentApprovalForm";
import ViewDocumentApprovalForm from "@/Modules/DocumentApproval/Components/ViewDocumentApprovalForm";
import DocumentVersionsDataTable from "@/Modules/Document/Components/DocumentVersionDataTable";
import { FileWithPath } from "@mantine/dropzone";
import useUploadDocumentVersion from "@/Modules/Document/Hooks/use-upload-document-version";
import ShareDocumentModalForm from "@/Modules/Document/Components/ShareDocumentModalForm";
import { ItemIcon } from "@/Modules/Common/Components/ItemIcon/ItemIcon";
import ViewDocumentReviewForm from "@/Modules/DocumentApproval/Components/ViewDocumentReviewForm";
import CreateDocumentReviewForm from "@/Modules/DocumentApproval/Components/CreateDocumentReviewForm";

interface IProps {
    document: DocumentResourceData;
    itemAncestors: ItemAncestorsResourceData[];
    activityLog: ActivityLogResourceData[];
    userRole: string | null;
}

const DocumentPropertiesPage: React.FC<IProps> = ({
    document,
    itemAncestors,
    activityLog,
    userRole,
}) => {
    const { openModal } = useModalStore();
    const { uploadVersion, processing, errors } = useUploadDocumentVersion(
        document.item_id
    );

    const handleFileUpload = (file: File | null) => {
        if (file) {
            uploadVersion(file as FileWithPath);
        }
    };

    const hasReviewal = document.document_approval_ids?.some(
        (approval) => approval.type === "reviewal"
    );
    const hasApproval = document.document_approval_ids?.some(
        (approval) => approval.type === "approval"
    );

    // Combine default metadata with custom metadata
    const defaultMetadata = [
        { name: "Date", value: document.created_at },
        { name: "Document Number", value: document.document_number },
    ];

    const combinedMetadata = [
        ...defaultMetadata,
        ...document.metadata.map((meta) => ({
            name: meta.name,
            value: meta.value || "N/A",
        })),
    ];

    return (
        <Authenticated>
            <Head title="Document Properties" />
            <Box px={8} py={8} mb={48}>
                <ItemBreadcrumbs ancestors={itemAncestors} />
            </Box>
            <Grid>
                <Grid.Col span={8}>
                    <Stack px={8} py={8} gap={48} mb={48}>
                        <Group>
                            <ItemIcon
                                mime={document.mime}
                                isFolder={false}
                                reviewStatus={document.review_status}
                                approvalStatus={document.approval_status}
                            />
                            <Text fw={500}>{document.name}</Text>
                        </Group>

                        {/* Combined Metadata */}
                        <Stack gap={12} mt={24}>
                            {combinedMetadata.length > 0 ? (
                                <Grid gutter="lg">
                                    {combinedMetadata.map((meta, index) => (
                                        <Grid.Col
                                            span={4}
                                            key={`${meta.name}-${index}`}
                                        >
                                            <Stack gap={4}>
                                                <Text size="sm" fw="bold">
                                                    {meta.name}
                                                </Text>
                                                <Text size="sm">
                                                    {meta.value}
                                                </Text>
                                            </Stack>
                                        </Grid.Col>
                                    ))}
                                </Grid>
                            ) : (
                                <Text size="sm" c="dimmed">
                                    No metadata available.
                                </Text>
                            )}
                        </Stack>

                        <Stack gap={12}>
                            {document.versions.length > 0 && (
                                <>
                                    <Text size="sm" fw="bold">
                                        Document Versions
                                    </Text>
                                    <DocumentVersionsDataTable
                                        versions={document.versions}
                                    />
                                </>
                            )}

                            <Text size="sm" fw="bold">
                                Audit Log
                            </Text>
                            <DataTable
                                textSelectionDisabled
                                columns={[
                                    { accessor: "date" },
                                    { accessor: "time" },
                                    { accessor: "user_name", title: "User" },
                                    {
                                        accessor: "description",
                                        title: "Action",
                                    },
                                ]}
                                records={activityLog}
                                highlightOnHover
                                verticalSpacing="lg"
                                horizontalSpacing="xl"
                                withTableBorder
                            />
                        </Stack>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={3} offset={1}>
                    <Paper withBorder p={20}>
                        <Text c="dimmed" fw={500}>
                            Options
                        </Text>

                        {(userRole === "editor" || userRole === "admin") && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconPencil size={18} />}
                                fullWidth
                                justify="left"
                                component={Link}
                                href={route("document.edit", {
                                    document: document.item_id,
                                })}
                            >
                                Edit Document
                            </Button>
                        )}

                        {(userRole === "editor" || userRole === "admin") && (
                            <FileButton onChange={handleFileUpload}>
                                {(props) => (
                                    <Button
                                        {...props}
                                        variant="subtle"
                                        color="blue.5"
                                        fullWidth
                                        justify="left"
                                        leftSection={<IconUpload size={18} />}
                                    >
                                        Upload New Version
                                    </Button>
                                )}
                            </FileButton>
                        )}

                        {(userRole === "editor" || userRole === "admin") && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconGitBranch size={18} />}
                                fullWidth
                                justify="left"
                                onClick={() => {
                                    openModal(
                                        hasReviewal
                                            ? "viewDocumentReview"
                                            : "createDocumentReview"
                                    );
                                }}
                            >
                                {hasReviewal ? "View" : "Start"} Review Process
                            </Button>
                        )}

                        {(userRole === "editor" || userRole === "admin") && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconGitBranch size={18} />}
                                fullWidth
                                justify="left"
                                onClick={() => {
                                    openModal(
                                        hasApproval
                                            ? "viewDocumentApproval"
                                            : "createDocumentApproval"
                                    );
                                }}
                            >
                                {hasApproval ? "View" : "Start"} Approval
                                Process
                            </Button>
                        )}

                        <Button
                            variant="subtle"
                            component="a"
                            href={route("document.view", {
                                document: document.item_id,
                            })}
                            target="_blank"
                            color="blue.5"
                            leftSection={<IconEye size={18} />}
                            justify="left"
                            fullWidth
                        >
                            View Document
                        </Button>

                        {(userRole === "editor" || userRole === "admin") && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconShare size={18} />}
                                fullWidth
                                justify="left"
                                onClick={() => openModal("shareDocument")}
                            >
                                Share Document
                            </Button>
                        )}
                    </Paper>
                </Grid.Col>
            </Grid>

            <CreateDocumentApprovalForm document={document} />
            <CreateDocumentReviewForm document={document} />
            <ViewDocumentApprovalForm document={document} />
            <ViewDocumentReviewForm document={document} />
            <ShareDocumentModalForm documentId={document.item_id} />
        </Authenticated>
    );
};

export default DocumentPropertiesPage;
