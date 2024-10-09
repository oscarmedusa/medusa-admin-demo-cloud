import { DALUtils } from "@medusajs/framework/utils";
import { Order } from "../models";
declare const OrderRepository_base: new ({ manager }: {
    manager: any;
}) => DALUtils.MikroOrmBaseRepository<Order>;
export declare class OrderRepository extends OrderRepository_base {
}
export {};
//# sourceMappingURL=order.d.ts.map