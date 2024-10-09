import { OrderDTO } from "@medusajs/framework/types";
export type GetOrdersListWorkflowOutput = OrderDTO[] | {
    rows: OrderDTO[];
    metadata: any;
};
export declare const getOrdersListWorkflowId = "get-orders-list";
/**
 * This workflow retrieves a list of orders.
 */
export declare const getOrdersListWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    fields: string[];
    variables?: Record<string, any>;
}, GetOrdersListWorkflowOutput, []>;
//# sourceMappingURL=get-orders-list.d.ts.map