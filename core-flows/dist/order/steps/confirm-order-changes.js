"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmOrderChanges = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
/**
 * This step confirms changes of an order.
 */
exports.confirmOrderChanges = (0, workflows_sdk_1.createStep)("confirm-order-changes", async (input, { container }) => {
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    await orderModuleService.confirmOrderChange(input.changes.map((action) => ({
        id: action.id,
        confirmed_by: input.confirmed_by,
    })));
    return new workflows_sdk_1.StepResponse(null, input.orderId);
}, async (orderId, { container }) => {
    if (!orderId) {
        return;
    }
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    await orderModuleService.revertLastVersion(orderId);
});
//# sourceMappingURL=confirm-order-changes.js.map