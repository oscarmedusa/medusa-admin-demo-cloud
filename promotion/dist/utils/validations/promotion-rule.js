"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePromotionRuleAttributes = validatePromotionRuleAttributes;
exports.areRulesValidForContext = areRulesValidForContext;
exports.evaluateRuleValueCondition = evaluateRuleValueCondition;
const utils_1 = require("@medusajs/framework/utils");
function validatePromotionRuleAttributes(promotionRulesData) {
    const errors = [];
    for (const promotionRuleData of promotionRulesData) {
        if (!(0, utils_1.isPresent)(promotionRuleData.attribute)) {
            errors.push("rules[].attribute is a required field");
        }
        if (!(0, utils_1.isPresent)(promotionRuleData.operator)) {
            errors.push("rules[].operator is a required field");
        }
        if ((0, utils_1.isPresent)(promotionRuleData.operator)) {
            const allowedOperators = Object.values(utils_1.PromotionRuleOperator);
            if (!allowedOperators.includes(promotionRuleData.operator)) {
                errors.push(`rules[].operator (${promotionRuleData.operator}) is invalid. It should be one of ${allowedOperators.join(", ")}`);
            }
        }
        else {
            errors.push("rules[].operator is a required field");
        }
    }
    if (!errors.length)
        return;
    throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, errors.join(", "));
}
function areRulesValidForContext(rules, context, contextScope) {
    return rules.every((rule) => {
        const validRuleValues = rule.values?.map((ruleValue) => ruleValue.value);
        if (!rule.attribute) {
            return false;
        }
        const valuesToCheck = (0, utils_1.pickValueFromObject)(fetchRuleAttributeForContext(rule.attribute, contextScope), context);
        return evaluateRuleValueCondition(validRuleValues.filter(utils_1.isString), rule.operator, valuesToCheck);
    });
}
/*
  The context here can either be either:
  - a cart context
  - an item context under a cart
  - a shipping method context under a cart

  The rule's attributes are set from the perspective of the cart context. For example: items.product.id
  
  When the context here is item or shipping_method, we need to drop the "items."" or "shipping_method."
  from the rule attribute string to accurate pick the values from the context.
*/
function fetchRuleAttributeForContext(ruleAttribute, contextScope) {
    if (contextScope === utils_1.ApplicationMethodTargetType.ITEMS) {
        ruleAttribute = ruleAttribute.replace(`${utils_1.ApplicationMethodTargetType.ITEMS}.`, "");
    }
    if (contextScope === utils_1.ApplicationMethodTargetType.SHIPPING_METHODS) {
        ruleAttribute = ruleAttribute.replace(`${utils_1.ApplicationMethodTargetType.SHIPPING_METHODS}.`, "");
    }
    return ruleAttribute;
}
function evaluateRuleValueCondition(ruleValues, operator, ruleValuesToCheck) {
    if (!Array.isArray(ruleValuesToCheck)) {
        ruleValuesToCheck = [ruleValuesToCheck];
    }
    return ruleValuesToCheck.every((ruleValueToCheck) => {
        if (operator === "in" || operator === "eq") {
            return ruleValues.some((ruleValue) => ruleValue === ruleValueToCheck);
        }
        if (operator === "ne") {
            return ruleValues.some((ruleValue) => ruleValue !== ruleValueToCheck);
        }
        if (operator === "gt") {
            return ruleValues.some((ruleValue) => ruleValue > ruleValueToCheck);
        }
        if (operator === "gte") {
            return ruleValues.some((ruleValue) => ruleValue >= ruleValueToCheck);
        }
        if (operator === "lt") {
            return ruleValues.some((ruleValue) => ruleValue < ruleValueToCheck);
        }
        if (operator === "lte") {
            return ruleValues.some((ruleValue) => ruleValue <= ruleValueToCheck);
        }
        return false;
    });
}
//# sourceMappingURL=promotion-rule.js.map