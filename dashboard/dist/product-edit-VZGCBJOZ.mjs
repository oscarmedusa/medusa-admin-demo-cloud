import {
  transformNullableFormData
} from "./chunk-3ISBJK7K.mjs";
import {
  SwitchBox
} from "./chunk-ARXK2O3B.mjs";
import "./chunk-6GU6IDUA.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useProduct,
  useUpdateProduct
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-edit/product-edit.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/products/product-edit/components/edit-product-form/edit-product-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, Text, Textarea } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var EditProductSchema = zod.object({
  status: zod.enum(["draft", "published", "proposed", "rejected"]),
  title: zod.string().min(1),
  subtitle: zod.string().optional(),
  handle: zod.string().min(1),
  material: zod.string().optional(),
  description: zod.string().optional(),
  discountable: zod.boolean()
});
var EditProductForm = ({ product }) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      status: product.status,
      title: product.title,
      material: product.material || "",
      subtitle: product.subtitle || "",
      handle: product.handle || "",
      description: product.description || "",
      discountable: product.discountable
    },
    resolver: zodResolver(EditProductSchema)
  });
  const { mutateAsync, isPending } = useUpdateProduct(product.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    const { title, discountable, handle, status, ...optional } = data;
    const nullableData = transformNullableFormData(optional);
    await mutateAsync(
      {
        title,
        discountable,
        handle,
        status,
        ...nullableData
      },
      {
        onSuccess: () => {
          handleSuccess();
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex flex-1 flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsx(RouteDrawer.Body, { className: "flex flex-1 flex-col gap-y-8 overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "status",
                render: ({ field: { onChange, ref, ...field } }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.status") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs(Select, { ...field, onValueChange: onChange, children: [
                      /* @__PURE__ */ jsx(Select.Trigger, { ref, children: /* @__PURE__ */ jsx(Select.Value, {}) }),
                      /* @__PURE__ */ jsx(Select.Content, { children: [
                        "draft",
                        "published",
                        "proposed",
                        "rejected"
                      ].map((status) => {
                        return /* @__PURE__ */ jsx(Select.Item, { value: status, children: t(`products.productStatus.${status}`) }, status);
                      }) })
                    ] }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "title",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.title") }),
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
                name: "subtitle",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.subtitle") }),
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
                name: "handle",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { children: t("fields.handle") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r", children: /* @__PURE__ */ jsx(
                        Text,
                        {
                          className: "text-ui-fg-muted",
                          size: "small",
                          leading: "compact",
                          weight: "plus",
                          children: "/"
                        }
                      ) }),
                      /* @__PURE__ */ jsx(Input, { ...field, className: "pl-10" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "material",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.material") }),
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
                name: "description",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.description") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Textarea, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            SwitchBox,
            {
              control: form.control,
              name: "discountable",
              label: t("fields.discountable"),
              description: t("products.discountableHint")
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/products/product-edit/product-edit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductEdit = () => {
  const { id } = useParams();
  const { t } = useTranslation2();
  const { product, isLoading, isError, error } = useProduct(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("products.editProduct") }) }),
    !isLoading && product && /* @__PURE__ */ jsx2(EditProductForm, { product })
  ] });
};
export {
  ProductEdit as Component
};
