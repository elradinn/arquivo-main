import React from "react";
import { Button, Flex, Modal, Select, Stack, Text, TextInput } from "@mantine/core";
import { useUpdateUser } from "../Hooks/use-update-user";
import { UserResourceData } from "../Types/UserResourceData";

interface IProps {
    isOpened: boolean;
    close: () => void;
    user?: UserResourceData;
}

const UpdateUserForm: React.FC<IProps> = ({ isOpened, close, user }) => {
    const { data, setData, submit, processing, errors } = useUpdateUser({ user, close });

    return (
        <Modal opened={isOpened} onClose={close} title={<Text size="lg">Edit User</Text>} size={550}>
            <form onSubmit={submit}>
                <Stack gap={16}>
                    <TextInput
                        id="office_position"
                        type="text"
                        name="office_position"
                        value={data.office_position}
                        label="Office Position"
                        onChange={(e) => setData("office_position", e.target.value)}
                        error={errors.office_position}
                    />

                    <Select
                        id="workflow_role"
                        type="text"
                        name="workflow_role"
                        label="Workflow Role"
                        value={data.workflow_role}
                        placeholder="Pick value"
                        data={["reviewer", "approver"]}
                        onChange={(_value, option) => setData("workflow_role", option.value)}
                    />
                </Stack>

                <Flex align="center" justify="end" mt={16}>
                    <Button variant="outline" onClick={close}>
                        Cancel
                    </Button>

                    <Button ml={12} type="submit" loading={processing}>
                        Save
                    </Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default UpdateUserForm;