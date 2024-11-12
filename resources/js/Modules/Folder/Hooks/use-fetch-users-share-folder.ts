import { useEffect, useState } from "react";
import axios from "axios";
import { UserResourceData } from "@/Modules/User/Types/UserResourceData";
import { notifications } from "@mantine/notifications";

interface UseFetchUsersShareFolderProps {
    folderId: string;
    isOpen: boolean;
}

export function useFetchUsersShareFolder({ folderId, isOpen }: UseFetchUsersShareFolderProps) {
    const [sharedUsers, setSharedUsers] = useState<UserResourceData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSharedUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get<UserResourceData[]>(route("folder.fetchSharedUsers", { folder: folderId }));
                setSharedUsers(response.data);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch shared users.");
                notifications.show({
                    title: "Error",
                    message: "Unable to fetch shared users.",
                    color: "red",
                });
            } finally {
                setLoading(false);
            }
        };

        if (folderId) {
            fetchSharedUsers();
        }
    }, [folderId, isOpen]);

    return { sharedUsers, loading, error };
}