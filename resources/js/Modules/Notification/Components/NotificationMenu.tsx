import React, { useEffect, useState } from 'react';
import { ActionIcon, Badge, Group, Menu, Text, ScrollArea, Avatar, Indicator, Stack, Divider } from '@mantine/core';
import { IconBell, IconFileTypePdf, IconDownload } from '@tabler/icons-react';
import { DocumentApprovalResourceData } from '@/Modules/DocumentApproval/Types/DocumentApprovalResourceData';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import { ItemIcon } from "@/Modules/Common/Components/ItemIcon/ItemIcon";

interface NotificationMenuProps {
    handleDocumentAction?: (action: "accept" | "reject") => void;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({ handleDocumentAction }) => {
    const [pendingApprovals, setPendingApprovals] = useState<DocumentApprovalResourceData[]>([]);

    useEffect(() => {
        fetchPendingApprovals();
    }, [handleDocumentAction]);

    const fetchPendingApprovals = async () => {
        try {
            const response = await axios.get(route('document_approvals.pending'));
            setPendingApprovals(response.data.pending_approvals);
        } catch (error) {
            console.error('Error fetching pending approvals:', error);
        }
    };

    return (
        <Menu
            width={300}
            position="bottom-end"
            shadow="md"
        >
            <Menu.Target>
                <Indicator
                    processing
                    inline
                    disabled={pendingApprovals.length === 0}
                    color="red"
                >
                    <ActionIcon variant="subtle" color="gray" size="lg">
                        <IconBell size={24} />
                    </ActionIcon>
                </Indicator>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Pending Approvals</Menu.Label>
                {pendingApprovals.length === 0 ? (
                    <Menu.Item disabled>No pending approvals.</Menu.Item>
                ) : (
                    <ScrollArea style={{ height: 200 }}>
                        {pendingApprovals.map(approval => (
                            <>
                                <Menu.Item py={16} key={approval.id} component={Link} href={`/document_approval/${approval.id}`}>
                                    <Group gap={12}>
                                        <ItemIcon mime={"application/pdf"} isFolder={false} />
                                        <Text size="sm">{approval.document_name.slice(0, 20) + "..."}</Text>
                                    </Group>
                                </Menu.Item>

                                <Divider />
                            </>
                        ))}
                    </ScrollArea>
                )}
            </Menu.Dropdown>
        </Menu>
    );
};

export default NotificationMenu;