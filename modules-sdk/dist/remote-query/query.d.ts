import { GraphResultSet, RemoteJoinerOptions, RemoteJoinerQuery, RemoteQueryFunction, RemoteQueryInput, RemoteQueryObjectConfig, RemoteQueryObjectFromStringResult } from "@medusajs/types";
import { RemoteQuery } from "./remote-query";
/**
 * API wrapper around the remoteQuery
 */
export declare class Query {
    #private;
    /**
     * Method to wrap execution of the graph query for instrumentation
     */
    static traceGraphQuery?: (queryFn: () => Promise<any>, queryOptions: RemoteQueryInput<any>) => Promise<any>;
    /**
     * Method to wrap execution of the remoteQuery overload function
     * for instrumentation
     */
    static traceRemoteQuery?: (queryFn: () => Promise<any>, queryOptions: RemoteQueryObjectConfig<any> | RemoteQueryObjectFromStringResult<any> | RemoteJoinerQuery) => Promise<any>;
    static instrument: {
        graphQuery(tracer: (typeof Query)["traceGraphQuery"]): void;
        remoteQuery(tracer: (typeof Query)["traceRemoteQuery"]): void;
        remoteDataFetch(tracer: (typeof RemoteQuery)["traceFetchRemoteData"]): void;
    };
    constructor(remoteQuery: RemoteQuery);
    query(queryOptions: RemoteQueryInput<any> | RemoteQueryObjectConfig<any> | RemoteQueryObjectFromStringResult<any> | RemoteJoinerQuery, options?: RemoteJoinerOptions): Promise<any>;
    /**
     * Query wrapper to provide specific GraphQL like API around remoteQuery.query
     * @param query
     * @param variables
     * @param options
     */
    gql(query: any, variables?: any, options?: any): Promise<any>;
    /**
     * Graph function uses the remoteQuery under the hood and
     * returns a result set
     */
    graph<const TEntry extends string>(queryOptions: RemoteQueryInput<TEntry>, options?: RemoteJoinerOptions): Promise<GraphResultSet<TEntry>>;
}
/**
 * API wrapper around the remoteQuery with backward compatibility support
 * @param remoteQuery
 */
export declare function createQuery(remoteQuery: RemoteQuery): Omit<RemoteQueryFunction, symbol>;
//# sourceMappingURL=query.d.ts.map