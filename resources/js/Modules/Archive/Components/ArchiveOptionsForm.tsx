import React from "react";
import { Button, NumberInput, Stack, Modal, Text, Group } from "@mantine/core";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";
import { useUpdateArchiveFrequency } from "../Hooks/use-update-archive-frequency";
import { useFetchArchiveFrequency } from "../Hooks/use-fetch-archive-frequency";

const ArchiveOptionsForm: React.FC = () => {
    const { modals, closeModal } = useModalStore();
    const isOpen = modals["archiveOptions"];

    const { frequency, loading, error } = useFetchArchiveFrequency(isOpen);

    const { data, setData, updateArchiveFrequency, processing, errors } =
        useUpdateArchiveFrequency({
            onSuccessCallback: () => {
                closeModal("archiveOptions");
            },
        });

    React.useEffect(() => {
        if (frequency) {
            setData("years", frequency.years);
        }
    }, [frequency]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateArchiveFrequency();
    };

    return (
        <Modal
            opened={isOpen}
            onClose={() => closeModal("archiveOptions")}
            title={<Text size="lg">Archive Options</Text>}
            size="sm"
        >
            <form onSubmit={handleSubmit}>
                <Text size="sm" c="dark" mb="md">
                    This will automatically archive all data older than the
                    selected number of years.
                </Text>
                <Stack>
                    <NumberInput
                        label="Years of Oldness"
                        placeholder="Enter number of years"
                        value={data.years}
                        onChange={(value) => setData("years", Number(value))}
                        min={1}
                        required
                        error={errors.years}
                        disabled={loading}
                    />
                    <Group justify="flex-end">
                        <Button
                            variant="default"
                            onClick={() => closeModal("archiveOptions")}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            loading={processing}
                            disabled={loading || !!error}
                        >
                            Save
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    );
};

export default ArchiveOptionsForm;
