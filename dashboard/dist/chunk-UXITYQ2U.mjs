import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/orders.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var ORDERS_QUERY_KEY = "orders";
var _orderKeys = queryKeysFactory(ORDERS_QUERY_KEY);
_orderKeys.preview = function(id) {
  return [this.detail(id), "preview"];
};
_orderKeys.changes = function(id) {
  return [this.detail(id), "changes"];
};
var ordersQueryKeys = _orderKeys;
var useOrder = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.order.retrieve(id, query),
    queryKey: ordersQueryKeys.detail(id, query),
    ...options
  });
  return { ...data, ...rest };
};
var useOrderPreview = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.order.retrievePreview(id, query),
    queryKey: ordersQueryKeys.preview(id),
    ...options
  });
  return { ...data, ...rest };
};
var useOrders = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.order.list(query),
    queryKey: ordersQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};
var useOrderChanges = (id, query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.order.listChanges(id, query),
    queryKey: ordersQueryKeys.changes(id),
    ...options
  });
  return { ...data, ...rest };
};
var useCreateOrderFulfillment = (orderId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.order.createFulfillment(orderId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCancelOrderFulfillment = (orderId, fulfillmentId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.order.cancelFulfillment(orderId, fulfillmentId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCreateOrderShipment = (orderId, fulfillmentId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.order.createShipment(orderId, fulfillmentId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useMarkOrderFulfillmentAsDelivered = (orderId, fulfillmentId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.order.markAsDelivered(orderId, fulfillmentId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.all
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCancelOrder = (orderId, options) => {
  return useMutation({
    mutationFn: (id) => sdk.admin.order.cancel(id),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  ordersQueryKeys,
  useOrder,
  useOrderPreview,
  useOrders,
  useOrderChanges,
  useCreateOrderFulfillment,
  useCancelOrderFulfillment,
  useCreateOrderShipment,
  useMarkOrderFulfillmentAsDelivered,
  useCancelOrder
};
