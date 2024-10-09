import { CreateCustomerDTO, CustomerDTO } from "@medusajs/framework/types";
export type CreateCustomerAccountWorkflowInput = {
    authIdentityId: string;
    customerData: CreateCustomerDTO;
};
export declare const createCustomerAccountWorkflowId = "create-customer-account";
/**
 * This workflow creates an authentication account for a customer.
 */
export declare const createCustomerAccountWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateCustomerAccountWorkflowInput, CustomerDTO, []>;
//# sourceMappingURL=create-customer-account.d.ts.map