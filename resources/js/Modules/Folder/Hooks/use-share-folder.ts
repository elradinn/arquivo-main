import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { ShareFolderData, ShareFolderUserData } from "../Types/ShareFolderData";

interface UseShareFolderProps {
    folderId: string;
    close: () => void;
}

export function useShareFolder({ folderId, close }: UseShareFolderProps) {
    const { data, setData, post, processing, errors, reset } = useForm<ShareFolderData>({
        users: [
            {
                email: "",
                role: "viewer",
            },
        ],
    });

    const addUser = () => {
        setData('users', [...data.users, { email: "", role: "viewer" }]);
    };

    const removeUser = (index: number) => {
        const updatedUsers = data.users.filter((_, i) => i !== index);
        setData('users', updatedUsers);
    };

    const handleUserChange = (index: number, field: keyof ShareFolderUserData, value: string) => {
        const updatedUsers = data.users.map((user, i) =>
            i === index ? { ...user, [field]: value } : user
        );
        setData('users', updatedUsers);
    };

    const submit = () => {
        post(route("folder.share", { folder: folderId }), {
            onSuccess: () => {
                close();
                notifications.show({
                    message: "Folder shared successfully.",
                    color: "green",
                });
                reset();
            },
            onError: (errors) => {
                console.log(errors);
                notifications.show({
                    message: "Failed to share the folder.",
                    color: "red",
                });
            },
        });
    };

    return {
        data,
        setData,
        submit,
        processing,
        errors,
        addUser,
        removeUser,
        handleUserChange,
    };
}