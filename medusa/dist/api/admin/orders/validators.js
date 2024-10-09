"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminMarkOrderFulfillmentDelivered = exports.AdminOrderChanges = exports.AdminOrderCancelFulfillment = exports.OrderCancelFulfillment = exports.AdminOrderCreateShipment = exports.OrderCreateShipment = exports.AdminOrderCreateFulfillment = exports.OrderCreateFulfillment = exports.AdminCompleteOrder = exports.AdminGetOrdersParams = exports.AdminGetOrdersOrderParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("../../utils/validators");
exports.AdminGetOrdersOrderParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
/**
 * Parameters used to filter and configure the pagination of the retrieved order.
 */
exports.AdminGetOrdersParams = (0, validators_1.createFindParams)({
    limit: 15,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    status: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    sales_channel_id: zod_1.z.array(zod_1.z.string()).optional(),
    fulfillment_status: zod_1.z.array(zod_1.z.string()).optional(),
    payment_status: zod_1.z.array(zod_1.z.string()).optional(),
    region_id: zod_1.z.array(zod_1.z.string()).optional(),
    q: zod_1.z.string().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
}));
exports.AdminCompleteOrder = (0, validators_1.WithAdditionalData)(zod_1.z.object({}));
const Item = zod_1.z.object({
    id: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
exports.OrderCreateFulfillment = zod_1.z.object({
    items: zod_1.z.array(Item),
    location_id: zod_1.z.string().nullish(),
    no_notification: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
exports.AdminOrderCreateFulfillment = (0, validators_1.WithAdditionalData)(exports.OrderCreateFulfillment);
const Label = zod_1.z.object({
    tracking_number: zod_1.z.string(),
    tracking_url: zod_1.z.string(),
    label_url: zod_1.z.string(),
});
exports.OrderCreateShipment = zod_1.z.object({
    items: zod_1.z.array(Item),
    labels: zod_1.z.array(Label).optional(),
    no_notification: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
});
exports.AdminOrderCreateShipment = (0, validators_1.WithAdditionalData)(exports.OrderCreateShipment);
exports.OrderCancelFulfillment = zod_1.z.object({
    no_notification: zod_1.z.boolean().optional(),
});
exports.AdminOrderCancelFulfillment = (0, validators_1.WithAdditionalData)(exports.OrderCancelFulfillment);
exports.AdminOrderChanges = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    change_type: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
});
exports.AdminMarkOrderFulfillmentDelivered = zod_1.z.object({});
//# sourceMappingURL=validators.js.map