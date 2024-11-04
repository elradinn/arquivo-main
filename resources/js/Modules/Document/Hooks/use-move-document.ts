import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { MoveDocumentsData } from "../Types/MoveDocumentsData";

export default function useMoveDocuments({ setSelectedRecord }: { setSelectedRecord: (record: any[]) => void }) {
    const { data, setData, put, processing, errors, reset, clearErrors } = useForm<MoveDocumentsData>({
        ids: [],
        destination_folder_id: "",
    });

    const moveDocuments = () => {
        put(route("document.move"), {
            onSuccess: () => {
                setSelectedRecord([]);
                notifications.show({
                    message: "Documents moved successfully",
                    color: "green",
                });
                reset();
            },
            onError: (errors) => {
                console.log(errors);
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