"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeShippingOptionRoutesMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.storeShippingOptionRoutesMiddlewares = [
    {
        method: ["GET"],
        matcher: "/store/shipping-options",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.StoreGetShippingOptions, query_config_1.listTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map