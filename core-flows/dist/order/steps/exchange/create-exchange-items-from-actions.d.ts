import { OrderChangeActionDTO } from "@medusajs/framework/types";
export type CreateOrderExchangeItemsFromActionsInput = {
    changes: OrderChangeActionDTO[];
    exchangeId: string;
};
/**
 * This step creates exchange items from change actions.
 */
export declare const createOrderExchangeItemsFromActionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateOrderExchangeItemsFromActionsInput, import("@medusajs/framework/types").OrderExchangeItemDTO[]>;
//# sourceMappingURL=create-exchange-items-from-actions.d.ts.map