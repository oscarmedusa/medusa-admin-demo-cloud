"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCartStep = exports.validateCartStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateCartStepId = "validate-cart";
/**
 * This step validates a cart's before editing it.
 */
exports.validateCartStep = (0, workflows_sdk_1.createStep)(exports.validateCartStepId, async (data) => {
    const { cart } = data;
    if (!(0, utils_1.isPresent)(cart)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cart does not exist`);
    }
    if (cart.completed_at) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cart ${cart.id} is already completed.`);
    }
});
//# sourceMappingURL=validate-cart.js.map