import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import "./chunk-V5VCT6TO.mjs";
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
import "./chunk-OMZRRPIN.mjs";
import "./chunk-CH64NKU5.mjs";
import "./chunk-G3GT763I.mjs";
import {
  useCreateOrderShipment,
  useOrder
} from "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/orders/order-create-shipment/order-create-shipment.tsx
import { useParams } from "react-router-dom";

// src/routes/orders/order-create-shipment/components/order-create-shipment-form/order-create-shipment-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Button, Heading, Input, Switch, toast } from "@medusajs/ui";
import { useFieldArray, useForm } from "react-hook-form";

// src/routes/orders/order-create-shipment/components/order-create-shipment-form/constants.ts
import { z } from "zod";
var CreateShipmentSchema = z.object({
  labels: z.array(
    z.object({
      tracking_number: z.string(),
      // TODO: this 2 are not optional in the API
      tracking_url: z.string().optional(),
      label_url: z.string().optional()
    })
  ),
  send_notification: z.boolean().optional()
});

// src/routes/orders/order-create-shipment/components/order-create-shipment-form/order-create-shipment-form.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function OrderCreateShipmentForm({
  order,
  fulfillment
}) {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const { mutateAsync: createShipment, isPending: isMutating } = useCreateOrderShipment(order.id, fulfillment?.id);
  const form = useForm({
    defaultValues: {
      send_notification: !order.no_notification
    },
    resolver: zodResolver(CreateShipmentSchema)
  });
  const { fields: labels, append } = useFieldArray({
    name: "labels",
    control: form.control
  });
  const handleSubmit = form.handleSubmit(async (data) => {
    await createShipment(
      {
        items: fulfillment?.items?.map((i) => ({
          id: i.line_item_id,
          quantity: i.quantity
        })),
        labels: data.labels.filter((l) => !!l.tracking_number).map((l) => ({
          tracking_number: l.tracking_number,
          tracking_url: "#",
          label_url: "#"
        })),
        no_notification: !data.send_notification
      },
      {
        onSuccess: () => {
          toast.success(t("orders.shipment.toastCreated"));
          handleSuccess(`/orders/${order.id}`);
        },
        onError: (e) => {
          toast.error(e.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex h-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isMutating, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex h-full w-full flex-col items-center divide-y overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex size-full flex-col items-center overflow-auto p-16", children: /* @__PURE__ */ jsx("div", { className: "flex w-full max-w-[736px] flex-col justify-center px-2 pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col divide-y", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col", children: [
            /* @__PURE__ */ jsx(Heading, { className: "mb-4", children: t("orders.shipment.title") }),
            labels.map((label, index) => /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: `labels.${index}.tracking_number`,
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { className: "mb-4", children: [
                    index === 0 && /* @__PURE__ */ jsx(Form.Label, { children: t("orders.shipment.trackingNumber") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field, placeholder: "123-456-789" }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              },
              label.id
            )),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                onClick: () => append({ tracking_number: "" }),
                className: "self-end",
                variant: "secondary",
                children: t("orders.shipment.addTracking")
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 pt-8 ", children: /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "send_notification",
              render: ({ field: { onChange, value, ...field } }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("orders.shipment.sendNotification") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                      Switch,
                      {
                        checked: !!value,
                        onCheckedChange: onChange,
                        ...field
                      }
                    ) }) })
                  ] }),
                  /* @__PURE__ */ jsx(Form.Hint, { className: "!mt-1", children: t("orders.shipment.sendNotificationHint") }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          ) })
        ] }) }) }) })
      ]
    }
  ) });
}

// src/routes/orders/order-create-shipment/order-create-shipment.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function OrderCreateShipment() {
  const { id, f_id } = useParams();
  const { order, isLoading, isError, error } = useOrder(id, {
    fields: "*fulfillments,*fulfillments.items"
  });
  if (isError) {
    throw error;
  }
  const ready = !isLoading && order;
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: ready && /* @__PURE__ */ jsx2(
    OrderCreateShipmentForm,
    {
      order,
      fulfillment: order.fulfillments?.find((f) => f.id === f_id)
    }
  ) });
}
export {
  OrderCreateShipment as Component
};
