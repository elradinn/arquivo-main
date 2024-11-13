import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { ShareDocumentData, ShareDocumentUserData } from "../Types/ShareDocumentData";

interface UseShareDocumentProps {
    documentId: string;
    close: () => void;
}

export function useShareDocument({ documentId, close }: UseShareDocumentProps) {
    const { data, setData, post, processing, errors, reset } = useForm<ShareDocumentData>({
        users: [],
    });

    const addUser = () => {
        setData('users', [...data.users, { email: "", role: "viewer" }]);
    };

    const removeUser = (index: number) => {
        const updatedUsers = data.users.filter((_, i) => i !== index);
        setData('users', updatedUsers);
    };

    const handleUserChange = (index: number, field: keyof ShareDocumentUserData, value: string) => {
        const updatedUsers = data.users.map((user, i) =>
            i === index ? { ...user, [field]: value } : user
        );
        setData('users', updatedUsers);
    };

    const handleAddAllUsers = (allUsers: ShareDocumentUserData[]) => {
        setData('users', allUsers);
    };

    const submitShare = () => {
        post(route("document.share", { document: documentId }), {
            onSuccess: () => {
                close();
                notifications.show({
                    message: "Document shared successfully.",
                    color: "green",
                });
                reset();
            },
            onError: (errors) => {
                console.log(errors);
                notifications.show({
                    message: "Failed to share the document.",
                    color: "red",
                });
            },
        });
    };

    return {
        data,
        submit: submitShare,
        processing,
        errors,
        addUser,
        removeUser,
        handleUserChange,
        handleAddAllUsers,
    };
}