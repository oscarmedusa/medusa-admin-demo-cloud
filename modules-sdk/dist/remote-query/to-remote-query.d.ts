import { RemoteQueryEntryPoints, RemoteQueryFilters, RemoteQueryGraph, RemoteQueryObjectConfig } from "@medusajs/types";
/**
 * convert a specific API configuration to a remote query object
 *
 * @param config
 *
 * @example
 * const remoteQueryObject = toRemoteQuery({
 *   entity: "product",
 *   fields,
 *   filters: { variants: QueryFilter({ sku: "abc" }) },
 *   context: {
 *     variants: { calculated_price: QueryContext({ region_id: "reg_123" }) }
 *   }
 * });
 *
 * console.log(remoteQueryObject);
 */
export declare function toRemoteQuery<const TEntity extends string>(config: {
    entity: TEntity | keyof RemoteQueryEntryPoints;
    fields: RemoteQueryObjectConfig<TEntity>["fields"];
    filters?: RemoteQueryFilters<TEntity>;
    pagination?: {
        skip?: number;
        take?: number;
    };
    context?: Record<string, any>;
}, entitiesMap: Map<string, any>): RemoteQueryGraph<TEntity>;
//# sourceMappingURL=to-remote-query.d.ts.map