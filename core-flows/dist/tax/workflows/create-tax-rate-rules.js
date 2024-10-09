"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaxRateRulesWorkflow = exports.createTaxRateRulesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createTaxRateRulesWorkflowId = "create-tax-rate-rules";
/**
 * This workflow creates one or more tax rate rules.
 */
exports.createTaxRateRulesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createTaxRateRulesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createTaxRateRulesStep)(input.rules));
});
//# sourceMappingURL=create-tax-rate-rules.js.map