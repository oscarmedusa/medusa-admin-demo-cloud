"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPriceSetsStep = exports.createPriceSetsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createPriceSetsStepId = "create-price-sets";
/**
 * This step creates one or more price sets.
 */
exports.createPriceSetsStep = (0, workflows_sdk_1.createStep)(exports.createPriceSetsStepId, async (data, { container }) => {
    const pricingModule = container.resolve(utils_1.Modules.PRICING);
    const priceSets = await pricingModule.createPriceSets(data);
    return new workflows_sdk_1.StepResponse(priceSets, priceSets.map((priceSet) => priceSet.id));
}, async (priceSets, { container }) => {
    if (!priceSets?.length) {
        return;
    }
    const pricingModule = container.resolve(utils_1.Modules.PRICING);
    await pricingModule.deletePriceSets(priceSets);
});
//# sourceMappingURL=create-price-sets.js.map