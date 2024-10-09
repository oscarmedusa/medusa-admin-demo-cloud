"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const middlewares_1 = require("../../../utils/middlewares");
const helpers_1 = require("../helpers");
const GET = async (req, res) => {
    const withInventoryQuantity = req.remoteQueryConfig.fields.some((field) => field.includes("variants.inventory_quantity"));
    if (withInventoryQuantity) {
        req.remoteQueryConfig.fields = req.remoteQueryConfig.fields.filter((field) => !field.includes("variants.inventory_quantity"));
    }
    const filters = {
        id: req.params.id,
        ...req.filterableFields,
    };
    if ((0, utils_1.isPresent)(req.pricingContext)) {
        filters["context"] = {
            "variants.calculated_price": { context: req.pricingContext },
        };
    }
    const product = await (0, helpers_1.refetchProduct)(filters, req.scope, req.remoteQueryConfig.fields);
    if (!product) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Product with id: ${req.params.id} was not found`);
    }
    if (withInventoryQuantity) {
        await (0, middlewares_1.wrapVariantsWithInventoryQuantity)(req, product.variants || []);
    }
    await (0, helpers_1.wrapProductsWithTaxPrices)(req, [product]);
    res.json({ product });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map