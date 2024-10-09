import {
  formatCurrency
} from "./chunk-OV5NMSY6.mjs";
import {
  getOrderPaymentStatus
} from "./chunk-XFSJ7YIN.mjs";
import {
  getLocaleAmount,
  getStylizedAmount
} from "./chunk-FSMQADBD.mjs";
import {
  useCapturePayment
} from "./chunk-HYS3DXZS.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";

// src/routes/orders/order-detail/components/order-payment-section/order-payment-section.tsx
import { ArrowDownRightMini, DocumentText, XCircle } from "@medusajs/icons";
import {
  Badge,
  Button,
  Container,
  Heading,
  StatusBadge,
  Text,
  toast,
  Tooltip,
  usePrompt
} from "@medusajs/ui";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

// src/lib/payment.ts
var getTotalCaptured = (paymentCollections) => paymentCollections.reduce((acc, paymentCollection) => {
  acc = acc + (paymentCollection.captured_amount - paymentCollection.refunded_amount);
  return acc;
}, 0);
var getTotalPending = (paymentCollections) => paymentCollections.reduce((acc, paymentCollection) => {
  acc += paymentCollection.amount - paymentCollection.captured_amount;
  return acc;
}, 0);

// src/routes/orders/order-detail/components/order-payment-section/order-payment-section.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var getPaymentsFromOrder = (order) => {
  return order.payment_collections.map((collection) => collection.payments).flat(1).filter(Boolean);
};
var OrderPaymentSection = ({ order }) => {
  const payments = getPaymentsFromOrder(order);
  const refunds = payments.map((payment) => payment?.refunds).flat(1).filter(Boolean);
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y divide-dashed p-0", children: [
    /* @__PURE__ */ jsx(Header, { order }),
    /* @__PURE__ */ jsx(
      PaymentBreakdown,
      {
        order,
        payments,
        refunds,
        currencyCode: order.currency_code
      }
    ),
    /* @__PURE__ */ jsx(
      Total,
      {
        paymentCollections: order.payment_collections,
        currencyCode: order.currency_code
      }
    )
  ] });
};
var Header = ({ order }) => {
  const { t } = useTranslation();
  const { label, color } = getOrderPaymentStatus(t, order.payment_status);
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("orders.payment.title") }),
    /* @__PURE__ */ jsx(StatusBadge, { color, className: "text-nowrap", children: label })
  ] });
};
var Refund = ({
  refund,
  currencyCode
}) => {
  const { t } = useTranslation();
  const RefundReasonBadge = refund?.refund_reason && /* @__PURE__ */ jsx(
    Badge,
    {
      size: "2xsmall",
      className: "cursor-default select-none capitalize",
      rounded: "full",
      children: refund.refund_reason.label
    }
  );
  const RefundNoteIndicator = refund.note && /* @__PURE__ */ jsx(Tooltip, { content: refund.note, children: /* @__PURE__ */ jsx(DocumentText, { className: "text-ui-tag-neutral-icon ml-1 inline" }) });
  return /* @__PURE__ */ jsxs("div", { className: "bg-ui-bg-subtle text-ui-fg-subtle grid grid-cols-[1fr_1fr_1fr_20px] items-center gap-x-4 px-6 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ jsx("div", { className: "self-center pr-3", children: /* @__PURE__ */ jsx(ArrowDownRightMini, { className: "text-ui-fg-muted" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(Text, { size: "small", leading: "compact", weight: "plus", children: [
          t("orders.payment.refund"),
          " ",
          RefundNoteIndicator
        ] }),
        /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: format(new Date(refund.created_at), "dd MMM, yyyy, HH:mm:ss") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: RefundReasonBadge }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs(Text, { size: "small", leading: "compact", children: [
      "- ",
      getLocaleAmount(refund.amount, currencyCode)
    ] }) })
  ] });
};
var Payment = ({
  order,
  payment,
  refunds,
  currencyCode
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useCapturePayment(order.id, payment.id);
  const handleCapture = async () => {
    const res = await prompt({
      title: t("orders.payment.capture"),
      description: t("orders.payment.capturePayment", {
        amount: formatCurrency(payment.amount, currencyCode)
      }),
      confirmText: t("actions.confirm"),
      cancelText: t("actions.cancel"),
      variant: "confirmation"
    });
    if (!res) {
      return;
    }
    await mutateAsync(
      { amount: payment.amount },
      {
        onSuccess: () => {
          toast.success(
            t("orders.payment.capturePaymentSuccess", {
              amount: formatCurrency(payment.amount, currencyCode)
            })
          );
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  };
  const [status, color] = payment.captured_at ? ["Captured", "green"] : ["Pending", "orange"];
  const cleanId = payment.id.replace("pay_", "");
  const showCapture = payment.captured_at === null && payment.canceled_at === null;
  return /* @__PURE__ */ jsxs("div", { className: "divide-y divide-dashed", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-[1fr_1fr_1fr_1fr_20px] items-center gap-x-4 px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            size: "small",
            leading: "compact",
            weight: "plus",
            className: "truncate",
            children: cleanId
          }
        ),
        /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: format(
          new Date(payment.created_at),
          "dd MMM, yyyy, HH:mm:ss"
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", className: "capitalize", children: payment.provider_id }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(StatusBadge, { color, className: "text-nowrap", children: status }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: getLocaleAmount(payment.amount, payment.currency_code) }) }),
      /* @__PURE__ */ jsx(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("orders.payment.refund"),
                  icon: /* @__PURE__ */ jsx(XCircle, {}),
                  to: `/orders/${order.id}/refund?paymentId=${payment.id}`,
                  disabled: !payment.captured_at
                }
              ]
            }
          ]
        }
      )
    ] }),
    showCapture && /* @__PURE__ */ jsxs("div", { className: "bg-ui-bg-subtle flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx(ArrowDownRightMini, { className: "text-ui-fg-muted" }),
        /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: t("orders.payment.isReadyToBeCaptured", {
          id: cleanId
        }) })
      ] }),
      /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", onClick: handleCapture, children: t("orders.payment.capture") })
    ] }),
    refunds.map((refund) => /* @__PURE__ */ jsx(Refund, { refund, currencyCode }, refund.id))
  ] });
};
var PaymentBreakdown = ({
  order,
  payments,
  refunds,
  currencyCode
}) => {
  const orderRefunds = refunds.filter((refund) => refund.payment_id === null);
  const entries = [...orderRefunds, ...payments].sort((a, b) => {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  }).map((entry) => {
    return {
      event: entry,
      type: entry.id.startsWith("pay_") ? "payment" : "refund"
    };
  });
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col divide-y divide-dashed", children: entries.map(({ type, event }) => {
    switch (type) {
      case "payment":
        return /* @__PURE__ */ jsx(
          Payment,
          {
            order,
            payment: event,
            refunds: refunds.filter(
              (refund) => refund.payment_id === event.id
            ),
            currencyCode
          },
          event.id
        );
      case "refund":
        return /* @__PURE__ */ jsx(
          Refund,
          {
            refund: event,
            currencyCode
          },
          event.id
        );
    }
  }) });
};
var Total = ({
  paymentCollections,
  currencyCode
}) => {
  const { t } = useTranslation();
  const totalPending = getTotalPending(paymentCollections);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: t("orders.payment.totalPaidByCustomer") }),
      /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: getStylizedAmount(
        getTotalCaptured(paymentCollections),
        currencyCode
      ) })
    ] }),
    totalPending > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: "Total pending" }),
      /* @__PURE__ */ jsx(Text, { size: "small", weight: "plus", leading: "compact", children: getStylizedAmount(totalPending, currencyCode) })
    ] })
  ] });
};

export {
  getTotalCaptured,
  getPaymentsFromOrder,
  OrderPaymentSection
};
