"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShippingProfileWorkflow = exports.deleteShippingProfileWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const common_1 = require("../../common");
const utils_1 = require("@medusajs/framework/utils");
exports.deleteShippingProfileWorkflowId = "delete-shipping-profile-workflow";
/**
 * This workflow deletes one or more shipping profiles.
 */
exports.deleteShippingProfileWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteShippingProfileWorkflowId, (input) => {
    (0, steps_1.deleteShippingProfilesStep)(input.ids);
    (0, common_1.removeRemoteLinkStep)({
        [utils_1.Modules.FULFILLMENT]: { shipping_profile_id: input.ids },
    });
});
//# sourceMappingURL=delete-shipping-profile.js.map