import { Collection, OptionalProps, PrimaryKeyType } from "@mikro-orm/core";
type OptionalRelations = "parents";
export declare class IndexData {
    [OptionalProps]: OptionalRelations;
    id: string;
    name: string;
    [PrimaryKeyType]?: [string, string];
    data: Record<string, unknown>;
    parents: Collection<IndexData, object>;
}
export {};
//# sourceMappingURL=index-data.d.ts.map