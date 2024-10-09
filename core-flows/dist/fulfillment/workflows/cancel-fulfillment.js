"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelFulfillmentWorkflow = exports.cancelFulfillmentWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.cancelFulfillmentWorkflowId = "cancel-fulfillment-workflow";
/**
 * This workflow cancels a fulfillment.
 */
exports.cancelFulfillmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.cancelFulfillmentWorkflowId, (input) => {
    (0, steps_1.cancelFulfillmentStep)(input.id);
});
//# sourceMappingURL=cancel-fulfillment.js.map