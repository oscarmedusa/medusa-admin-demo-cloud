import { OrderWorkflowDTO } from "@medusajs/framework/types";
export type UpdateOrderTaxLinesWorkflowInput = {
    order_id: string;
    item_ids?: string[];
    shipping_method_ids?: string[];
    force_tax_calculation?: boolean;
    is_return?: boolean;
    shipping_address?: OrderWorkflowDTO["shipping_address"];
};
export declare const updateOrderTaxLinesWorkflowId = "update-order-tax-lines";
/**
 * This workflow updates the tax lines of items and shipping methods in an order.
 */
export declare const updateOrderTaxLinesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateOrderTaxLinesWorkflowInput, unknown, any[]>;
//# sourceMappingURL=update-tax-lines.d.ts.map