import React, { useState } from "react";
import { Modal, Button, Stack, Group, Text, ActionIcon, TextInput } from "@mantine/core";
import { IconChevronLeft, IconFolder, IconFile, IconPlus, IconTrash } from "@tabler/icons-react";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import useShowItems from "../Hooks/use-show-items-for-moving";

interface RelatedDocumentModalProps {
    onAdd: (document: { item_id: string; name: string }) => void;
}

const RelatedDocumentModal: React.FC<RelatedDocumentModalProps> = ({ onAdd }) => {
    const { modals, closeModal } = useModalStore();
    const isOpen = modals["relatedDocumentModal"];
    const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
    const { data, loading, error } = useShowItems(currentFolderId, isOpen);

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

    const handleSelectDocument = (document: { item_id: string; name: string }) => {
        onAdd(document);
        closeModal("relatedDocumentModal");
        setCurrentFolderId(null);
    };

    return (
        <Modal
            opened={isOpen}
            onClose={() => closeModal("relatedDocumentModal")}
            title="Select Related Document"
            size="lg"
        >
            <Stack gap="md">
                <Group>
                    {currentFolderId && (
                        <ActionIcon onClick={handleBack}>
                            <IconChevronLeft size={16} />
                        </ActionIcon>
                    )}
                    <Text>Select a document to relate</Text>
                </Group>
                {loading ? (
                    <Text>Loading...</Text>
                ) : error ? (
                    <Text c="red">{error}</Text>
                ) : (
                    <Stack style={{ maxHeight: 400, overflowY: "auto" }}>
                        {data.itemContents.map((item) => (
                            <Group
                                key={item.item_id}
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    if (item.type === "folder") {
                                        handleFolderClick(item.item_id);
                                    } else {
                                        handleSelectDocument({ item_id: item.item_id, name: item.name });
                                    }
                                }}
                            >
                                {item.type === "folder" ? <IconFolder /> : <IconFile />}
                                <Text>{item.name}</Text>
                            </Group>
                        ))}
                    </Stack>
                )}
            </Stack>
        </Modal>
    );
};

export default RelatedDocumentModal;