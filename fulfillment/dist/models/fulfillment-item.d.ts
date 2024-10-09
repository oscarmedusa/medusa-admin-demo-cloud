import { BigNumber } from "@medusajs/framework/utils";
import { BigNumberRawValue, DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Fulfillment from "./fulfillment";
type FulfillmentItemOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class FulfillmentItem {
    [OptionalProps]?: FulfillmentItemOptionalProps;
    id: string;
    title: string;
    sku: string;
    barcode: string;
    quantity: BigNumber | number;
    raw_quantity: BigNumberRawValue;
    line_item_id: string | null;
    inventory_item_id: string | null;
    fulfillment_id: string;
    fulfillment: Rel<Fulfillment>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=fulfillment-item.d.ts.map