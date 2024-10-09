"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerGroupsWorkflow = exports.updateCustomerGroupsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateCustomerGroupsWorkflowId = "update-customer-groups";
/**
 * This workflow updates one or more customer groups.
 */
exports.updateCustomerGroupsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCustomerGroupsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateCustomerGroupsStep)(input));
});
//# sourceMappingURL=update-customer-groups.js.map