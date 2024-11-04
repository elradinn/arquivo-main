import { useDownloadFiles } from "@/Modules/Common/Hooks/use-download-files";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { Button, Group } from "@mantine/core";
import { IconDownload, IconFolderSymlink, IconTrash } from "@tabler/icons-react";
import DeleteFilesForm from "./DeleteFilesForm";
import MoveModal from "@/Modules/Document/Components/MoveModal";

interface IProps {
    setSelectedRecord: (record: any[]) => void;
    selectedIds: string[];
    parentId: string;
}

const SelectedItemToolbar: React.FC<IProps> = ({ setSelectedRecord, selectedIds, parentId }) => {
    const { downloadFiles } = useDownloadFiles();
    const { openModal } = useModalStore();

    return (
        <Group
            h="50%"
            px="md"
            align="center"
            justify="flex-start"
        >
            <Button
                onClick={() => openModal("deleteFiles")}
                variant="subtle"
                color="dark.3"
                leftSection={<IconTrash size={18} />}
            >
                Delete
            </Button>

            <Button
                onClick={() => downloadFiles({ all: false, ids: selectedIds, parentId })}
                variant="subtle"
                color="dark.3"
                leftSection={<IconDownload size={18} />}
            >
                Download
            </Button>

            <Button
                onClick={() => openModal("moveModal")}
                variant="subtle"
                color="dark.3"
                leftSection={<IconFolderSymlink size={18} />}
            >
                Move
            </Button>

            <DeleteFilesForm selectedIds={selectedIds} setSelectedRecord={setSelectedRecord} />
            <MoveModal selectedDocumentIds={selectedIds} />
        </Group>
    );
};

export default SelectedItemToolbar;
