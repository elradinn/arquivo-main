import { useForm } from "@inertiajs/react";
import { RegisterUserData } from "../Types/RegisterUserData";
import { notifications } from "@mantine/notifications";

export function useAddUser() {
    const { data, setData, post, processing, errors, reset } =
        useForm<RegisterUserData>({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            workflow_role: "",
            office_position: "",
            system_role: "",
        });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
        post(route("users.register"), {
            onSuccess: () => {
                notifications.show({
                    message: "New user added successfully",
                    color: "green",
                });
                reset();
            },
            onError: () => {
                notifications.show({
                    message: "Failed to add user",
                    color: "red",
                });
            },
        });
    };

    return { data, setData, submit, processing, errors };
}
