"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerGroupsWorkflow = exports.createCustomerGroupsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createCustomerGroupsWorkflowId = "create-customer-groups";
/**
 * This workflow creates one or more customer groups.
 */
exports.createCustomerGroupsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCustomerGroupsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createCustomerGroupsStep)(input.customersData));
});
//# sourceMappingURL=create-customer-groups.js.map