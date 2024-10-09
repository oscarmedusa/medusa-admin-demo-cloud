import { FilterableCustomerAddressProps, UpdateCustomerAddressDTO, AdditionalData } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
export type UpdateCustomerAddressesWorkflowInput = {
    selector: FilterableCustomerAddressProps;
    update: UpdateCustomerAddressDTO;
} & AdditionalData;
export declare const updateCustomerAddressesWorkflowId = "update-customer-addresses";
/**
 * This workflow updates one or more customer addresses.
 */
export declare const updateCustomerAddressesWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateCustomerAddressesWorkflowInput, import("@medusajs/framework/types").CustomerAddressDTO[], import("@medusajs/framework/workflows-sdk").Hook<"addressesUpdated", {
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
//# sourceMappingURL=update-addresses.d.ts.map