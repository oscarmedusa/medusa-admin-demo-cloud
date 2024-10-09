"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const middlewares_1 = require("../../utils/middlewares");
const helpers_1 = require("./helpers");
const GET = async (req, res) => {
    const remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const context = {};
    const withInventoryQuantity = req.remoteQueryConfig.fields.some((field) => field.includes("variants.inventory_quantity"));
    if (withInventoryQuantity) {
        req.remoteQueryConfig.fields = req.remoteQueryConfig.fields.filter((field) => !field.includes("variants.inventory_quantity"));
    }
    if ((0, utils_1.isPresent)(req.pricingContext)) {
        context["variants.calculated_price"] = {
            context: req.pricingContext,
        };
    }
    const queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "product",
        variables: {
            filters: req.filterableFields,
            ...req.remoteQueryConfig.pagination,
            ...context,
        },
        fields: req.remoteQueryConfig.fields,
    });
    const { rows: products, metadata } = await remoteQuery(queryObject);
    if (withInventoryQuantity) {
        await (0, middlewares_1.wrapVariantsWithInventoryQuantity)(req, products.map((product) => product.variants).flat(1));
    }
    await (0, helpers_1.wrapProductsWithTaxPrices)(req, products);
    res.json({
        products,
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map