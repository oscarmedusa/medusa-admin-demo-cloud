"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShippingProfilesWorkflow = exports.createShippingProfilesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createShippingProfilesWorkflowId = "create-shipping-profiles-workflow";
/**
 * This workflow creates one or more shipping profiles.
 */
exports.createShippingProfilesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createShippingProfilesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createShippingProfilesStep)(input.data));
});
//# sourceMappingURL=create-shipping-profiles.js.map