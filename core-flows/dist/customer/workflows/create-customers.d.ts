import { AdditionalData, CreateCustomerDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateCustomersWorkflowInput = {
    customersData: CreateCustomerDTO[];
} & AdditionalData;
export declare const createCustomersWorkflowId = "create-customers";
/**
 * This workflow creates one or more customers.
 */
export declare const createCustomersWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCustomersWorkflowInput, import("@medusajs/framework/types").CustomerDTO[], import("@medusajs/framework/workflows-sdk").Hook<"customersCreated", {
    customers: (import("@medusajs/framework/types").CustomerDTO | WorkflowData<import("@medusajs/framework/types").CustomerDTO>)[] & import("@medusajs/framework/types").CustomerDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").CustomerDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CustomerDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CustomerDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-customers.d.ts.map