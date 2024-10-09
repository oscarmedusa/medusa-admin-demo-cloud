"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLineItemsWorkflow = exports.deleteLineItemsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const update_cart_promotions_1 = require("../../cart/workflows/update-cart-promotions");
const delete_line_items_1 = require("../steps/delete-line-items");
// TODO: The DeleteLineItemsWorkflow are missing the following steps:
// - Refresh/delete shipping methods (fulfillment module)
// - Refresh line item adjustments (promotion module)
// - Update payment sessions (payment module)
exports.deleteLineItemsWorkflowId = "delete-line-items";
/**
 * This workflow deletes line items from a cart.
 */
exports.deleteLineItemsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteLineItemsWorkflowId, (input) => {
    (0, delete_line_items_1.deleteLineItemsStep)(input.ids);
    update_cart_promotions_1.updateCartPromotionsWorkflow.runAsStep({
        input: {
            cart_id: input.cart_id,
        },
    });
});
//# sourceMappingURL=delete-line-items.js.map