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

// src/hooks/api/refund-reasons.tsx
import { useQuery } from "@tanstack/react-query";
var REFUND_REASON_QUERY_KEY = "refund-reason";
var refundReasonQueryKeys = queryKeysFactory(REFUND_REASON_QUERY_KEY);
var useRefundReasons = (query, options) => {
  const { data, ...rest } = useQuery({
    queryFn: () => sdk.admin.refundReason.list(query),
    queryKey: [],
    ...options
  });
  return { ...data, ...rest };
};

// src/hooks/api/fulfillment.tsx
import { useMutation } from "@tanstack/react-query";
var FULFILLMENTS_QUERY_KEY = "fulfillments";
var fulfillmentsQueryKeys = queryKeysFactory(FULFILLMENTS_QUERY_KEY);

// src/hooks/api/notification.tsx
import { useQuery as useQuery2 } from "@tanstack/react-query";
var NOTIFICATION_QUERY_KEY = "notification";
var notificationQueryKeys = queryKeysFactory(NOTIFICATION_QUERY_KEY);
var useNotifications = (query, options) => {
  const { data, ...rest } = useQuery2({
    queryFn: () => sdk.admin.notification.list(query),
    queryKey: notificationQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};

// src/hooks/api/payment-collections.tsx
import { useMutation as useMutation2 } from "@tanstack/react-query";
var PAYMENT_COLLECTION_QUERY_KEY = "payment-collection";
var paymentCollectionQueryKeys = queryKeysFactory(
  PAYMENT_COLLECTION_QUERY_KEY
);
var useMarkPaymentCollectionAsPaid = (orderId, paymentCollectionId, options) => {
  return useMutation2({
    mutationFn: (payload) => sdk.admin.paymentCollection.markAsPaid(paymentCollectionId, payload),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.details()
      });
      queryClient.invalidateQueries({
        queryKey: ordersQueryKeys.preview(orderId)
      });
      queryClient.invalidateQueries({
        queryKey: paymentCollectionQueryKeys.all
      });
      options?.onSuccess?.(data, variables, context);
    },
    ...options
  });
};

// src/hooks/api/product-variants.tsx
import { useQuery as useQuery3 } from "@tanstack/react-query";
var PRODUCT_VARIANT_QUERY_KEY = "product_variant";
var productVariantQueryKeys = queryKeysFactory(
  PRODUCT_VARIANT_QUERY_KEY
);
var useVariants = (query, options) => {
  const { data, ...rest } = useQuery3({
    queryFn: () => sdk.admin.productVariant.list(query),
    queryKey: productVariantQueryKeys.list(query),
    ...options
  });
  return { ...data, ...rest };
};

export {
  notificationQueryKeys,
  useNotifications,
  useMarkPaymentCollectionAsPaid,
  useVariants,
  useRefundReasons
};
