import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils";
import { FulfillmentOption } from "@medusajs/types";
export declare class ManualFulfillmentService extends AbstractFulfillmentProviderService {
    static identifier: string;
    constructor();
    getFulfillmentOptions(): Promise<FulfillmentOption[]>;
    validateFulfillmentData(optionData: Record<string, unknown>, data: Record<string, unknown>, context: Record<string, unknown>): Promise<any>;
    validateOption(data: Record<string, any>): Promise<boolean>;
    createFulfillment(): Promise<Record<string, any>>;
    cancelFulfillment(): Promise<any>;
    createReturnFulfillment(): Promise<any>;
}
//# sourceMappingURL=manual-fulfillment.d.ts.map