import { AdditionalData, FulfillmentDTO, OrderDTO, OrderWorkflow } from "@medusajs/framework/types";
import { WorkflowData } from "@medusajs/framework/workflows-sdk";
/**
 * This step validates that a shipment can be created for an order.
 */
export declare const createShipmentValidateOrder: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    input: OrderWorkflow.CreateOrderShipmentWorkflowInput;
}, unknown>;
export declare const createOrderShipmentWorkflowId = "create-order-shipment";
/**
 * This workflow creates a shipment for an order.
 */
export declare const createOrderShipmentWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<OrderWorkflow.CreateOrderShipmentWorkflowInput & AdditionalData, undefined, import("@medusajs/framework/workflows-sdk").Hook<"shipmentCreated", {
    shipment: {
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
    } & FulfillmentDTO & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<FulfillmentDTO> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<FulfillmentDTO>;
    } & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): WorkflowData<FulfillmentDTO>;
    };
    additional_data: ((Record<string, unknown> | WorkflowData<Record<string, unknown> | undefined>) & Record<string, unknown>) | undefined;
}>[]>;
//# sourceMappingURL=create-shipment.d.ts.map