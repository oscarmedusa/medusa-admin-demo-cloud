import { OrderChangeActionDTO } from "@medusajs/framework/types";
export type CreateOrderClaimItemsFromActionsInput = {
    changes: OrderChangeActionDTO[];
    claimId: string;
};
/**
 * This step creates claim items from a change action.
 */
export declare const createOrderClaimItemsFromActionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateOrderClaimItemsFromActionsInput, import("@medusajs/framework/types").OrderClaimItemDTO[]>;
//# sourceMappingURL=create-claim-items-from-actions.d.ts.map