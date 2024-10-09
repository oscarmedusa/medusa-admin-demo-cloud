"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapProductsWithTaxPrices = exports.maybeApplyStockLocationId = exports.refetchProduct = void 0;
const http_1 = require("@medusajs/framework/http");
const utils_1 = require("@medusajs/framework/utils");
const refetchProduct = async (idOrFilter, scope, fields) => {
    return await (0, http_1.refetchEntity)("product", idOrFilter, scope, fields);
};
exports.refetchProduct = refetchProduct;
const maybeApplyStockLocationId = async (req, ctx) => {
    const withInventoryQuantity = req.remoteQueryConfig.fields.some((field) => field.includes("variants.inventory_quantity"));
    if (!withInventoryQuantity) {
        return;
    }
    const salesChannelId = req.filterableFields.sales_channel_id || [];
    const entities = await (0, http_1.refetchEntities)("sales_channel_location", { sales_channel_id: salesChannelId }, req.scope, ["stock_location_id"]);
    return entities.map((entity) => entity.stock_location_id);
};
exports.maybeApplyStockLocationId = maybeApplyStockLocationId;
const wrapProductsWithTaxPrices = async (req, products) => {
    // If we are missing the necessary context, we can't calculate the tax, so only `calculated_amount` will be available
    if (!req.taxContext?.taxInclusivityContext ||
        !req.taxContext?.taxLineContext) {
        return;
    }
    // If automatic taxes are not enabled, we should skip calculating any tax
    if (!req.taxContext.taxInclusivityContext.automaticTaxes) {
        return;
    }
    const taxService = req.scope.resolve(utils_1.Modules.TAX);
    const taxRates = (await taxService.getTaxLines(products.map(asTaxItem).flat(), req.taxContext.taxLineContext));
    const taxRatesMap = new Map();
    taxRates.forEach((taxRate) => {
        if (!taxRatesMap.has(taxRate.line_item_id)) {
            taxRatesMap.set(taxRate.line_item_id, []);
        }
        taxRatesMap.get(taxRate.line_item_id)?.push(taxRate);
    });
    products.forEach((product) => {
        product.variants?.forEach((variant) => {
            if (!variant.calculated_price) {
                return;
            }
            const taxRatesForVariant = taxRatesMap.get(variant.id) || [];
            const { priceWithTax, priceWithoutTax } = (0, utils_1.calculateAmountsWithTax)({
                taxLines: taxRatesForVariant,
                amount: variant.calculated_price.calculated_amount,
                includesTax: variant.calculated_price.is_calculated_price_tax_inclusive,
            });
            variant.calculated_price.calculated_amount_with_tax = priceWithTax;
            variant.calculated_price.calculated_amount_without_tax = priceWithoutTax;
        });
    });
};
exports.wrapProductsWithTaxPrices = wrapProductsWithTaxPrices;
const asTaxItem = (product) => {
    return product.variants
        ?.map((variant) => {
        if (!variant.calculated_price) {
            return;
        }
        return {
            id: variant.id,
            product_id: product.id,
            product_name: product.title,
            product_categories: product.categories?.map((c) => c.name),
            // TODO: It is strange that we only accept a single category, revisit the tax module implementation
            product_category_id: product.categories?.[0]?.id,
            product_sku: variant.sku,
            product_type: product.type,
            product_type_id: product.type_id,
            quantity: 1,
            unit_price: variant.calculated_price.calculated_amount,
            currency_code: variant.calculated_price.currency_code,
        };
    })
        .filter((v) => !!v);
};
//# sourceMappingURL=helpers.js.map