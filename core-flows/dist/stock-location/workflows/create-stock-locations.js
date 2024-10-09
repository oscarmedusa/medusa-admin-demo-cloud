"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStockLocationsWorkflow = exports.createStockLocationsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.createStockLocationsWorkflowId = "create-stock-locations-workflow";
/**
 * This workflow creates one or more stock locations.
 */
exports.createStockLocationsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createStockLocationsWorkflowId, (input) => {
    return new workflows_sdk_1.WorkflowResponse((0, steps_1.createStockLocations)(input.locations));
});
//# sourceMappingURL=create-stock-locations.js.map