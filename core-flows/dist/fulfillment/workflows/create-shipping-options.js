"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShippingOptionsWorkflow = exports.createShippingOptionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const set_shipping_options_price_sets_1 = require("../steps/set-shipping-options-price-sets");
const validate_fulfillment_providers_1 = require("../steps/validate-fulfillment-providers");
const validate_shipping_option_prices_1 = require("../steps/validate-shipping-option-prices");
exports.createShippingOptionsWorkflowId = "create-shipping-options-workflow";
/**
 * This workflow creates one or more shipping options.
 */
exports.createShippingOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createShippingOptionsWorkflowId, (input) => {
    (0, workflows_sdk_1.parallelize)((0, validate_fulfillment_providers_1.validateFulfillmentProvidersStep)(input), (0, validate_shipping_option_prices_1.validateShippingOptionPricesStep)(input));
    const data = (0, workflows_sdk_1.transform)(input, (data) => {
        const shippingOptionsIndexToPrices = data.map((option, index) => {
            const prices = option.prices;
            return {
                shipping_option_index: index,
                prices,
            };
        });
        return {
            shippingOptions: data,
            shippingOptionsIndexToPrices,
        };
    });
    const createdShippingOptions = (0, steps_1.upsertShippingOptionsStep)(data.shippingOptions);
    const normalizedShippingOptionsPrices = (0, workflows_sdk_1.transform)({
        shippingOptions: createdShippingOptions,
        shippingOptionsIndexToPrices: data.shippingOptionsIndexToPrices,
    }, (data) => {
        const shippingOptionsPrices = data.shippingOptionsIndexToPrices.map(({ shipping_option_index, prices }) => {
            return {
                id: data.shippingOptions[shipping_option_index].id,
                prices,
            };
        });
        return {
            shippingOptionsPrices,
        };
    });
    const shippingOptionsPriceSetsLinkData = (0, steps_1.createShippingOptionsPriceSetsStep)(normalizedShippingOptionsPrices.shippingOptionsPrices);
    const normalizedLinkData = (0, workflows_sdk_1.transform)({
        shippingOptionsPriceSetsLinkData,
    }, (data) => {
        return data.shippingOptionsPriceSetsLinkData.map((item) => {
            return {
                id: item.id,
                price_sets: [item.priceSetId],
            };
        });
    });
    (0, set_shipping_options_price_sets_1.setShippingOptionsPriceSetsStep)(normalizedLinkData);
    return new workflows_sdk_1.WorkflowResponse(createdShippingOptions);
});
//# sourceMappingURL=create-shipping-options.js.map