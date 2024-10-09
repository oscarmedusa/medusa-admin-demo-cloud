import { FilterableOrderReturnReasonProps, ReturnReasonUpdatableFields } from "@medusajs/framework/types";
type UpdateReturnReasonStepInput = {
    selector: FilterableOrderReturnReasonProps;
    update: ReturnReasonUpdatableFields;
};
export declare const updateReturnReasonStepId = "update-return-reasons";
/**
 * This step updates return reasons matching the specified filters.
 */
export declare const updateReturnReasonsStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateReturnReasonStepInput, import("@medusajs/framework/types").OrderReturnReasonDTO[]>;
export {};
//# sourceMappingURL=update-return-reasons.d.ts.map