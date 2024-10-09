"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFulfillmentStep = exports.createFulfillmentStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createFulfillmentStepId = "create-fulfillment";
/**
 * This step creates a fulfillment
 */
exports.createFulfillmentStep = (0, workflows_sdk_1.createStep)(exports.createFulfillmentStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.FULFILLMENT);
    const fulfillment = await service.createFulfillment(data);
    return new workflows_sdk_1.StepResponse(fulfillment, fulfillment.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const service = container.resolve(utils_1.Modules.FULFILLMENT);
    await service.cancelFulfillment(id);
});
//# sourceMappingURL=create-fulfillment.js.map