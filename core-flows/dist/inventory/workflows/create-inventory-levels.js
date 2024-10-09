"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInventoryLevelsWorkflow = exports.createInventoryLevelsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createInventoryLevelsWorkflowId = "create-inventory-levels-workflow";
/**
 * This workflow creates one or more inventory levels.
 */
exports.createInventoryLevelsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createInventoryLevelsWorkflowId, (input) => {
    (0, steps_1.validateInventoryLocationsStep)(input.inventory_levels);
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createInventoryLevelsStep)(input.inventory_levels));
});
//# sourceMappingURL=create-inventory-levels.js.map