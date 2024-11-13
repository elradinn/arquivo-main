import React from 'react';
import { Head } from "@inertiajs/react";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { Group, Stack, Text } from "@mantine/core";
import { ItemIcon } from "@/Modules/Common/Components/ItemIcon/ItemIcon";
import { ItemContentsResourceData } from "@/Modules/Item/Types/ItemContentsResourceData";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";

interface SharedWithMeProps {
    sharedFolders: ItemContentsResourceData[];
}

const columns: DataTableColumn<ItemContentsResourceData>[] = [
    {
        accessor: "name",
        render: ({ mime, type, name, status, missing_required_metadata }) => (
            <Group align="center" gap={12}>
                <ItemIcon
                    mime={mime ?? ""}
                    isFolder={type === "folder"}
                    approvalStatus={status}
                    missingRequiredMetadata={missing_required_metadata}
                />
                <span>{name}</span>
            </Group>
        ),
    },
    {
        accessor: "updated_at",
        title: "Last Modified",
    },
    // Add more columns if necessary
];

const SharedWithMePage: React.FC<SharedWithMeProps> = ({ sharedFolders }) => {
    return (
        <Authenticated>
            <Head title="Shared with me" />
            <Stack px={8} gap={24} py={8}>
                <Text component="h2" size="xl" fw={600} color="gray.8">
                    Folders Shared With Me
                </Text>

                {sharedFolders.length > 0 ? (
                    <DataTable
                        textSelectionDisabled
                        columns={columns}
                        records={sharedFolders}
                        highlightOnHover
                        verticalSpacing="lg"
                        horizontalSpacing="xl"
                    />
                ) : (
                    <Text size="lg" color="gray.5">
                        No folders have been shared with you.
                    </Text>
                )}
            </Stack>
        </Authenticated>
    );
};

export default SharedWithMePage; 