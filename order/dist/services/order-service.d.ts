import { Context, DAL, FindConfig, OrderTypes, RepositoryService } from "@medusajs/framework/types";
import { Order } from "../models";
type InjectedDependencies = {
    orderRepository: DAL.RepositoryService;
};
declare const OrderService_base: new (container: InjectedDependencies) => import("@medusajs/framework/types").IMedusaInternalService<Order, InjectedDependencies>;
export default class OrderService extends OrderService_base {
    protected readonly orderRepository_: RepositoryService<Order>;
    constructor(container: InjectedDependencies);
    retrieveOrderVersion<TEntityMethod = OrderTypes.OrderDTO>(id: string, version: number, config?: FindConfig<TEntityMethod>, sharedContext?: Context): Promise<Order>;
}
export {};
//# sourceMappingURL=order-service.d.ts.map