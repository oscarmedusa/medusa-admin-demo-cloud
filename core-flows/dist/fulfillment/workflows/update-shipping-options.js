"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShippingOptionsWorkflow = exports.updateShippingOptionsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const validate_fulfillment_providers_1 = require("../steps/validate-fulfillment-providers");
const validate_shipping_option_prices_1 = require("../steps/validate-shipping-option-prices");
exports.updateShippingOptionsWorkflowId = "update-shipping-options-workflow";
/**
 * This workflow updates one or more shipping options.
 */
exports.updateShippingOptionsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateShippingOptionsWorkflowId, (input) => {
    (0, workflows_sdk_1.parallelize)((0, validate_fulfillment_providers_1.validateFulfillmentProvidersStep)(input), (0, validate_shipping_option_prices_1.validateShippingOptionPricesStep)(input));
    const data = (0, workflows_sdk_1.transform)(input, (data) => {
        const shippingOptionsIndexToPrices = data.map((option, index) => {
            const prices = option.prices;
            delete option.prices;
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
    const updatedShippingOptions = (0, steps_1.upsertShippingOptionsStep)(data.shippingOptions);
    const normalizedShippingOptionsPrices = (0, workflows_sdk_1.transform)({
        shippingOptions: updatedShippingOptions,
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
    (0, steps_1.setShippingOptionsPricesStep)(normalizedShippingOptionsPrices.shippingOptionsPrices);
    return new workflows_sdk_1.WorkflowResponse(updatedShippingOptions);
});
//# sourceMappingURL=update-shipping-options.js.map