import { RemoteQueryFilters } from "@medusajs/types";
export declare function QueryFilterFn<TEntry extends string>(query: RemoteQueryFilters<TEntry>): RemoteQueryFilters<TEntry> & {
    __type: "QueryFilter";
};
export declare namespace QueryFilterFn {
    var isQueryFilter: (obj: any) => boolean;
}
export declare const QueryFilter: typeof QueryFilterFn;
//# sourceMappingURL=query-filter.d.ts.map