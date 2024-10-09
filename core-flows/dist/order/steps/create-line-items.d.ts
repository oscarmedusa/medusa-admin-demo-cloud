import { CreateOrderLineItemDTO } from "@medusajs/framework/types";
export interface CreateOrderLineItemsStepInput {
    items: CreateOrderLineItemDTO[];
}
export declare const createOrderLineItemsStepId = "create-order-line-items-step";
/**
 * This step creates order line items.
 */
export declare const createOrderLineItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateOrderLineItemsStepInput, import("@medusajs/framework/types").OrderLineItemDTO[]>;
//# sourceMappingURL=create-line-items.d.ts.map