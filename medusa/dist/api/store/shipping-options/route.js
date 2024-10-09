"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const { cart_id, is_return } = req.filterableFields;
    if (!cart_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "You must provide the cart_id to list shipping options");
    }
    const cartService = req.scope.resolve(utils_1.Modules.CART);
    const cart = await cartService.retrieveCart(cart_id, {
        select: [
            "id",
            "sales_channel_id",
            "currency_code",
            "shipping_address.city",
            "shipping_address.country_code",
            "shipping_address.province",
        ],
        relations: ["shipping_address"],
    });
    const { result } = await (0, core_flows_1.listShippingOptionsForCartWorkflow)(req.scope).run({
        input: {
            cart_id: cart.id,
            sales_channel_id: cart.sales_channel_id,
            currency_code: cart.currency_code,
            is_return: !!is_return,
            shipping_address: {
                city: cart.shipping_address?.city,
                country_code: cart.shipping_address?.country_code,
                province: cart.shipping_address?.province,
            },
        },
    });
    res.json({ shipping_options: result });
};
exports.GET = GET;
//# sourceMappingURL=route.js.map