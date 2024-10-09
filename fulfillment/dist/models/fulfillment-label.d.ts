import { DAL } from "@medusajs/framework/types";
import { OptionalProps, Rel } from "@mikro-orm/core";
import Fulfillment from "./fulfillment";
type FulfillmentLabelOptionalProps = DAL.SoftDeletableModelDateColumns;
export default class FulfillmentLabel {
    [OptionalProps]?: FulfillmentLabelOptionalProps;
    id: string;
    tracking_number: string;
    tracking_url: string;
    label_url: string;
    fulfillment_id: string;
    fulfillment: Rel<Fulfillment>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
export {};
//# sourceMappingURL=fulfillment-label.d.ts.map