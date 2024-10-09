import {
  CountrySelect
} from "./chunk-MW4K5NNY.mjs";
import "./chunk-VDBOSWVE.mjs";
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

// src/routes/products/product-attributes/product-attributes.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/products/product-attributes/components/product-attributes-form/product-attributes-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var dimension = zod.union([zod.string(), zod.number()]).transform((value) => {
  if (value === "") {
    return null;
  }
  return Number(value);
}).optional().nullable();
var ProductAttributesSchema = zod.object({
  weight: dimension,
  length: dimension,
  width: dimension,
  height: dimension,
  mid_code: zod.string().optional(),
  hs_code: zod.string().optional(),
  origin_country: zod.string().optional()
});
var ProductAttributesForm = ({
  product
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      height: product.height ? product.height : null,
      width: product.width ? product.width : null,
      length: product.length ? product.length : null,
      weight: product.weight ? product.weight : null,
      mid_code: product.mid_code || "",
      hs_code: product.hs_code || "",
      origin_country: product.origin_country || ""
    },
    resolver: zodResolver(ProductAttributesSchema)
  });
  const { mutateAsync, isLoading } = useUpdateProduct(product.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        weight: data.weight ? data.weight : void 0,
        length: data.length ? data.length : void 0,
        width: data.width ? data.width : void 0,
        height: data.height ? data.height : void 0,
        mid_code: data.mid_code,
        hs_code: data.hs_code,
        origin_country: data.origin_country
      },
      {
        onSuccess: () => {
          handleSuccess();
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsx(RouteDrawer.Body, { children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-col gap-y-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "width",
          render: ({ field: { onChange, value, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.width") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: 0,
                  value: value || "",
                  onChange: (e) => {
                    const value2 = e.target.value;
                    if (value2 === "") {
                      onChange(null);
                    } else {
                      onChange(parseFloat(value2));
                    }
                  },
                  ...field
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
          name: "height",
          render: ({ field: { onChange, value, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.height") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: 0,
                  value: value || "",
                  onChange: (e) => {
                    const value2 = e.target.value;
                    if (value2 === "") {
                      onChange(null);
                    } else {
                      onChange(Number(value2));
                    }
                  },
                  ...field
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
          name: "length",
          render: ({ field: { onChange, value, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.length") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: 0,
                  value: value || "",
                  onChange: (e) => {
                    const value2 = e.target.value;
                    if (value2 === "") {
                      onChange(null);
                    } else {
                      onChange(Number(value2));
                    }
                  },
                  ...field
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
          name: "weight",
          render: ({ field: { onChange, value, ...field } }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.weight") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Input,
                {
                  type: "number",
                  min: 0,
                  value: value || "",
                  onChange: (e) => {
                    const value2 = e.target.value;
                    if (value2 === "") {
                      onChange(null);
                    } else {
                      onChange(Number(value2));
                    }
                  },
                  ...field
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
          name: "mid_code",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.midCode") }),
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
          name: "hs_code",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.hsCode") }),
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
          name: "origin_country",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.countryOfOrigin") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(CountrySelect, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading, children: t("actions.save") })
    ] }) })
  ] }) });
};

// src/routes/products/product-attributes/product-attributes.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductAttributes = () => {
  const { id } = useParams();
  const { t } = useTranslation2();
  const { product, isLoading, isError, error } = useProduct(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("products.editAttributes") }) }),
    !isLoading && product && /* @__PURE__ */ jsx2(ProductAttributesForm, { product })
  ] });
};
export {
  ProductAttributes as Component
};
