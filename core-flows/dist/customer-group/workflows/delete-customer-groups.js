"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerGroupsWorkflow = exports.deleteCustomerGroupsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteCustomerGroupsWorkflowId = "delete-customer-groups";
/**
 * This workflow deletes one or more customer groups.
 */
exports.deleteCustomerGroupsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteCustomerGroupsWorkflowId, (input) => {
    return (0, steps_1.deleteCustomerGroupStep)(input.ids);
});
//# sourceMappingURL=delete-customer-groups.js.map