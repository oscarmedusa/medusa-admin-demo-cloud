"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapVariantsWithInventoryQuantity = void 0;
exports.getVariantInventoryItems = getVariantInventoryItems;
exports.computeVariantInventoryQuantity = computeVariantInventoryQuantity;
const utils_1 = require("@medusajs/framework/utils");
async function getVariantInventoryItems({ req, variantIds, additionalFilters = {}, asMap = true, }) {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const linkQuery = (0, utils_1.remoteQueryObjectFromString)({
        service: utils_1.LINKS.ProductVariantInventoryItem,
        variables: {
            filters: {
                variant_id: variantIds,
            },
            ...additionalFilters,
        },
        fields: [
            "variant_id",
            "variant.manage_inventory",
            "variant.allow_backorder",
            "required_quantity",
            "inventory.*",
            "inventory.location_levels.*",
        ],
    });
    const links = await remoteQuery(linkQuery);
    if (!asMap) {
        return links;
    }
    const variantInventoriesMap = new Map();
    links.forEach((link) => {
        const array = variantInventoriesMap.get(link.variant_id) || [];
        array.push(link);
        variantInventoriesMap.set(link.variant_id, array);
    });
    return variantInventoriesMap;
}
async function computeVariantInventoryQuantity({ variantInventoryItems, }) {
    const links = variantInventoryItems;
    const inventoryQuantities = [];
    for (const link of links) {
        const requiredQuantity = link.required_quantity;
        const availableQuantity = (link.inventory?.location_levels || []).reduce((sum, level) => sum + (level?.available_quantity || 0), 0);
        // This will give us the maximum deliverable quantities for each inventory item
        const maxInventoryQuantity = Math.floor(availableQuantity / requiredQuantity);
        inventoryQuantities.push(maxInventoryQuantity);
    }
    // Since each of these inventory items need to be available to perform an order,
    // we pick the smallest of the deliverable quantities as the total inventory quantity.
    return inventoryQuantities.length ? Math.min(...inventoryQuantities) : 0;
}
const wrapVariantsWithInventoryQuantity = async (req, variants) => {
    variants ??= [];
    const variantIds = variants.map((variant) => variant.id).flat(1);
    if (!variantIds.length) {
        return;
    }
    const variantInventoriesMap = await getVariantInventoryItems({
        req,
        variantIds,
    });
    for (const variant of variants) {
        if (!variant.manage_inventory) {
            continue;
        }
        const links = variantInventoriesMap.get(variant.id) || [];
        variant.inventory_quantity = await computeVariantInventoryQuantity({
            variantInventoryItems: links,
        });
    }
};
exports.wrapVariantsWithInventoryQuantity = wrapVariantsWithInventoryQuantity;
//# sourceMappingURL=variant-inventory-quantity.js.map