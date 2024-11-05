import {
    Avatar,
    Button,
    Flex,
    Group,
    Modal,
    Paper,
    Radio,
    Stack,
    Text,
    Textarea,
    ActionIcon,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { ItemParentResourceData } from "@/Modules/Item/Types/ItemParentResourceData";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { useUpdateWorkflow } from "../Hooks/use-update-workflow";
import { useDeleteWorkflow } from "../Hooks/use-delete-workflow";
import ConfirmDeleteWorkflowForm from "./ConfirmDeleteWorkflowForm";

interface IFormProps {
    itemParent?: ItemParentResourceData;
}

const UpdateWorkflowForm: React.FC<IFormProps> = ({ itemParent }) => {
    const { modals, closeModal, openModal } = useModalStore();
    const isOpen = modals["updateWorkflow"];

    const {
        data,
        setData,
        handleUpdateWorkflow,
        processing,
        fetchedUsers,
        setWorkflowType,
        errors,
    } = useUpdateWorkflow({
        itemParent,
        isOpen,
    });

    // const { handleDeleteWorkflow, processing: deleting } = useDeleteWorkflow({
    //     workflowId: itemParent?.workflow_id,
    //     onDeleteSuccess: () => {
    //         closeModal("updateWorkflow");
    //     },
    // });

    return (
        <>
            <Modal
                opened={isOpen}
                onClose={() => closeModal("updateWorkflow")}
                title={
                    <Text fw="bold" size="lg">
                        Update Workflow Process
                    </Text>
                }
                size={550}
            >
                <form onSubmit={handleUpdateWorkflow}>
                    <Stack gap={16}>
                        <Text size="sm" c="dimmed">
                            Routinely directs any uploaded file in this folder through a predefined
                            approval workflow
                        </Text>

                        <Radio.Group
                            name="status"
                            value={data.type}
                            onChange={(value: string) => {
                                setData("type", value);
                                setWorkflowType(value);
                            }}
                        >
                            <Group mt="xs">
                                <Radio value="reviewal" label="Review" />
                                <Radio value="approval" label="Approval" />
                            </Group>
                        </Radio.Group>

                        <Textarea
                            label="Resolution"
                            placeholder="Your resolution for this approval"
                            value={data.resolution ?? ""}
                            onChange={(e) => setData("resolution", e.target.value)}
                            error={errors.resolution}
                            autosize
                            minRows={2}
                            maxRows={4}
                        />

                        <Text size="sm" fw={500} mb={-8}>
                            Users in this workflow
                        </Text>

                        {fetchedUsers.map(user => (
                            <Paper withBorder radius="md" py={16} px={10} key={user.id}>
                                <Group>
                                    <Avatar />
                                    <Stack gap={8}>
                                        <Text size="sm">{user.name}</Text>
                                        <Text size="sm">{user.email}</Text>
                                    </Stack>
                                </Group>
                            </Paper>
                        ))}
                    </Stack>

                    <Flex align="center" justify="end" mt={16}>
                        <Button variant="light" onClick={() => closeModal("updateWorkflow")}>
                            Cancel
                        </Button>

                        <Button ml={12} type="submit" loading={processing}>
                            Update
                        </Button>

                        <ActionIcon
                            variant="transparent"
                            color="red"
                            onClick={() => {
                                openModal("confirmDeleteWorkflow");
                                closeModal("updateWorkflow");
                            }}
                            title="Delete Workflow"
                            ml={12}
                        >
                            <IconTrash size={18} />
                        </ActionIcon>
                    </Flex>
                </form>

            </Modal>
            <ConfirmDeleteWorkflowForm workflowId={itemParent?.workflow_id} />
        </>

    );
};

export default UpdateWorkflowForm;