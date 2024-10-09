"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInventoryItemsWorkflow = exports.updateInventoryItemsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateInventoryItemsWorkflowId = "update-inventory-items-workflow";
/**
 * This workflow updates one or more inventory items.
 */
exports.updateInventoryItemsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateInventoryItemsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateInventoryItemsStep)(input.updates));
});
//# sourceMappingURL=update-inventory-items.js.map