import { CartLineItemDTO, CartShippingMethodDTO, CartWorkflowDTO, ItemTaxLineDTO, ShippingTaxLineDTO } from "@medusajs/framework/types";
export interface GetItemTaxLinesStepInput {
    cart: CartWorkflowDTO;
    items: CartLineItemDTO[];
    shipping_methods: CartShippingMethodDTO[];
    force_tax_calculation?: boolean;
    is_return?: boolean;
}
export declare const getItemTaxLinesStepId = "get-item-tax-lines";
/**
 * This step retrieves the tax lines of the specified line items in a cart.
 */
export declare const getItemTaxLinesStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetItemTaxLinesStepInput, {
    lineItemTaxLines: ItemTaxLineDTO[];
    shippingMethodsTaxLines: ShippingTaxLineDTO[];
}>;
//# sourceMappingURL=get-item-tax-lines.d.ts.map