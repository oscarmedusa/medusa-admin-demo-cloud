import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return's items can be marked as received.
 */
export declare const receiveItemReturnRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: Pick<OrderDTO, "id" | "items">;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    items: OrderWorkflow.ReceiveOrderReturnItemsWorkflowInput["items"];
}, unknown>;
export declare const receiveItemReturnRequestWorkflowId = "receive-item-return-request";
/**
 * This workflow marks return items as received.
 */
export declare const receiveItemReturnRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.ReceiveOrderReturnItemsWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=receive-item-return-request.d.ts.map