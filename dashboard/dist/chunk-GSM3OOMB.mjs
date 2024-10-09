import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";

// src/hooks/table/query/use-sales-channel-table-query.tsx
var useSalesChannelTableQuery = ({
  prefix,
  pageSize = 20
}) => {
  const queryObject = useQueryParams(
    ["offset", "q", "order", "created_at", "updated_at", "is_disabled"],
    prefix
  );
  const { offset, created_at, updated_at, is_disabled, ...rest } = queryObject;
  const searchParams = {
    limit: pageSize,
    offset: offset ? Number(offset) : 0,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0,
    is_disabled: is_disabled === "true" ? true : is_disabled === "false" ? false : void 0,
    ...rest
  };
  return {
    searchParams,
    raw: queryObject
  };
};

export {
  useSalesChannelTableQuery
};
