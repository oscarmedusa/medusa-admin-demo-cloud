import { FilterableOrderReturnReasonProps, OrderReturnReasonDTO, ReturnReasonUpdatableFields } from "@medusajs/framework/types";
export type UpdateReturnReasonsWorkflowInput = {
    selector: FilterableOrderReturnReasonProps;
    update: ReturnReasonUpdatableFields;
};
export declare const updateReturnReasonsWorkflowId = "update-return-reasons";
/**
 * This workflow updates return reasons matching the specified filters.
 */
export declare const updateReturnReasonsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateReturnReasonsWorkflowInput, OrderReturnReasonDTO[], []>;
//# sourceMappingURL=update-return-reasons.d.ts.map