import { FilterableStoreProps, UpdateStoreDTO } from "@medusajs/framework/types";
export type UpdateStoresStepInput = {
    selector: FilterableStoreProps;
    update: UpdateStoreDTO;
};
export declare const updateStoresStepId = "update-stores";
/**
 * This step updates stores matching the specified filters.
 */
export declare const updateStoresStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateStoresStepInput, import("@medusajs/framework/types").StoreDTO[]>;
//# sourceMappingURL=update-stores.d.ts.map