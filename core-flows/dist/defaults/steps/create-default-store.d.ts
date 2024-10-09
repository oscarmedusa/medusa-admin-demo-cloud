import { CreateStoreDTO, StoreDTO } from "@medusajs/framework/types";
type CreateDefaultStoreStepInput = {
    store: CreateStoreDTO;
};
export declare const createDefaultStoreStepId = "create-default-store";
/**
 * This step creates a default store.
 */
export declare const createDefaultStoreStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateDefaultStoreStepInput, StoreDTO | undefined>;
export {};
//# sourceMappingURL=create-default-store.d.ts.map