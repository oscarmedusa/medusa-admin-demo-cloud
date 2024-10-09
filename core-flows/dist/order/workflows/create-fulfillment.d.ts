import { AdditionalData, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
/**
 * This step validates that a fulfillment can be created for an order.
 */
export declare const createFulfillmentValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    inputItems: OrderWorkflow.CreateOrderFulfillmentWorkflowInput["items"];
}, unknown>;
export declare const createOrderFulfillmentWorkflowId = "create-order-fulfillment";
/**
 * This creates a fulfillment for an order.
 */
export declare const createOrderFulfillmentWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CreateOrderFulfillmentWorkflowInput & AdditionalData, import("@medusajs/framework/types").FulfillmentDTO, import("@medusajs/framework/workflows-sdk").Hook<"fulfillmentCreated", {
    fulfillment: {
        id: string | WorkflowData<string>;
        location_id: string | WorkflowData<string>;
        packed_at: Date | WorkflowData<Date | null> | null;
        shipped_at: Date | WorkflowData<Date | null> | null;
        delivered_at: Date | WorkflowData<Date | null> | null;
        canceled_at: Date | WorkflowData<Date | null> | null;
        marked_shipped_by?: string | WorkflowData<string | null | undefined> | null | undefined;
        created_by?: string | WorkflowData<string | null | undefined> | null | undefined;
        data: Record<string, unknown> | WorkflowData<Record<string, unknown> | null> | null;
        provider_id: string | WorkflowData<string>;
        shipping_option_id: string | WorkflowData<string | null> | null;
        metadata: Record<string, unknown> | WorkflowData<Record<string, unknown> | null> | null;
        shipping_option: import("@medusajs/framework/types").ShippingOptionDTO | WorkflowData<import("@medusajs/framework/types").ShippingOptionDTO | null> | null;
        requires_shipping: boolean | WorkflowData<boolean>;
        provider: import("@medusajs/framework/types").FulfillmentProviderDTO | WorkflowData<import("@medusajs/framework/types").FulfillmentProviderDTO>;
        delivery_address: import("@medusajs/framework/types").FulfillmentAddressDTO | WorkflowData<import("@medusajs/framework/types").FulfillmentAddressDTO>;
        items: import("@medusajs/framework/types").FulfillmentItemDTO[] | WorkflowData<import("@medusajs/framework/types").FulfillmentItemDTO[]>;
        labels: import("@medusajs/framework/types").FulfillmentLabelDTO[] | WorkflowData<import("@medusajs/framework/types").FulfillmentLabelDTO[]>;
        created_at: Date | WorkflowData<Date>;
        updated_at: Date | WorkflowData<Date>;
        deleted_at: Date | WorkflowData<Date | null> | null;
    } & import("@medusajs/framework/types").FulfillmentDTO & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<import("@medusajs/framework/types").FulfillmentDTO> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").FulfillmentDTO>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<import("@medusajs/framework/types").FulfillmentDTO>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-fulfillment.d.ts.map