import { CustomerDTO } from "@medusajs/framework/types";
export interface FindOrCreateCustomerStepInput {
    customerId?: string | null;
    email?: string | null;
}
export interface FindOrCreateCustomerOutputStepOutput {
    customer?: CustomerDTO | null;
    email?: string | null;
}
export declare const findOrCreateCustomerStepId = "find-or-create-customer";
/**
 * This step either finds a customer matching the specified ID, or finds / create a customer
 * matching the specified email. If both ID and email are provided, ID takes precedence.
 */
export declare const findOrCreateCustomerStep: import("@medusajs/framework/workflows-sdk").StepFunction<FindOrCreateCustomerStepInput, FindOrCreateCustomerOutputStepOutput>;
//# sourceMappingURL=find-or-create-customer.d.ts.map