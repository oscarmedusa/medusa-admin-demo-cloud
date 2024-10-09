"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServiceZonesWorkflow = exports.deleteServiceZonesWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteServiceZonesWorkflowId = "delete-service-zones-workflow";
/**
 * This workflow deletes one or more service zones.
 */
exports.deleteServiceZonesWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteServiceZonesWorkflowId, (input) => {
    (0, steps_1.deleteServiceZonesStep)(input.ids);
});
//# sourceMappingURL=delete-service-zones.js.map