"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReturnFulfillmentStep = exports.createReturnFulfillmentStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createReturnFulfillmentStepId = "create-return-fulfillment";
/**
 * This step creates a fulfillment for a return.
 */
exports.createReturnFulfillmentStep = (0, workflows_sdk_1.createStep)(exports.createReturnFulfillmentStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.FULFILLMENT);
    const fulfillment = await service.createReturnFulfillment(data);
    return new workflows_sdk_1.StepResponse(fulfillment, fulfillment.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const service = container.resolve(utils_1.Modules.FULFILLMENT);
    // await service.cancelReturnFulfillment(id) // TODO: Implement cancelReturnFulfillment
    await service.cancelFulfillment(id);
});
//# sourceMappingURL=create-return-fulfillment.js.map