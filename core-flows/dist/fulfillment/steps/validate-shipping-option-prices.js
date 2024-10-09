"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateShippingOptionPricesStep = exports.validateShippingOptionPricesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateShippingOptionPricesStepId = "validate-shipping-option-prices";
/**
 * Validate that regions exist for the shipping option prices.
 */
exports.validateShippingOptionPricesStep = (0, workflows_sdk_1.createStep)(exports.validateShippingOptionPricesStepId, async (options, { container }) => {
    const allPrices = options.flatMap((option) => option.prices ?? []);
    const regionIdSet = new Set();
    allPrices.forEach((price) => {
        if ("region_id" in price && price.region_id) {
            regionIdSet.add(price.region_id);
        }
    });
    if (regionIdSet.size === 0) {
        return new workflows_sdk_1.StepResponse(void 0);
    }
    const regionService = container.resolve(utils_1.Modules.REGION);
    const regionList = await regionService.listRegions({
        id: Array.from(regionIdSet),
    });
    if (regionList.length !== regionIdSet.size) {
        const missingRegions = Array.from(regionIdSet).filter((id) => !regionList.some((region) => region.id === id));
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Cannot create prices for non-existent regions. Region with ids [${missingRegions.join(", ")}] were not found.`);
    }
    return new workflows_sdk_1.StepResponse(void 0);
});
//# sourceMappingURL=validate-shipping-option-prices.js.map