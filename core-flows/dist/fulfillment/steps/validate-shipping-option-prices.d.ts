import { FulfillmentWorkflow } from "@medusajs/framework/types";
export declare const validateShippingOptionPricesStepId = "validate-shipping-option-prices";
/**
 * Validate that regions exist for the shipping option prices.
 */
export declare const validateShippingOptionPricesStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    prices?: FulfillmentWorkflow.UpdateShippingOptionsWorkflowInput["prices"];
}[], undefined>;
//# sourceMappingURL=validate-shipping-option-prices.d.ts.map