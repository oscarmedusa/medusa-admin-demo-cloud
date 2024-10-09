import { ItemTaxLineDTO, OrderLineItemDTO, OrderShippingMethodDTO, OrderWorkflowDTO, ShippingTaxLineDTO } from "@medusajs/framework/types";
export interface GetOrderItemTaxLinesStepInput {
    order: OrderWorkflowDTO;
    items: OrderLineItemDTO[];
    shipping_methods: OrderShippingMethodDTO[];
    force_tax_calculation?: boolean;
    is_return?: boolean;
    shipping_address?: OrderWorkflowDTO["shipping_address"];
}
export declare const getOrderItemTaxLinesStepId = "get-order-item-tax-lines";
/**
 * This step retrieves the tax lines for an order's line items and shipping methods.
 */
export declare const getOrderItemTaxLinesStep: import("@medusajs/framework/workflows-sdk").StepFunction<GetOrderItemTaxLinesStepInput, {
    lineItemTaxLines: ItemTaxLineDTO[];
    shippingMethodsTaxLines: ShippingTaxLineDTO[];
}>;
//# sourceMappingURL=get-item-tax-lines.d.ts.map