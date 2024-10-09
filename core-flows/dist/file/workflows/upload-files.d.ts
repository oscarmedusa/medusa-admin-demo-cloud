import { FileDTO } from "@medusajs/framework/types";
export type UploadFilesWorkflowInput = {
    files: {
        filename: string;
        mimeType: string;
        content: string;
        access: "public" | "private";
    }[];
};
export declare const uploadFilesWorkflowId = "upload-files";
/**
 * This workflow uploads one or more files.
 */
export declare const uploadFilesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UploadFilesWorkflowInput, FileDTO[], []>;
//# sourceMappingURL=upload-files.d.ts.map