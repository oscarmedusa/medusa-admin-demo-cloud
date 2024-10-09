"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderItemTaxLinesStep = exports.getOrderItemTaxLinesStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
function normalizeTaxModuleContext(order, forceTaxCalculation, isReturn, shippingAddress) {
    const address = shippingAddress ?? order.shipping_address;
    const shouldCalculateTax = forceTaxCalculation || order.region?.automatic_taxes;
    if (!shouldCalculateTax) {
        return null;
    }
    if (forceTaxCalculation && !address?.country_code) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `country code is required to calculate taxes`);
    }
    if (!address?.country_code) {
        return null;
    }
    const customer = order.customer && {
        id: order.customer.id,
        email: order.customer.email,
        customer_groups: order.customer.groups?.map((g) => g.id) || [],
    };
    return {
        address: {
            country_code: address.country_code,
            province_code: address.province,
            address_1: address.address_1,
            address_2: address.address_2,
            city: address.city,
            postal_code: address.postal_code,
        },
        customer,
        is_return: isReturn ?? false,
    };
}
function normalizeLineItemsForTax(order, items) {
    return items.map((item) => ({
        id: item.id,
        product_id: item.product_id,
        product_name: item.variant_title,
        product_sku: item.variant_sku,
        product_type: item.product_type,
        product_type_id: item.product_type,
        quantity: item.quantity,
        unit_price: item.unit_price,
        currency_code: order.currency_code,
    }));
}
function normalizeLineItemsForShipping(order, shippingMethods) {
    return shippingMethods.map((shippingMethod) => ({
        id: shippingMethod.id,
        shipping_option_id: shippingMethod.shipping_option_id,
        unit_price: shippingMethod.amount,
        currency_code: order.currency_code,
    }));
}
exports.getOrderItemTaxLinesStepId = "get-order-item-tax-lines";
/**
 * This step retrieves the tax lines for an order's line items and shipping methods.
 */
exports.getOrderItemTaxLinesStep = (0, workflows_sdk_1.createStep)(exports.getOrderItemTaxLinesStepId, async (data, { container }) => {
    const { order, items = [], shipping_methods: shippingMethods = [], force_tax_calculation: forceTaxCalculation = false, is_return: isReturn = false, shipping_address: shippingAddress, } = data;
    const taxService = container.resolve(utils_1.Modules.TAX);
    const taxContext = normalizeTaxModuleContext(order, forceTaxCalculation, isReturn, shippingAddress);
    const stepResponseData = {
        lineItemTaxLines: [],
        shippingMethodsTaxLines: [],
    };
    if (!taxContext) {
        return new workflows_sdk_1.StepResponse(stepResponseData);
    }
    if (items.length) {
        stepResponseData.lineItemTaxLines = (await taxService.getTaxLines(normalizeLineItemsForTax(order, items), taxContext));
    }
    if (shippingMethods.length) {
        stepResponseData.shippingMethodsTaxLines = (await taxService.getTaxLines(normalizeLineItemsForShipping(order, shippingMethods), taxContext));
    }
    return new workflows_sdk_1.StepResponse(stepResponseData);
});
//# sourceMappingURL=get-item-tax-lines.js.map