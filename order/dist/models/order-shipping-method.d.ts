import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Claim from "./claim";
import Exchange from "./exchange";
import Order from "./order";
import Return from "./return";
import OrderShippingMethod from "./shipping-method";
type OptionalShippingMethodProps = DAL.ModelDateColumns;
export default class OrderShipping {
    [OptionalProps]?: OptionalShippingMethodProps;
    id: string;
    order_id: string;
    order: Rel<Order>;
    return_id: string | null;
    return: Rel<Return>;
    exchange_id: string | null;
    exchange: Rel<Exchange>;
    claim_id: string | null;
    claim: Rel<Claim>;
    version: number;
    shipping_method_id: string;
    shipping_method: Rel<OrderShippingMethod>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=order-shipping-method.d.ts.map