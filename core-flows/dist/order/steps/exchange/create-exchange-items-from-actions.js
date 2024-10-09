"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderExchangeItemsFromActionsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
/**
 * This step creates exchange items from change actions.
 */
exports.createOrderExchangeItemsFromActionsStep = (0, workflows_sdk_1.createStep)("create-exchange-items-from-change-actions", async (input, { container }) => {
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    const exchangeItems = input.changes.map((item) => {
        return {
            exchange_id: input.exchangeId,
            item_id: item.details?.reference_id,
            quantity: item.details?.quantity,
            note: item.internal_note,
            metadata: item.details?.metadata ?? {},
        };
    });
    const createdExchangeItems = await orderModuleService.createOrderExchangeItems(exchangeItems);
    return new workflows_sdk_1.StepResponse(createdExchangeItems, createdExchangeItems.map((i) => i.id));
}, async (ids, { container }) => {
    if (!ids) {
        return;
    }
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    await orderModuleService.deleteOrderExchangeItems(ids);
});
//# sourceMappingURL=create-exchange-items-from-actions.js.map