import { FormEventHandler, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { CreateNumberingSchemeData } from "../Types/CreateNumberingSchemeData";
import { ItemParentResourceData } from "@/Modules/Item/Types/ItemParentResourceData";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";

interface IProps {
    itemParent?: ItemParentResourceData;
}

export function useCreateNumberingScheme({ itemParent }: IProps) {
    const { data, setData, post, processing, errors, reset } = useForm<CreateNumberingSchemeData>({
        folder_item_id: itemParent?.item_id ?? "",
        name: "",
        prefix: "",
        next_number: 1,
        reset_frequency: "none",
    });

    const { closeModal } = useModalStore();

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        data.folder_item_id = itemParent?.item_id ?? "";

        post(route("numbering-scheme.store"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal("createNumberingScheme");
                notifications.show({
                    message: "Numbering scheme created",
                    color: "green",
                });
            },
            onError: (errors) => {
                console.log(errors);
                notifications.show({
                    message: "Something went wrong",
                    color: "red",
                });
            },
            onFinish: () => reset(),
        });
    };

    return { data, setData, handleSubmit, processing, errors };
}