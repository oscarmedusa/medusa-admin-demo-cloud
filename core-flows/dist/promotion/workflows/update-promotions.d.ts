import { AdditionalData, UpdatePromotionDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdatePromotionsWorkflowInput = {
    promotionsData: UpdatePromotionDTO[];
} & AdditionalData;
export declare const updatePromotionsWorkflowId = "update-promotions";
/**
 * This workflow updates one or more promotions.
 */
export declare const updatePromotionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdatePromotionsWorkflowInput, import("@medusajs/framework/types").PromotionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"promotionsUpdated", {
    promotions: (import("@medusajs/framework/types").PromotionDTO | WorkflowData<import("@medusajs/framework/types").PromotionDTO>)[] & import("@medusajs/framework/types").PromotionDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").PromotionDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").PromotionDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").PromotionDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=update-promotions.d.ts.map