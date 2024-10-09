import { Collection } from "@mikro-orm/core";
import Price from "./price";
export declare const PriceSetIdPrefix = "pset";
export default class PriceSet {
    id: string;
    prices: Collection<Price, object>;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    onCreate(): void;
    onInit(): void;
}
//# sourceMappingURL=price-set.d.ts.map