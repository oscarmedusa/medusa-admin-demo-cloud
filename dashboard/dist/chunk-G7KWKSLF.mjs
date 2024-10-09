import {
  taxRegionsQueryKeys
} from "./chunk-YRIAF77S.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/routes/tax-regions/tax-region-detail/loader.ts
var taxRegionDetailQuery = (id) => ({
  queryKey: taxRegionsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.taxRegion.retrieve(id)
});
var taxRegionLoader = async ({ params }) => {
  const id = params.id;
  const query = taxRegionDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

export {
  taxRegionLoader
};
