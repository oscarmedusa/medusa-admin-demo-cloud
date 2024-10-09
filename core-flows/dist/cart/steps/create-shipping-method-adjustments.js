"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShippingMethodAdjustmentsStep = exports.createShippingMethodAdjustmentsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createShippingMethodAdjustmentsStepId = "create-shipping-method-adjustments";
/**
 * This step creates shipping method adjustments for a cart.
 */
exports.createShippingMethodAdjustmentsStep = (0, workflows_sdk_1.createStep)(exports.createShippingMethodAdjustmentsStepId, async (data, { container }) => {
    const { shippingMethodAdjustmentsToCreate = [] } = data;
    const cartModuleService = container.resolve(utils_1.Modules.CART);
    const createdShippingMethodAdjustments = await cartModuleService.addShippingMethodAdjustments(shippingMethodAdjustmentsToCreate);
    return new workflows_sdk_1.StepResponse(void 0, createdShippingMethodAdjustments);
}, async (createdShippingMethodAdjustments, { container }) => {
    const cartModuleService = container.resolve(utils_1.Modules.CART);
    if (!createdShippingMethodAdjustments?.length) {
        return;
    }
    await cartModuleService.softDeleteShippingMethodAdjustments(createdShippingMethodAdjustments.map((c) => c.id));
});
//# sourceMappingURL=create-shipping-method-adjustments.js.map