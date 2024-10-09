import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCreateShippingProfile
} from "./chunk-NTVBWR5J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/shipping-profiles/shipping-profile-create/components/create-shipping-profile-form/create-shipping-profile-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, Text, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateShippingOptionsSchema = zod.object({
  name: zod.string().min(1),
  type: zod.string().min(1)
});
function CreateShippingProfileForm() {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      name: "",
      type: ""
    },
    resolver: zodResolver(CreateShippingOptionsSchema)
  });
  const { mutateAsync, isPending } = useCreateShippingProfile();
  const handleSubmit = form.handleSubmit(async (values) => {
    await mutateAsync(
      {
        name: values.name,
        type: values.type
      },
      {
        onSuccess: ({ shipping_profile }) => {
          toast.success(
            t("shippingProfile.create.successToast", {
              name: shipping_profile.name
            })
          );
          handleSuccess(
            `/settings/locations/shipping-profiles/${shipping_profile.id}`
          );
        },
        onError: (error) => {
          toast.error(error.message);
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
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading: isPending, children: t("actions.save") })
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col items-center overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Heading, { className: "capitalize", children: t("shippingProfile.create.header") }),
            /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("shippingProfile.create.hint") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "type",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { tooltip: t("shippingProfile.tooltip.type"), children: t("fields.type") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] })
        ] }) }) })
      ]
    }
  ) });
}

// src/routes/shipping-profiles/shipping-profile-create/shipping-profile-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function ShippingProfileCreate() {
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(CreateShippingProfileForm, {}) });
}
export {
  ShippingProfileCreate as Component
};
