"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Query_instances, _Query_remoteQuery, _Query_unwrapQueryConfig, _Query_unwrapRemoteQueryResponse;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
exports.createQuery = createQuery;
const utils_1 = require("@medusajs/utils");
const remote_query_1 = require("./remote-query");
const to_remote_query_1 = require("./to-remote-query");
/**
 * API wrapper around the remoteQuery
 */
class Query {
    constructor(remoteQuery) {
        _Query_instances.add(this);
        _Query_remoteQuery.set(this, void 0);
        __classPrivateFieldSet(this, _Query_remoteQuery, remoteQuery, "f");
    }
    async query(queryOptions, options) {
        if (!(0, utils_1.isObject)(queryOptions)) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Invalid query, expected object and received something else.");
        }
        const config = __classPrivateFieldGet(this, _Query_instances, "m", _Query_unwrapQueryConfig).call(this, queryOptions);
        if (Query.traceRemoteQuery) {
            return await Query.traceRemoteQuery(async () => await __classPrivateFieldGet(this, _Query_remoteQuery, "f").query(config, undefined, options), queryOptions);
        }
        return await __classPrivateFieldGet(this, _Query_remoteQuery, "f").query(config, undefined, options);
    }
    /**
     * Query wrapper to provide specific GraphQL like API around remoteQuery.query
     * @param query
     * @param variables
     * @param options
     */
    async gql(query, variables, options) {
        return await __classPrivateFieldGet(this, _Query_remoteQuery, "f").query(query, variables, options);
    }
    /**
     * Graph function uses the remoteQuery under the hood and
     * returns a result set
     */
    async graph(queryOptions, options) {
        const normalizedQuery = (0, to_remote_query_1.toRemoteQuery)(queryOptions, __classPrivateFieldGet(this, _Query_remoteQuery, "f").getEntitiesMap());
        let response;
        /**
         * When traceGraphQuery method is defined, we will wrap the implementation
         * inside a callback and provide the method to the traceGraphQuery
         */
        if (Query.traceGraphQuery) {
            response = await Query.traceGraphQuery(async () => await __classPrivateFieldGet(this, _Query_remoteQuery, "f").query(normalizedQuery, undefined, options), queryOptions);
        }
        else {
            response = await __classPrivateFieldGet(this, _Query_remoteQuery, "f").query(normalizedQuery, undefined, options);
        }
        return __classPrivateFieldGet(this, _Query_instances, "m", _Query_unwrapRemoteQueryResponse).call(this, response);
    }
}
exports.Query = Query;
_Query_remoteQuery = new WeakMap(), _Query_instances = new WeakSet(), _Query_unwrapQueryConfig = function _Query_unwrapQueryConfig(config) {
    let normalizedQuery = config;
    if ("__value" in config) {
        normalizedQuery = config.__value;
    }
    else if ("entity" in normalizedQuery) {
        normalizedQuery = (0, to_remote_query_1.toRemoteQuery)(normalizedQuery, __classPrivateFieldGet(this, _Query_remoteQuery, "f").getEntitiesMap());
    }
    else if ("entryPoint" in normalizedQuery ||
        "service" in normalizedQuery) {
        normalizedQuery = (0, utils_1.remoteQueryObjectFromString)(normalizedQuery).__value;
    }
    return normalizedQuery;
}, _Query_unwrapRemoteQueryResponse = function _Query_unwrapRemoteQueryResponse(response) {
    if (Array.isArray(response)) {
        return { data: response, metadata: undefined };
    }
    return {
        data: response.rows,
        metadata: response.metadata,
    };
};
Query.instrument = {
    graphQuery(tracer) {
        Query.traceGraphQuery = tracer;
    },
    remoteQuery(tracer) {
        Query.traceRemoteQuery = tracer;
    },
    remoteDataFetch(tracer) {
        remote_query_1.RemoteQuery.traceFetchRemoteData = tracer;
    },
};
/**
 * API wrapper around the remoteQuery with backward compatibility support
 * @param remoteQuery
 */
function createQuery(remoteQuery) {
    const query = new Query(remoteQuery);
    function backwardCompatibleQuery(...args) {
        return query.query.apply(query, args);
    }
    backwardCompatibleQuery.graph = query.graph.bind(query);
    backwardCompatibleQuery.gql = query.gql.bind(query);
    return backwardCompatibleQuery;
}
//# sourceMappingURL=query.js.map