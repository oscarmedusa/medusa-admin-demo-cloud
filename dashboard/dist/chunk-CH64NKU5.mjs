import {
  stockLocationsQueryKeys
} from "./chunk-G3GT763I.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/shipping-options.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var SHIPPING_OPTIONS_QUERY_KEY = "shipping_options";
var shippingOptionsQueryKeys = queryKeysFactory(
  SHIPPING_OPTIONS_QUERY_KEY
);
var useShippingOption = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.shippingOption.retrieve(id, query),
    queryKey: shippingOptionsQueryKeys.detail(id),
    ...options
  });
  return { ...data, ...rest };
};
var useShippingOptions = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.shippingOption.list(query),
    queryKey: shippingOptionsQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateShippingOptions = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.shippingOption.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: shippingOptionsQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateShippingOptions = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.shippingOption.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: shippingOptionsQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteShippingOption = (optionId, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.shippingOption.delete(optionId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: stockLocationsQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: shippingOptionsQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  shippingOptionsQueryKeys,
  useShippingOption,
  useShippingOptions,
  useCreateShippingOptions,
  useUpdateShippingOptions,
  useDeleteShippingOption
};
