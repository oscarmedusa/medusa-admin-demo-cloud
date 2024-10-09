"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLineItemAdjustmentsStep = exports.createLineItemAdjustmentsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createLineItemAdjustmentsStepId = "create-line-item-adjustments";
/**
 * This step creates line item adjustments in a cart.
 */
exports.createLineItemAdjustmentsStep = (0, workflows_sdk_1.createStep)(exports.createLineItemAdjustmentsStepId, async (data, { container }) => {
    const { lineItemAdjustmentsToCreate = [] } = data;
    const cartModuleService = container.resolve(utils_1.Modules.CART);
    const createdLineItemAdjustments = await cartModuleService.addLineItemAdjustments(lineItemAdjustmentsToCreate);
    return new workflows_sdk_1.StepResponse(void 0, createdLineItemAdjustments);
}, async (createdLineItemAdjustments, { container }) => {
    const cartModuleService = container.resolve(utils_1.Modules.CART);
    if (!createdLineItemAdjustments?.length) {
        return;
    }
    await cartModuleService.softDeleteLineItemAdjustments(createdLineItemAdjustments.map((c) => c.id));
});
//# sourceMappingURL=create-line-item-adjustments.js.map