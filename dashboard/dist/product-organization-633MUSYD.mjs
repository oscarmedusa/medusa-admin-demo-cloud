import {
  PRODUCT_DETAIL_FIELDS
} from "./chunk-SWMQZ55N.mjs";
import {
  CategoryCombobox
} from "./chunk-336CPPXJ.mjs";
import {
  useComboboxData
} from "./chunk-KKUJQ3HN.mjs";
import {
  Combobox
} from "./chunk-G4XMHIPB.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-7XWP2AR2.mjs";
import {
  Form
} from "./chunk-C7RYT3S3.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  useProduct,
  useUpdateProduct
} from "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/products/product-organization/product-organization.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/products/product-organization/components/product-organization-form/product-organization-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductOrganizationSchema = zod.object({
  type_id: zod.string().optional(),
  collection_id: zod.string().optional(),
  category_ids: zod.array(zod.string()),
  tag_ids: zod.array(zod.string())
});
var ProductOrganizationForm = ({
  product
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const collections = useComboboxData({
    queryKey: ["product_collections"],
    queryFn: (params) => sdk.admin.productCollection.list(params),
    getOptions: (data) => data.collections.map((collection) => ({
      label: collection.title,
      value: collection.id
    }))
  });
  const types = useComboboxData({
    queryKey: ["product_types"],
    queryFn: (params) => sdk.admin.productType.list(params),
    getOptions: (data) => data.product_types.map((type) => ({
      label: type.value,
      value: type.id
    }))
  });
  const tags = useComboboxData({
    queryKey: ["product_tags"],
    queryFn: (params) => sdk.admin.productTag.list(params),
    getOptions: (data) => data.product_tags.map((tag) => ({
      label: tag.value,
      value: tag.id
    }))
  });
  const form = useForm({
    defaultValues: {
      type_id: product.type_id || "",
      collection_id: product.collection_id || "",
      category_ids: product.categories?.map((c) => c.id) || [],
      tag_ids: product.tags?.map((t2) => t2.id) || []
    },
    resolver: zodResolver(ProductOrganizationSchema)
  });
  const { mutateAsync, isPending } = useUpdateProduct(product.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        type_id: data.type_id || void 0,
        collection_id: data.collection_id || void 0,
        categories: data.category_ids.map((id) => ({ id })) || void 0,
        tags: data.tag_ids?.map((t2) => ({
          id: t2
        })) || void 0
      },
      {
        onSuccess: ({ product: product2 }) => {
          toast.success(
            t("products.organization.edit.toasts.success", {
              title: product2.title
            })
          );
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsx(RouteDrawer.Body, { children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "type_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.type.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  ...field,
                  options: types.options,
                  searchValue: types.searchValue,
                  onSearchValueChange: types.onSearchValueChange,
                  fetchNextPage: types.fetchNextPage
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
          name: "collection_id",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.collection.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  ...field,
                  options: collections.options,
                  searchValue: collections.searchValue,
                  onSearchValueChange: collections.onSearchValueChange,
                  fetchNextPage: collections.fetchNextPage
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
          name: "category_ids",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.categories.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(CategoryCombobox, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "tag_ids",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { optional: true, children: t("products.fields.tags.label") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                Combobox,
                {
                  ...field,
                  multiple: true,
                  options: tags.options,
                  searchValue: tags.searchValue,
                  onSearchValueChange: tags.onSearchValueChange,
                  fetchNextPage: tags.fetchNextPage
                }
              ) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(Button, { size: "small", type: "submit", isLoading: isPending, children: t("actions.save") })
    ] }) })
  ] }) });
};

// src/routes/products/product-organization/product-organization.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ProductOrganization = () => {
  const { id } = useParams();
  const { t } = useTranslation2();
  const { product, isLoading, isError, error } = useProduct(id, {
    fields: PRODUCT_DETAIL_FIELDS
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("products.organization.edit.header") }) }),
    !isLoading && product && /* @__PURE__ */ jsx2(ProductOrganizationForm, { product })
  ] });
};
export {
  ProductOrganization as Component
};
