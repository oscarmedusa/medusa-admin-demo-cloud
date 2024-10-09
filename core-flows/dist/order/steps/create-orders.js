"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrdersStep = exports.createOrdersStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createOrdersStepId = "create-orders";
/**
 * This step creates one or more orders.
 */
exports.createOrdersStep = (0, workflows_sdk_1.createStep)(exports.createOrdersStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.ORDER);
    const created = await service.createOrders(data);
    return new workflows_sdk_1.StepResponse(created, created.map((store) => store.id));
}, async (createdIds, { container }) => {
    if (!createdIds?.length) {
        return;
    }
    const service = container.resolve(utils_1.Modules.ORDER);
    await service.deleteOrders(createdIds);
});
//# sourceMappingURL=create-orders.js.map