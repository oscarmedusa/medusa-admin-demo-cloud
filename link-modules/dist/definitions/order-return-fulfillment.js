"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnFulfillment = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ReturnFulfillment = {
    serviceName: utils_1.LINKS.ReturnFulfillment,
    isLink: true,
    databaseConfig: {
        tableName: "return_fulfillment",
        idPrefix: "retful",
    },
    alias: [
        {
            name: ["return_fulfillment", "return_fulfillments"],
            entity: "LinkReturnFulfillment",
        },
    ],
    primaryKeys: ["id", "return_id", "fulfillment_id"],
    relationships: [
        {
            serviceName: utils_1.Modules.ORDER,
            entity: "Order",
            primaryKey: "id",
            foreignKey: "return_id",
            alias: "return",
            args: {
                methodSuffix: "Returns",
            },
        },
        {
            serviceName: utils_1.Modules.FULFILLMENT,
            entity: "Fulfillment",
            primaryKey: "id",
            foreignKey: "fulfillment_id",
            alias: "fulfillments",
            args: {
                methodSuffix: "Fulfillments",
            },
        },
    ],
    extends: [
        {
            serviceName: utils_1.Modules.ORDER,
            fieldAlias: {
                return_fulfillments: {
                    path: "return_fulfillment_link.fulfillments",
                    isList: true,
                },
            },
            relationship: {
                serviceName: utils_1.LINKS.OrderFulfillment,
                primaryKey: "return_id",
                foreignKey: "id",
                alias: "return_fulfillment_link",
                isList: true,
            },
        },
        {
            serviceName: utils_1.Modules.FULFILLMENT,
            relationship: {
                serviceName: utils_1.LINKS.OrderFulfillment,
                primaryKey: "fulfillment_id",
                foreignKey: "id",
                alias: "return_link",
            },
        },
    ],
};
//# sourceMappingURL=order-return-fulfillment.js.map