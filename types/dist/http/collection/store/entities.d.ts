import { StoreProduct } from "../../product";
import { BaseCollection } from "../common";
export interface StoreCollection extends Omit<BaseCollection, "products"> {
    products?: StoreProduct[];
}
//# sourceMappingURL=entities.d.ts.map