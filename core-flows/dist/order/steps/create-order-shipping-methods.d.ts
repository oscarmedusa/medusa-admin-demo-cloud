import { CreateOrderShippingMethodDTO } from "@medusajs/framework/types";
export interface CreateOrderShippingMethodsStepInput {
    shipping_methods: CreateOrderShippingMethodDTO[];
}
/**
 * This step creates order shipping methods.
 */
export declare const createOrderShippingMethods: import("@medusajs/framework/workflows-sdk").StepFunction<CreateOrderShippingMethodsStepInput, import("@medusajs/framework/types").OrderShippingMethodDTO[]>;
//# sourceMappingURL=create-order-shipping-methods.d.ts.map