"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInventoryLevelsWorkflow = exports.updateInventoryLevelsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_inventory_levels_1 = require("../steps/update-inventory-levels");
exports.updateInventoryLevelsWorkflowId = "update-inventory-levels-workflow";
/**
 * This workflow updates one or more inventory levels.
 */
exports.updateInventoryLevelsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateInventoryLevelsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, update_inventory_levels_1.updateInventoryLevelsStep)(input.updates));
});
//# sourceMappingURL=update-inventory-levels.js.map