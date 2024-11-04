import React, { useState } from "react";
import { Modal, Button, Stack, Group, Text, ActionIcon, Box } from "@mantine/core";
import { IconChevronLeft, IconFolder } from "@tabler/icons-react";
import useShowItems from "../Hooks/use-show-items-for-moving";
import useMoveDocuments from "../Hooks/use-move-document";
import { notifications } from "@mantine/notifications";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";

interface MoveModalProps {
    selectedDocumentIds: string[];
}

const MoveModal: React.FC<MoveModalProps> = ({ selectedDocumentIds }) => {
    const { modals, closeModal } = useModalStore();
    const isOpen = modals["moveModal"];
    const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
    const { data, loading, error } = useShowItems(currentFolderId, isOpen);
    const { setData, moveDocuments, processing } = useMoveDocuments();

    const handleFolderClick = (folderId: string) => {
        setCurrentFolderId(folderId);
    };

    const handleBack = () => {
        if (data.itemParent && data.itemParent.parent_id) {
            setCurrentFolderId(data.itemParent.parent_id);
        } else {
            setCurrentFolderId(null);
        }
    };

    const handleSave = () => {
        if (!currentFolderId) {
            notifications.show({
                message: "Please select a destination folder.",
                color: "red",
            });
            return;
        }

        setData({
            ids: selectedDocumentIds,
            destination_folder_id: currentFolderId,
        });
        moveDocuments();
        closeModal("moveModal");
    };

    return (
        <Modal
            opened={isOpen}
            onClose={() => closeModal("moveModal")}
            title="Move Documents"
            size="lg"
        >
            <Stack gap="md">
                <Group>
                    {currentFolderId && (
                        <ActionIcon onClick={handleBack}>
                            <IconChevronLeft size={16} />
                        </ActionIcon>
                    )}
                    <Text>Choose Destination Folder</Text>
                </Group>
                {loading ? (
                    <Text>Loading...</Text>
                ) : error ? (
                    <Text c="red">{error}</Text>
                ) : (
                    <Stack gap="sm" style={{ maxHeight: 400, overflowY: "auto" }}>
                        {data.itemContents.map((item) => (
                            <Group
                                key={item.item_id}
                                gap="sm"
                                style={{ cursor: "pointer" }}
                                onDoubleClick={() => handleFolderClick(item.item_id)}
                            >
                                <IconFolder />
                                <Text>{item.name}</Text>
                            </Group>
                        ))}
                    </Stack>
                )}
                <Group justify="flex-end" mt="md">
                    <Button variant="outline" onClick={() => closeModal("moveModal")}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={!currentFolderId || processing} loading={processing}>
                        Move Here
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};

export default MoveModal;