"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveInventoryStep = exports.reserveInventoryStepId = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.reserveInventoryStepId = "reserve-inventory-step";
/**
 * This step reserves the quantity of line items from the associated
 * variant's inventory.
 */
exports.reserveInventoryStep = (0, workflows_sdk_1.createStep)(exports.reserveInventoryStepId, async (data, { container }) => {
    const inventoryService = container.resolve(utils_1.Modules.INVENTORY);
    const items = data.items.map((item) => ({
        line_item_id: item.id,
        inventory_item_id: item.inventory_item_id,
        quantity: utils_1.MathBN.mult(item.required_quantity, item.quantity),
        allow_backorder: item.allow_backorder,
        location_id: item.location_ids[0],
    }));
    const reservations = await inventoryService.createReservationItems(items);
    return new workflows_sdk_1.StepResponse(reservations, {
        reservations: reservations.map((r) => r.id),
    });
}, async (data, { container }) => {
    if (!data) {
        return;
    }
    const inventoryService = container.resolve(utils_1.Modules.INVENTORY);
    await inventoryService.deleteReservationItems(data.reservations);
    return new workflows_sdk_1.StepResponse();
});
//# sourceMappingURL=reserve-inventory.js.map