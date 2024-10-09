"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartPromotionsWorkflow = exports.updateCartPromotionsWorkflowId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const common_1 = require("../../common");
const steps_1 = require("../steps");
const update_cart_promotions_1 = require("../steps/update-cart-promotions");
const fields_1 = require("../utils/fields");
exports.updateCartPromotionsWorkflowId = "update-cart-promotions";
/**
 * This workflow updates a cart's promotions.
 */
exports.updateCartPromotionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateCartPromotionsWorkflowId, (input) => {
    const cart = (0, common_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart_id },
        list: false,
    });
    const promotionCodesToApply = (0, steps_1.getPromotionCodesToApply)({
        cart: cart,
        promo_codes: input.promo_codes ?? [],
        action: input.action || utils_1.PromotionActions.ADD,
    });
    const actions = (0, steps_1.getActionsToComputeFromPromotionsStep)({
        cart,
        promotionCodesToApply,
    });
    const { lineItemAdjustmentsToCreate, lineItemAdjustmentIdsToRemove, shippingMethodAdjustmentsToCreate, shippingMethodAdjustmentIdsToRemove, computedPromotionCodes, } = (0, steps_1.prepareAdjustmentsFromPromotionActionsStep)({ actions });
    (0, workflows_sdk_1.parallelize)((0, steps_1.removeLineItemAdjustmentsStep)({ lineItemAdjustmentIdsToRemove }), (0, steps_1.removeShippingMethodAdjustmentsStep)({
        shippingMethodAdjustmentIdsToRemove,
    }), (0, steps_1.createLineItemAdjustmentsStep)({ lineItemAdjustmentsToCreate }), (0, steps_1.createShippingMethodAdjustmentsStep)({
        shippingMethodAdjustmentsToCreate,
    }), (0, update_cart_promotions_1.updateCartPromotionsStep)({
        id: input.cart_id,
        promo_codes: computedPromotionCodes,
        action: utils_1.PromotionActions.REPLACE,
    }));
});
//# sourceMappingURL=update-cart-promotions.js.map