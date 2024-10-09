import {
  require_copy_to_clipboard
} from "./chunk-K7S5TX6I.mjs";
import {
  formatProvider
} from "./chunk-IR5DHEKS.mjs";
import {
  useCancelClaim,
  useCancelClaimRequest,
  useClaims
} from "./chunk-TXHSOOMB.mjs";
import {
  useCancelExchange,
  useCancelExchangeRequest,
  useExchanges
} from "./chunk-JT6XMJ42.mjs";
import {
  getReturnableQuantity
} from "./chunk-PXZ7QYKX.mjs";
import {
  useCancelReturn,
  useCancelReturnRequest,
  useReturns
} from "./chunk-XFNX2RGX.mjs";
import {
  useCancelOrderEdit,
  useConfirmOrderEdit
} from "./chunk-L5KMON7M.mjs";
import {
  OrderPaymentSection,
  getPaymentsFromOrder,
  getTotalCaptured
} from "./chunk-Z4SZR3MN.mjs";
import {
  formatCurrency
} from "./chunk-OV5NMSY6.mjs";
import {
  DEFAULT_FIELDS
} from "./chunk-DJGKMY2K.mjs";
import {
  getOrderFulfillmentStatus,
  getOrderPaymentStatus
} from "./chunk-XFSJ7YIN.mjs";
import {
  getLocaleAmount,
  getStylizedAmount
} from "./chunk-FSMQADBD.mjs";
import {
  getFormattedAddress,
  isSameAddress
} from "./chunk-OIAPXGI2.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  Thumbnail
} from "./chunk-PHMALPVO.mjs";
import "./chunk-MWVM4TYO.mjs";
import {
  useDate
} from "./chunk-QAF7PVQE.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import {
  Skeleton
} from "./chunk-XDUX5ONP.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useMarkPaymentCollectionAsPaid
} from "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import "./chunk-DZ7P4IRT.mjs";
import "./chunk-JJJMSDYK.mjs";
import "./chunk-NFTXVZ2D.mjs";
import "./chunk-NTVBWR5J.mjs";
import "./chunk-UF2BEMDJ.mjs";
import "./chunk-2KLB4XUE.mjs";
import "./chunk-HYS3DXZS.mjs";
import "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import "./chunk-2K25ZV2O.mjs";
import "./chunk-P3OWRGDP.mjs";
import {
  useReservationItems
} from "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import {
  useStockLocation
} from "./chunk-G3GT763I.mjs";
import {
  ordersQueryKeys,
  useCancelOrder,
  useCancelOrderFulfillment,
  useMarkOrderFulfillmentAsDelivered,
  useOrder,
  useOrderChanges,
  useOrderPreview
} from "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import {
  __toESM
} from "./chunk-GH77ZQI2.mjs";

// src/routes/orders/order-detail/loader.ts
var orderDetailQuery = (id) => ({
  queryKey: ordersQueryKeys.detail(id),
  queryFn: async () => sdk.admin.order.retrieve(id, {
    fields: DEFAULT_FIELDS
  })
});
var orderLoader = async ({ params }) => {
  const id = params.id;
  const query = orderDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/orders/order-detail/order-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/orders/order-detail/components/order-activity-section/order-activity-section.tsx
import { Container, Heading } from "@medusajs/ui";
import { useTranslation as useTranslation4 } from "react-i18next";

// src/routes/orders/order-detail/components/order-activity-section/order-note-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpCircleSolid } from "@medusajs/icons";
import { IconButton } from "@medusajs/ui";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var OrderNoteSchema = z.object({
  value: z.string().min(1)
});
var OrderNoteForm = ({ order }) => {
  const { t } = useTranslation();
  const textareaRef = useRef(null);
  const form = useForm({
    defaultValues: {
      value: ""
    },
    resolver: zodResolver(OrderNoteSchema)
  });
  const { mutateAsync, isLoading } = {};
  const handleSubmit = form.handleSubmit(async (values) => {
    mutateAsync(
      {
        resource_id: order.id,
        resource_type: "order",
        value: values.value
      },
      {
        onSuccess: () => {
          form.reset();
          handleResetSize();
        }
      }
    );
  });
  const handleResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
  const handleResetSize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("div", { className: "bg-ui-bg-field shadow-borders-base flex flex-col gap-y-2 rounded-md px-2 py-1.5", children: [
    /* @__PURE__ */ jsx(
      Form.Field,
      {
        control: form.control,
        name: "value",
        render: ({ field }) => {
          return /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(Form.Label, { hidden: true, children: t("orders.activity.comment.label") }),
            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
              "textarea",
              {
                ...field,
                ref: textareaRef,
                onInput: handleResize,
                className: "txt-small text-ui-fg-base placeholder:text-ui-fg-muted resize-none overflow-hidden bg-transparent outline-none",
                placeholder: t("orders.activity.comment.placeholder"),
                rows: 1
              }
            ) })
          ] });
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs(
      IconButton,
      {
        type: "submit",
        isLoading,
        variant: "transparent",
        size: "small",
        className: "text-ui-fg-muted hover:text-ui-fg-subtle active:text-ui-fg-subtle",
        children: [
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: t("orders.activity.comment.addButtonText") }),
          /* @__PURE__ */ jsx(ArrowUpCircleSolid, {})
        ]
      }
    ) })
  ] }) }) }) });
};

// src/routes/orders/order-detail/components/order-activity-section/order-timeline.tsx
import { Button, IconButton as IconButton2, Text as Text2, Tooltip, clx, usePrompt } from "@medusajs/ui";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useMemo, useState as useState2 } from "react";
import { Link } from "react-router-dom";
import { XMarkMini } from "@medusajs/icons";
import { useTranslation as useTranslation3 } from "react-i18next";

// src/routes/orders/order-detail/components/order-activity-section/activity-items.tsx
import { Popover, Text } from "@medusajs/ui";
import { useState } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ActivityItems(props) {
  const { t } = useTranslation2();
  const [open, setOpen] = useState(false);
  const itemsToSend = props.itemsToSend;
  const itemsToReturn = props.itemsToReturn;
  const itemsMap = props.itemsMap;
  const title = props.title;
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  if (!itemsToSend?.length && !itemsToReturn?.length) {
    return;
  }
  return /* @__PURE__ */ jsxs2(Popover, { open, children: [
    /* @__PURE__ */ jsx2(
      Popover.Trigger,
      {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        autoFocus: false,
        className: "focus-visible:outline-none",
        children: /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: title })
      }
    ),
    /* @__PURE__ */ jsx2(
      Popover.Content,
      {
        align: "center",
        side: "top",
        className: "bg-ui-bg-component p-0 max-w-[200px] focus-visible:outline-none",
        children: /* @__PURE__ */ jsxs2("div", { className: "flex flex-col", children: [
          !!itemsToSend?.length && /* @__PURE__ */ jsxs2("div", { className: "p-3", children: [
            /* @__PURE__ */ jsx2("div", { className: "txt-compact-small-plus mb-1", children: t("orders.activity.events.common.toSend") }),
            /* @__PURE__ */ jsxs2("div", { className: "flex flex-col", children: [
              itemsToSend?.map((item) => {
                const originalItem = itemsMap?.get(item.item_id);
                return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-3", children: [
                  /* @__PURE__ */ jsxs2(Text, { size: "small", className: "text-ui-fg-subtle", children: [
                    item.quantity,
                    "x"
                  ] }),
                  /* @__PURE__ */ jsx2(
                    Thumbnail,
                    {
                      src: originalItem?.variant?.product?.thumbnail
                    }
                  ),
                  /* @__PURE__ */ jsx2(Text, { className: "txt-compact-small text-ui-fg-subtle truncate", children: `${originalItem?.variant?.title} \xB7 ${originalItem?.variant?.product?.title}` })
                ] }, item.id);
              }),
              /* @__PURE__ */ jsx2("div", { className: "flex flex-1 flex-row items-center gap-2" })
            ] })
          ] }),
          !!itemsToReturn?.length && /* @__PURE__ */ jsxs2("div", { className: "border-t-2 border-dotted p-3", children: [
            /* @__PURE__ */ jsx2("div", { className: "txt-compact-small-plus mb-1", children: t("orders.activity.events.common.toReturn") }),
            /* @__PURE__ */ jsxs2("div", { className: "flex flex-col", children: [
              itemsToReturn?.map((item) => {
                const originalItem = itemsMap?.get(item.item_id);
                return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-x-3", children: [
                  /* @__PURE__ */ jsxs2(Text, { size: "small", className: "text-ui-fg-subtle", children: [
                    item.quantity,
                    "x"
                  ] }),
                  /* @__PURE__ */ jsx2(
                    Thumbnail,
                    {
                      src: originalItem?.variant?.product?.thumbnail
                    }
                  ),
                  /* @__PURE__ */ jsx2(Text, { className: "txt-compact-small text-ui-fg-subtle truncate", children: `${originalItem?.variant?.title} \xB7 ${originalItem?.variant?.product?.title}` })
                ] }, item.id);
              }),
              /* @__PURE__ */ jsx2("div", { className: "flex flex-1 flex-row items-center gap-2" })
            ] })
          ] })
        ] })
      }
    )
  ] });
}
var activity_items_default = ActivityItems;

// src/routes/orders/order-detail/components/order-activity-section/order-timeline.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var OrderTimeline = ({ order }) => {
  const items = useActivityItems(order);
  if (items.length <= 3) {
    return /* @__PURE__ */ jsx3("div", { className: "flex flex-col gap-y-0.5", children: items.map((item, index) => {
      return /* @__PURE__ */ jsx3(
        OrderActivityItem,
        {
          title: item.title,
          timestamp: item.timestamp,
          isFirst: index === items.length - 1,
          itemsToSend: item.itemsToSend,
          itemsToReturn: item.itemsToReturn,
          itemsMap: item.itemsMap,
          children: item.children
        },
        index
      );
    }) });
  }
  const lastItems = items.slice(0, 2);
  const collapsibleItems = items.slice(2, items.length - 1);
  const firstItem = items[items.length - 1];
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-0.5", children: [
    lastItems.map((item, index) => {
      return /* @__PURE__ */ jsx3(
        OrderActivityItem,
        {
          title: item.title,
          timestamp: item.timestamp,
          itemsToSend: item.itemsToSend,
          itemsToReturn: item.itemsToReturn,
          itemsMap: item.itemsMap,
          children: item.children
        },
        index
      );
    }),
    /* @__PURE__ */ jsx3(OrderActivityCollapsible, { activities: collapsibleItems }),
    /* @__PURE__ */ jsx3(
      OrderActivityItem,
      {
        title: firstItem.title,
        timestamp: firstItem.timestamp,
        isFirst: true,
        itemsToSend: firstItem.itemsToSend,
        itemsToReturn: firstItem.itemsToReturn,
        itemsMap: firstItem.itemsMap,
        children: firstItem.children
      }
    )
  ] });
};
var useActivityItems = (order) => {
  const { t } = useTranslation3();
  const itemsMap = useMemo(
    () => new Map(order?.items?.map((i) => [i.id, i])),
    [order.items]
  );
  const { order_changes: orderChanges = [] } = useOrderChanges(order.id, {
    change_type: "edit"
  });
  const { returns = [] } = useReturns({
    order_id: order.id,
    fields: "+received_at,*items"
  });
  const { claims = [] } = useClaims({
    order_id: order.id,
    fields: "*additional_items"
  });
  const { exchanges = [] } = useExchanges({
    order_id: order.id,
    fields: "*additional_items"
  });
  const payments = getPaymentsFromOrder(order);
  const notes = [];
  const isLoading = false;
  return useMemo(() => {
    if (isLoading) {
      return [];
    }
    const items = [];
    for (const payment of payments) {
      const amount = payment.amount;
      items.push({
        title: t("orders.activity.events.payment.awaiting"),
        timestamp: payment.created_at,
        children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: getStylizedAmount(amount, payment.currency_code) })
      });
      if (payment.canceled_at) {
        items.push({
          title: t("orders.activity.events.payment.canceled"),
          timestamp: payment.canceled_at,
          children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: getStylizedAmount(amount, payment.currency_code) })
        });
      }
      if (payment.captured_at) {
        items.push({
          title: t("orders.activity.events.payment.captured"),
          timestamp: payment.captured_at,
          children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: getStylizedAmount(amount, payment.currency_code) })
        });
      }
      for (const refund of payment.refunds || []) {
        items.push({
          title: t("orders.activity.events.payment.refunded"),
          timestamp: refund.created_at,
          children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: getStylizedAmount(
            refund.amount,
            payment.currency_code
          ) })
        });
      }
    }
    for (const fulfillment of order.fulfillments || []) {
      items.push({
        title: t("orders.activity.events.fulfillment.created"),
        timestamp: fulfillment.created_at,
        children: /* @__PURE__ */ jsx3(FulfillmentCreatedBody, { fulfillment })
      });
      if (fulfillment.delivered_at) {
        items.push({
          title: t("orders.activity.events.fulfillment.delivered"),
          timestamp: fulfillment.delivered_at,
          children: /* @__PURE__ */ jsx3(FulfillmentCreatedBody, { fulfillment })
        });
      }
      if (fulfillment.shipped_at) {
        items.push({
          title: t("orders.activity.events.fulfillment.shipped"),
          timestamp: fulfillment.shipped_at,
          children: /* @__PURE__ */ jsx3(FulfillmentCreatedBody, { fulfillment, isShipment: true })
        });
      }
      if (fulfillment.canceled_at) {
        items.push({
          title: t("orders.activity.events.fulfillment.canceled"),
          timestamp: fulfillment.canceled_at
        });
      }
    }
    const returnMap = /* @__PURE__ */ new Map();
    for (const ret of returns) {
      returnMap.set(ret.id, ret);
      if (ret.claim_id || ret.exchange_id) {
        continue;
      }
      items.push({
        title: t("orders.activity.events.return.created", {
          returnId: ret.id.slice(-7)
        }),
        timestamp: ret.created_at,
        itemsToReturn: ret?.items,
        itemsMap,
        children: /* @__PURE__ */ jsx3(ReturnBody, { orderReturn: ret, isCreated: !ret.canceled_at })
      });
      if (ret.canceled_at) {
        items.push({
          title: t("orders.activity.events.return.canceled", {
            returnId: ret.id.slice(-7)
          }),
          timestamp: ret.canceled_at
        });
      }
      if (ret.status === "received" || ret.status === "partially_received") {
        items.push({
          title: t("orders.activity.events.return.received", {
            returnId: ret.id.slice(-7)
          }),
          timestamp: ret.received_at,
          itemsToReturn: ret?.items,
          itemsMap,
          children: /* @__PURE__ */ jsx3(ReturnBody, { orderReturn: ret, isReceived: true })
        });
      }
    }
    for (const claim of claims) {
      const claimReturn = returnMap.get(claim.return_id);
      items.push({
        title: t(
          claim.canceled_at ? "orders.activity.events.claim.canceled" : "orders.activity.events.claim.created",
          {
            claimId: claim.id.slice(-7)
          }
        ),
        timestamp: claim.canceled_at || claim.created_at,
        itemsToSend: claim.additional_items,
        itemsToReturn: claimReturn?.items,
        itemsMap,
        children: /* @__PURE__ */ jsx3(ClaimBody, { claim, claimReturn })
      });
    }
    for (const exchange of exchanges) {
      const exchangeReturn = returnMap.get(exchange.return_id);
      items.push({
        title: t(
          exchange.canceled_at ? "orders.activity.events.exchange.canceled" : "orders.activity.events.exchange.created",
          {
            exchangeId: exchange.id.slice(-7)
          }
        ),
        timestamp: exchange.canceled_at || exchange.created_at,
        itemsToSend: exchange.additional_items,
        itemsToReturn: exchangeReturn?.items,
        itemsMap,
        children: /* @__PURE__ */ jsx3(ExchangeBody, { exchange, exchangeReturn })
      });
    }
    for (const edit of orderChanges) {
      const isConfirmed = edit.status === "confirmed";
      const isPending = edit.status === "pending";
      if (isPending) {
        continue;
      }
      items.push({
        title: t(`orders.activity.events.edit.${edit.status}`, {
          editId: edit.id.slice(-7)
        }),
        timestamp: edit.status === "requested" ? edit.requested_at : edit.status === "declined" ? edit.declined_at : edit.status === "canceled" ? edit.canceled_at : edit.created_at,
        children: isConfirmed ? /* @__PURE__ */ jsx3(OrderEditBody, { edit, itemsMap }) : null
      });
    }
    if (order.canceled_at) {
      items.push({
        title: t("orders.activity.events.canceled.title"),
        timestamp: order.canceled_at
      });
    }
    const sortedActivities = items.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    const createdAt = {
      title: t("orders.activity.events.placed.title"),
      timestamp: order.created_at,
      children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: getStylizedAmount(order.total, order.currency_code) })
    };
    return [...sortedActivities, createdAt];
  }, [order, payments, returns, exchanges, orderChanges, notes, isLoading]);
};
var OrderActivityItem = ({
  title,
  timestamp,
  isFirst = false,
  children,
  itemsToSend,
  itemsToReturn,
  itemsMap
}) => {
  const { getFullDate, getRelativeDate } = useDate();
  return /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-[20px_1fr] items-start gap-2", children: [
    /* @__PURE__ */ jsxs3("div", { className: "flex size-full flex-col items-center gap-y-0.5", children: [
      /* @__PURE__ */ jsx3("div", { className: "flex size-5 items-center justify-center", children: /* @__PURE__ */ jsx3("div", { className: "bg-ui-bg-base shadow-borders-base flex size-2.5 items-center justify-center rounded-full", children: /* @__PURE__ */ jsx3("div", { className: "bg-ui-tag-neutral-icon size-1.5 rounded-full" }) }) }),
      !isFirst && /* @__PURE__ */ jsx3("div", { className: "bg-ui-border-base w-px flex-1" })
    ] }),
    /* @__PURE__ */ jsxs3(
      "div",
      {
        className: clx({
          "pb-4": !isFirst
        }),
        children: [
          /* @__PURE__ */ jsxs3("div", { className: "flex items-center justify-between", children: [
            itemsToSend?.length || itemsToReturn?.length ? /* @__PURE__ */ jsx3(
              activity_items_default,
              {
                title,
                itemsToSend,
                itemsToReturn,
                itemsMap
              },
              title
            ) : /* @__PURE__ */ jsx3(Text2, { size: "small", leading: "compact", weight: "plus", children: title }),
            timestamp && /* @__PURE__ */ jsx3(
              Tooltip,
              {
                content: getFullDate({ date: timestamp, includeTime: true }),
                children: /* @__PURE__ */ jsx3(
                  Text2,
                  {
                    size: "small",
                    leading: "compact",
                    className: "text-ui-fg-subtle text-right",
                    children: getRelativeDate(timestamp)
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx3("div", { children })
        ]
      }
    )
  ] });
};
var OrderActivityCollapsible = ({
  activities
}) => {
  const [open, setOpen] = useState2(false);
  const { t } = useTranslation3();
  if (!activities.length) {
    return null;
  }
  return /* @__PURE__ */ jsxs3(Collapsible.Root, { open, onOpenChange: setOpen, children: [
    !open && /* @__PURE__ */ jsxs3("div", { className: "grid grid-cols-[20px_1fr] items-start gap-2", children: [
      /* @__PURE__ */ jsx3("div", { className: "flex size-full flex-col items-center", children: /* @__PURE__ */ jsx3("div", { className: "border-ui-border-strong w-px flex-1 bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-right bg-repeat-y" }) }),
      /* @__PURE__ */ jsx3("div", { className: "pb-4", children: /* @__PURE__ */ jsx3(Collapsible.Trigger, { className: "text-left", children: /* @__PURE__ */ jsx3(
        Text2,
        {
          size: "small",
          leading: "compact",
          weight: "plus",
          className: "text-ui-fg-muted",
          children: t("orders.activity.showMoreActivities", {
            count: activities.length
          })
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx3(Collapsible.Content, { children: /* @__PURE__ */ jsx3("div", { className: "flex flex-col gap-y-0.5", children: activities.map((item, index) => {
      return /* @__PURE__ */ jsx3(
        OrderActivityItem,
        {
          title: item.title,
          timestamp: item.timestamp,
          itemsToSend: item.itemsToSend,
          itemsToReturn: item.itemsToReturn,
          itemsMap: item.itemsMap,
          children: item.children
        },
        index
      );
    }) }) })
  ] });
};
var FulfillmentCreatedBody = ({
  fulfillment
}) => {
  const { t } = useTranslation3();
  const numberOfItems = fulfillment.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.fulfillment.items", {
    count: numberOfItems
  }) }) });
};
var ReturnBody = ({
  orderReturn,
  isCreated,
  isReceived
}) => {
  const prompt = usePrompt();
  const { t } = useTranslation3();
  const { mutateAsync: cancelReturnRequest } = useCancelReturn(
    orderReturn.id,
    orderReturn.order_id
  );
  const onCancel = async () => {
    const res = await prompt({
      title: t("orders.returns.cancel.title"),
      description: t("orders.returns.cancel.description"),
      confirmText: t("actions.confirm"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await cancelReturnRequest();
  };
  const numberOfItems = orderReturn.items.reduce((acc, item) => {
    return acc + (isReceived ? item.received_quantity : item.quantity);
  }, 0);
  return /* @__PURE__ */ jsxs3("div", { className: "flex items-start gap-1", children: [
    /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.return.items", {
      count: numberOfItems
    }) }),
    isCreated && /* @__PURE__ */ jsxs3(Fragment, { children: [
      /* @__PURE__ */ jsx3("div", { className: "mt-[2px] flex items-center leading-none", children: "\u22C5" }),
      /* @__PURE__ */ jsx3(
        Button,
        {
          onClick: onCancel,
          className: "text-ui-fg-subtle h-auto px-0 leading-none hover:bg-transparent",
          variant: "transparent",
          size: "small",
          children: t("actions.cancel")
        }
      )
    ] })
  ] });
};
var ClaimBody = ({
  claim,
  claimReturn
}) => {
  const prompt = usePrompt();
  const { t } = useTranslation3();
  const isCanceled = !!claim.created_at;
  const { mutateAsync: cancelClaim } = useCancelClaim(claim.id, claim.order_id);
  const onCancel = async () => {
    const res = await prompt({
      title: t("orders.claims.cancel.title"),
      description: t("orders.claims.cancel.description"),
      confirmText: t("actions.confirm"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await cancelClaim();
  };
  const outboundItems = (claim.additional_items || []).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const inboundItems = (claimReturn?.items || []).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return /* @__PURE__ */ jsxs3("div", { children: [
    outboundItems > 0 && /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.claim.itemsInbound", {
      count: outboundItems
    }) }),
    inboundItems > 0 && /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.claim.itemsOutbound", {
      count: inboundItems
    }) }),
    !isCanceled && /* @__PURE__ */ jsx3(
      Button,
      {
        onClick: onCancel,
        className: "text-ui-fg-subtle h-auto px-0 leading-none hover:bg-transparent",
        variant: "transparent",
        size: "small",
        children: t("actions.cancel")
      }
    )
  ] });
};
var ExchangeBody = ({
  exchange,
  exchangeReturn
}) => {
  const prompt = usePrompt();
  const { t } = useTranslation3();
  const isCanceled = !!exchange.canceled_at;
  const { mutateAsync: cancelExchange } = useCancelExchange(
    exchange.id,
    exchange.order_id
  );
  const onCancel = async () => {
    const res = await prompt({
      title: t("orders.exchanges.cancel.title"),
      description: t("orders.exchanges.cancel.description"),
      confirmText: t("actions.confirm"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await cancelExchange();
  };
  const outboundItems = (exchange.additional_items || []).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const inboundItems = (exchangeReturn?.items || []).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return /* @__PURE__ */ jsxs3("div", { children: [
    outboundItems > 0 && /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.exchange.itemsInbound", {
      count: outboundItems
    }) }),
    inboundItems > 0 && /* @__PURE__ */ jsx3(Text2, { size: "small", className: "text-ui-fg-subtle", children: t("orders.activity.events.exchange.itemsOutbound", {
      count: inboundItems
    }) }),
    !isCanceled && /* @__PURE__ */ jsx3(
      Button,
      {
        onClick: onCancel,
        className: "text-ui-fg-subtle h-auto px-0 leading-none hover:bg-transparent",
        variant: "transparent",
        size: "small",
        children: t("actions.cancel")
      }
    )
  ] });
};
var OrderEditBody = ({
  edit,
  itemsMap
}) => {
  const { t } = useTranslation3();
  const [itemsAdded, itemsRemoved] = useMemo(
    () => countItemsChange(edit.actions, itemsMap),
    [edit]
  );
  return /* @__PURE__ */ jsxs3("div", { children: [
    itemsAdded > 0 && /* @__PURE__ */ jsxs3(Text2, { size: "small", className: "text-ui-fg-subtle", children: [
      t("labels.added"),
      ": ",
      itemsAdded
    ] }),
    itemsRemoved > 0 && /* @__PURE__ */ jsxs3(Text2, { size: "small", className: "text-ui-fg-subtle", children: [
      t("labels.removed"),
      ": ",
      itemsRemoved
    ] })
  ] });
};
function countItemsChange(actions, itemsMap) {
  let added = 0;
  let removed = 0;
  actions.forEach((action) => {
    if (action.action === "ITEM_ADD") {
      added += action.details.quantity;
    }
    if (action.action === "ITEM_UPDATE") {
      const newQuantity = action.details.quantity;
      const originalQuantity = itemsMap.get(
        action.details.reference_id
      )?.quantity;
      if (typeof originalQuantity === "number") {
        const diff = Math.abs(newQuantity - originalQuantity);
        if (newQuantity > originalQuantity) {
          added += diff;
        }
        if (newQuantity < originalQuantity) {
          removed += diff;
        }
      }
    }
  });
  return [added, removed];
}

// src/routes/orders/order-detail/components/order-activity-section/order-activity-section.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var OrderActivitySection = ({ order }) => {
  const { t } = useTranslation4();
  return /* @__PURE__ */ jsxs4(Container, { className: "flex flex-col gap-y-8 px-6 py-4", children: [
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx4("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx4(Heading, { level: "h2", children: t("orders.activity.header") }) }),
      /* @__PURE__ */ jsx4(OrderNoteForm, { order })
    ] }),
    /* @__PURE__ */ jsx4(OrderTimeline, { order })
  ] });
};

// src/routes/orders/order-detail/components/order-customer-section/order-customer-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation6 } from "react-i18next";
import { ArrowPath, CurrencyDollar, Envelope, FlyingBox } from "@medusajs/icons";

// src/components/common/customer-info/customer-info.tsx
import { Avatar, Copy, Text as Text3 } from "@medusajs/ui";
import { useTranslation as useTranslation5 } from "react-i18next";
import { Link as Link2 } from "react-router-dom";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var ID = ({ data }) => {
  const { t } = useTranslation5();
  const id = data.customer_id;
  const name = getOrderCustomer(data);
  const email = data.email;
  const fallback = (name || email || "").charAt(0).toUpperCase();
  return /* @__PURE__ */ jsxs5("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
    /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", weight: "plus", children: t("fields.id") }),
    /* @__PURE__ */ jsx5(
      Link2,
      {
        to: `/customers/${id}`,
        className: "focus:shadow-borders-focus rounded-[4px] outline-none transition-shadow",
        children: /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-x-2 overflow-hidden", children: [
          /* @__PURE__ */ jsx5(Avatar, { size: "2xsmall", fallback }),
          /* @__PURE__ */ jsx5(
            Text3,
            {
              size: "small",
              leading: "compact",
              className: "text-ui-fg-subtle hover:text-ui-fg-base transition-fg truncate",
              children: name || email
            }
          )
        ] })
      }
    )
  ] });
};
var Company = ({ data }) => {
  const { t } = useTranslation5();
  const company = data.shipping_address?.company || data.billing_address?.company;
  if (!company) {
    return null;
  }
  return /* @__PURE__ */ jsxs5("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
    /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", weight: "plus", children: t("fields.company") }),
    /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", className: "truncate", children: company })
  ] });
};
var Contact = ({ data }) => {
  const { t } = useTranslation5();
  const phone = data.shipping_address?.phone || data.billing_address?.phone;
  const email = data.email || "";
  return /* @__PURE__ */ jsxs5("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
    /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", weight: "plus", children: t("orders.customer.contactLabel") }),
    /* @__PURE__ */ jsxs5("div", { className: "flex flex-col gap-y-2", children: [
      /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-[1fr_20px] items-start gap-x-2", children: [
        /* @__PURE__ */ jsx5(
          Text3,
          {
            size: "small",
            leading: "compact",
            className: "text-pretty break-all",
            children: email
          }
        ),
        /* @__PURE__ */ jsx5("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx5(Copy, { content: email, className: "text-ui-fg-muted" }) })
      ] }),
      phone && /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-[1fr_20px] items-start gap-x-2", children: [
        /* @__PURE__ */ jsx5(
          Text3,
          {
            size: "small",
            leading: "compact",
            className: "text-pretty break-all",
            children: phone
          }
        ),
        /* @__PURE__ */ jsx5("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx5(Copy, { content: email, className: "text-ui-fg-muted" }) })
      ] })
    ] })
  ] });
};
var AddressPrint = ({
  address,
  type
}) => {
  const { t } = useTranslation5();
  return /* @__PURE__ */ jsxs5("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
    /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", weight: "plus", children: type === "shipping" ? t("addresses.shippingAddress.label") : t("addresses.billingAddress.label") }),
    address ? /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-[1fr_20px] items-start gap-x-2", children: [
      /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", children: getFormattedAddress({ address }).map((line, i) => {
        return /* @__PURE__ */ jsxs5("span", { className: "break-words", children: [
          line,
          /* @__PURE__ */ jsx5("br", {})
        ] }, i);
      }) }),
      /* @__PURE__ */ jsx5("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx5(
        Copy,
        {
          content: getFormattedAddress({ address }).join("\n"),
          className: "text-ui-fg-muted"
        }
      ) })
    ] }) : /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", children: "-" })
  ] });
};
var Addresses = ({ data }) => {
  const { t } = useTranslation5();
  return /* @__PURE__ */ jsxs5("div", { className: "divide-y", children: [
    /* @__PURE__ */ jsx5(AddressPrint, { address: data.shipping_address, type: "shipping" }),
    !isSameAddress(data.shipping_address, data.billing_address) ? /* @__PURE__ */ jsx5(AddressPrint, { address: data.billing_address, type: "billing" }) : /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx5(
        Text3,
        {
          size: "small",
          leading: "compact",
          weight: "plus",
          className: "text-ui-fg-subtle",
          children: t("addresses.billingAddress.label")
        }
      ),
      /* @__PURE__ */ jsx5(Text3, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: t("addresses.billingAddress.sameAsShipping") })
    ] })
  ] });
};
var CustomerInfo = Object.assign(
  {},
  {
    ID,
    Company,
    Contact,
    Addresses
  }
);
var getOrderCustomer = (obj) => {
  const { first_name: sFirstName, last_name: sLastName } = obj.shipping_address || {};
  const { first_name: bFirstName, last_name: bLastName } = obj.billing_address || {};
  const { first_name: cFirstName, last_name: cLastName } = obj.customer || {};
  const customerName = [cFirstName, cLastName].filter(Boolean).join(" ");
  const shippingName = [sFirstName, sLastName].filter(Boolean).join(" ");
  const billingName = [bFirstName, bLastName].filter(Boolean).join(" ");
  const name = customerName || shippingName || billingName;
  return name;
};

// src/routes/orders/order-detail/components/order-customer-section/order-customer-section.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var OrderCustomerSection = ({ order }) => {
  return /* @__PURE__ */ jsxs6(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx6(Header, {}),
    /* @__PURE__ */ jsx6(CustomerInfo.ID, { data: order }),
    /* @__PURE__ */ jsx6(CustomerInfo.Contact, { data: order }),
    /* @__PURE__ */ jsx6(CustomerInfo.Company, { data: order }),
    /* @__PURE__ */ jsx6(CustomerInfo.Addresses, { data: order })
  ] });
};
var Header = () => {
  const { t } = useTranslation6();
  return /* @__PURE__ */ jsxs6("div", { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsx6(Heading2, { level: "h2", children: t("fields.customer") }),
    /* @__PURE__ */ jsx6(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                label: t("transferOwnership.label"),
                to: `transfer-ownership`,
                icon: /* @__PURE__ */ jsx6(ArrowPath, {})
              }
            ]
          },
          {
            actions: [
              {
                label: t("addresses.shippingAddress.editLabel"),
                to: "shipping-address",
                icon: /* @__PURE__ */ jsx6(FlyingBox, {})
              },
              {
                label: t("addresses.billingAddress.editLabel"),
                to: "billing-address",
                icon: /* @__PURE__ */ jsx6(CurrencyDollar, {})
              }
            ]
          },
          {
            actions: [
              {
                label: t("email.editLabel"),
                to: `email`,
                icon: /* @__PURE__ */ jsx6(Envelope, {})
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/orders/order-detail/components/order-fulfillment-section/order-fulfillment-section.tsx
import { Buildings, XCircle } from "@medusajs/icons";
import {
  Button as Button2,
  Container as Container3,
  Copy as Copy2,
  Heading as Heading3,
  StatusBadge,
  Text as Text4,
  Tooltip as Tooltip2,
  toast,
  usePrompt as usePrompt2
} from "@medusajs/ui";
import { format } from "date-fns";
import { useTranslation as useTranslation7 } from "react-i18next";
import { Link as Link3, useNavigate } from "react-router-dom";
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var OrderFulfillmentSection = ({
  order
}) => {
  const fulfillments = order.fulfillments || [];
  return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-y-3", children: [
    /* @__PURE__ */ jsx7(UnfulfilledItemBreakdown, { order }),
    fulfillments.map((f, index) => /* @__PURE__ */ jsx7(Fulfillment, { index, fulfillment: f, order }, f.id))
  ] });
};
var UnfulfilledItem = ({
  item,
  currencyCode
}) => {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4",
      children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-start gap-x-4", children: [
          /* @__PURE__ */ jsx7(Thumbnail, { src: item.thumbnail }),
          /* @__PURE__ */ jsxs7("div", { children: [
            /* @__PURE__ */ jsx7(
              Text4,
              {
                size: "small",
                leading: "compact",
                weight: "plus",
                className: "text-ui-fg-base",
                children: item.title
              }
            ),
            item.variant.sku && /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-x-1", children: [
              /* @__PURE__ */ jsx7(Text4, { size: "small", children: item.variant.sku }),
              /* @__PURE__ */ jsx7(Copy2, { content: item.variant.sku, className: "text-ui-fg-muted" })
            ] }),
            /* @__PURE__ */ jsx7(Text4, { size: "small", children: item.variant.options.map((o) => o.value).join(" \xB7 ") })
          ] })
        ] }),
        /* @__PURE__ */ jsxs7("div", { className: "grid grid-cols-3 items-center gap-x-4", children: [
          /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx7(Text4, { size: "small", children: getLocaleAmount(item.unit_price, currencyCode) }) }),
          /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsxs7(Text4, { children: [
            /* @__PURE__ */ jsx7("span", { className: "tabular-nums", children: item.quantity - item.detail.fulfilled_quantity }),
            "x"
          ] }) }),
          /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx7(Text4, { size: "small", children: getLocaleAmount(item.subtotal || 0, currencyCode) }) })
        ] })
      ]
    },
    item.id
  );
};
var UnfulfilledItemBreakdown = ({ order }) => {
  const unfulfilledItemsWithShipping = order.items.filter(
    (i) => i.requires_shipping && i.detail.fulfilled_quantity < i.quantity
  );
  const unfulfilledItemsWithoutShipping = order.items.filter(
    (i) => !i.requires_shipping && i.detail.fulfilled_quantity < i.quantity
  );
  return /* @__PURE__ */ jsxs7(Fragment2, { children: [
    !!unfulfilledItemsWithShipping.length && /* @__PURE__ */ jsx7(
      UnfulfilledItemDisplay,
      {
        order,
        unfulfilledItems: unfulfilledItemsWithShipping,
        requiresShipping: true
      }
    ),
    !!unfulfilledItemsWithoutShipping.length && /* @__PURE__ */ jsx7(
      UnfulfilledItemDisplay,
      {
        order,
        unfulfilledItems: unfulfilledItemsWithoutShipping,
        requiresShipping: false
      }
    )
  ] });
};
var UnfulfilledItemDisplay = ({
  order,
  unfulfilledItems,
  requiresShipping = false
}) => {
  const { t } = useTranslation7();
  return /* @__PURE__ */ jsxs7(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Heading3, { level: "h2", children: t("orders.fulfillment.unfulfilledItems") }),
      /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-x-4", children: [
        requiresShipping && /* @__PURE__ */ jsx7(StatusBadge, { color: "red", className: "text-nowrap", children: t("orders.fulfillment.requiresShipping") }),
        /* @__PURE__ */ jsx7(StatusBadge, { color: "red", className: "text-nowrap", children: t("orders.fulfillment.awaitingFulfillmentBadge") }),
        /* @__PURE__ */ jsx7(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("orders.fulfillment.fulfillItems"),
                    icon: /* @__PURE__ */ jsx7(Buildings, {}),
                    to: `/orders/${order.id}/fulfillment?requires_shipping=${requiresShipping}`
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx7("div", { children: unfulfilledItems.map((item) => /* @__PURE__ */ jsx7(
      UnfulfilledItem,
      {
        item,
        currencyCode: order.currency_code
      },
      item.id
    )) })
  ] });
};
var Fulfillment = ({
  fulfillment,
  order,
  index
}) => {
  const { t } = useTranslation7();
  const prompt = usePrompt2();
  const navigate = useNavigate();
  const showLocation = !!fulfillment.location_id;
  const { stock_location, isError, error } = useStockLocation(
    fulfillment.location_id,
    void 0,
    {
      enabled: showLocation
    }
  );
  let statusText = fulfillment.requires_shipping ? "Awaiting shipping" : "Awaiting delivery";
  let statusColor = "blue";
  let statusTimestamp = fulfillment.created_at;
  if (fulfillment.canceled_at) {
    statusText = "Canceled";
    statusColor = "red";
    statusTimestamp = fulfillment.canceled_at;
  } else if (fulfillment.delivered_at) {
    statusText = "Delivered";
    statusColor = "green";
    statusTimestamp = fulfillment.delivered_at;
  } else if (fulfillment.shipped_at) {
    statusText = "Shipped";
    statusColor = "green";
    statusTimestamp = fulfillment.shipped_at;
  }
  const { mutateAsync } = useCancelOrderFulfillment(order.id, fulfillment.id);
  const { mutateAsync: markAsDelivered } = useMarkOrderFulfillmentAsDelivered(
    order.id,
    fulfillment.id
  );
  const showShippingButton = !fulfillment.canceled_at && !fulfillment.shipped_at && !fulfillment.delivered_at && fulfillment.requires_shipping;
  const showDeliveryButton = !fulfillment.canceled_at && !fulfillment.delivered_at;
  const handleMarkAsDelivered = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("orders.fulfillment.markAsDeliveredWarning"),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel"),
      variant: "confirmation"
    });
    if (res) {
      await markAsDelivered(
        {},
        {
          onSuccess: () => {
            toast.success(t("orders.fulfillment.toast.fulfillmentDelivered"));
          },
          onError: (e) => {
            toast.error(e.message);
          }
        }
      );
    }
  };
  const handleCancel = async () => {
    if (fulfillment.shipped_at) {
      toast.warning(t("orders.fulfillment.toast.fulfillmentShipped"));
      return;
    }
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("orders.fulfillment.cancelWarning"),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (res) {
      await mutateAsync(void 0, {
        onSuccess: () => {
          toast.success(t("orders.fulfillment.toast.canceled"));
        },
        onError: (e) => {
          toast.error(e.message);
        }
      });
    }
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs7(Container3, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Heading3, { level: "h2", children: t("orders.fulfillment.number", {
        number: index + 1
      }) }),
      /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx7(
          Tooltip2,
          {
            content: format(
              new Date(statusTimestamp),
              "dd MMM, yyyy, HH:mm:ss"
            ),
            children: /* @__PURE__ */ jsx7(StatusBadge, { color: statusColor, className: "text-nowrap", children: statusText })
          }
        ),
        /* @__PURE__ */ jsx7(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t("actions.cancel"),
                    icon: /* @__PURE__ */ jsx7(XCircle, {}),
                    onClick: handleCancel,
                    disabled: !!fulfillment.canceled_at
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", weight: "plus", children: t("orders.fulfillment.itemsLabel") }),
      /* @__PURE__ */ jsx7("ul", { children: fulfillment.items.map((f_item) => /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsxs7(Text4, { size: "small", leading: "compact", children: [
        f_item.quantity,
        "x ",
        f_item.title
      ] }) }, f_item.line_item_id)) })
    ] }),
    showLocation && /* @__PURE__ */ jsxs7("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", weight: "plus", children: t("orders.fulfillment.shippingFromLabel") }),
      stock_location ? /* @__PURE__ */ jsx7(
        Link3,
        {
          to: `/settings/locations/${stock_location.id}`,
          className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover transition-fg",
          children: /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", children: stock_location.name })
        }
      ) : /* @__PURE__ */ jsx7(Skeleton, { className: "w-16" })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", weight: "plus", children: t("fields.provider") }),
      /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", children: formatProvider(fulfillment.provider_id) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-start px-6 py-4", children: [
      /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", weight: "plus", children: t("orders.fulfillment.trackingLabel") }),
      /* @__PURE__ */ jsx7("div", { children: fulfillment.labels && fulfillment.labels.length > 0 ? /* @__PURE__ */ jsx7("ul", { children: fulfillment.labels.map((tlink) => {
        const hasUrl = tlink.url && tlink.url.length > 0 && tlink.url !== "#";
        if (hasUrl) {
          return /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(
            "a",
            {
              href: tlink.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-ui-fg-interactive hover:text-ui-fg-interactive-hover transition-fg",
              children: /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", children: tlink.tracking_number })
            }
          ) }, tlink.tracking_number);
        }
        return /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", children: tlink.tracking_number }) }, tlink.tracking_number);
      }) }) : /* @__PURE__ */ jsx7(Text4, { size: "small", leading: "compact", children: "-" }) })
    ] }),
    (showShippingButton || showDeliveryButton) && /* @__PURE__ */ jsxs7("div", { className: "bg-ui-bg-subtle flex items-center justify-end rounded-b-xl px-4 py-4 gap-x-2", children: [
      showDeliveryButton && /* @__PURE__ */ jsx7(Button2, { onClick: handleMarkAsDelivered, variant: "secondary", children: t("orders.fulfillment.markAsDelivered") }),
      showShippingButton && /* @__PURE__ */ jsx7(
        Button2,
        {
          onClick: () => navigate(`./${fulfillment.id}/create-shipment`),
          variant: "secondary",
          children: t("orders.fulfillment.markAsShipped")
        }
      )
    ] })
  ] });
};

// src/routes/orders/order-detail/components/order-general-section/order-general-section.tsx
import { XCircle as XCircle2 } from "@medusajs/icons";
import {
  Container as Container4,
  Copy as Copy3,
  Heading as Heading4,
  StatusBadge as StatusBadge2,
  Text as Text5,
  usePrompt as usePrompt3
} from "@medusajs/ui";
import { format as format2 } from "date-fns";
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var OrderGeneralSection = ({ order }) => {
  const { t } = useTranslation8();
  const prompt = usePrompt3();
  const { mutateAsync: cancelOrder } = useCancelOrder(order.id);
  const handleCancel = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("orders.cancelWarning", {
        id: `#${order.display_id}`
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await cancelOrder(order.id);
  };
  return /* @__PURE__ */ jsxs8(Container4, { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-1", children: [
        /* @__PURE__ */ jsxs8(Heading4, { children: [
          "#",
          order.display_id
        ] }),
        /* @__PURE__ */ jsx8(Copy3, { content: `#${order.display_id}`, className: "text-ui-fg-muted" })
      ] }),
      /* @__PURE__ */ jsx8(Text5, { size: "small", className: "text-ui-fg-subtle", children: t("orders.onDateFromSalesChannel", {
        date: format2(new Date(order.created_at), "dd MMM, yyyy, HH:mm:ss"),
        salesChannel: order.sales_channel?.name
      }) })
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-4", children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-x-1.5", children: [
        /* @__PURE__ */ jsx8(PaymentBadge, { order }),
        /* @__PURE__ */ jsx8(FulfillmentBadge, { order })
      ] }),
      /* @__PURE__ */ jsx8(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  label: t("actions.cancel"),
                  onClick: handleCancel,
                  icon: /* @__PURE__ */ jsx8(XCircle2, {})
                }
              ]
            }
          ]
        }
      )
    ] })
  ] });
};
var FulfillmentBadge = ({ order }) => {
  const { t } = useTranslation8();
  const { label, color } = getOrderFulfillmentStatus(
    t,
    order.fulfillment_status
  );
  return /* @__PURE__ */ jsx8(StatusBadge2, { color, className: "text-nowrap", children: label });
};
var PaymentBadge = ({ order }) => {
  const { t } = useTranslation8();
  return null;
  const { label, color } = getOrderPaymentStatus(t, order.payment_status);
  return /* @__PURE__ */ jsx8(StatusBadge2, { color, className: "text-nowrap", children: label });
};

// src/routes/orders/order-detail/components/order-summary-section/order-summary-section.tsx
import { useMemo as useMemo2, useState as useState5 } from "react";
import { useTranslation as useTranslation12 } from "react-i18next";
import { useNavigate as useNavigate2 } from "react-router-dom";
import {
  ArrowDownRightMini,
  ArrowLongRight,
  ArrowPath as ArrowPath2,
  ArrowUturnLeft,
  DocumentText,
  ExclamationCircle,
  PencilSquare,
  TriangleDownMini
} from "@medusajs/icons";
import {
  Badge as Badge3,
  Button as Button4,
  Container as Container5,
  Copy as Copy4,
  Heading as Heading5,
  StatusBadge as StatusBadge3,
  Text as Text7,
  toast as toast2,
  Tooltip as Tooltip5,
  usePrompt as usePrompt4
} from "@medusajs/ui";

// src/components/common/button-menu/button-menu.tsx
import { DropdownMenu, clx as clx2 } from "@medusajs/ui";
import { Link as Link4 } from "react-router-dom";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var ButtonMenu = ({
  groups,
  children
}) => {
  return /* @__PURE__ */ jsxs9(DropdownMenu, { children: [
    /* @__PURE__ */ jsx9(DropdownMenu.Trigger, { asChild: true, children }),
    /* @__PURE__ */ jsx9(DropdownMenu.Content, { children: groups.map((group, index) => {
      if (!group.actions.length) {
        return null;
      }
      const isLast = index === groups.length - 1;
      return /* @__PURE__ */ jsxs9(DropdownMenu.Group, { children: [
        group.actions.map((action, index2) => {
          if (action.onClick) {
            return /* @__PURE__ */ jsxs9(
              DropdownMenu.Item,
              {
                disabled: action.disabled,
                onClick: (e) => {
                  e.stopPropagation();
                  action.onClick();
                },
                className: clx2(
                  "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                  {
                    "[&_svg]:text-ui-fg-disabled": action.disabled
                  }
                ),
                children: [
                  action.icon,
                  /* @__PURE__ */ jsx9("span", { children: action.label })
                ]
              },
              index2
            );
          }
          return /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9(
            DropdownMenu.Item,
            {
              className: clx2(
                "[&_svg]:text-ui-fg-subtle flex items-center gap-x-2",
                {
                  "[&_svg]:text-ui-fg-disabled": action.disabled
                }
              ),
              asChild: true,
              disabled: action.disabled,
              children: /* @__PURE__ */ jsxs9(Link4, { to: action.to, onClick: (e) => e.stopPropagation(), children: [
                action.icon,
                /* @__PURE__ */ jsx9("span", { children: action.label })
              ] })
            }
          ) }, index2);
        }),
        !isLast && /* @__PURE__ */ jsx9(DropdownMenu.Separator, {})
      ] }, index);
    }) })
  ] });
};

// src/routes/orders/order-detail/components/copy-payment-link/copy-payment-link.tsx
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());
import { CheckCircleSolid, SquareTwoStack } from "@medusajs/icons";
import { Button as Button3, Tooltip as Tooltip3 } from "@medusajs/ui";
import React, { useState as useState3 } from "react";
import { useTranslation as useTranslation9 } from "react-i18next";

// src/lib/storefront.ts
var MEDUSA_STOREFRONT_URL = __STOREFRONT_URL__ ?? "http://localhost:8000";

// src/routes/orders/order-detail/components/copy-payment-link/copy-payment-link.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var CopyPaymentLink = React.forwardRef(
  ({ paymentCollection, order }, ref) => {
    const [done, setDone] = useState3(false);
    const [open, setOpen] = useState3(false);
    const [text, setText] = useState3("CopyPaymentLink");
    const { t } = useTranslation9();
    const copyToClipboard = async (e) => {
      e.stopPropagation();
      setDone(true);
      (0, import_copy_to_clipboard.default)(
        `${MEDUSA_STOREFRONT_URL}/payment-collection/${paymentCollection.id}`
      );
      setTimeout(() => {
        setDone(false);
      }, 2e3);
    };
    React.useEffect(() => {
      if (done) {
        setText("Copied");
        return;
      }
      setTimeout(() => {
        setText("Copy");
      }, 500);
    }, [done]);
    return /* @__PURE__ */ jsx10(Tooltip3, { content: text, open: done || open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs10(
      Button3,
      {
        ref,
        variant: "secondary",
        size: "small",
        "aria-label": "CopyPaymentLink code snippet",
        onClick: copyToClipboard,
        children: [
          done ? /* @__PURE__ */ jsx10(CheckCircleSolid, { className: "inline" }) : /* @__PURE__ */ jsx10(SquareTwoStack, { className: "inline" }),
          t("orders.payment.paymentLink", {
            amount: getStylizedAmount(
              paymentCollection.amount,
              order?.currency_code
            )
          })
        ]
      }
    ) });
  }
);
CopyPaymentLink.displayName = "CopyPaymentLink";

// src/routes/orders/order-detail/components/order-summary-section/return-info-popover.tsx
import { InformationCircleSolid } from "@medusajs/icons";
import { Badge, Popover as Popover2, Text as Text6 } from "@medusajs/ui";
import { useState as useState4 } from "react";
import { useTranslation as useTranslation10 } from "react-i18next";

// src/components/common/date/index.ts
import format3 from "date-fns/format";
function formatDate(date) {
  const value = new Date(date);
  value.setMinutes(value.getMinutes() - value.getTimezoneOffset());
  const hour12 = Intl.DateTimeFormat().resolvedOptions().hour12;
  const timestampFormat = hour12 ? "dd MMM yyyy hh:MM a" : "dd MMM yyyy HH:MM";
  return format3(value, timestampFormat);
}

// src/routes/orders/order-detail/components/order-summary-section/return-info-popover.tsx
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function ReturnInfoPopover({ orderReturn }) {
  const { t } = useTranslation10();
  const [open, setOpen] = useState4(false);
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  let returnType = "Return";
  let returnTypeId = orderReturn.id;
  if (orderReturn.claim_id) {
    returnType = "Claim";
    returnTypeId = orderReturn.claim_id;
  }
  if (orderReturn.exchange_id) {
    returnType = "Exchange";
    returnTypeId = orderReturn.exchange_id;
  }
  if (typeof orderReturn !== "object") {
    return;
  }
  return /* @__PURE__ */ jsxs11(Popover2, { open, children: [
    /* @__PURE__ */ jsx11(
      Popover2.Trigger,
      {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        autoFocus: false,
        className: "focus-visible:outline-none align-sub",
        children: /* @__PURE__ */ jsx11(InformationCircleSolid, {})
      }
    ),
    /* @__PURE__ */ jsx11(
      Popover2.Content,
      {
        align: "center",
        side: "top",
        className: "bg-ui-bg-component focus-visible:outline-none p-2",
        children: /* @__PURE__ */ jsxs11("div", { className: "", children: [
          /* @__PURE__ */ jsxs11(Badge, { size: "2xsmall", className: "mb-2", rounded: "full", children: [
            returnType,
            ": #",
            returnTypeId.slice(-7)
          ] }),
          /* @__PURE__ */ jsxs11(Text6, { size: "xsmall", children: [
            /* @__PURE__ */ jsx11("span", { className: "text-ui-fg-subtle", children: t(`orders.returns.returnRequested`) }),
            " \xB7 ",
            formatDate(orderReturn.requested_at)
          ] }),
          /* @__PURE__ */ jsxs11(Text6, { size: "xsmall", children: [
            /* @__PURE__ */ jsx11("span", { className: "text-ui-fg-subtle", children: t(`orders.returns.itemReceived`) }),
            " \xB7 ",
            orderReturn.received_at ? formatDate(orderReturn.received_at) : "-"
          ] })
        ] })
      }
    )
  ] });
}
var return_info_popover_default = ReturnInfoPopover;

// src/routes/orders/order-detail/components/order-summary-section/shipping-info-popover.tsx
import { InformationCircleSolid as InformationCircleSolid2 } from "@medusajs/icons";
import { Badge as Badge2, Tooltip as Tooltip4 } from "@medusajs/ui";
import { useTranslation as useTranslation11 } from "react-i18next";
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
function ShippingInfoPopover({ shippingMethod }) {
  const { t } = useTranslation11();
  const shippingDetail = shippingMethod?.detail;
  if (!shippingDetail) {
    return;
  }
  let rmaType = t("orders.return");
  let rmaId = shippingDetail.return_id;
  if (shippingDetail.claim_id) {
    rmaType = t("orders.claim");
    rmaId = shippingDetail.claim_id;
  }
  if (shippingDetail.exchange_id) {
    rmaType = t("orders.exchange");
    rmaId = shippingDetail.exchange_id;
  }
  if (!rmaId) {
    return;
  }
  return /* @__PURE__ */ jsx12(
    Tooltip4,
    {
      content: /* @__PURE__ */ jsxs12(Badge2, { size: "2xsmall", rounded: "full", children: [
        rmaType,
        ": #",
        rmaId.slice(-7)
      ] }),
      children: /* @__PURE__ */ jsx12(InformationCircleSolid2, { className: "inline-block text-ui-fg-muted ml-1" })
    }
  );
}
var shipping_info_popover_default = ShippingInfoPopover;

// src/routes/orders/order-detail/components/order-summary-section/order-summary-section.tsx
import { Fragment as Fragment3, jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
var OrderSummarySection = ({ order }) => {
  const { t } = useTranslation12();
  const navigate = useNavigate2();
  const prompt = usePrompt4();
  const { reservations } = useReservationItems(
    {
      line_item_id: order?.items?.map((i) => i.id)
    },
    { enabled: Array.isArray(order?.items) }
  );
  const { order: orderPreview } = useOrderPreview(order.id);
  const { returns = [] } = useReturns({
    status: "requested",
    order_id: order.id,
    fields: "+received_at"
  });
  const receivableReturns = useMemo2(
    () => returns.filter((r) => !r.canceled_at),
    [returns]
  );
  const showReturns = !!receivableReturns.length;
  const showAllocateButton = useMemo2(() => {
    if (!reservations) {
      return false;
    }
    const reservationsMap = new Map(
      reservations.map((r) => [r.line_item_id, r.id])
    );
    for (const item of order.items) {
      if (item.variant?.manage_inventory) {
        if (item.quantity - item.detail.fulfilled_quantity > 0) {
          if (!reservationsMap.has(item.id)) {
            return true;
          }
        }
      }
    }
    return false;
  }, [reservations]);
  const unpaidPaymentCollection = order.payment_collections.find(
    (pc) => pc.status === "not_paid"
  );
  const { mutateAsync: markAsPaid } = useMarkPaymentCollectionAsPaid(
    order.id,
    unpaidPaymentCollection?.id
  );
  const showPayment = unpaidPaymentCollection && (order?.summary?.pending_difference || 0) > 0;
  const showRefund = (order?.summary?.pending_difference || 0) < 0;
  const handleMarkAsPaid = async (paymentCollection) => {
    const res = await prompt({
      title: t("orders.payment.markAsPaid"),
      description: t("orders.payment.markAsPaidPayment", {
        amount: formatCurrency(
          paymentCollection.amount,
          order.currency_code
        )
      }),
      confirmText: t("actions.confirm"),
      cancelText: t("actions.cancel"),
      variant: "confirmation"
    });
    if (!res) {
      return;
    }
    await markAsPaid(
      { order_id: order.id },
      {
        onSuccess: () => {
          toast2.success(
            t("orders.payment.markAsPaidPaymentSuccess", {
              amount: formatCurrency(
                paymentCollection.amount,
                order.currency_code
              )
            })
          );
        },
        onError: (error) => {
          toast2.error(error.message);
        }
      }
    );
  };
  return /* @__PURE__ */ jsxs13(Container5, { className: "divide-y divide-dashed p-0", children: [
    /* @__PURE__ */ jsx13(Header2, { order, orderPreview }),
    /* @__PURE__ */ jsx13(ItemBreakdown, { order, reservations }),
    /* @__PURE__ */ jsx13(CostBreakdown, { order }),
    /* @__PURE__ */ jsx13(Total, { order }),
    (showAllocateButton || showReturns || showPayment || showRefund) && /* @__PURE__ */ jsxs13("div", { className: "bg-ui-bg-subtle flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [
      showReturns && (receivableReturns.length === 1 ? /* @__PURE__ */ jsx13(
        Button4,
        {
          onClick: () => navigate(
            `/orders/${order.id}/returns/${receivableReturns[0].id}/receive`
          ),
          variant: "secondary",
          size: "small",
          children: t("orders.returns.receive.action")
        }
      ) : /* @__PURE__ */ jsx13(
        ButtonMenu,
        {
          groups: [
            {
              actions: receivableReturns.map((r) => {
                let id = r.id;
                let returnType = "Return";
                if (r.exchange_id) {
                  id = r.exchange_id;
                  returnType = "Exchange";
                }
                if (r.claim_id) {
                  id = r.claim_id;
                  returnType = "Claim";
                }
                return {
                  label: t("orders.returns.receive.receiveItems", {
                    id: `#${id.slice(-7)}`,
                    returnType
                  }),
                  icon: /* @__PURE__ */ jsx13(ArrowLongRight, {}),
                  to: `/orders/${order.id}/returns/${r.id}/receive`
                };
              })
            }
          ],
          children: /* @__PURE__ */ jsx13(Button4, { variant: "secondary", size: "small", children: t("orders.returns.receive.action") })
        }
      )),
      showAllocateButton && /* @__PURE__ */ jsx13(
        Button4,
        {
          onClick: () => navigate(`./allocate-items`),
          variant: "secondary",
          children: t("orders.allocateItems.action")
        }
      ),
      showPayment && /* @__PURE__ */ jsx13(
        CopyPaymentLink,
        {
          paymentCollection: unpaidPaymentCollection,
          order
        }
      ),
      showPayment && /* @__PURE__ */ jsx13(
        Button4,
        {
          size: "small",
          variant: "secondary",
          onClick: () => handleMarkAsPaid(unpaidPaymentCollection),
          children: t("orders.payment.markAsPaid")
        }
      ),
      showRefund && /* @__PURE__ */ jsx13(
        Button4,
        {
          size: "small",
          variant: "secondary",
          onClick: () => navigate(`/orders/${order.id}/refund`),
          children: t("orders.payment.refundAmount", {
            amount: getStylizedAmount(
              (order?.summary?.pending_difference || 0) * -1,
              order?.currency_code
            )
          })
        }
      )
    ] })
  ] });
};
var Header2 = ({
  order,
  orderPreview
}) => {
  const { t } = useTranslation12();
  const shouldDisableReturn = order.items.every(
    (i) => !(getReturnableQuantity(i) > 0)
  );
  const isOrderEditActive = orderPreview?.order_change?.change_type === "edit";
  const isOrderEditPending = orderPreview?.order_change?.change_type === "edit" && orderPreview?.order_change?.status === "pending";
  return /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsx13(Heading5, { level: "h2", children: t("fields.summary") }),
    /* @__PURE__ */ jsx13(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                label: t(
                  isOrderEditPending ? "orders.summary.editOrderContinue" : "orders.summary.editOrder"
                ),
                to: `/orders/${order.id}/edits`,
                icon: /* @__PURE__ */ jsx13(PencilSquare, {}),
                disabled: orderPreview?.order_change && orderPreview?.order_change?.change_type !== "edit" || orderPreview?.order_change?.change_type === "edit" && orderPreview?.order_change?.status === "requested"
              }
            ]
          },
          {
            actions: [
              {
                label: t("orders.returns.create"),
                to: `/orders/${order.id}/returns`,
                icon: /* @__PURE__ */ jsx13(ArrowUturnLeft, {}),
                disabled: shouldDisableReturn || isOrderEditActive || !!orderPreview?.order_change?.exchange_id || !!orderPreview?.order_change?.claim_id
              },
              {
                label: orderPreview?.order_change?.id && orderPreview?.order_change?.exchange_id ? t("orders.exchanges.manage") : t("orders.exchanges.create"),
                to: `/orders/${order.id}/exchanges`,
                icon: /* @__PURE__ */ jsx13(ArrowPath2, {}),
                disabled: shouldDisableReturn || isOrderEditActive || !!orderPreview?.order_change?.return_id && !!!orderPreview?.order_change?.exchange_id || !!orderPreview?.order_change?.claim_id
              },
              {
                label: orderPreview?.order_change?.id && orderPreview?.order_change?.claim_id ? t("orders.claims.manage") : t("orders.claims.create"),
                to: `/orders/${order.id}/claims`,
                icon: /* @__PURE__ */ jsx13(ExclamationCircle, {}),
                disabled: shouldDisableReturn || isOrderEditActive || !!orderPreview?.order_change?.return_id && !!!orderPreview?.order_change?.claim_id || !!orderPreview?.order_change?.exchange_id
              }
            ]
          }
        ]
      }
    )
  ] });
};
var Item = ({
  item,
  currencyCode,
  reservation,
  returns,
  claims,
  exchanges
}) => {
  const { t } = useTranslation12();
  const isInventoryManaged = item.variant?.manage_inventory;
  const hasInventoryKit = isInventoryManaged && (item.variant?.inventory_items?.length || 0) > 1;
  const hasUnfulfilledItems = item.quantity - item.detail.fulfilled_quantity > 0;
  return /* @__PURE__ */ jsxs13(Fragment3, { children: [
    /* @__PURE__ */ jsxs13(
      "div",
      {
        className: "text-ui-fg-subtle grid grid-cols-2 items-center gap-x-4 px-6 py-4",
        children: [
          /* @__PURE__ */ jsxs13("div", { className: "flex items-start gap-x-4", children: [
            /* @__PURE__ */ jsx13(Thumbnail, { src: item.thumbnail }),
            /* @__PURE__ */ jsxs13("div", { children: [
              /* @__PURE__ */ jsx13(
                Text7,
                {
                  size: "small",
                  leading: "compact",
                  weight: "plus",
                  className: "text-ui-fg-base",
                  children: item.title
                }
              ),
              item.variant_sku && /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-x-1", children: [
                /* @__PURE__ */ jsx13(Text7, { size: "small", children: item.variant_sku }),
                /* @__PURE__ */ jsx13(Copy4, { content: item.variant_sku, className: "text-ui-fg-muted" })
              ] }),
              /* @__PURE__ */ jsx13(Text7, { size: "small", children: item.variant?.options?.map((o) => o.value).join(" \xB7 ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-3 items-center gap-x-4", children: [
            /* @__PURE__ */ jsx13("div", { className: "flex items-center justify-end gap-x-4", children: /* @__PURE__ */ jsx13(Text7, { size: "small", children: getLocaleAmount(item.unit_price, currencyCode) }) }),
            /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-x-2", children: [
              /* @__PURE__ */ jsx13("div", { className: "w-fit min-w-[27px]", children: /* @__PURE__ */ jsxs13(Text7, { size: "small", children: [
                /* @__PURE__ */ jsx13("span", { className: "tabular-nums", children: item.quantity }),
                "x"
              ] }) }),
              /* @__PURE__ */ jsx13("div", { className: "overflow-visible", children: isInventoryManaged && hasUnfulfilledItems && /* @__PURE__ */ jsx13(
                StatusBadge3,
                {
                  color: reservation ? "green" : "orange",
                  className: "text-nowrap",
                  children: reservation ? t("orders.reservations.allocatedLabel") : t("orders.reservations.notAllocatedLabel")
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx13("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ jsx13(Text7, { size: "small", className: "pt-[1px]", children: getLocaleAmount(item.subtotal || 0, currencyCode) }) })
          ] })
        ]
      },
      item.id
    ),
    hasInventoryKit && /* @__PURE__ */ jsx13(InventoryKitBreakdown, { item }),
    returns.map((r) => /* @__PURE__ */ jsx13(ReturnBreakdown, { orderReturn: r, itemId: item.id }, r.id)),
    claims.map((claim) => /* @__PURE__ */ jsx13(ClaimBreakdown, { claim, itemId: item.id }, claim.id)),
    exchanges.map((exchange) => /* @__PURE__ */ jsx13(
      ExchangeBreakdown,
      {
        exchange,
        itemId: item.id
      },
      exchange.id
    ))
  ] });
};
var ItemBreakdown = ({
  order,
  reservations
}) => {
  const { claims = [] } = useClaims({
    order_id: order.id,
    fields: "*additional_items"
  });
  const { exchanges = [] } = useExchanges({
    order_id: order.id,
    fields: "*additional_items"
  });
  const { returns = [] } = useReturns({
    order_id: order.id,
    fields: "*items,*items.reason"
  });
  const reservationsMap = useMemo2(
    () => new Map((reservations || []).map((r) => [r.line_item_id, r])),
    [reservations]
  );
  return /* @__PURE__ */ jsx13("div", { children: order.items?.map((item) => {
    const reservation = reservationsMap.get(item.id);
    return /* @__PURE__ */ jsx13(
      Item,
      {
        item,
        currencyCode: order.currency_code,
        reservation,
        returns,
        exchanges,
        claims
      },
      item.id
    );
  }) });
};
var Cost = ({
  label,
  value,
  secondaryValue,
  tooltip
}) => /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-3 items-center", children: [
  /* @__PURE__ */ jsxs13(Text7, { size: "small", leading: "compact", children: [
    label,
    " ",
    tooltip
  ] }),
  /* @__PURE__ */ jsx13("div", { className: "text-right", children: /* @__PURE__ */ jsx13(Text7, { size: "small", leading: "compact", children: secondaryValue }) }),
  /* @__PURE__ */ jsx13("div", { className: "text-right", children: /* @__PURE__ */ jsx13(Text7, { size: "small", leading: "compact", children: value }) })
] });
var CostBreakdown = ({ order }) => {
  const { t } = useTranslation12();
  return /* @__PURE__ */ jsxs13("div", { className: "text-ui-fg-subtle flex flex-col gap-y-2 px-6 py-4", children: [
    /* @__PURE__ */ jsx13(
      Cost,
      {
        label: t("fields.discount"),
        value: order.discount_total > 0 ? `- ${getLocaleAmount(order.discount_total, order.currency_code)}` : "-"
      }
    ),
    (order.shipping_methods || []).sort(
      (m1, m2) => m1.created_at.localeCompare(m2.created_at)
    ).map((sm, i) => {
      return /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsx13(
        Cost,
        {
          label: sm.detail.return_id ? t("fields.returnShipping") : t("fields.outboundShipping"),
          secondaryValue: sm.name,
          value: getLocaleAmount(sm.total, order.currency_code),
          tooltip: /* @__PURE__ */ jsx13(shipping_info_popover_default, { shippingMethod: sm }, i)
        }
      ) }, sm.id);
    })
  ] });
};
var InventoryKitBreakdown = ({ item }) => {
  const { t } = useTranslation12();
  const [isOpen, setIsOpen] = useState5(false);
  const inventory = item.variant.inventory_items;
  return /* @__PURE__ */ jsxs13(Fragment3, { children: [
    /* @__PURE__ */ jsxs13(
      "div",
      {
        onClick: () => setIsOpen((o) => !o),
        className: "flex cursor-pointer items-center gap-2 border-t border-dashed px-6 py-4",
        children: [
          /* @__PURE__ */ jsx13(
            TriangleDownMini,
            {
              style: {
                transform: `rotate(${isOpen ? 0 : -90}deg)`
              }
            }
          ),
          /* @__PURE__ */ jsx13("span", { className: "text-ui-fg-muted txt-small select-none", children: t("orders.summary.inventoryKit", { count: inventory.length }) })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx13("div", { className: "flex flex-col gap-1 px-6 pb-4", children: inventory.map((i) => {
      return /* @__PURE__ */ jsxs13(
        "div",
        {
          className: "flex items-center justify-between gap-x-2",
          children: [
            /* @__PURE__ */ jsx13("div", { children: /* @__PURE__ */ jsxs13("span", { className: "txt-small text-ui-fg-subtle font-medium", children: [
              i.inventory.title,
              i.inventory.sku && /* @__PURE__ */ jsxs13("span", { className: "text-ui-fg-subtle font-normal", children: [
                " ",
                "\u22C5 ",
                i.inventory.sku
              ] })
            ] }) }),
            /* @__PURE__ */ jsx13("div", { className: "relative flex-1", children: /* @__PURE__ */ jsx13("div", { className: "bottom-[calc(50% - 2px)] absolute h-[1px] w-full border-b border-dashed" }) }),
            /* @__PURE__ */ jsxs13("span", { className: "txt-small text-ui-fg-muted", children: [
              i.required_quantity,
              "x"
            ] })
          ]
        },
        i.inventory.id
      );
    }) })
  ] });
};
var ReturnBreakdownWithDamages = ({
  orderReturn,
  itemId
}) => {
  const { t } = useTranslation12();
  const item = orderReturn?.items?.find((ri) => ri.item_id === itemId);
  const damagedQuantity = item?.damaged_quantity || 0;
  return item && /* @__PURE__ */ jsxs13(
    "div",
    {
      className: "txt-compact-small-plus text-ui-fg-subtle bg-ui-bg-subtle flex flex-row justify-between gap-y-2 border-t-2 border-dotted px-6 py-4",
      children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx13(ArrowDownRightMini, { className: "text-ui-fg-muted" }),
          /* @__PURE__ */ jsx13(Text7, { size: "small", children: t(`orders.returns.damagedItemsReturned`, {
            quantity: damagedQuantity
          }) }),
          item?.note && /* @__PURE__ */ jsx13(Tooltip5, { content: item.note, children: /* @__PURE__ */ jsx13(DocumentText, { className: "text-ui-tag-neutral-icon ml-1 inline" }) }),
          item?.reason && /* @__PURE__ */ jsx13(
            Badge3,
            {
              size: "2xsmall",
              className: "cursor-default select-none capitalize",
              rounded: "full",
              children: item?.reason?.label
            }
          )
        ] }),
        /* @__PURE__ */ jsxs13(Text7, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: [
          t(`orders.returns.damagedItemReceived`),
          /* @__PURE__ */ jsx13("span", { className: "ml-2", children: /* @__PURE__ */ jsx13(return_info_popover_default, { orderReturn }) })
        ] })
      ]
    },
    orderReturn.id
  );
};
var ReturnBreakdown = ({
  orderReturn,
  itemId
}) => {
  const { t } = useTranslation12();
  const { getRelativeDate } = useDate();
  if (!["requested", "received", "partially_received"].includes(
    orderReturn.status || ""
  )) {
    return null;
  }
  const isRequested = orderReturn.status === "requested";
  const item = orderReturn?.items?.find((ri) => ri.item_id === itemId);
  const damagedQuantity = item?.damaged_quantity || 0;
  return item && /* @__PURE__ */ jsxs13(Fragment3, { children: [
    damagedQuantity > 0 && /* @__PURE__ */ jsx13(
      ReturnBreakdownWithDamages,
      {
        orderReturn,
        itemId
      }
    ),
    /* @__PURE__ */ jsxs13(
      "div",
      {
        className: "txt-compact-small-plus text-ui-fg-subtle bg-ui-bg-subtle flex flex-row justify-between gap-y-2 border-t-2 border-dotted px-6 py-4",
        children: [
          /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx13(ArrowDownRightMini, { className: "text-ui-fg-muted" }),
            /* @__PURE__ */ jsx13(Text7, { size: "small", children: t(
              `orders.returns.${isRequested ? "returnRequestedInfo" : "returnReceivedInfo"}`,
              {
                requestedItemsCount: item?.[isRequested ? "quantity" : "received_quantity"]
              }
            ) }),
            item?.note && /* @__PURE__ */ jsx13(Tooltip5, { content: item.note, children: /* @__PURE__ */ jsx13(DocumentText, { className: "text-ui-tag-neutral-icon ml-1 inline" }) }),
            item?.reason && /* @__PURE__ */ jsx13(
              Badge3,
              {
                size: "2xsmall",
                className: "cursor-default select-none capitalize",
                rounded: "full",
                children: item?.reason?.label
              }
            )
          ] }),
          orderReturn && isRequested && /* @__PURE__ */ jsxs13(Text7, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: [
            getRelativeDate(orderReturn.created_at),
            /* @__PURE__ */ jsx13("span", { className: "ml-2", children: /* @__PURE__ */ jsx13(return_info_popover_default, { orderReturn }) })
          ] }),
          orderReturn && !isRequested && /* @__PURE__ */ jsxs13(Text7, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: [
            t(`orders.returns.itemReceived`),
            /* @__PURE__ */ jsx13("span", { className: "ml-2", children: /* @__PURE__ */ jsx13(return_info_popover_default, { orderReturn }) })
          ] })
        ]
      },
      item.id
    )
  ] });
};
var ClaimBreakdown = ({
  claim,
  itemId
}) => {
  const { t } = useTranslation12();
  const { getRelativeDate } = useDate();
  const items = claim.additional_items.filter(
    (item) => item.item?.id === itemId
  );
  return !!items.length && /* @__PURE__ */ jsxs13(
    "div",
    {
      className: "txt-compact-small-plus text-ui-fg-subtle bg-ui-bg-subtle flex flex-row justify-between gap-y-2 border-b-2 border-t-2 border-dotted px-6 py-4",
      children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx13(ArrowDownRightMini, { className: "text-ui-fg-muted" }),
          /* @__PURE__ */ jsx13(Text7, { size: "small", children: t(`orders.claims.outboundItemAdded`, {
            itemsCount: items.reduce(
              (acc, item) => acc = acc + item.quantity,
              0
            )
          }) })
        ] }),
        /* @__PURE__ */ jsx13(Text7, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: getRelativeDate(claim.created_at) })
      ]
    },
    claim.id
  );
};
var ExchangeBreakdown = ({
  exchange,
  itemId
}) => {
  const { t } = useTranslation12();
  const { getRelativeDate } = useDate();
  const items = exchange.additional_items.filter(
    (item) => item?.item?.id === itemId
  );
  return !!items.length && /* @__PURE__ */ jsxs13(
    "div",
    {
      className: "txt-compact-small-plus text-ui-fg-subtle bg-ui-bg-subtle flex flex-row justify-between gap-y-2 border-b-2 border-t-2 border-dotted px-6 py-4",
      children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx13(ArrowDownRightMini, { className: "text-ui-fg-muted" }),
          /* @__PURE__ */ jsx13(Text7, { size: "small", children: t(`orders.exchanges.outboundItemAdded`, {
            itemsCount: items.reduce(
              (acc, item) => acc = acc + item.quantity,
              0
            )
          }) })
        ] }),
        /* @__PURE__ */ jsx13(Text7, { size: "small", leading: "compact", className: "text-ui-fg-muted", children: getRelativeDate(exchange.created_at) })
      ]
    },
    exchange.id
  );
};
var Total = ({ order }) => {
  const { t } = useTranslation12();
  return /* @__PURE__ */ jsxs13("div", { className: " flex flex-col gap-y-2 px-6 py-4", children: [
    /* @__PURE__ */ jsxs13("div", { className: "text-ui-fg-base flex items-center justify-between", children: [
      /* @__PURE__ */ jsx13(
        Text7,
        {
          weight: "plus",
          className: "text-ui-fg-subtle",
          size: "small",
          leading: "compact",
          children: t("fields.total")
        }
      ),
      /* @__PURE__ */ jsx13(
        Text7,
        {
          weight: "plus",
          className: "text-ui-fg-subtle",
          size: "small",
          leading: "compact",
          children: getStylizedAmount(order.total, order.currency_code)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "text-ui-fg-base flex items-center justify-between", children: [
      /* @__PURE__ */ jsx13(
        Text7,
        {
          weight: "plus",
          className: "text-ui-fg-subtle",
          size: "small",
          leading: "compact",
          children: t("fields.paidTotal")
        }
      ),
      /* @__PURE__ */ jsx13(
        Text7,
        {
          weight: "plus",
          className: "text-ui-fg-subtle",
          size: "small",
          leading: "compact",
          children: getStylizedAmount(
            getTotalCaptured(order.payment_collections || []),
            order.currency_code
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: "text-ui-fg-base flex items-center justify-between", children: [
      /* @__PURE__ */ jsx13(
        Text7,
        {
          className: "text-ui-fg-subtle text-semibold",
          size: "small",
          leading: "compact",
          weight: "plus",
          children: t("orders.returns.outstandingAmount")
        }
      ),
      /* @__PURE__ */ jsx13(
        Text7,
        {
          className: "text-ui-fg-subtle text-bold",
          size: "small",
          leading: "compact",
          weight: "plus",
          children: getStylizedAmount(
            order.summary.pending_difference || 0,
            order.currency_code
          )
        }
      )
    ] })
  ] });
};

// src/routes/orders/order-detail/order-detail.tsx
import after from "virtual:medusa/widgets/order/details/after";
import before from "virtual:medusa/widgets/order/details/before";
import sideAfter from "virtual:medusa/widgets/order/details/side/after";
import sideBefore from "virtual:medusa/widgets/order/details/side/before";

// src/routes/orders/order-detail/components/active-order-claim-section/active-order-claim-section.tsx
import { ExclamationCircle as ExclamationCircle2 } from "@medusajs/icons";
import { Button as Button5, Container as Container6, Heading as Heading6, Text as Text8, toast as toast3 } from "@medusajs/ui";
import { useTranslation as useTranslation13 } from "react-i18next";
import { useNavigate as useNavigate3 } from "react-router-dom";
import { jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
var ActiveOrderClaimSection = ({
  orderPreview
}) => {
  const { t } = useTranslation13();
  const claimId = orderPreview?.order_change?.claim_id;
  const { mutateAsync: cancelClaim } = useCancelClaimRequest(
    claimId,
    orderPreview.id
  );
  const navigate = useNavigate3();
  const onContinueClaim = async () => {
    navigate(`/orders/${orderPreview.id}/claims`);
  };
  const onCancelClaim = async () => {
    await cancelClaim(void 0, {
      onSuccess: () => {
        toast3.success(t("orders.claims.toast.canceledSuccessfully"));
      },
      onError: (error) => {
        toast3.error(error.message);
      }
    });
  };
  if (!claimId) {
    return;
  }
  return /* @__PURE__ */ jsx14(
    "div",
    {
      style: {
        background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"
      },
      className: "-m-4 mb-1 border-b border-l p-4",
      children: /* @__PURE__ */ jsx14(Container6, { className: "flex items-center justify-between p-0", children: /* @__PURE__ */ jsxs14("div", { className: "flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ jsxs14("div", { children: [
          /* @__PURE__ */ jsxs14("div", { className: "mb-2 flex items-center gap-2 px-6 pt-4", children: [
            /* @__PURE__ */ jsx14(ExclamationCircle2, { className: "text-ui-fg-subtle" }),
            /* @__PURE__ */ jsx14(Heading6, { level: "h2", children: t("orders.claims.panel.title") })
          ] }),
          /* @__PURE__ */ jsx14("div", { className: "gap-2 px-6 pb-4", children: /* @__PURE__ */ jsx14(Text8, { children: t("orders.claims.panel.description") }) })
        ] }),
        /* @__PURE__ */ jsxs14("div", { className: "flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [
          /* @__PURE__ */ jsx14(Button5, { size: "small", variant: "secondary", onClick: onCancelClaim, children: t("orders.claims.cancel.title") }),
          /* @__PURE__ */ jsx14(Button5, { size: "small", variant: "secondary", onClick: onContinueClaim, children: t("actions.continue") })
        ] })
      ] }) })
    }
  );
};

// src/routes/orders/order-detail/components/active-order-exchange-section/active-order-exchange-section.tsx
import { ArrowPath as ArrowPath3 } from "@medusajs/icons";
import { Button as Button6, Container as Container7, Heading as Heading7, Text as Text9, toast as toast4 } from "@medusajs/ui";
import { useTranslation as useTranslation14 } from "react-i18next";
import { useNavigate as useNavigate4 } from "react-router-dom";
import { jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
var ActiveOrderExchangeSection = ({
  orderPreview
}) => {
  const { t } = useTranslation14();
  const exchangeId = orderPreview?.order_change?.exchange_id;
  const { mutateAsync: cancelExchange } = useCancelExchangeRequest(
    exchangeId,
    orderPreview.id
  );
  const navigate = useNavigate4();
  const onContinueExchange = async () => {
    navigate(`/orders/${orderPreview.id}/exchanges`);
  };
  const onCancelExchange = async () => {
    await cancelExchange(void 0, {
      onSuccess: () => {
        toast4.success(t("orders.exchanges.toast.canceledSuccessfully"));
      },
      onError: (error) => {
        toast4.error(error.message);
      }
    });
  };
  if (!exchangeId) {
    return;
  }
  return /* @__PURE__ */ jsx15(
    "div",
    {
      style: {
        background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"
      },
      className: "-m-4 mb-1 border-b border-l p-4",
      children: /* @__PURE__ */ jsx15(Container7, { className: "flex items-center justify-between p-0", children: /* @__PURE__ */ jsxs15("div", { className: "flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ jsxs15("div", { children: [
          /* @__PURE__ */ jsxs15("div", { className: "mb-2 flex items-center gap-2 px-6 pt-4", children: [
            /* @__PURE__ */ jsx15(ArrowPath3, { className: "text-ui-fg-subtle" }),
            /* @__PURE__ */ jsx15(Heading7, { level: "h2", children: t("orders.exchanges.panel.title") })
          ] }),
          /* @__PURE__ */ jsx15("div", { className: "gap-2 px-6 pb-4", children: /* @__PURE__ */ jsx15(Text9, { children: t("orders.exchanges.panel.description") }) })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [
          /* @__PURE__ */ jsx15(Button6, { size: "small", variant: "secondary", onClick: onCancelExchange, children: t("orders.exchanges.cancel.title") }),
          /* @__PURE__ */ jsx15(
            Button6,
            {
              size: "small",
              variant: "secondary",
              onClick: onContinueExchange,
              children: t("actions.continue")
            }
          )
        ] })
      ] }) })
    }
  );
};

// src/routes/orders/order-detail/components/active-order-return-section/active-order-return-section.tsx
import { ArrowUturnLeft as ArrowUturnLeft2 } from "@medusajs/icons";
import { Button as Button7, Container as Container8, Heading as Heading8, Text as Text10, toast as toast5 } from "@medusajs/ui";
import { useTranslation as useTranslation15 } from "react-i18next";
import { useNavigate as useNavigate5 } from "react-router-dom";
import { jsx as jsx16, jsxs as jsxs16 } from "react/jsx-runtime";
var ActiveOrderReturnSection = ({
  orderPreview
}) => {
  const { t } = useTranslation15();
  const orderChange = orderPreview?.order_change;
  const returnId = orderChange?.return_id;
  const isReturnRequest = orderChange?.change_type === "return_request" && !!orderChange.return_id;
  const { mutateAsync: cancelReturn } = useCancelReturnRequest(
    returnId,
    orderPreview.id
  );
  const navigate = useNavigate5();
  const onContinueReturn = async () => {
    navigate(`/orders/${orderPreview.id}/returns`);
  };
  const onCancelReturn = async () => {
    await cancelReturn(void 0, {
      onSuccess: () => {
        toast5.success(t("orders.returns.toast.canceledSuccessfully"));
      },
      onError: (error) => {
        toast5.error(error.message);
      }
    });
  };
  if (!returnId || !isReturnRequest) {
    return;
  }
  return /* @__PURE__ */ jsx16(
    "div",
    {
      style: {
        background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"
      },
      className: "-m-4 mb-1 border-b border-l p-4",
      children: /* @__PURE__ */ jsx16(Container8, { className: "flex items-center justify-between p-0", children: /* @__PURE__ */ jsxs16("div", { className: "flex w-full flex-row justify-between", children: [
        /* @__PURE__ */ jsxs16("div", { children: [
          /* @__PURE__ */ jsxs16("div", { className: "mb-2 flex items-center gap-2 px-6 pt-4", children: [
            /* @__PURE__ */ jsx16(ArrowUturnLeft2, { className: "text-ui-fg-subtle" }),
            /* @__PURE__ */ jsx16(Heading8, { level: "h2", children: t("orders.returns.panel.title") })
          ] }),
          /* @__PURE__ */ jsx16("div", { className: "gap-2 px-6 pb-4", children: /* @__PURE__ */ jsx16(Text10, { children: t("orders.returns.panel.description") }) })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [
          /* @__PURE__ */ jsx16(Button7, { size: "small", variant: "secondary", onClick: onCancelReturn, children: t("orders.returns.cancel.title") }),
          /* @__PURE__ */ jsx16(Button7, { size: "small", variant: "secondary", onClick: onContinueReturn, children: t("actions.continue") })
        ] })
      ] }) })
    }
  );
};

// src/routes/orders/order-detail/components/order-active-edit-section/order-active-edit-section.tsx
import { Button as Button8, Container as Container9, Copy as Copy5, Heading as Heading9, toast as toast6 } from "@medusajs/ui";
import { useTranslation as useTranslation16 } from "react-i18next";
import { ExclamationCircleSolid } from "@medusajs/icons";
import { useMemo as useMemo3 } from "react";
import { useNavigate as useNavigate6 } from "react-router-dom";
import { jsx as jsx17, jsxs as jsxs17 } from "react/jsx-runtime";
function EditItem({
  item,
  quantity
}) {
  return /* @__PURE__ */ jsx17("div", { className: "text-ui-fg-subtle items-center gap-x-2", children: /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ jsxs17("div", { className: "w-fit min-w-[27px]", children: [
      /* @__PURE__ */ jsx17("span", { className: "txt-small tabular-nums", children: quantity }),
      "x"
    ] }),
    /* @__PURE__ */ jsx17(Thumbnail, { src: item.thumbnail }),
    /* @__PURE__ */ jsx17("span", { className: "txt-small text-ui-fg-subtle font-medium", children: item.title }),
    item.variant_sku && " \xB7 ",
    item.variant_sku && /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-x-1", children: [
      /* @__PURE__ */ jsx17("span", { className: "txt-small", children: item.variant_sku }),
      /* @__PURE__ */ jsx17(Copy5, { content: item.variant_sku, className: "text-ui-fg-muted" })
    ] })
  ] }) }, item.id);
}
var OrderActiveEditSection = ({
  order
}) => {
  const { t } = useTranslation16();
  const navigate = useNavigate6();
  const { order: orderPreview } = useOrderPreview(order.id);
  const { mutateAsync: cancelOrderEdit } = useCancelOrderEdit(order.id);
  const { mutateAsync: confirmOrderEdit } = useConfirmOrderEdit(order.id);
  const isPending = orderPreview.order_change?.status === "pending";
  const [addedItems, removedItems] = useMemo3(() => {
    const added = [];
    const removed = [];
    const orderLookupMap = new Map(order.items.map((i) => [i.id, i]));
    (orderPreview?.items || []).forEach((currentItem) => {
      const originalItem = orderLookupMap.get(currentItem.id);
      if (!originalItem) {
        added.push({ item: currentItem, quantity: currentItem.quantity });
        return;
      }
      if (originalItem.quantity > currentItem.quantity) {
        removed.push({
          item: currentItem,
          quantity: originalItem.quantity - currentItem.quantity
        });
      }
      if (originalItem.quantity < currentItem.quantity) {
        added.push({
          item: currentItem,
          quantity: currentItem.quantity - originalItem.quantity
        });
      }
    });
    return [added, removed];
  }, [orderPreview]);
  const onConfirmOrderEdit = async () => {
    try {
      await confirmOrderEdit();
      toast6.success(t("orders.edits.toast.confirmedSuccessfully"));
    } catch (e) {
      toast6.error(e.message);
    }
  };
  const onCancelOrderEdit = async () => {
    try {
      await cancelOrderEdit();
      toast6.success(t("orders.edits.toast.canceledSuccessfully"));
    } catch (e) {
      toast6.error(e.message);
    }
  };
  if (!orderPreview || orderPreview.order_change?.change_type !== "edit") {
    return null;
  }
  return /* @__PURE__ */ jsx17(
    "div",
    {
      style: {
        background: "repeating-linear-gradient(-45deg, rgb(212, 212, 216, 0.15), rgb(212, 212, 216,.15) 10px, transparent 10px, transparent 20px)"
      },
      className: "-m-4 mb-1 border-b border-l p-4",
      children: /* @__PURE__ */ jsx17(Container9, { className: "flex items-center justify-between p-0", children: /* @__PURE__ */ jsxs17("div", { className: "flex w-full flex-col divide-y divide-dashed", children: [
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-2 px-6 py-4", children: [
          /* @__PURE__ */ jsx17(ExclamationCircleSolid, { className: "text-blue-500" }),
          /* @__PURE__ */ jsx17(Heading9, { level: "h2", children: t(
            isPending ? "orders.edits.panel.titlePending" : "orders.edits.panel.title"
          ) })
        ] }),
        !!addedItems.length && /* @__PURE__ */ jsxs17("div", { className: "txt-small text-ui-fg-subtle flex flex-row px-6 py-4", children: [
          /* @__PURE__ */ jsx17("span", { className: "flex-1 font-medium", children: t("labels.added") }),
          /* @__PURE__ */ jsx17("div", { className: "flex flex-1 flex-col gap-y-2", children: addedItems.map(({ item, quantity }) => /* @__PURE__ */ jsx17(EditItem, { item, quantity }, item.id)) })
        ] }),
        !!removedItems.length && /* @__PURE__ */ jsxs17("div", { className: "txt-small text-ui-fg-subtle flex flex-row px-6 py-4", children: [
          /* @__PURE__ */ jsx17("span", { className: "flex-1 font-medium", children: t("labels.removed") }),
          /* @__PURE__ */ jsx17("div", { className: "flex flex-1 flex-col gap-y-2", children: removedItems.map(({ item, quantity }) => /* @__PURE__ */ jsx17(EditItem, { item, quantity }, item.id)) })
        ] }),
        /* @__PURE__ */ jsxs17("div", { className: "bg-ui-bg-subtle flex items-center justify-end gap-x-2 rounded-b-xl px-4 py-4", children: [
          isPending ? /* @__PURE__ */ jsx17(
            Button8,
            {
              size: "small",
              variant: "secondary",
              onClick: () => navigate(`/orders/${order.id}/edits`),
              children: t("actions.continueEdit")
            }
          ) : /* @__PURE__ */ jsx17(
            Button8,
            {
              size: "small",
              variant: "secondary",
              onClick: onConfirmOrderEdit,
              children: t("actions.forceConfirm")
            }
          ),
          /* @__PURE__ */ jsx17(
            Button8,
            {
              size: "small",
              variant: "secondary",
              onClick: onCancelOrderEdit,
              children: t("actions.cancel")
            }
          )
        ] })
      ] }) })
    }
  );
};

// src/routes/orders/order-detail/order-detail.tsx
import { jsx as jsx18, jsxs as jsxs18 } from "react/jsx-runtime";
var OrderDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { order, isLoading, isError, error } = useOrder(
    id,
    {
      fields: DEFAULT_FIELDS
    },
    {
      initialData
    }
  );
  if (order) {
    order.items = order.items.sort((itemA, itemB) => {
      if (itemA.created_at > itemB.created_at) {
        return 1;
      }
      if (itemA.created_at < itemB.created_at) {
        return -1;
      }
      return 0;
    });
  }
  const { order: orderPreview, isLoading: isPreviewLoading } = useOrderPreview(
    id
  );
  if (isLoading || !order || isPreviewLoading) {
    return /* @__PURE__ */ jsx18("div", { children: "Loading..." });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18(w.Component, { data: order }) }, i);
    }),
    /* @__PURE__ */ jsxs18("div", { className: "flex flex-col gap-x-4 lg:flex-row xl:items-start", children: [
      /* @__PURE__ */ jsxs18("div", { className: "flex w-full flex-col gap-y-3", children: [
        /* @__PURE__ */ jsx18(OrderActiveEditSection, { order }),
        /* @__PURE__ */ jsx18(ActiveOrderClaimSection, { orderPreview }),
        /* @__PURE__ */ jsx18(ActiveOrderExchangeSection, { orderPreview }),
        /* @__PURE__ */ jsx18(ActiveOrderReturnSection, { orderPreview }),
        /* @__PURE__ */ jsx18(OrderGeneralSection, { order }),
        /* @__PURE__ */ jsx18(OrderSummarySection, { order }),
        /* @__PURE__ */ jsx18(OrderPaymentSection, { order }),
        /* @__PURE__ */ jsx18(OrderFulfillmentSection, { order }),
        after.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18(w.Component, { data: order }) }, i);
        }),
        /* @__PURE__ */ jsx18("div", { className: "hidden xl:block", children: /* @__PURE__ */ jsx18(JsonViewSection, { data: order }) })
      ] }),
      /* @__PURE__ */ jsxs18("div", { className: "mt-2 flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[400px]", children: [
        sideBefore.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18(w.Component, { data: order }) }, i);
        }),
        /* @__PURE__ */ jsx18(OrderCustomerSection, { order }),
        /* @__PURE__ */ jsx18(OrderActivitySection, { order }),
        sideAfter.widgets.map((w, i) => {
          return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsx18(w.Component, { data: order }) }, i);
        }),
        /* @__PURE__ */ jsx18("div", { className: "xl:hidden", children: /* @__PURE__ */ jsx18(JsonViewSection, { data: order }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx18(Outlet, {})
  ] });
};
export {
  OrderDetail as Component,
  orderLoader as loader
};
