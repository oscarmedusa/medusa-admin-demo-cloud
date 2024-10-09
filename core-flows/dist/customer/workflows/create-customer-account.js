"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerAccountWorkflow = exports.createCustomerAccountWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const auth_1 = require("../../auth");
const steps_1 = require("../steps");
const validate_customer_account_creation_1 = require("../steps/validate-customer-account-creation");
exports.createCustomerAccountWorkflowId = "create-customer-account";
/**
 * This workflow creates an authentication account for a customer.
 */
exports.createCustomerAccountWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCustomerAccountWorkflowId, (input) => {
    (0, validate_customer_account_creation_1.validateCustomerAccountCreation)(input);
    const customerData = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return {
            ...data.input.customerData,
            has_account: !!data.input.authIdentityId,
        };
    });
    const customers = (0, steps_1.createCustomersStep)([customerData]);
    const customer = (0, workflows_sdk_1.transform)(customers, (customers) => customers[0]);
    (0, auth_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "customer",
        value: customer.id,
    });
    return new workflows_sdk_1.WorkflowResponse(customer);
});
//# sourceMappingURL=create-customer-account.js.map