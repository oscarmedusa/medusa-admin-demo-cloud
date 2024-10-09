import { CreateRefundReasonDTO, RefundReasonDTO } from "@medusajs/framework/types";
export declare const createRefundReasonsWorkflowId = "create-refund-reasons-workflow";
/**
 * This workflow creates one or more refund reasons.
 */
export declare const createRefundReasonsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    data: CreateRefundReasonDTO[];
}, RefundReasonDTO[], []>;
//# sourceMappingURL=create-refund-reasons.d.ts.map