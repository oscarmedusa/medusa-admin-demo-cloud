"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStoresWorkflow = exports.createStoresWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const steps_1 = require("../steps");
const pricing_1 = require("../../pricing");
exports.createStoresWorkflowId = "create-stores";
/**
 * This workflow creates one or more stores.
 */
exports.createStoresWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createStoresWorkflowId, (input) => {
    const normalizedInput = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return data.input.stores.map((store) => {
            return {
                ...store,
                supported_currencies: store.supported_currencies?.map((currency) => {
                    return {
                        currency_code: currency.currency_code,
                        is_default: currency.is_default,
                    };
                }),
            };
        });
    });
    const stores = (0, steps_1.createStoresStep)(normalizedInput);
    const upsertPricePreferences = (0, workflows_sdk_1.transform)({ input }, (data) => {
        const toUpsert = new Map();
        data.input.stores.forEach((store) => {
            store.supported_currencies.forEach((currency) => {
                toUpsert.set(currency.currency_code, {
                    attribute: "currency_code",
                    value: currency.currency_code,
                    is_tax_inclusive: currency.is_tax_inclusive,
                });
            });
        });
        return Array.from(toUpsert.values());
    });
    (0, pricing_1.updatePricePreferencesAsArrayStep)(upsertPricePreferences);
    return new workflows_sdk_1.WorkflowResponse(stores);
});
//# sourceMappingURL=create-stores.js.map