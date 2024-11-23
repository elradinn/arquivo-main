import React from "react";
import { IconSquareCheckFilled, IconMessageFilled } from "@tabler/icons-react";
import { getColorStatus } from "@/Modules/Common/Helpers/get-color-status";

interface StatusIconProps {
    approvalStatus?: string;
    reviewStatus?: string;
}

export const StatusIcon: React.FC<StatusIconProps> = ({ reviewStatus, approvalStatus }) => {
    const reviewIndicatorColor = getColorStatus(reviewStatus);
    const approvalIndicatorColor = getColorStatus(approvalStatus);

    return (
        <>
            {approvalStatus && <IconSquareCheckFilled color={reviewIndicatorColor} />}
            {reviewStatus && <IconMessageFilled color={approvalIndicatorColor} />}
        </>
    );
};
