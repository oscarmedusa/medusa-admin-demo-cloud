"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineItemActionsStep = exports.getLineItemActionsStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.getLineItemActionsStepId = "get-line-item-actions-step";
/**
 * This step returns lists of cart line items to create or update based on the
 * provided input.
 */
exports.getLineItemActionsStep = (0, workflows_sdk_1.createStep)(exports.getLineItemActionsStepId, async (data, { container }) => {
    const cartModule = container.resolve(utils_1.Modules.CART);
    const existingVariantItems = await cartModule.listLineItems({
        cart_id: data.id,
        variant_id: data.items.map((d) => d.variant_id),
    });
    const variantItemMap = new Map(existingVariantItems.map((item) => [item.variant_id, item]));
    const itemsToCreate = [];
    const itemsToUpdate = [];
    for (const item of data.items) {
        const existingItem = variantItemMap.get(item.variant_id);
        const metadataMatches = (!(0, utils_1.isPresent)(existingItem?.metadata) && !(0, utils_1.isPresent)(item.metadata)) ||
            (0, utils_1.deepEqualObj)(existingItem?.metadata, item.metadata);
        if (existingItem && metadataMatches) {
            const quantity = utils_1.MathBN.sum(existingItem.quantity, item.quantity || 1).toNumber();
            itemsToUpdate.push({
                selector: { id: existingItem.id },
                data: {
                    id: existingItem.id,
                    quantity: quantity,
                    variant_id: item.variant_id,
                },
            });
        }
        else {
            itemsToCreate.push(item);
        }
    }
    return new workflows_sdk_1.StepResponse({ itemsToCreate, itemsToUpdate }, null);
});
//# sourceMappingURL=get-line-item-actions.js.map