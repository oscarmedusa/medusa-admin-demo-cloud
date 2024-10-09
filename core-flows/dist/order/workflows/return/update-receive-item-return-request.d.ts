import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that an item can be updated in a return receival request.
 */
export declare const updateReceiveItemReturnRequestValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    input: OrderWorkflow.UpdateReceiveItemReturnRequestWorkflowInput;
}, unknown>;
export declare const updateReceiveItemReturnRequestWorkflowId = "update-receive-item-return-request";
/**
 * This workflow updates an item in a return receival request.
 */
export declare const updateReceiveItemReturnRequestWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.UpdateReceiveItemReturnRequestWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=update-receive-item-return-request.d.ts.map