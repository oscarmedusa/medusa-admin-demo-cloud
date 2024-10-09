import { CreateOrderReturnReasonDTO, OrderReturnReasonDTO } from "@medusajs/framework/types";
export type CreateReturnReasonsWorkflowInput = {
    data: CreateOrderReturnReasonDTO[];
};
export declare const createReturnReasonsWorkflowId = "create-return-reasons";
/**
 * This workflow creates one or more return reasons.
 */
export declare const createReturnReasonsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateReturnReasonsWorkflowInput, OrderReturnReasonDTO[], []>;
//# sourceMappingURL=create-return-reasons.d.ts.map