import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/stock-locations.tsx
import {
  useMutation,
  useQuery as useQuery2
} from "@tanstack/react-query";

// src/hooks/api/fulfillment-providers.tsx
import { useQuery } from "@tanstack/react-query";
var FULFILLMENT_PROVIDERS_QUERY_KEY = "fulfillment_providers";
var fulfillmentProvidersQueryKeys = queryKeysFactory(
  FULFILLMENT_PROVIDERS_QUERY_KEY
);
var useFulfillmentProviders = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.fulfillmentProvider.list(query),
    queryKey: fulfillmentProvidersQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};

// src/hooks/api/stock-locations.tsx
var STOCK_LOCATIONS_QUERY_KEY = "stock_locations";
var stockLocationsQueryKeys = queryKeysFactory(
  STOCK_LOCATIONS_QUERY_KEY
);
var useStockLocation = (id, query, options) => {
  const { data, ...rest } = useQuery2({
    queryFn: () => sdk.admin.stockLocation.retrieve(id, query),
    queryKey: stockLocationsQueryKeys.detail(id, query),
    ...options
  });
  return { ...data, ...rest };
};
var useStockLocations = (query, options) => {
  const { data, ...rest } = useQuery2({
    queryFn: () => sdk.admin.stockLocation.list(query),
    queryKey: stockLocationsQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateStockLocation = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.stockLocation.create(payload),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateStockLocation = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.stockLocation.update(id, payload),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.details()
      });
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateStockLocationSalesChannels = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.stockLocation.updateSalesChannels(id, payload),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.details()
      });
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteStockLocation = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.stockLocation.delete(id),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.lists()
      });
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCreateStockLocationFulfillmentSet = (locationId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.stockLocation.createFulfillmentSet(locationId, payload),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateStockLocationFulfillmentProviders = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.stockLocation.updateFulfillmentProviders(id, payload),
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.details()
      });
      await queryClient.invalidateQueries({
        queryKey: fulfillmentProvidersQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  useFulfillmentProviders,
  stockLocationsQueryKeys,
  useStockLocation,
  useStockLocations,
  useCreateStockLocation,
  useUpdateStockLocation,
  useUpdateStockLocationSalesChannels,
  useDeleteStockLocation,
  useCreateStockLocationFulfillmentSet,
  useUpdateStockLocationFulfillmentProviders
};
