import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return request can have its items dismissed.
 */
export declare const dismissItemReturnRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: Pick<OrderDTO, "id" | "items">;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    items: OrderWorkflow.ReceiveOrderReturnItemsWorkflowInput["items"];
}, unknown>;
export declare const dismissItemReturnRequestWorkflowId = "dismiss-item-return-request";
/**
 * This workflow dismisses items from a return request.
 */
export declare const dismissItemReturnRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.ReceiveOrderReturnItemsWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=dismiss-item-return-request.d.ts.map