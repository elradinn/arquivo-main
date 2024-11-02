import {
    IconFolder,
    IconPhoto,
    IconFileTypePdf,
    IconFileMusic,
    IconVideo,
    IconFileWord,
    IconFileSpreadsheet,
    IconFileZip,
    IconFileText,
    IconFile,
    IconSquareCheckFilled,
    IconMessageFilled,
    IconTag,
} from "@tabler/icons-react";
import {
    isAudio,
    isExcel,
    isImage,
    isPDF,
    isText,
    isVideo,
    isWord,
    isZip,
} from "@/Modules/Item/Helpers/file-helper";
import { Group } from "@mantine/core";
import { getColorStatus } from "@/Modules/Common/Helpers/get-color-status";
import ArqPdf from "../IconFiles/ArqPdf";
import ArqDefault from "../IconFiles/ArqDefault";
import ArqFolder from "../IconFiles/ArqFolder";

interface ItemIconProps {
    mime: string;
    isFolder: boolean;
    approvalStatus?: string | undefined;
    missingRequiredMetadata?: boolean;
}

export const ItemIcon: React.FC<ItemIconProps> = ({ mime, isFolder, approvalStatus, missingRequiredMetadata }) => {
    const renderIcon = () => {
        if (isFolder) {
            return <ArqFolder size={32} />;
        } else if (isImage(mime)) {
            return <IconPhoto size={20} />;
        } else if (isPDF(mime)) {
            return <ArqPdf size={32} />;
        } else if (isAudio(mime)) {
            return <IconFileMusic size={20} />;
        } else if (isVideo(mime)) {
            return <IconVideo size={20} />;
        } else if (isWord(mime)) {
            return <IconFileWord size={20} />;
        } else if (isExcel(mime)) {
            return <IconFileSpreadsheet size={20} />;
        } else if (isZip(mime)) {
            return <IconFileZip size={20} />;
        } else if (isText(mime)) {
            return <IconFileText size={20} />;
        }
        return <ArqDefault size={32} />;
    };

    const indicatorColor = getColorStatus(approvalStatus);

    const renderStatusIcon = () => {
        if (approvalStatus?.includes("Approval")) {
            return <IconSquareCheckFilled color={indicatorColor} />;
        } else if (approvalStatus?.includes("Reviewal")) {
            return <IconMessageFilled color={indicatorColor} />;
        }
        return null;
    };

    return (
        <Group gap={4}>
            {renderStatusIcon()}
            {missingRequiredMetadata && <IconTag color="red" />}
            {renderIcon()}
        </Group>
    );
};
