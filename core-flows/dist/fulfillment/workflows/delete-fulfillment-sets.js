"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFulfillmentSetsWorkflow = exports.deleteFulfillmentSetsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const common_1 = require("../../common");
const utils_1 = require("@medusajs/framework/utils");
exports.deleteFulfillmentSetsWorkflowId = "delete-fulfillment-sets-workflow";
/**
 * This workflow deletes one or more fulfillment sets.
 */
exports.deleteFulfillmentSetsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteFulfillmentSetsWorkflowId, (input) => {
    (0, steps_1.deleteFulfillmentSetsStep)(input.ids);
    (0, common_1.removeRemoteLinkStep)({
        [utils_1.Modules.FULFILLMENT]: { fulfillment_set_id: input.ids },
    });
});
//# sourceMappingURL=delete-fulfillment-sets.js.map