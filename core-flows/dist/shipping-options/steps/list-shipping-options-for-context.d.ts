import { FindConfig, ShippingOptionDTO } from "@medusajs/framework/types";
export interface ListShippingOptionsForContextStepInput {
    context: Record<string, unknown>;
    config?: FindConfig<ShippingOptionDTO>;
}
export declare const listShippingOptionsForContextStepId = "list-shipping-options-for-context";
/**
 * This step retrieves shipping options that can be used in the specified context.
 */
export declare const listShippingOptionsForContextStep: import("@medusajs/framework/workflows-sdk").StepFunction<ListShippingOptionsForContextStepInput, ShippingOptionDTO[]>;
//# sourceMappingURL=list-shipping-options-for-context.d.ts.map