import { OrderSummaryDTO } from "@medusajs/framework/types";
import { ActionTypeDefinition, InternalOrderChangeEvent, OrderChangeEvent, OrderTransaction, VirtualOrder } from "../types";
interface ProcessOptions {
    addActionReferenceToObject?: boolean;
    [key: string]: any;
}
export declare class OrderChangeProcessing {
    private static typeDefinition;
    private static defaultConfig;
    private order;
    private transactions;
    private actions;
    private options;
    private actionsProcessed;
    private groupTotal;
    private summary;
    static registerActionType(key: string, type: ActionTypeDefinition): void;
    constructor({ order, transactions, actions, options, }: {
        order: VirtualOrder;
        transactions: OrderTransaction[];
        actions: InternalOrderChangeEvent[];
        options: ProcessOptions;
    });
    private isEventActive;
    private isEventDone;
    processActions(): void;
    private processAction_;
    getSummary(): OrderSummaryDTO;
    getCurrentOrder(): VirtualOrder;
}
export declare function calculateOrderChange({ order, transactions, actions, options, }: {
    order: VirtualOrder;
    transactions?: OrderTransaction[];
    actions?: OrderChangeEvent[];
    options?: ProcessOptions;
}): {
    summary: OrderSummaryDTO;
    order: VirtualOrder;
};
export {};
//# sourceMappingURL=calculate-order-change.d.ts.map