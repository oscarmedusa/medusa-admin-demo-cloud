"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComputedActionsForBuyGet = getComputedActionsForBuyGet;
exports.sortByBuyGetType = sortByBuyGetType;
const utils_1 = require("@medusajs/framework/utils");
const validations_1 = require("../validations");
const usage_1 = require("./usage");
function sortByPrice(a, b) {
    return utils_1.MathBN.lt(a.subtotal, b.subtotal) ? 1 : -1;
}
/*
  Grabs all the items in the context where the rules apply
  We then sort by price to prioritize most valuable item
*/
function filterItemsByPromotionRules(itemsContext, rules) {
    return itemsContext
        .filter((item) => (0, validations_1.areRulesValidForContext)(rules || [], item, utils_1.ApplicationMethodTargetType.ITEMS))
        .sort(sortByPrice);
}
function getComputedActionsForBuyGet(promotion, itemsContext, methodIdPromoValueMap, eligibleBuyItemMap, eligibleTargetItemMap) {
    const computedActions = [];
    const minimumBuyQuantity = utils_1.MathBN.convert(promotion.application_method?.buy_rules_min_quantity ?? 0);
    const itemsMap = new Map(itemsContext.map((i) => [i.id, i]));
    if (!itemsContext) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `"items" should be present as an array in the context to compute actions`);
    }
    const eligibleBuyItems = filterItemsByPromotionRules(itemsContext, promotion.application_method?.buy_rules);
    const eligibleBuyItemQuantity = utils_1.MathBN.sum(...eligibleBuyItems.map((item) => item.quantity));
    /*
      Get the total quantity of items where buy rules apply. If the total sum of eligible items
      does not match up to the minimum buy quantity set on the promotion, return early.
    */
    if (utils_1.MathBN.gt(minimumBuyQuantity, eligibleBuyItemQuantity)) {
        return [];
    }
    /*
      Eligibility of a BuyGet promotion can span across line items. Once an item has been chosen
      as eligible, we can't use this item or its partial remaining quantity when we apply the promotion on
      the target item.
  
      We build the map here to use when we apply promotions on the target items.
    */
    for (const eligibleBuyItem of eligibleBuyItems) {
        const eligibleItemsByPromotion = eligibleBuyItemMap.get(promotion.code) || [];
        const accumulatedQuantity = eligibleItemsByPromotion.reduce((acc, item) => utils_1.MathBN.sum(acc, item.quantity), utils_1.MathBN.convert(0));
        // If we have reached the minimum buy quantity from the eligible items for this promotion,
        // we can break early and continue to applying the target items
        if (utils_1.MathBN.gte(accumulatedQuantity, minimumBuyQuantity)) {
            break;
        }
        const eligibleQuantity = utils_1.MathBN.sum(...eligibleItemsByPromotion
            .filter((buy) => buy.item_id === eligibleBuyItem.id)
            .map((b) => b.quantity));
        const reservableQuantity = utils_1.MathBN.min(eligibleBuyItem.quantity, utils_1.MathBN.sub(minimumBuyQuantity, eligibleQuantity));
        // If we have reached the required minimum quantity, we break the loop early
        if (utils_1.MathBN.lte(reservableQuantity, 0)) {
            break;
        }
        eligibleItemsByPromotion.push({
            item_id: eligibleBuyItem.id,
            quantity: utils_1.MathBN.min(eligibleBuyItem.quantity, reservableQuantity).toNumber(),
        });
        eligibleBuyItemMap.set(promotion.code, eligibleItemsByPromotion);
    }
    const eligibleTargetItems = filterItemsByPromotionRules(itemsContext, promotion.application_method?.target_rules);
    const targetQuantity = utils_1.MathBN.convert(promotion.application_method?.apply_to_quantity ?? 0);
    /*
      In this loop, we build a map of eligible target items and quantity applicable to these items.
  
      Here we remove the quantity we used previously to identify eligible buy items
      from the eligible target items.
      
      This is done to prevent applying promotion to the same item we use to qualify the buy rules.
    */
    for (const eligibleTargetItem of eligibleTargetItems) {
        const inapplicableQuantity = utils_1.MathBN.sum(...Array.from(eligibleBuyItemMap.values())
            .flat(1)
            .filter((buy) => buy.item_id === eligibleTargetItem.id)
            .map((b) => b.quantity));
        const applicableQuantity = utils_1.MathBN.sub(eligibleTargetItem.quantity, inapplicableQuantity);
        const fulfillableQuantity = utils_1.MathBN.min(targetQuantity, applicableQuantity);
        // If we have reached the required quantity to target from this item, we
        // move on to the next item
        if (utils_1.MathBN.lte(fulfillableQuantity, 0)) {
            continue;
        }
        const targetItemsByPromotion = eligibleTargetItemMap.get(promotion.code) || [];
        targetItemsByPromotion.push({
            item_id: eligibleTargetItem.id,
            quantity: utils_1.MathBN.min(fulfillableQuantity, targetQuantity).toNumber(),
        });
        eligibleTargetItemMap.set(promotion.code, targetItemsByPromotion);
    }
    const targetItemsByPromotion = eligibleTargetItemMap.get(promotion.code) || [];
    const targettableQuantity = targetItemsByPromotion.reduce((sum, item) => utils_1.MathBN.sum(sum, item.quantity), utils_1.MathBN.convert(0));
    // If we were able to match the target requirements across all line items, we return early.
    if (utils_1.MathBN.lt(targettableQuantity, targetQuantity)) {
        return [];
    }
    let remainingQtyToApply = utils_1.MathBN.convert(targetQuantity);
    for (const targetItem of targetItemsByPromotion) {
        const item = itemsMap.get(targetItem.item_id);
        const appliedPromoValue = methodIdPromoValueMap.get(item.id) ?? utils_1.MathBN.convert(0);
        const multiplier = utils_1.MathBN.min(targetItem.quantity, remainingQtyToApply);
        const amount = utils_1.MathBN.mult(utils_1.MathBN.div(item.subtotal, item.quantity), multiplier);
        const newRemainingQtyToApply = utils_1.MathBN.sub(remainingQtyToApply, multiplier);
        if (utils_1.MathBN.lt(newRemainingQtyToApply, 0) || utils_1.MathBN.lte(amount, 0)) {
            break;
        }
        else {
            remainingQtyToApply = newRemainingQtyToApply;
        }
        const budgetExceededAction = (0, usage_1.computeActionForBudgetExceeded)(promotion, amount);
        if (budgetExceededAction) {
            computedActions.push(budgetExceededAction);
            continue;
        }
        methodIdPromoValueMap.set(item.id, utils_1.MathBN.add(appliedPromoValue, amount).toNumber());
        computedActions.push({
            action: utils_1.ComputedActions.ADD_ITEM_ADJUSTMENT,
            item_id: item.id,
            amount,
            code: promotion.code,
        });
    }
    return computedActions;
}
function sortByBuyGetType(a, b) {
    if (a.type === utils_1.PromotionType.BUYGET && b.type !== utils_1.PromotionType.BUYGET) {
        return -1;
    }
    else if (a.type !== utils_1.PromotionType.BUYGET &&
        b.type === utils_1.PromotionType.BUYGET) {
        return 1;
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=buy-get.js.map