"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPromotionCodesToApply = exports.getPromotionCodesToApplyId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.getPromotionCodesToApplyId = "get-promotion-codes-to-apply";
/**
 * This step retrieves the promotion codes to apply on a cart.
 */
exports.getPromotionCodesToApply = (0, workflows_sdk_1.createStep)(exports.getPromotionCodesToApplyId, async (data, { container }) => {
    const { promo_codes = [], cart, action = utils_1.PromotionActions.ADD } = data;
    const { items = [], shipping_methods = [] } = cart;
    const adjustmentCodes = [];
    const promotionService = container.resolve(utils_1.Modules.PROMOTION);
    const objects = items.concat(shipping_methods);
    objects.forEach((object) => {
        object.adjustments?.forEach((adjustment) => {
            if (adjustment.code && !adjustmentCodes.includes(adjustment.code)) {
                adjustmentCodes.push(adjustment.code);
            }
        });
    });
    const promotionCodesToApply = new Set((await promotionService.listPromotions({ code: adjustmentCodes }, { select: ["code"] })).map((p) => p.code));
    if (action === utils_1.PromotionActions.ADD) {
        promo_codes.forEach((code) => promotionCodesToApply.add(code));
    }
    if (action === utils_1.PromotionActions.REMOVE) {
        promo_codes.forEach((code) => promotionCodesToApply.delete(code));
    }
    if (action === utils_1.PromotionActions.REPLACE) {
        promotionCodesToApply.clear();
        promo_codes.forEach((code) => promotionCodesToApply.add(code));
    }
    return new workflows_sdk_1.StepResponse(Array.from(promotionCodesToApply));
});
//# sourceMappingURL=get-promotion-codes-to-apply.js.map