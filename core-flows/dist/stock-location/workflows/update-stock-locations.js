"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStockLocationsWorkflow = exports.updateStockLocationsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.updateStockLocationsWorkflowId = "update-stock-locations-workflow";
/**
 * This workflow updates stock locations matching the specified filters.
 */
exports.updateStockLocationsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateStockLocationsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.updateStockLocationsStep)(input));
});
//# sourceMappingURL=update-stock-locations.js.map