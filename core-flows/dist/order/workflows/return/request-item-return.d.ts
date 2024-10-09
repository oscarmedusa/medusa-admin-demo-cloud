import { OrderChangeDTO, OrderDTO, OrderPreviewDTO, OrderWorkflow, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that itens can be added to a return.
 */
export declare const requestItemReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: Pick<OrderDTO, "id" | "items">;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
    items: OrderWorkflow.RequestItemReturnWorkflowInput["items"];
}, unknown>;
export declare const requestItemReturnWorkflowId = "request-item-return";
/**
 * This workflow adds items to a return.
 */
export declare const requestItemReturnWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.RequestItemReturnWorkflowInput, OrderPreviewDTO, []>;
//# sourceMappingURL=request-item-return.d.ts.map