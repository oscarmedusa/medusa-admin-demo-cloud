import { OrderChangeDTO, OrderDTO, ReturnDTO } from "@medusajs/framework/types";
/**
 * This step validates that a return receival can be canceled.
 */
export declare const cancelReceiveReturnValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderReturn: ReturnDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const cancelReturnReceiveWorkflowId = "cancel-receive-return";
/**
 * This workflow cancels a return receival.
 */
export declare const cancelReturnReceiveWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    return_id: string;
}, unknown, any[]>;
//# sourceMappingURL=cancel-receive-return.d.ts.map