import { OrderChangeActionDTO } from "@medusajs/framework/types";
import { OrderItem, OrderShippingMethod } from "../models";
export interface ApplyOrderChangeDTO extends OrderChangeActionDTO {
    id: string;
    order_id: string;
    version: number;
    applied: boolean;
}
export declare function applyChangesToOrder(orders: any[], actionsMap: Record<string, any[]>, options?: {
    addActionReferenceToObject?: boolean;
}): {
    itemsToUpsert: OrderItem[];
    shippingMethodsToUpsert: OrderShippingMethod[];
    summariesToUpsert: any[];
    orderToUpdate: any[];
    calculatedOrders: {};
};
//# sourceMappingURL=apply-order-changes.d.ts.map