"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPromotion = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.OrderPromotion = {
    serviceName: utils_1.LINKS.OrderPromotion,
    isLink: true,
    databaseConfig: {
        tableName: "order_promotion",
        idPrefix: "orderpromo",
    },
    alias: [
        {
            name: ["order_promotion", "order_promotions"],
            entity: "LinkOrderPromotion",
        },
    ],
    primaryKeys: ["id", "order_id", "promotion_id"],
    relationships: [
        {
            serviceName: utils_1.Modules.ORDER,
            entity: "Order",
            primaryKey: "id",
            foreignKey: "order_id",
            alias: "order",
            args: {
                methodSuffix: "Orders",
            },
        },
        {
            serviceName: utils_1.Modules.PROMOTION,
            entity: "Promotion",
            primaryKey: "id",
            foreignKey: "promotion_id",
            alias: "promotion",
            args: {
                methodSuffix: "Promotions",
            },
        },
    ],
    extends: [
        {
            serviceName: utils_1.Modules.ORDER,
            fieldAlias: {
                promotion: "promotion_link.promotion",
            },
            relationship: {
                serviceName: utils_1.LINKS.OrderPromotion,
                primaryKey: "order_id",
                foreignKey: "id",
                alias: "promotion_link",
            },
        },
        {
            serviceName: utils_1.Modules.PROMOTION,
            relationship: {
                serviceName: utils_1.LINKS.OrderPromotion,
                primaryKey: "promotion_id",
                foreignKey: "id",
                alias: "order_link",
            },
        },
    ],
};
//# sourceMappingURL=order-promotion.js.map