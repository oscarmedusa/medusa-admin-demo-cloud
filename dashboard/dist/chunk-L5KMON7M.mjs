import {
  ordersQueryKeys
} from "./chunk-UXITYQ2U.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/order-edits.tsx
import { useMutation } from "@tanstack/react-query";
var useCreateOrderEdit = (orderId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.orderEdit.initiateRequest(payload),
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
var useRequestOrderEdit = (id2, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.request(id2),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useConfirmOrderEdit = (id2, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.confirm(id2),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useCancelOrderEdit = (orderId, options) => {
  return useMutation({
    mutationFn: () => sdk.admin.orderEdit.cancelRequest(orderId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.changes(id)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useAddOrderEditItems = (id2, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.orderEdit.addItems(id2, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateOrderEditOriginalItem = (id2, options) => {
  return useMutation({
    mutationFn: ({
      itemId,
      ...payload
    }) => {
      return sdk.admin.orderEdit.updateOriginalItem(id2, itemId, payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useUpdateOrderEditAddedItem = (id2, options) => {
  return useMutation({
    mutationFn: ({
      actionId,
      ...payload
    }) => {
      return sdk.admin.orderEdit.updateAddedItem(id2, actionId, payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};
var useRemoveOrderEditItem = (id2, options) => {
  return useMutation({
    mutationFn: (actionId) => sdk.admin.orderEdit.removeAddedItem(id2, actionId),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(id2)
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

export {
  useCreateOrderEdit,
  useRequestOrderEdit,
  useConfirmOrderEdit,
  useCancelOrderEdit,
  useAddOrderEditItems,
  useUpdateOrderEditOriginalItem,
  useUpdateOrderEditAddedItem,
  useRemoveOrderEditItem
};
