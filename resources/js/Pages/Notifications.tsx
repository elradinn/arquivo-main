import React from "react";
import { Head } from "@inertiajs/react";
import { Authenticated } from "@/Modules/Common/Layouts/AuthenticatedLayout/Authenticated";
import {
    Card,
    Group,
    Text,
    List,
    ScrollArea,
    Badge,
} from "@mantine/core";
import { NotificationResource } from "@/Modules/Notification/Data/NotificationResource";

interface NotificationsPageProps {
    notifications: NotificationResource[];
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({ notifications }) => {
    return (
        <Authenticated>
            <Head title="Notifications" />
            <Card shadow="sm" padding="lg" mt={20} mx={20}>
                <Text size="xl" mb="md">
                    Your Notifications
                </Text>

                {notifications.length === 0 ? (
                    <Group justify="center" mt="md">
                        <Text c="dimmed">You have no new notifications.</Text>
                    </Group>
                ) : (
                    <ScrollArea style={{ height: 500 }}>
                        <List spacing="sm" size="sm" center>
                            {notifications.map((notification) => (
                                <List.Item key={notification.id}>
                                    <Group gap="xs" mb="xs">
                                        <Text size="sm">
                                            {notification.message}
                                        </Text>
                                        <Badge color="blue" variant="light">
                                            {new Date(notification.date).toLocaleDateString()}
                                        </Badge>
                                    </Group>
                                    {notification.workflow_type && (
                                        <Text size="sm" c="gray.7">
                                            Workflow Type: {notification.workflow_type}
                                        </Text>
                                    )}
                                    {notification.document_id && (
                                        <Text size="sm" c="gray.7">
                                            Document ID: {notification.document_id}
                                        </Text>
                                    )}
                                    {notification.document_approval_id && (
                                        <Text size="sm" c="gray.7">
                                            Approval ID: {notification.document_approval_id}
                                        </Text>
                                    )}
                                </List.Item>
                            ))}
                        </List>
                    </ScrollArea>
                )}
            </Card>
        </Authenticated>
    );
};

export default NotificationsPage;