import { FilterableApiKeyProps, UpdateApiKeyDTO } from "@medusajs/framework/types";
export type UpdateApiKeysStepInput = {
    selector: FilterableApiKeyProps;
    update: UpdateApiKeyDTO;
};
export declare const updateApiKeysStepId = "update-api-keys";
/**
 * This step updates one or more API keys.
 */
export declare const updateApiKeysStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateApiKeysStepInput, import("@medusajs/framework/types").ApiKeyDTO[]>;
//# sourceMappingURL=update-api-keys.d.ts.map