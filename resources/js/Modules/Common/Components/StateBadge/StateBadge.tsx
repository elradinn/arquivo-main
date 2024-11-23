import { Badge } from "@mantine/core";
import { getColorStatus } from "@/Modules/Common/Helpers/get-color-status";

interface StateBadgeProps {
    reviewStatus?: string | undefined;
    approvalStatus?: string | undefined;
}

const StateBadge: React.FC<StateBadgeProps> = ({ reviewStatus, approvalStatus }) => {
    // return <Badge color={getColorStatus(state)} variant="light">{state ?? "None"}</Badge>;
    return <Badge>Check Muna</Badge>
};

export default StateBadge;
