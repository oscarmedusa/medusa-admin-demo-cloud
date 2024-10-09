"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareConfirmInventoryInput = void 0;
const utils_1 = require("@medusajs/framework/utils");
const prepareConfirmInventoryInput = (data) => {
    const productVariantInventoryItems = new Map();
    const stockLocationIds = new Set();
    const allVariants = new Map();
    let hasSalesChannelStockLocation = false;
    let hasManagedInventory = false;
    const salesChannelId = data.input.sales_channel_id;
    for (const updateItem of data.input.itemsToUpdate ?? []) {
        const item = data.input.items.find((item) => item.variant_id === updateItem.data.variant_id);
        if (item && updateItem.data.quantity) {
            item.quantity = updateItem.data.quantity;
        }
    }
    (0, utils_1.deepFlatMap)(data.input, "variants.inventory_items.inventory.location_levels.stock_locations.sales_channels", ({ variants, inventory_items, stock_locations, sales_channels }) => {
        if (!variants) {
            return;
        }
        if (!hasSalesChannelStockLocation &&
            sales_channels?.id === salesChannelId) {
            hasSalesChannelStockLocation = true;
        }
        if (stock_locations) {
            stockLocationIds.add(stock_locations.id);
        }
        if (inventory_items) {
            const inventoryItemId = inventory_items.inventory_item_id;
            if (!productVariantInventoryItems.has(inventoryItemId)) {
                productVariantInventoryItems.set(inventoryItemId, {
                    variant_id: inventory_items.variant_id,
                    inventory_item_id: inventoryItemId,
                    required_quantity: inventory_items.required_quantity,
                });
            }
        }
        if (!allVariants.has(variants.id)) {
            if (!hasManagedInventory && variants.manage_inventory) {
                hasManagedInventory = true;
            }
            allVariants.set(variants.id, {
                id: variants.id,
                manage_inventory: variants.manage_inventory,
                allow_backorder: variants.allow_backorder,
            });
        }
    });
    if (!hasManagedInventory) {
        return { items: [] };
    }
    if (salesChannelId && !hasSalesChannelStockLocation) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Sales channel ${salesChannelId} is not associated with any stock location.`);
    }
    const items = formatInventoryInput({
        product_variant_inventory_items: Array.from(productVariantInventoryItems.values()),
        location_ids: Array.from(stockLocationIds),
        items: data.input.items,
        variants: Array.from(allVariants.values()),
    });
    return { items };
};
exports.prepareConfirmInventoryInput = prepareConfirmInventoryInput;
const formatInventoryInput = ({ product_variant_inventory_items, location_ids, items, variants, }) => {
    if (!product_variant_inventory_items.length) {
        return [];
    }
    const variantsMap = new Map(variants.map((v) => [v.id, v]));
    const itemsToConfirm = [];
    items.forEach((item) => {
        const variant = variantsMap.get(item.variant_id);
        if (!variant?.manage_inventory) {
            return;
        }
        const variantInventoryItem = product_variant_inventory_items.find((i) => i.variant_id === item.variant_id);
        if (!variantInventoryItem) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Variant ${item.variant_id} does not have any inventory items associated with it.`);
        }
        itemsToConfirm.push({
            id: item.id,
            inventory_item_id: variantInventoryItem.inventory_item_id,
            required_quantity: variantInventoryItem.required_quantity,
            allow_backorder: !!variant.allow_backorder,
            quantity: item.quantity, // TODO: update type to BigNumberInput
            location_ids: location_ids,
        });
    });
    return itemsToConfirm;
};
//# sourceMappingURL=prepare-confirm-inventory-input.js.map