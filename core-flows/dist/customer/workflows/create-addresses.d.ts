import { AdditionalData, CreateCustomerAddressDTO } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type CreateCustomerAddressesWorkflowInput = {
    addresses: CreateCustomerAddressDTO[];
} & AdditionalData;
export declare const createCustomerAddressesWorkflowId = "create-customer-addresses";
/**
 * This workflow creates one or more customer address.
 */
export declare const createCustomerAddressesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCustomerAddressesWorkflowInput, import("@medusajs/framework/types").CustomerAddressDTO[], import("@medusajs/framework/workflows-sdk").Hook<"addressesCreated", {
    addresses: (import("@medusajs/framework/types").CustomerAddressDTO | WorkflowData<import("@medusajs/framework/types").CustomerAddressDTO>)[] & import("@medusajs/framework/types").CustomerAddressDTO[] & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").CustomerAddressDTO[]> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CustomerAddressDTO[]>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").CustomerAddressDTO[]>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-addresses.d.ts.map