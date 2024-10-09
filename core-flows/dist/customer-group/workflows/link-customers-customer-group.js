"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkCustomersToCustomerGroupWorkflow = exports.linkCustomersToCustomerGroupWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.linkCustomersToCustomerGroupWorkflowId = "link-customers-to-customer-group";
/**
 * This workflow creates one or more links between customer and customer group records.
 */
exports.linkCustomersToCustomerGroupWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.linkCustomersToCustomerGroupWorkflowId, (input) => {
    return (0, steps_1.linkCustomersToCustomerGroupStep)(input);
});
//# sourceMappingURL=link-customers-customer-group.js.map