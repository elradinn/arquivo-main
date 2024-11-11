import { Modal, Text, TextInput, Button, Stack, Flex, NumberInput, Select } from "@mantine/core";
import { NumberingSchemeResourceData } from "../Types/NumberingSchemeResourceData";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { ItemParentResourceData } from "@/Modules/Item/Types/ItemParentResourceData";
import { useCreateNumberingScheme } from "../Hooks/use-create-numbering-scheme";

interface IProps {
    itemParent?: ItemParentResourceData;
}

const CreateNumberingSchemeForm: React.FC<IProps> = ({
    itemParent,
}) => {
    const { data, setData, handleSubmit, processing, errors } = useCreateNumberingScheme({
        itemParent,
    });

    const { modals, closeModal } = useModalStore();

    return (
        <Modal
            opened={modals["createNumberingScheme"]}
            onClose={() => closeModal("createNumberingScheme")}
            title={<Text size="lg">Create Numbering Scheme</Text>}
            size={550}
        >
            <form onSubmit={handleSubmit}>
                <Stack gap={16}>
                    <TextInput
                        label="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                    />
                    <TextInput
                        label="Prefix"
                        value={data.prefix}
                        onChange={(e) => setData("prefix", e.target.value)}
                        error={errors.prefix}
                    />
                    <NumberInput
                        label="Next Number"
                        value={data.next_number}
                        onChange={(value) => setData("next_number", Number(value))}
                        min={1}
                        error={errors.next_number}
                    />
                    <Select
                        label="Reset Frequency"
                        data={[
                            { value: 'none', label: 'None' },
                            { value: 'monthly', label: 'Monthly' },
                            { value: 'yearly', label: 'Yearly' },
                        ]}
                        value={data.reset_frequency}
                        onChange={(value) => setData("reset_frequency", value ?? 'none')}
                        error={errors.reset_frequency}
                    />
                </Stack>
                <Flex align="center" justify="end" mt={16}>
                    <Button variant="light" onClick={() => closeModal("createNumberingScheme")}>
                        Cancel
                    </Button>
                    <Button ml={12} type="submit" loading={processing}>
                        Create
                    </Button>
                </Flex>
            </form>
        </Modal>
    );
};

export default CreateNumberingSchemeForm;