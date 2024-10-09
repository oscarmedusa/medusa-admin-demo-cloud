"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShipmentWorkflow = exports.createShipmentWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const update_fulfillment_1 = require("./update-fulfillment");
exports.createShipmentWorkflowId = "create-shipment-workflow";
/**
 * This workflow creates shipments for a fulfillment.
 */
exports.createShipmentWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createShipmentWorkflowId, (input) => {
    (0, steps_1.validateShipmentStep)(input.id);
    const update = (0, workflows_sdk_1.transform)({ input }, (data) => ({
        ...data.input,
        shipped_at: new Date(),
    }));
    return new workflows_sdk_1.WorkflowResponse(update_fulfillment_1.updateFulfillmentWorkflow.runAsStep({
        input: update,
    }));
});
//# sourceMappingURL=create-shipment.js.map