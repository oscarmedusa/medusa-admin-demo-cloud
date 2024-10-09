import { AdditionalData, CustomerUpdatableFields, FilterableCustomerProps } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateCustomersWorkflowInput = {
    selector: FilterableCustomerProps;
    update: CustomerUpdatableFields;
} & AdditionalData;
export declare const updateCustomersWorkflowId = "update-customers";
/**
 * This workflow updates one or more customers.
 */
export declare const updateCustomersWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCustomersWorkflowInput, import("@medusajs/framework/types").CustomerDTO[], import("@medusajs/framework/workflows-sdk").Hook<"customersUpdated", {
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
//# sourceMappingURL=update-customers.d.ts.map