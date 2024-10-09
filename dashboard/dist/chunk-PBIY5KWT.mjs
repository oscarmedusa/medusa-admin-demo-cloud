import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/customers.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var CUSTOMERS_QUERY_KEY = "customers";
var customersQueryKeys = queryKeysFactory(CUSTOMERS_QUERY_KEY);
var useCustomer = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryKey: customersQueryKeys.detail(id),
    queryFn: async () => sdk.admin.customer.retrieve(id, query),
    ...options
  });
  return { ...data, ...rest };
};
var useCustomers = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.customer.list(query),
    queryKey: customersQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateCustomer = (options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customer.create(payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: customersQueryKeys.lists() });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateCustomer = (id, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.customer.update(id, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: customersQueryKeys.lists() });
      queryClient.invalidateQueries({ queryKey: customersQueryKeys.detail(id) });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useDeleteCustomer = (id, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.customer.delete(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: customersQueryKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: customersQueryKeys.detail(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  customersQueryKeys,
  useCustomer,
  useCustomers,
  useCreateCustomer,
  useUpdateCustomer,
  useDeleteCustomer
};
