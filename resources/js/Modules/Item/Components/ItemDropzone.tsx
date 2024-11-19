import { rem } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconUpload, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

interface ItemDropzoneProps {
    onDrop: (files: FileWithPath[]) => void;
    openRef: React.RefObject<() => void>;
    children: React.ReactNode;
}

export default function ItemDropzone({ onDrop, openRef, children }: ItemDropzoneProps) {
    return (
        <Dropzone
            openRef={openRef}
            onDrop={onDrop}
            activateOnClick={false}
            accept={{
                "application/pdf": [],
                "image/png": [],
                "image/jpeg": [],
            }}
            maxSize={10 * 1024 ** 2} // Optional: Set a maximum file size (e.g., 10MB)
            styles={{
                root: {
                    border: "none",
                    padding: 0,
                },
            }}
        >
            <Dropzone.Accept>
                <IconUpload
                    style={{
                        width: rem(52),
                        height: rem(52),
                        color: "var(--mantine-color-blue-6)",
                        position: "absolute",
                        bottom: rem(16),
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 9999,
                    }}
                    stroke={1.5}
                />
            </Dropzone.Accept>
            {children}
        </Dropzone>
    );
}
