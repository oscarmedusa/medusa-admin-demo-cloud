"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventBuilders = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.eventBuilders = {
    createdProduct: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProduct: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProduct: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product",
        eventsEnum: utils_1.ProductEvents,
    }),
    createdProductVariant: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product_variant",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProductVariant: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product_variant",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProductVariant: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product_variant",
        eventsEnum: utils_1.ProductEvents,
    }),
    createdProductOption: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product_option",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProductOption: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product_option",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProductOption: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product_option",
        eventsEnum: utils_1.ProductEvents,
    }),
    createdProductType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product_type",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProductType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product_type",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProductType: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product_type",
        eventsEnum: utils_1.ProductEvents,
    }),
    createdProductTag: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product_tag",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProductTag: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product_tag",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProductTag: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product_tag",
        eventsEnum: utils_1.ProductEvents,
    }),
    createdProductCategory: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.CREATED,
        object: "product_category",
        eventsEnum: utils_1.ProductEvents,
    }),
    updatedProductCategory: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.UPDATED,
        object: "product_category",
        eventsEnum: utils_1.ProductEvents,
    }),
    deletedProductCategory: (0, utils_1.moduleEventBuilderFactory)({
        source: utils_1.Modules.PRODUCT,
        action: utils_1.CommonEvents.DELETED,
        object: "product_category",
        eventsEnum: utils_1.ProductEvents,
    }),
};
//# sourceMappingURL=events.js.map