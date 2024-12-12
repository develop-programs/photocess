"use client";

import React, { useState } from "react";
import {
    FileUploader,
    FileUploaderContent,
    FileUploaderItem,
    FileInput,
} from "@/components/custom/FileUpload";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

const FileSvgDraw = () => {
    return (
        <>
            <svg
                className="size-12 mb-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
            </svg>
            <p className="mb-1 text-lg md:text-xl text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
            </p>
        </>
    );
};

export default function ResizerFileUpload() {
    const [files, setFiles] = useState<File[] | null>(null);

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };
    return (
        <div className="-mt-24 md:-mt-40 w-full grid place-content-center gap-3">
            <FileUploader
                value={files}
                onValueChange={setFiles}
                dropzoneOptions={dropZoneConfig}
                className="relative bg-stone-900 rounded-lg p-2"
            >
                <FileInput className="outline-dashed outline-1 outline-white">
                    <div
                        className="w-72 md:w-[40rem] lg:w-[50rem] xl:w-[70rem] h-[30vh] flex items-center justify-center flex-col pt-3 pb-4 gap-2 ">
                        <FileSvgDraw />
                    </div>
                </FileInput>
                <FileUploaderContent>
                    {files &&
                        files.length > 0 &&
                        files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                                <Paperclip className="h-4 w-4 stroke-current" />
                                <span>{file.name}</span>
                            </FileUploaderItem>
                        ))}
                </FileUploaderContent>
            </FileUploader>
            {
                files != null ? <div>
                    <Button variant="gooeyLeft" className={"text-white"} onClick={() => {
                        setFiles(null);
                    }}>Remove</Button>
                </div> : null
            }
        </div>
    );
};
