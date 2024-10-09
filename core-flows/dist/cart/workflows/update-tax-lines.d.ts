import { CartLineItemDTO, CartShippingMethodDTO } from "@medusajs/framework/types";
export type UpdateTaxLinesWorkflowInput = {
    cart_id: string;
    items?: CartLineItemDTO[];
    shipping_methods?: CartShippingMethodDTO[];
    force_tax_calculation?: boolean;
};
export declare const updateTaxLinesWorkflowId = "update-tax-lines";
/**
 * This workflow updates a cart's tax lines.
 */
export declare const updateTaxLinesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateTaxLinesWorkflowInput, unknown, any[]>;
//# sourceMappingURL=update-tax-lines.d.ts.map