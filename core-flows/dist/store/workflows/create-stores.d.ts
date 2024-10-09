import { StoreDTO, StoreWorkflow } from "@medusajs/framework/types";
type CreateStoresWorkflowInput = {
    stores: StoreWorkflow.CreateStoreWorkflowInput[];
};
export declare const createStoresWorkflowId = "create-stores";
/**
 * This workflow creates one or more stores.
 */
export declare const createStoresWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateStoresWorkflowInput, StoreDTO[], []>;
export {};
//# sourceMappingURL=create-stores.d.ts.map