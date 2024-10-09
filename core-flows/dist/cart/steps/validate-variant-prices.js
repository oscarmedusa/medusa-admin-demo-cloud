"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVariantPricesStep = exports.validateVariantPricesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateVariantPricesStepId = "validate-variant-prices";
/**
 * This step validates the specified variant objects to ensure they have prices.
 */
exports.validateVariantPricesStep = (0, workflows_sdk_1.createStep)(exports.validateVariantPricesStepId, async (data, { container }) => {
    const priceNotFound = [];
    for (const variant of data.variants) {
        if (!(0, utils_1.isPresent)(variant?.calculated_price?.calculated_amount)) {
            priceNotFound.push(variant.id);
        }
    }
    if (priceNotFound.length > 0) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Variants with IDs ${priceNotFound.join(", ")} do not have a price`);
    }
});
//# sourceMappingURL=validate-variant-prices.js.map