"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaxRatesWorkflow = exports.createTaxRatesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createTaxRatesWorkflowId = "create-tax-rates";
/**
 * This workflow creates one or more tax rates.
 */
exports.createTaxRatesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createTaxRatesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createTaxRatesStep)(input));
});
//# sourceMappingURL=create-tax-rates.js.map