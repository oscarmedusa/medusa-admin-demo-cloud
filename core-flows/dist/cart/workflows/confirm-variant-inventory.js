"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmVariantInventoryWorkflow = exports.confirmVariantInventoryWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const prepare_confirm_inventory_input_1 = require("../utils/prepare-confirm-inventory-input");
exports.confirmVariantInventoryWorkflowId = "confirm-item-inventory";
/**
 * This workflow confirms for one or more variants that their inventory has a required quantity.
 */
exports.confirmVariantInventoryWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.confirmVariantInventoryWorkflowId, (input) => {
    const confirmInventoryInput = (0, workflows_sdk_1.transform)({ input }, prepare_confirm_inventory_input_1.prepareConfirmInventoryInput);
    (0, steps_1.confirmInventoryStep)(confirmInventoryInput);
    return new workflows_sdk_1.WorkflowResponse(confirmInventoryInput);
});
//# sourceMappingURL=confirm-variant-inventory.js.map