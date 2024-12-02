import { Card, Group, Text, Loader } from "@mantine/core";
import { IconFileZip } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { useState } from "react";

const BackupButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleBackup = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(route("backup.all"));
            const { url, message } = response.data;

            notifications.show({
                message: message,
                color: "green",
            });

            // Trigger download
            const link = document.createElement("a");
            link.href = url;
            link.download = "backup.zip"; // Optionally extract filename from URL or response
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error: any) {
            notifications.show({
                message: error.response?.data?.error || "Backup failed.",
                color: "red",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card
            shadow="xs"
            radius="sm"
            withBorder
            py={24}
            px={20}
            style={{ cursor: "pointer", position: "relative" }}
            onClick={handleBackup}
        >
            {isLoading && (
                <Loader
                    size="sm"
                    color="green"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            )}
            <Group gap={24} opacity={isLoading ? 0.5 : 1}>
                <IconFileZip size={24} />
                <div>
                    <Text size="md" fw="bold">
                        Download All Files
                    </Text>
                    <Text size="md" c="dimmed">
                        Create a backup of all documents and folders
                    </Text>
                </div>
            </Group>
        </Card>
    );
};

export default BackupButton;
