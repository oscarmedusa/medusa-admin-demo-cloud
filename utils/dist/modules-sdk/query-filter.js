"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilter = void 0;
exports.QueryFilterFn = QueryFilterFn;
const __type = "QueryFilter";
function QueryFilterFn(query) {
    return {
        ...query,
        __type,
    };
}
QueryFilterFn.isQueryFilter = (obj) => {
    return obj.__type === __type;
};
exports.QueryFilter = QueryFilterFn;
//# sourceMappingURL=query-filter.js.map