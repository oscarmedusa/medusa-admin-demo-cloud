export type UploadFilesStepInput = {
    files: {
        filename: string;
        mimeType: string;
        content: string;
        access: "public" | "private";
    }[];
};
export declare const uploadFilesStepId = "upload-files";
/**
 * This step uploads one or more files.
 */
export declare const uploadFilesStep: import("@medusajs/framework/workflows-sdk").StepFunction<UploadFilesStepInput, import("@medusajs/framework/types").FileDTO[]>;
//# sourceMappingURL=upload-files.d.ts.map