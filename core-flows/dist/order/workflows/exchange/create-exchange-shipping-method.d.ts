import { BigNumberInput, OrderChangeDTO, OrderDTO, OrderExchangeDTO, OrderPreviewDTO } from "@medusajs/framework/types";
/**
 * This step validates that a shipping method can be created for an exchange.
 */
export declare const createExchangeShippingMethodValidationStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    order: OrderDTO;
    orderExchange: OrderExchangeDTO;
    orderChange: OrderChangeDTO;
}, unknown>;
export declare const createExchangeShippingMethodWorkflowId = "create-exchange-shipping-method";
/**
 * This workflow creates a shipping method for an exchange.
 */
export declare const createExchangeShippingMethodWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    return_id?: string;
    exchange_id?: string;
    shipping_option_id: string;
    custom_amount?: BigNumberInput | null;
}, OrderPreviewDTO, []>;
//# sourceMappingURL=create-exchange-shipping-method.d.ts.map