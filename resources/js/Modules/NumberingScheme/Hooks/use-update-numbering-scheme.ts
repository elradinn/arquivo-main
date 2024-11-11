import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import { notifications } from "@mantine/notifications";
import { UpdateNumberingSchemeData } from "../Types/UpdateNumberingSchemeData";
import { ItemParentResourceData } from "@/Modules/Item/Types/ItemParentResourceData";
import { useFetchNumberingScheme } from "./use-fetch-numbering-scheme";
import useModalStore from "@/Modules/Common/Hooks/use-modal-store";

interface UseUpdateNumberingSchemeProps {
    itemParent?: ItemParentResourceData;
    isOpen: boolean;
}

type PrefixPart = {
    id: number;
    type: 'text' | 'dynamic';
    value: string;
};

export function useUpdateNumberingScheme({ itemParent, isOpen }: UseUpdateNumberingSchemeProps) {
    const numberingScheme = useFetchNumberingScheme({
        numberingSchemeId: itemParent?.numbering_scheme_id,
        isOpen,
    });

    const { data, setData, put, processing, errors, reset } = useForm<UpdateNumberingSchemeData>({
        name: "",
        prefix: "",
        next_number: 0,
        reset_frequency: "none",
    });

    const { closeModal } = useModalStore();

    const [prefixParts, setPrefixParts] = useState<PrefixPart[]>([]);

    useEffect(() => {
        if (numberingScheme) {
            // Parse the prefix string back into prefixParts
            const parts = numberingScheme.prefix.split(' ').map(part => {
                if (part.startsWith('[') && part.endsWith(']')) {
                    return {
                        id: Date.now() + Math.random(), // Unique ID
                        type: 'dynamic' as const,
                        value: part.slice(1, -1),
                    };
                } else {
                    return {
                        id: Date.now() + Math.random(), // Unique ID
                        type: 'text' as const,
                        value: part,
                    };
                }
            });
            setPrefixParts(parts);
            setData({
                name: numberingScheme.name || "",
                prefix: numberingScheme.prefix || "",
                next_number: numberingScheme.next_number || 0,
                reset_frequency: numberingScheme.reset_frequency || "none",
            });
        }
    }, [numberingScheme]);

    // Update the prefix string when prefixParts change
    useEffect(() => {
        const prefixString = prefixParts.map(part => {
            if (part.type === 'text') {
                return part.value;
            } else {
                // Represent dynamic parts with placeholders
                return `[${part.value}]`;
            }
        }).join(' ');
        setData("prefix", prefixString);
    }, [prefixParts]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const routeName = "numbering-scheme.update";

        put(route(routeName, itemParent?.numbering_scheme_id), {
            onSuccess: () => {
                closeModal("updateNumberingScheme");
                notifications.show({
                    message: `Numbering scheme updated successfully`,
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

    // Functions to manage prefixParts
    const addTextPart = () => {
        setPrefixParts([...prefixParts, { id: Date.now(), type: 'text', value: '' }]);
    };

    const addDynamicPart = () => {
        setPrefixParts([...prefixParts, { id: Date.now(), type: 'dynamic', value: '' }]);
    };

    const updatePart = (id: number, value: string) => {
        setPrefixParts(prefixParts.map(part => part.id === id ? { ...part, value } : part));
    };

    const removePart = (id: number) => {
        setPrefixParts(prefixParts.filter(part => part.id !== id));
    };

    return {
        data,
        setData,
        handleSubmit,
        processing,
        errors,
        prefixParts,
        addTextPart,
        addDynamicPart,
        updatePart,
        removePart,
    };
}
