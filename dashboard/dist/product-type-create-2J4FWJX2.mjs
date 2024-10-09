import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useCreateProductType
} from "./chunk-DZ7P4IRT.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-types/product-type-create/components/create-product-type-form/create-product-type-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, Text, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateProductTypeSchema = z.object({
  value: z.string().min(1)
});
var CreateProductTypeForm = () => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      value: ""
    },
    resolver: zodResolver(CreateProductTypeSchema)
  });
  const { mutateAsync, isPending } = useCreateProductType();
  const handleSubmit = form.handleSubmit(
    async (values) => {
      await mutateAsync(values, {
        onSuccess: ({ product_type }) => {
          toast.success(
            t("productTypes.create.successToast", {
              value: product_type.value
            })
          );
          handleSuccess(`/settings/product-types/${product_type.id}`);
        },
        onError: (e) => {
          toast.error(e.message);
        }
      });
    }
  );
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "small",
          variant: "primary",
          type: "submit",
          isLoading: isPending,
          children: t("actions.create")
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "flex flex-col items-center overflow-y-auto p-16", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-[720px] flex-col gap-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { children: t("productTypes.create.header") }),
        /* @__PURE__ */ jsx(Text, { size: "small", className: "text-ui-fg-subtle", children: t("productTypes.create.hint") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "value",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("productTypes.fields.value") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ) })
    ] }) })
  ] }) });
};

// src/routes/product-types/product-type-create/product-type-create.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ProductTypeCreate = () => {
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(CreateProductTypeForm, {}) });
};
export {
  ProductTypeCreate as Component
};
