import { FulfillmentWorkflow } from "@medusajs/framework/types";
export type SetShippingOptionsPricesStepInput = {
    id: string;
    prices?: FulfillmentWorkflow.UpdateShippingOptionsWorkflowInput["prices"];
}[];
export declare const setShippingOptionsPricesStepId = "set-shipping-options-prices-step";
/**
 * This step sets the prices of one or more shipping options.
 */
export declare const setShippingOptionsPricesStep: import("@medusajs/framework/workflows-sdk").StepFunction<SetShippingOptionsPricesStepInput, undefined>;
//# sourceMappingURL=set-shipping-options-prices.d.ts.map