import {
  RouteDrawer,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useStore,
  useUpdateStore
} from "./chunk-HULOFXB4.mjs";
import {
  useRegions
} from "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/store/store-edit/store-edit.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/store/store-edit/components/edit-store-form/edit-store-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var EditStoreSchema = z.object({
  name: z.string().min(1),
  default_currency_code: z.string().optional(),
  default_region_id: z.string().optional()
  // default_location_id: z.string().optional(),
});
var EditStoreForm = ({ store }) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      name: store.name,
      default_region_id: store.default_region_id || void 0,
      default_currency_code: store.supported_currencies?.find((c) => c.is_default)?.currency_code || void 0
    },
    resolver: zodResolver(EditStoreSchema)
  });
  const { mutateAsync, isPending } = useUpdateStore(store.id);
  const { regions, isPending: isRegionsLoading } = useRegions({ limit: 999 });
  const handleSubmit = form.handleSubmit(async (values) => {
    const normalizedMutation = {
      ...values,
      default_currency_code: void 0,
      supported_currencies: store.supported_currencies?.map((c) => ({
        ...c,
        is_default: c.currency_code === values.default_currency_code
      }))
    };
    await mutateAsync(normalizedMutation, {
      onSuccess: () => {
        toast.success(t("store.toast.update"));
        handleSuccess();
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsx(RouteDrawer.Body, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-8", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "name",
          render: ({ field }) => /* @__PURE__ */ jsxs(Form.Item, { children: [
            /* @__PURE__ */ jsx(Form.Label, { children: t("fields.name") }),
            /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { placeholder: "ACME", ...field }) }),
            /* @__PURE__ */ jsx(Form.ErrorMessage, {})
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "default_currency_code",
          render: ({ field: { onChange, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("store.defaultCurrency") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(Select, { ...field, onValueChange: onChange, children: [
                /* @__PURE__ */ jsx(Select.Trigger, { ref: field.ref, children: /* @__PURE__ */ jsx(Select.Value, {}) }),
                /* @__PURE__ */ jsx(Select.Content, { children: store.supported_currencies?.map((currency) => /* @__PURE__ */ jsx(
                  Select.Item,
                  {
                    value: currency.currency_code,
                    children: currency.currency_code.toUpperCase()
                  },
                  currency.currency_code
                )) })
              ] }) })
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "default_region_id",
          render: ({ field: { onChange, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("store.defaultRegion") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(
                Select,
                {
                  ...field,
                  onValueChange: onChange,
                  disabled: isRegionsLoading,
                  children: [
                    /* @__PURE__ */ jsx(Select.Trigger, { ref: field.ref, children: /* @__PURE__ */ jsx(Select.Value, {}) }),
                    /* @__PURE__ */ jsx(Select.Content, { children: (regions || []).map((region) => /* @__PURE__ */ jsx(Select.Item, { value: region.id, children: region.name }, region.id)) })
                  ]
                }
              ) })
            ] });
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", isLoading: isPending, type: "submit", children: t("actions.save") })
    ] }) })
  ] }) });
};

// src/routes/store/store-edit/store-edit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var StoreEdit = () => {
  const { t } = useTranslation2();
  const { store, isPending: isLoading, isError, error } = useStore();
  if (isError) {
    throw error;
  }
  const ready = !!store && !isLoading;
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("store.edit.header") }) }),
    ready && /* @__PURE__ */ jsx2(EditStoreForm, { store })
  ] });
};
export {
  StoreEdit as Component
};
