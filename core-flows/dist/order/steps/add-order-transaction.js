"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderTransactionStep = exports.addOrderTransactionStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.addOrderTransactionStepId = "add-order-transaction";
/**
 * This step creates an order transaction.
 */
exports.addOrderTransactionStep = (0, workflows_sdk_1.createStep)(exports.addOrderTransactionStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.ORDER);
    const created = await service.addOrderTransactions(data);
    return new workflows_sdk_1.StepResponse(created, created.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const service = container.resolve(utils_1.Modules.ORDER);
    await service.deleteOrderTransactions(id);
});
//# sourceMappingURL=add-order-transaction.js.map