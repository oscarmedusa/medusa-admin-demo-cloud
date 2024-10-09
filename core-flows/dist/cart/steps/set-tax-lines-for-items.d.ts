import { CartWorkflowDTO, ItemTaxLineDTO, ShippingTaxLineDTO } from "@medusajs/framework/types";
export interface SetTaxLinesForItemsStepInput {
    cart: CartWorkflowDTO;
    item_tax_lines: ItemTaxLineDTO[];
    shipping_tax_lines: ShippingTaxLineDTO[];
}
export declare const setTaxLinesForItemsStepId = "set-tax-lines-for-items";
/**
 * This step sets the tax lines of shipping methods and line items in a cart.
 */
export declare const setTaxLinesForItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<SetTaxLinesForItemsStepInput, null>;
//# sourceMappingURL=set-tax-lines-for-items.d.ts.map