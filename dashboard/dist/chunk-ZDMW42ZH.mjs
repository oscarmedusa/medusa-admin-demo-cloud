import {
  customersQueryKeys
} from "./chunk-PBIY5KWT.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/customer-groups.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var CUSTOMER_GROUPS_QUERY_KEY = "customer_groups";
var customerGroupsQueryKeys = queryKeysFactory(
  CUSTOMER_GROUPS_QUERY_KEY
);
var useCustomerGroup = (id, options) => {
  const { data, ...rest } = useQuery({
    queryKey: customerGroupsQueryKeys.detail(id),
    queryFn: async () => sdk.admin.customerGroup.retrieve(id),
    ...options
  });
  return { ...data, ...rest };
};
var useCustomerGroups = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.customerGroup.list(query),
    queryKey: customerGroupsQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateCustomerGroup = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customerGroup.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateCustomerGroup = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customerGroup.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteCustomerGroup = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.customerGroup.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useAddCustomersToGroup = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customerGroup.batchCustomers(id, { add: payload }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.detail(id)
      });
      queryClient.invalidateQueries({
        queryKey: customersQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useRemoveCustomersFromGroup = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customerGroup.batchCustomers(id, { remove: payload }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.detail(id)
      });
      queryClient.invalidateQueries({
        queryKey: customersQueryKeys.lists()
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  customerGroupsQueryKeys,
  useCustomerGroup,
  useCustomerGroups,
  useCreateCustomerGroup,
  useUpdateCustomerGroup,
  useDeleteCustomerGroup,
  useAddCustomersToGroup,
  useRemoveCustomersFromGroup
};
