import { Link, usePage } from "@inertiajs/react";
import {
    Group,
    Box,
    Text,
    Divider,
    ActionIcon,
    Menu,
    rem,
    Tooltip,
} from "@mantine/core";
import {
    IconTrash,
    IconLayoutDashboard,
    IconPlus,
    IconDotsVertical,
} from "@tabler/icons-react";
import classes from "./Sidebar.module.css";
import OfficeLogo from "../OfficeLogo/OfficeLogo";
import { WorkspaceLinksData } from "@/Modules/Workspace/Types/WorkspaceLinksData";
import WorkspaceForm from "@/Modules/Workspace/Forms/WorkspaceForm";
import useModalStore from "../../Hooks/use-modal-store";
import ArqFolder from "../IconFiles/ArqFolder";

const NAV_LINKS = [
    {
        label: "Dashboard",
        icon: IconLayoutDashboard,
        href: "/dashboard",
    },
    {
        label: "Trash",
        icon: IconTrash,
        href: "/trash",
    },
];

const Sidebar: React.FC = () => {
    const { workspaces } = usePage<{ workspaces: WorkspaceLinksData[] }>().props;
    const { openModal } = useModalStore();

    const currentPath = window.location.pathname;

    const renderNavLinks = NAV_LINKS.map(({ label, icon: Icon, href }) => (
        <Link
            className={classes.link}
            data-active={currentPath === href || undefined}
            href={href}
            key={label}
        >
            <Icon className={classes.linkIcon} stroke={1.5} />
            <span>{label}</span>
        </Link>
    ));

    const renderWorkspaceLinks = workspaces.map((workspace) => (
        <div
            className={classes.workspaceLinkWrapper}
            key={workspace.item_id}
            data-active={currentPath === workspace.url || undefined}
        >
            <Link className={classes.workspaceLinkDesign} href={workspace.url}>
                <div className={classes.workspaceLinkContent}>
                    <ArqFolder className={classes.linkIcon} />
                    <span>{workspace.name}</span>
                </div>
            </Link>
            <Menu width={200} position="right-start">
                <Menu.Target>
                    <ActionIcon className={classes.actionIcon} variant="transparent" size={32}>
                        <IconDotsVertical className={classes.settingsIcon} stroke={1.5} />
                    </ActionIcon>
                </Menu.Target>
                {/* Add Menu.Items here if needed */}
            </Menu>
        </div>
    ));

    return (
        <>
            <nav className={classes.navbar}>
                <div className={classes.navbarMain}>
                    <Group className={classes.header}>
                        <Link href="/dashboard">
                            <OfficeLogo h={48} w={48} />
                        </Link>
                    </Group>
                    <Box mb={12}>{renderNavLinks}</Box>
                    <Divider />
                    <Group justify="space-between" p="sm" mt={12}>
                        <Text size="xs" fw={500} c="dimmed">
                            Sections
                        </Text>

                        <Tooltip label="New section" withArrow position="right">
                            <ActionIcon variant="default" size={18} onClick={() => openModal("workspace")}>
                                <IconPlus
                                    style={{
                                        width: rem(12),
                                        height: rem(12),
                                    }}
                                    stroke={1.5}
                                />
                            </ActionIcon>
                        </Tooltip>

                    </Group>
                    <div className={classes.workspaces}>{renderWorkspaceLinks}</div>
                </div>
            </nav>

            <WorkspaceForm />
        </>
    );
};

export default Sidebar;
