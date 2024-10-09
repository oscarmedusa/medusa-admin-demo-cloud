"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePricePreferencesWorkflow = exports.deletePricePreferencesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deletePricePreferencesWorkflowId = "delete-price-preferences";
/**
 * This workflow deletes one or more price preferences.
 */
exports.deletePricePreferencesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deletePricePreferencesWorkflowId, (input) => {
    return (0, steps_1.deletePricePreferencesStep)(input);
});
//# sourceMappingURL=delete-price-preferences.js.map