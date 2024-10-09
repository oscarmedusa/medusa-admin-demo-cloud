import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/shipping-profiles.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var SHIPPING_PROFILE_QUERY_KEY = "shipping_profile";
var shippingProfileQueryKeys = queryKeysFactory(
  SHIPPING_PROFILE_QUERY_KEY
);
var useCreateShippingProfile = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.shippingProfile.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: shippingProfileQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useShippingProfile = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.shippingProfile.retrieve(id, query),
    queryKey: shippingProfileQueryKeys.detail(id, query),
    ...options
  });
  return { ...data, ...rest };
};
var useShippingProfiles = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.shippingProfile.list(query),
    queryKey: shippingProfileQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useDeleteShippingProfile = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.shippingProfile.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: shippingProfileQueryKeys.detail(id)
      });
      queryClient.invalidateQueries({
        queryKey: shippingProfileQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  shippingProfileQueryKeys,
  useCreateShippingProfile,
  useShippingProfile,
  useShippingProfiles,
  useDeleteShippingProfile
};
