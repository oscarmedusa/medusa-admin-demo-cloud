"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaxRegionsWorkflow = exports.deleteTaxRegionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteTaxRegionsWorkflowId = "delete-tax-regions";
/**
 * This workflow deletes one or more tax regions.
 */
exports.deleteTaxRegionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteTaxRegionsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.deleteTaxRegionsStep)(input.ids));
});
//# sourceMappingURL=delete-tax-regions.js.map