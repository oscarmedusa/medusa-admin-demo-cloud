"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateDraftOrder = exports.AdminGetOrdersParams = exports.AdminGetOrderParams = void 0;
const zod_1 = require("zod");
const common_validators_1 = require("../../utils/common-validators");
const validators_1 = require("../../utils/validators");
exports.AdminGetOrderParams = (0, validators_1.createSelectParams)();
exports.AdminGetOrdersParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(() => exports.AdminGetOrdersParams.array()).optional(),
    $or: zod_1.z.lazy(() => exports.AdminGetOrdersParams.array()).optional(),
}));
var Status;
(function (Status) {
    Status["completed"] = "completed";
})(Status || (Status = {}));
const ShippingMethod = zod_1.z.object({
    shipping_method_id: zod_1.z.string().nullish(),
    name: zod_1.z.string(),
    shipping_option_id: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    amount: common_validators_1.BigNumberInput,
});
const Item = zod_1.z
    .object({
    title: zod_1.z.string().nullish(),
    sku: zod_1.z.string().nullish(),
    barcode: zod_1.z.string().nullish(),
    variant_id: zod_1.z.string().nullish(),
    unit_price: common_validators_1.BigNumberInput.nullish(),
    quantity: zod_1.z.number(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .refine((data) => {
    if (!data.variant_id) {
        return data.title && (data.sku || data.barcode);
    }
    return true;
});
const CreateDraftOrder = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(Status).optional(),
    sales_channel_id: zod_1.z.string().nullish(),
    email: zod_1.z.string().nullish(),
    customer_id: zod_1.z.string().nullish(),
    billing_address: common_validators_1.AddressPayload.optional(),
    shipping_address: common_validators_1.AddressPayload.optional(),
    items: zod_1.z.array(Item).optional(),
    region_id: zod_1.z.string(),
    promo_codes: zod_1.z.array(zod_1.z.string()).optional(),
    currency_code: zod_1.z.string().nullish(),
    no_notification_order: zod_1.z.boolean().optional(),
    shipping_methods: zod_1.z.array(ShippingMethod),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
})
    .strict();
exports.AdminCreateDraftOrder = (0, validators_1.WithAdditionalData)(CreateDraftOrder, (schema) => {
    return schema.refine((data) => {
        if (!data.email && !data.customer_id) {
            return false;
        }
        return true;
    }, { message: "Either email or customer_id must be provided" });
});
//# sourceMappingURL=validators.js.map