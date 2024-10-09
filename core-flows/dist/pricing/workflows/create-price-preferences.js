"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPricePreferencesWorkflow = exports.createPricePreferencesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createPricePreferencesWorkflowId = "create-price-preferences";
/**
 * This workflow creates one or more price preferences.
 */
exports.createPricePreferencesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createPricePreferencesWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createPricePreferencesStep)(input));
});
//# sourceMappingURL=create-price-preferences.js.map