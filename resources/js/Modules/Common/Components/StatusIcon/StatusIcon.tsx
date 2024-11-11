import React from "react";
import { IconSquareCheckFilled, IconMessageFilled } from "@tabler/icons-react";
import { getColorStatus } from "@/Modules/Common/Helpers/get-color-status";

interface StatusIconProps {
    approvalStatus?: string;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ approvalStatus }) => {
    const indicatorColor = getColorStatus(approvalStatus);

    if (approvalStatus?.includes("Approval")) {
        return <IconSquareCheckFilled color={indicatorColor} />;
    } else if (approvalStatus?.includes("Reviewal")) {
        return <IconMessageFilled color={indicatorColor} />;
    }
    return null;
};