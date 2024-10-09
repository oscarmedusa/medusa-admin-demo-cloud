import { CreateUserDTO, UserDTO } from "@medusajs/framework/types";
export type CreateUserAccountWorkflowInput = {
    authIdentityId: string;
    userData: CreateUserDTO;
};
export declare const createUserAccountWorkflowId = "create-user-account";
/**
 * This workflow creates an authentication identity for a user.
 */
export declare const createUserAccountWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateUserAccountWorkflowInput, UserDTO, []>;
//# sourceMappingURL=create-user-account.d.ts.map