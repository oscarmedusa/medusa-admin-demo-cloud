import { ItemTaxLineDTO, OrderDTO, ShippingTaxLineDTO } from "@medusajs/framework/types";
export interface SetOrderTaxLinesForItemsStepInput {
    order: OrderDTO;
    item_tax_lines: ItemTaxLineDTO[];
    shipping_tax_lines: ShippingTaxLineDTO[];
}
export declare const setOrderTaxLinesForItemsStepId = "set-order-tax-lines-for-items";
/**
 * This step sets the tax lines of an order's items and shipping methods.
 */
export declare const setOrderTaxLinesForItemsStep: import("@medusajs/framework/workflows-sdk").StepFunction<SetOrderTaxLinesForItemsStepInput, undefined>;
//# sourceMappingURL=set-tax-lines-for-items.d.ts.map