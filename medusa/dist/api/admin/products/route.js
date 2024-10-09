"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const http_1 = require("@medusajs/framework/http");
const helpers_1 = require("./helpers");
const GET = async (req, res) => {
    const selectFields = (0, helpers_1.remapKeysForProduct)(req.remoteQueryConfig.fields ?? []);
    const { rows: products, metadata } = await (0, http_1.refetchEntities)("product", req.filterableFields, req.scope, selectFields, req.remoteQueryConfig.pagination);
    res.json({
        products: products.map(helpers_1.remapProductResponse),
        count: metadata.count,
        offset: metadata.skip,
        limit: metadata.take,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { additional_data, ...products } = req.validatedBody;
    const { result } = await (0, core_flows_1.createProductsWorkflow)(req.scope).run({
        input: { products: [products], additional_data },
    });
    const product = await (0, http_1.refetchEntity)("product", result[0].id, req.scope, (0, helpers_1.remapKeysForProduct)(req.remoteQueryConfig.fields ?? []));
    res.status(200).json({ product: (0, helpers_1.remapProductResponse)(product) });
};
exports.POST = POST;
//# sourceMappingURL=route.js.map