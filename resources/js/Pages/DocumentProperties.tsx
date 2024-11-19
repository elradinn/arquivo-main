import { Head, Link, router } from "@inertiajs/react";
import { Anchor, Box, Breadcrumbs, Button, FileButton, Grid, Group, Paper, Stack, Text } from "@mantine/core";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";
import {
    IconChevronRight,
    IconEye,
    IconFile,
    IconGitBranch,
    IconLock,
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

interface IProps {
    document: DocumentResourceData;
    itemAncestors: ItemAncestorsResourceData[];
    activityLog: ActivityLogResourceData[];
    userRole: string | null;
}

const DocumentPropertiesPage: React.FC<IProps> = ({ document, itemAncestors, activityLog, userRole }) => {
    const { openModal } = useModalStore();
    const { uploadVersion, processing, errors } = useUploadDocumentVersion(document.item_id);

    const handleFileUpload = (file: File | null) => {
        if (file) {
            uploadVersion(file as FileWithPath);
        }
    };

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
                            <ItemIcon mime={document.mime} isFolder={false} approvalStatus={document.status} />
                            <Text fw={500}>{document.name}</Text>
                        </Group>

                        <Group justify="space-between" w={700}>
                            <div>
                                <Text size="sm" fw="bold">
                                    Document ID
                                </Text>
                                <Text size="sm">{document.item_id}</Text>
                            </div>
                            <div>
                                <Text size="sm" fw="bold">
                                    Date
                                </Text>
                                <Text size="sm">{document.created_at}</Text>
                            </div>
                            <div>
                                <Text size="sm" fw="bold">
                                    Document Number
                                </Text>
                                <Text size="sm">{document.document_number}</Text>
                            </div>
                        </Group>

                        <Stack gap={12}>
                            {document.versions.length > 0 && (
                                <>
                                    <Text size="sm" fw="bold">
                                        Document Versions
                                    </Text>
                                    <DocumentVersionsDataTable versions={document.versions} />
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
                                    { accessor: "description", title: "Action" },
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

                        {(userRole === 'editor' || userRole === 'admin') && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconShare size={18} />}
                                fullWidth
                                justify="left"
                                component={Link}
                                href={route('document.edit', { document: document.item_id })}
                            >
                                Edit Document
                            </Button>
                        )}

                        {(userRole === 'editor' || userRole === 'admin') && (
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

                        {(userRole === 'editor' || userRole === 'admin') && (
                            <Button
                                variant="subtle"
                                color="blue.5"
                                leftSection={<IconGitBranch size={18} />}
                                fullWidth
                                justify="left"
                                onClick={() => {
                                    openModal(document.document_approval_id ? "viewDocumentApproval" : "createDocumentApproval");
                                }}
                            >
                                {document.document_approval_id ? "View" : "Start"} Approval Process
                            </Button>
                        )}

                        <Button
                            variant="subtle"
                            component="a"
                            href={route('document.view', { document: document.item_id })}
                            target="_blank"
                            color="blue.5"
                            leftSection={<IconEye size={18} />}
                            justify="left"
                            fullWidth
                        >
                            View Document
                        </Button>

                        {(userRole === 'editor' || userRole === 'admin') && (
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
            <ViewDocumentApprovalForm document={document} />
            <ShareDocumentModalForm documentId={document.item_id} />
        </Authenticated>
    );
}

export default DocumentPropertiesPage;
