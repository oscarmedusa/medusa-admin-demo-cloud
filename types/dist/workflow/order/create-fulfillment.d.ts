import { OrderLineItemDTO } from "../../order";
import { BigNumberInput } from "../../totals";
import { CreateFulfillmentLabelWorkflowDTO } from "../fulfillment/create-fulfillment";
interface CreateOrderFulfillmentItem {
    id: string;
    quantity: BigNumberInput;
}
export interface CreateOrderFulfillmentWorkflowInput {
    order_id: string;
    items_list?: OrderLineItemDTO[];
    created_by?: string;
    items: CreateOrderFulfillmentItem[];
    labels?: CreateFulfillmentLabelWorkflowDTO[];
    no_notification?: boolean;
    location_id?: string | null;
    metadata?: Record<string, any> | null;
}
export {};
//# sourceMappingURL=create-fulfillment.d.ts.map