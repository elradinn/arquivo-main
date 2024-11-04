import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { MoveDocumentsData } from "../Types/MoveDocumentsData";

export default function useMoveDocuments() {
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm<MoveDocumentsData>({
        ids: [],
        destination_folder_id: "",
    });

    const moveDocuments = () => {
        put(route("document.move"), {
            onSuccess: () => {
                notifications.show({
                    message: "Documents moved successfully",
                    color: "green",
                });
                reset();
            },
            onError: () => {
                notifications.show({
                    message: "Failed to move documents",
                    color: "red",
                });
            },
            onFinish: () => {
                clearErrors();
            },
        });
    };

    return {
        data,
        setData,
        moveDocuments,
        processing,
        errors,
        reset,
    };
}