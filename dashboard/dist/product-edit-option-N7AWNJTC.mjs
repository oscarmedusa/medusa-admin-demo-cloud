import {
  ChipInput
} from "./chunk-OEMJBX6M.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  useProduct,
  useUpdateProductOption
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-edit-option/product-edit-option.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { json, useParams } from "react-router-dom";

// src/routes/products/product-edit-option/components/edit-product-option-form/edit-product-option-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateProductOptionSchema = z.object({
  title: z.string().min(1),
  values: z.array(z.string()).optional()
});
var CreateProductOptionForm = ({
  option
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      title: option.title,
      values: option.values.map((v) => v.value)
    },
    resolver: zodResolver(CreateProductOptionSchema)
  });
  const { mutateAsync, isPending } = useUpdateProductOption(
    option.product_id,
    option.id
  );
  const handleSubmit = form.handleSubmit(async (values) => {
    mutateAsync(
      {
        id: option.id,
        ...values
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
        /* @__PURE__ */ jsxs(RouteDrawer.Body, { className: "flex flex-1 flex-col gap-y-4 overflow-auto", children: [
          /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "title",
              render: ({ field }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("products.fields.options.optionTitle") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                    Input,
                    {
                      ...field,
                      placeholder: t(
                        "products.fields.options.optionTitlePlaceholder"
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Form.Field,
            {
              control: form.control,
              name: "values",
              render: ({ field: { ...field } }) => {
                return /* @__PURE__ */ jsxs(Form.Item, { children: [
                  /* @__PURE__ */ jsx(Form.Label, { children: t("products.fields.options.variations") }),
                  /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                    ChipInput,
                    {
                      ...field,
                      placeholder: t(
                        "products.fields.options.variantionsPlaceholder"
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                ] });
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/products/product-edit-option/product-edit-option.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductEditOption = () => {
  const { id, option_id } = useParams();
  const { t } = useTranslation2();
  const { product, isPending, isFetching, isError, error } = useProduct(id);
  const option = product?.options.find((o) => o.id === option_id);
  if (!isPending && !isFetching && !option) {
    throw json({ message: `An option with ID ${option_id} was not found` }, 404);
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("products.options.edit.header") }) }),
    option && /* @__PURE__ */ jsx2(CreateProductOptionForm, { option })
  ] });
};
export {
  ProductEditOption as Component
};
