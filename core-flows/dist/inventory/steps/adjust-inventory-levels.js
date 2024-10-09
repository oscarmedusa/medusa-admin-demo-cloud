"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustInventoryLevelsStep = exports.adjustInventoryLevelsStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.adjustInventoryLevelsStepId = "adjust-inventory-levels-step";
/**
 * This step adjusts one or more inventory levels.
 */
exports.adjustInventoryLevelsStep = (0, workflows_sdk_1.createStep)(exports.adjustInventoryLevelsStepId, async (input, { container }) => {
    const inventoryService = container.resolve(utils_1.Modules.INVENTORY);
    const adjustedLevels = await inventoryService.adjustInventory(input.map((item) => {
        return {
            inventoryItemId: item.inventory_item_id,
            locationId: item.location_id,
            adjustment: item.adjustment,
        };
    }));
    return new workflows_sdk_1.StepResponse(adjustedLevels, input.map((item) => {
        return {
            ...item,
            adjustment: utils_1.MathBN.mult(item.adjustment, -1),
        };
    }));
}, async (adjustedLevels, { container }) => {
    if (!adjustedLevels) {
        return;
    }
    const inventoryService = container.resolve(utils_1.Modules.INVENTORY);
    /**
     * @todo
     * The method "adjustInventory" was broken, it was receiving the
     * "inventoryItemId" and "locationId" as snake case, whereas
     * the expected object needed these properties as camelCase
     */
    await inventoryService.adjustInventory(adjustedLevels.map((level) => {
        return {
            inventoryItemId: level.inventory_item_id,
            locationId: level.location_id,
            adjustment: level.adjustment,
        };
    }));
});
//# sourceMappingURL=adjust-inventory-levels.js.map