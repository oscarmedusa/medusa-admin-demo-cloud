import { OrderDetailDTO } from "@medusajs/framework/types";
export declare const getOrderDetailWorkflowId = "get-order-detail";
/**
 * This workflow retrieves an order's details.
 */
export declare const getOrderDetailWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    fields: string[];
    order_id: string;
}, OrderDetailDTO, []>;
//# sourceMappingURL=get-order-detail.d.ts.map