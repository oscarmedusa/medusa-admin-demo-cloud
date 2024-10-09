"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePriceListsWorkflow = exports.deletePriceListsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deletePriceListsWorkflowId = "delete-price-lists";
/**
 * This workflow deletes one or more price lists.
 */
exports.deletePriceListsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deletePriceListsWorkflowId, (input) => {
    return (0, steps_1.deletePriceListsStep)(input.ids);
});
//# sourceMappingURL=delete-price-lists.js.map