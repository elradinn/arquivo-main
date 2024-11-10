import React from "react";
import {
    Menu,
    ActionIcon,
    Indicator,
    List,
    Text,
    Loader,
} from "@mantine/core";
import { IconBell, IconInbox } from "@tabler/icons-react";
import { useRetrieveNotification } from "../Hooks/use-retrieve-notification";

const NotificationMenu: React.FC = () => {
    const { notifications, loading, error } = useRetrieveNotification();

    return (
        <Menu width={300} position="bottom-end">
            <Menu.Target>
                <ActionIcon variant="subtle" color="gray" size="xl">
                    <Indicator
                        processing
                        inline
                        disabled={notifications.length === 0}
                        color="red"
                    >
                        <IconBell size={24} />
                    </Indicator>
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                {loading ? (
                    <Loader size="sm" />
                ) : error ? (
                    <Text c="red">{error}</Text>
                ) : notifications.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "1rem" }}>
                        <IconInbox size={24} />
                        <Text>No notifications</Text>
                    </div>
                ) : (
                    <List spacing="sm" size="sm" center>
                        {notifications.map((notification) => (
                            <List.Item key={notification.id}>
                                <Text size="sm">{notification.message}</Text>
                                <Text size="xs" c="dimmed">
                                    {new Date(notification.date).toLocaleString()}
                                </Text>
                            </List.Item>
                        ))}
                    </List>
                )}
            </Menu.Dropdown>
        </Menu>
    );
};

export default NotificationMenu;