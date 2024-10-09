import { AdditionalData, CreatePromotionDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreatePromotionsWorkflowInput = {
    promotionsData: CreatePromotionDTO[];
} & AdditionalData;
export declare const createPromotionsWorkflowId = "create-promotions";
/**
 * This workflow creates one or more promotions.
 */
export declare const createPromotionsWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreatePromotionsWorkflowInput, import("@medusajs/framework/types").PromotionDTO[], import("@medusajs/framework/workflows-sdk").Hook<"promotionsCreated", {
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
//# sourceMappingURL=create-promotions.d.ts.map