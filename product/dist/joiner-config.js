"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinerConfig = void 0;
const utils_1 = require("@medusajs/framework/utils");
const _models_1 = require("./models");
const product_image_1 = __importDefault(require("./models/product-image"));
const schema_1 = __importDefault(require("./schema"));
exports.joinerConfig = (0, utils_1.defineJoinerConfig)(utils_1.Modules.PRODUCT, {
    schema: schema_1.default,
    models: [
        _models_1.Product,
        _models_1.ProductVariant,
        _models_1.ProductOption,
        _models_1.ProductType,
        product_image_1.default,
        _models_1.ProductTag,
        _models_1.ProductCollection,
        _models_1.ProductCategory,
    ],
    linkableKeys: {
        // Merged with the autogenerated ones to maintain backward compatibility
        variant_id: "ProductVariant",
    },
    primaryKeys: ["id", "handle"],
    alias: [
        {
            name: ["product_variant", "product_variants", "variant", "variants"],
            entity: "ProductVariant",
            args: {
                methodSuffix: "ProductVariants",
            },
        },
    ],
});
//# sourceMappingURL=joiner-config.js.map