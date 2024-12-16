import { useForm } from "@inertiajs/react";
import { RegisterUserData } from "../Types/RegisterUserData";
import { notifications } from "@mantine/notifications";

export function useAddUser() {
    const { data, setData, post, processing, errors, reset } =
        useForm<RegisterUserData>({
            name: "",
            email: "",
            office_position: "",
            workflow_role: "",
            system_role: "",
        });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route("users.register"), {
            onSuccess: () => {
                notifications.show({
                    message:
                        "New user added successfully. An email has been sent.",
                    color: "green",
                });
                reset();
            },
            onError: () => {
                notifications.show({
                    message: "Failed to add user.",
                    color: "red",
                });
            },
        });
    };

    return { data, setData, submit, processing, errors };
}
