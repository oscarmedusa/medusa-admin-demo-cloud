import { OptionalProps, Ref } from "@mikro-orm/core";
import { IndexData } from "./index-data";
type OptionalRelations = "parent" | "child" | "parent_id" | "child_id" | "parent_name" | "child_name";
export declare class IndexRelation {
    [OptionalProps]: OptionalRelations;
    id: string;
    pivot: string;
    parent_id?: string;
    parent_name?: string;
    child_id?: string;
    child_name?: string;
    parent?: Ref<IndexData>;
    child?: Ref<IndexData>;
}
export {};
//# sourceMappingURL=index-relation.d.ts.map