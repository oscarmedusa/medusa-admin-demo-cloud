import {
  useDeleteProductTypeAction
} from "./chunk-V4VFZ34C.mjs";
import {
  JsonViewSection
} from "./chunk-3IW4HYUP.mjs";
import {
  useProductTableColumns
} from "./chunk-QWRBWAVK.mjs";
import "./chunk-TKCL6FA5.mjs";
import "./chunk-PHMALPVO.mjs";
import {
  useProductTableQuery
} from "./chunk-4M3ZY7KA.mjs";
import {
  useProductTableFilters
} from "./chunk-S3UCQAPU.mjs";
import "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import "./chunk-V5VCT6TO.mjs";
import "./chunk-APCXHN2Y.mjs";
import "./chunk-YAKLSBTK.mjs";
import "./chunk-YRIAF77S.mjs";
import "./chunk-BKTH2GEJ.mjs";
import {
  productTypesQueryKeys,
  useProductType
} from "./chunk-DZ7P4IRT.mjs";
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
import "./chunk-UXITYQ2U.mjs";
import "./chunk-HULOFXB4.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-TUUKVWGY.mjs";
import {
  useProducts
} from "./chunk-K3ZYJA7Z.mjs";
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
import "./chunk-GH77ZQI2.mjs";

// src/routes/product-types/product-type-detail/loader.ts
var productTypeDetailQuery = (id) => ({
  queryKey: productTypesQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productType.retrieve(id)
});
var productTypeLoader = async ({ params }) => {
  const id = params.id;
  const query = productTypeDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import { Outlet, useLoaderData, useParams } from "react-router-dom";

// src/routes/product-types/product-type-detail/components/product-type-general-section/product-type-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductTypeGeneralSection = ({
  productType
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTypeAction(productType.id);
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(Heading, { children: productType.value }),
    /* @__PURE__ */ jsx(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                label: t("actions.edit"),
                icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                to: "edit"
              }
            ]
          },
          {
            actions: [
              {
                label: t("actions.delete"),
                icon: /* @__PURE__ */ jsx(Trash, {}),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/components/product-type-product-section/product-type-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var ProductTypeProductSection = ({
  productType
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    type_id: [productType.id]
  });
  const filters = useProductTableFilters(["product_types"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    columns,
    data: products,
    count: products?.length || 0,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx2("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        filters,
        isLoading: isPending,
        columns,
        count,
        pageSize: PAGE_SIZE,
        navigateTo: ({ original }) => `/products/${original.id}`,
        orderBy: ["title", "created_at", "updated_at"],
        queryObject: raw,
        search: true,
        pagination: true
      }
    )
  ] });
};

// src/routes/product-types/product-type-detail/product-type-detail.tsx
import after from "virtual:medusa/widgets/product_type/details/after";
import before from "virtual:medusa/widgets/product_type/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTypeDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { product_type, isPending, isError, error } = useProductType(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isPending || !product_type) {
    return null;
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: product_type }) }, i);
    }),
    /* @__PURE__ */ jsx3(ProductTypeGeneralSection, { productType: product_type }),
    /* @__PURE__ */ jsx3(ProductTypeProductSection, { productType: product_type }),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, { data: product_type }) }, i);
    }),
    /* @__PURE__ */ jsx3(JsonViewSection, { data: product_type }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
};
export {
  ProductTypeDetail as Component,
  productTypeLoader as loader
};
