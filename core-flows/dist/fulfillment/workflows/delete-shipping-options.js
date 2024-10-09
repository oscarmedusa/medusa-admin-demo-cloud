"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteShippingOptionsWorkflow = exports.deleteShippingOptionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const common_1 = require("../../common");
exports.deleteShippingOptionsWorkflowId = "delete-shipping-options-workflow";
/**
 * This workflow deletes one or more shipping options.
 */
exports.deleteShippingOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteShippingOptionsWorkflowId, (input) => {
    const softDeletedEntities = (0, steps_1.deleteShippingOptionsStep)(input.ids);
    (0, common_1.removeRemoteLinkStep)(softDeletedEntities);
});
//# sourceMappingURL=delete-shipping-options.js.map