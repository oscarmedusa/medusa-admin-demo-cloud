"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShippingProfilesWorkflow = exports.updateShippingProfilesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_shipping_profiles_1 = require("../steps/update-shipping-profiles");
exports.updateShippingProfilesWorkflowId = "update-shipping-profiles-workflow";
/**
 * This workflow updates one or more shipping profiles.
 */
exports.updateShippingProfilesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateShippingProfilesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, update_shipping_profiles_1.updateShippingProfilesStep)(input));
});
//# sourceMappingURL=update-shipping-profiles.js.map