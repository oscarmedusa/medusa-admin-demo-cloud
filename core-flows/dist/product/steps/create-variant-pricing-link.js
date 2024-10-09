"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVariantPricingLinkStep = exports.createVariantPricingLinkStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.createVariantPricingLinkStepId = "create-variant-pricing-link";
/**
 * This step creates links between variant and price set records.
 */
exports.createVariantPricingLinkStep = (0, workflows_sdk_1.createStep)(exports.createVariantPricingLinkStepId, async (data, { container }) => {
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    await remoteLink.create(data.links.map((entry) => ({
        [utils_1.Modules.PRODUCT]: {
            variant_id: entry.variant_id,
        },
        [utils_1.Modules.PRICING]: {
            price_set_id: entry.price_set_id,
        },
    })));
    return new workflows_sdk_1.StepResponse(void 0, data);
}, async (data, { container }) => {
    if (!data?.links?.length) {
        return;
    }
    const remoteLink = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_LINK);
    const links = data.links.map((entry) => ({
        [utils_1.Modules.PRODUCT]: {
            variant_id: entry.variant_id,
        },
        [utils_1.Modules.PRICING]: {
            price_set_id: entry.price_set_id,
        },
    }));
    await remoteLink.dismiss(links);
});
//# sourceMappingURL=create-variant-pricing-link.js.map