import {
  transformNullableFormData,
  transformNullableFormNumber
} from "./chunk-3ISBJK7K.mjs";
import {
  CountrySelect
} from "./chunk-MW4K5NNY.mjs";
import "./chunk-VDBOSWVE.mjs";
import {
  Combobox
} from "./chunk-G4XMHIPB.mjs";
import {
  optionalInt
} from "./chunk-QRQHBXSL.mjs";
import "./chunk-6GU6IDUA.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import {
  Divider
} from "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import {
  productsQueryKeys,
  useProduct,
  useUpdateProductVariant
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-variants/product-variant-edit/product-variant-edit.tsx
import { Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import {
  json,
  useLoaderData,
  useParams,
  useSearchParams
} from "react-router-dom";

// src/routes/product-variants/product-variant-edit/components/product-edit-variant-form/product-edit-variant-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, Switch, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductEditVariantSchema = z.object({
  title: z.string().min(1),
  material: z.string().optional(),
  sku: z.string().optional(),
  ean: z.string().optional(),
  upc: z.string().optional(),
  barcode: z.string().optional(),
  manage_inventory: z.boolean(),
  allow_backorder: z.boolean(),
  weight: optionalInt,
  height: optionalInt,
  width: optionalInt,
  length: optionalInt,
  mid_code: z.string().optional(),
  hs_code: z.string().optional(),
  origin_country: z.string().optional(),
  options: z.record(z.string())
});
var ProductEditVariantForm = ({
  product,
  variant
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const defaultOptions = product.options.reduce((acc, option) => {
    const varOpt = variant.options.find((o) => o.option_id === option.id);
    acc[option.title] = varOpt?.value;
    return acc;
  }, {});
  const form = useForm({
    defaultValues: {
      title: variant.title,
      material: variant.material || "",
      sku: variant.sku || "",
      ean: variant.ean || "",
      upc: variant.upc || "",
      barcode: variant.barcode || "",
      inventory_quantity: variant.inventory_quantity || "",
      manage_inventory: variant.manage_inventory,
      allow_backorder: variant.allow_backorder,
      weight: variant.weight || "",
      height: variant.height || "",
      width: variant.width || "",
      length: variant.length || "",
      mid_code: variant.mid_code || "",
      hs_code: variant.hs_code || "",
      origin_country: variant.origin_country || "",
      options: defaultOptions
    },
    resolver: zodResolver(ProductEditVariantSchema)
  });
  const { mutateAsync, isPending } = useUpdateProductVariant(
    product.id,
    variant.id
  );
  const handleSubmit = form.handleSubmit(async (data) => {
    const {
      title,
      weight,
      height,
      width,
      length,
      allow_backorder,
      manage_inventory,
      options,
      ...optional
    } = data;
    const nullableData = transformNullableFormData(optional);
    await mutateAsync(
      {
        id: variant.id,
        weight: transformNullableFormNumber(weight),
        height: transformNullableFormNumber(height),
        width: transformNullableFormNumber(width),
        length: transformNullableFormNumber(length),
        title,
        allow_backorder,
        manage_inventory,
        options,
        ...nullableData
      },
      {
        onSuccess: () => {
          handleSuccess("../");
          toast.success(t("products.variant.edit.success"));
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex size-full flex-col overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs(RouteDrawer.Body, { className: "flex size-full flex-col gap-y-8 overflow-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
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
            product.options.map((option) => {
              return /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: `options.${option.title}`,
                  render: ({ field: { value, onChange, ...field } }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, { children: option.title }),
                      /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                        Combobox,
                        {
                          value,
                          onChange: (v) => {
                            onChange(v);
                          },
                          ...field,
                          options: option.values.map((v) => ({
                            label: v.value,
                            value: v.value
                          }))
                        }
                      ) })
                    ] });
                  }
                },
                option.id
              );
            })
          ] }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
              /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.variant.inventory.header") }),
              /* @__PURE__ */ jsx(
                Form.Field,
                {
                  control: form.control,
                  name: "sku",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.sku") }),
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
                  name: "ean",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.ean") }),
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
                  name: "upc",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.upc") }),
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
                  name: "barcode",
                  render: ({ field }) => {
                    return /* @__PURE__ */ jsxs(Form.Item, { children: [
                      /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.barcode") }),
                      /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
                      /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                    ] });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "manage_inventory",
                render: ({ field: { value, onChange, ...field } }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx(Form.Label, { children: t("products.variant.inventory.manageInventoryLabel") }),
                        /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                          Switch,
                          {
                            checked: value,
                            onCheckedChange: (checked) => onChange(!!checked),
                            ...field
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsx(Form.Hint, { children: t("products.variant.inventory.manageInventoryHint") })
                    ] }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "allow_backorder",
                render: ({ field: { value, onChange, ...field } }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx(Form.Label, { children: t("products.variant.inventory.allowBackordersLabel") }),
                        /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                          Switch,
                          {
                            checked: value,
                            onCheckedChange: (checked) => onChange(!!checked),
                            ...field
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsx(Form.Hint, { children: t("products.variant.inventory.allowBackordersHint") })
                    ] }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("products.attributes") }),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "weight",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.weight") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { type: "number", ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              Form.Field,
              {
                control: form.control,
                name: "width",
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.width") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { type: "number", ...field }) }),
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
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.length") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { type: "number", ...field }) }),
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
                render: ({ field }) => {
                  return /* @__PURE__ */ jsxs(Form.Item, { children: [
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.height") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { type: "number", ...field }) }),
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
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.midCode") }),
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
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.hsCode") }),
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
                    /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("fields.countryOfOrigin") }),
                    /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(CountrySelect, { ...field }) }),
                    /* @__PURE__ */ jsx(Form.ErrorMessage, {})
                  ] });
                }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(Button, { type: "submit", size: "small", isLoading: isPending, children: t("actions.save") })
        ] }) })
      ]
    }
  ) });
};

// src/routes/product-variants/product-variant-edit/product-variant-edit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductVariantEdit = () => {
  const initialData = useLoaderData();
  const { t } = useTranslation2();
  const { id, variant_id } = useParams();
  const [URLSearchParms] = useSearchParams();
  const searchVariantId = URLSearchParms.get("variant_id");
  const { product, isPending, isFetching, isError, error } = useProduct(
    id,
    void 0,
    {
      initialData
    }
  );
  const variant = product?.variants.find(
    (v) => v.id === (variant_id || searchVariantId)
  );
  if (!isPending && !isFetching && !variant) {
    throw json({
      status: 404,
      message: `Variant with ID ${variant_id || searchVariantId} was not found.`
    });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading2, { children: t("products.variant.edit.header") }) }),
    variant && /* @__PURE__ */ jsx2(
      ProductEditVariantForm,
      {
        product,
        variant
      }
    )
  ] });
};

// src/routes/product-variants/product-variant-edit/loader.ts
var queryKey = (id) => {
  return [productsQueryKeys.detail(id)];
};
var queryFn = async (id) => {
  return await sdk.admin.product.retrieve(id);
};
var editProductVariantQuery = (id) => ({
  queryKey: queryKey(id),
  queryFn: async () => queryFn(id)
});
var editProductVariantLoader = async ({
  params
}) => {
  const id = params.id;
  const query = editProductVariantQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  ProductVariantEdit as Component,
  editProductVariantLoader as loader
};
