"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFulfillmentWorkflow = exports.updateFulfillmentWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateFulfillmentWorkflowId = "update-fulfillment-workflow";
/**
 * This workflow updates a fulfillment.
 */
exports.updateFulfillmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateFulfillmentWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateFulfillmentStep)(input));
});
//# sourceMappingURL=update-fulfillment.js.map