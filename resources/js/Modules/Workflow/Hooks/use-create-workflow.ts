import { useState, FormEventHandler, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { CreateWorkflowData } from "@/Modules/Workflow/Types/CreateWorkflowData";
import { useFetchUsersApprovalRole } from "@/Modules/Common/Hooks/use-fetch-users-approval-role";

interface IProps {
    itemParentId?: string;
}

interface UserOption {
    id: number;
    name: string;
    email: string;
}

interface WorkflowUser {
    selectedUser: string;
    options: { value: string; label: string }[];
}

export function useCreateWorkflow({ itemParentId }: IProps) {
    const [workflowType, setWorkflowType] = useState("reviewal");
    const { closeModal, modals } = useModalStore();
    const fetchedUsers: UserOption[] = useFetchUsersApprovalRole(workflowType, modals["createWorkflow"]);

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm<CreateWorkflowData>({
        folder_item_id: "",
        resolution: "",
        destination: "",
        type: "reviewal",
        users: [],
    });

    const [users, setUsers] = useState<WorkflowUser[]>([]);
    const maxUsers = fetchedUsers.length;

    useEffect(() => {
        // Reset users when workflow type changes
        setUsers([]);
    }, [workflowType, fetchedUsers]);

    useEffect(() => {
        // Initialize with one user Select by default when fetchedUsers change
        setUsers([
            {
                selectedUser: "",
                options: fetchedUsers.map(u => ({ value: u.id.toString(), label: `${u.name} (${u.email})` })),
            },
        ]);
    }, [fetchedUsers]);

    const createApprovalSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        const selectedUserIds = users.map(user => parseInt(user.selectedUser)).filter(id => !isNaN(id));

        data.folder_item_id = itemParentId ?? "";
        data.users = selectedUserIds.map(id => ({ user_id: id }));

        post(route("workflows.store"), {
            preserveScroll: true,
            onSuccess: () => {
                closeModal("createWorkflow");
                notifications.show({
                    message: "Approval process created",
                    color: "green",
                });
            },
            onError: () => {
                notifications.show({
                    message: "Something went wrong",
                    color: "red",
                });
            },
            onFinish: () => reset(),
        });
    };

    const addUser = () => {
        if (users.length < maxUsers) {
            const selectedValues = users.map(user => user.selectedUser);
            const availableUsers = fetchedUsers.filter(u => !selectedValues.includes(u.id.toString()));
            setUsers([
                ...users,
                {
                    selectedUser: "",
                    options: availableUsers.map(u => ({ value: u.id.toString(), label: `${u.name} (${u.email})` })),
                },
            ]);
        }
    };

    const addAllUsers = () => {
        const allUsers = fetchedUsers.map(u => u.id.toString());
        const updatedUsers: WorkflowUser[] = allUsers.map(id => {
            const selectedUser = fetchedUsers.find(user => user.id.toString() === id);
            return {
                selectedUser: id,
                options: selectedUser
                    ? [
                          ...fetchedUsers
                              .filter(user => user.id.toString() !== id)
                              .map(user => ({
                                  value: user.id.toString(),
                                  label: `${user.name} (${user.email})`,
                              })),
                          { value: id, label: `${selectedUser.name} (${selectedUser.email})` }, // Include selected user
                      ]
                    : fetchedUsers.map(user => ({
                          value: user.id.toString(),
                          label: `${user.name} (${user.email})`,
                      })),
            };
        });
    
        console.log(updatedUsers);
        setUsers(updatedUsers);
    };

    const removeUser = (index: number) => {
        const updatedUsers = [...users];
        const removedUser = updatedUsers.splice(index, 1)[0];
        setUsers(updatedUsers);

        // Re-add the removed user to the options of other selects
        if (removedUser.selectedUser) {
            setUsers(currentUsers =>
                currentUsers.map(user =>
                    user.selectedUser === ""
                        ? {
                              ...user,
                              options: [
                                  ...user.options,
                                  {
                                      value: removedUser.selectedUser,
                                      label: `${fetchedUsers.find(u => u.id.toString() === removedUser.selectedUser)?.name} (${fetchedUsers.find(u => u.id.toString() === removedUser.selectedUser)?.email})`,
                                  },
                              ],
                          }
                        : user
                )
            );
        }
    };

    const handleUserChange = (index: number, value: string | null) => {
        const updatedUsers = [...users];
        const previousValue = updatedUsers[index].selectedUser;

        updatedUsers[index].selectedUser = value || "";

        // Remove the selected user from other selects' options
        if (previousValue) {
            setUsers(currentUsers =>
                currentUsers.map((user, idx) =>
                    idx !== index
                        ? {
                              ...user,
                              options: user.options.filter(option => option.value !== previousValue),
                          }
                        : user
                )
            );
        }

        // Remove the newly selected user from other selects' options
        if (value) {
            setUsers(currentUsers =>
                currentUsers.map((user, idx) =>
                    idx !== index
                        ? {
                              ...user,
                              options: user.options.filter(option => option.value !== value),
                          }
                        : user
                )
            );
        }

        setUsers(updatedUsers);
    };

    return {
        data,
        setData,
        createApprovalSubmit,
        processing,
        errors,
        users,
        setWorkflowType,
        addUser,
        removeUser,
        handleUserChange,
        addAllUsers, // Return the addAllUsers function
        maxUsers,
    };
}