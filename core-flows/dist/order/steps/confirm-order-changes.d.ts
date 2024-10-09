import { OrderChangeDTO } from "@medusajs/framework/types";
export type ConfirmOrderChangesInput = {
    orderId: string;
    changes: OrderChangeDTO[];
    confirmed_by?: string;
};
/**
 * This step confirms changes of an order.
 */
export declare const confirmOrderChanges: import("@medusajs/framework/workflows-sdk").StepFunction<ConfirmOrderChangesInput, null>;
//# sourceMappingURL=confirm-order-changes.d.ts.map