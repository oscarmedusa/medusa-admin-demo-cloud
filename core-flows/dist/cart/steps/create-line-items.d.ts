import { CreateLineItemForCartDTO } from "@medusajs/framework/types";
export interface CreateLineItemsCartStepInput {
    id: string;
    items: CreateLineItemForCartDTO[];
}
export declare const createLineItemsStepId = "create-line-items-step";
/**
 * This step creates line item in a cart.
 */
export declare const createLineItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateLineItemsCartStepInput, import("@medusajs/framework/types").CartLineItemDTO[]>;
//# sourceMappingURL=create-line-items.d.ts.map