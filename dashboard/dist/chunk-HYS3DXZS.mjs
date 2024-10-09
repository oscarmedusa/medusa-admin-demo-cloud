import {
  ordersQueryKeys
} from "./chunk-UXITYQ2U.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import {
  queryKeysFactory
} from "./chunk-OEVIH5XG.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";

// src/hooks/api/payments.tsx
import {
  useMutation,
  useQuery
} from "@tanstack/react-query";
var PAYMENT_QUERY_KEY = "payment";
var paymentQueryKeys = queryKeysFactory(PAYMENT_QUERY_KEY);
var usePaymentProviders = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: async () => sdk.admin.payment.listPaymentProviders(query),
    queryKey: [],
    ...options
  });
  return { ...data, ...rest };
};
var useCapturePayment = (orderId, paymentId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.payment.capture(paymentId, payload),
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
var useRefundPayment = (orderId, paymentId, options) => {
  return useMutation({
    mutationFn: (payload) => sdk.admin.payment.refund(paymentId, payload),
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
  usePaymentProviders,
  useCapturePayment,
  useRefundPayment
};
