import {
  useDeleteProductTagAction
} from "./chunk-46ZI4XSF.mjs";
import "./chunk-JXL44QNJ.mjs";
import "./chunk-UUDR5EKI.mjs";
import "./chunk-FYN6YJ5C.mjs";
import "./chunk-DJPQV344.mjs";
import "./chunk-I3VB6NM2.mjs";
import "./chunk-QIWEFQ5Y.mjs";
import "./chunk-Y35YD3YU.mjs";
import "./chunk-LDVL34F3.mjs";
import "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-IR5DHEKS.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import "./chunk-IRV425DP.mjs";
import "./chunk-CBSCX7RE.mjs";
import "./chunk-FHSC5X62.mjs";
import "./chunk-XR4GEMGR.mjs";
import "./chunk-LT4MVCA7.mjs";
import "./chunk-WRSGHGAT.mjs";
import "./chunk-WJAYXTY4.mjs";
import "./chunk-W7625H47.mjs";
import "./chunk-MOSRJHJ3.mjs";
import "./chunk-DLZWPHHO.mjs";
import "./chunk-LSEYENCI.mjs";
import "./chunk-OMC5JCQH.mjs";
import "./chunk-XMAWMECC.mjs";
import "./chunk-J3QLEX6O.mjs";
import {
  SingleColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
import "./chunk-VDBOSWVE.mjs";
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
import "./chunk-MWVM4TYO.mjs";
import "./chunk-6GZ2CHKW.mjs";
import "./chunk-GA34GXNI.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-OC7BQLYI.mjs";
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
import {
  SingleColumnPageSkeleton
} from "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import "./chunk-V5VCT6TO.mjs";
import {
  productTagsQueryKeys,
  useProductTag
} from "./chunk-APCXHN2Y.mjs";
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

// src/routes/product-tags/product-tag-detail/loader.ts
var productTagDetailQuery = (id) => ({
  queryKey: productTagsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.productTag.retrieve(id)
});
var productTagLoader = async ({ params }) => {
  const id = params.id;
  const query = productTagDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/product-tags/product-tag-detail/components/product-tag-general-section/product-tag-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx, jsxs } from "react/jsx-runtime";
var ProductTagGeneralSection = ({
  productTag
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeleteProductTagAction({ productTag });
  return /* @__PURE__ */ jsxs(Container, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-ui-fg-muted h1-core", children: "#" }),
      /* @__PURE__ */ jsx(Heading, { children: productTag.value })
    ] }),
    /* @__PURE__ */ jsx(
      ActionMenu,
      {
        groups: [
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                label: t("actions.edit"),
                to: "edit"
              }
            ]
          },
          {
            actions: [
              {
                icon: /* @__PURE__ */ jsx(Trash, {}),
                label: t("actions.delete"),
                onClick: handleDelete
              }
            ]
          }
        ]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/components/product-tag-product-section/product-tag-product-section.tsx
import { Container as Container2, Heading as Heading2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var PREFIX = "pt";
var ProductTagProductSection = ({
  productTag
}) => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useProductTableQuery({
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  const { products, count, isPending, isError, error } = useProducts({
    ...searchParams,
    tag_id: productTag.id
  });
  const filters = useProductTableFilters(["product_tags"]);
  const columns = useProductTableColumns();
  const { table } = useDataTable({
    data: products,
    count,
    columns,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    prefix: PREFIX
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y px-0 py-0", children: [
    /* @__PURE__ */ jsx2("div", { className: "px-6 py-4", children: /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("products.domain") }) }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        filters,
        queryObject: raw,
        isLoading: isPending,
        columns,
        pageSize: PAGE_SIZE,
        count,
        navigateTo: (row) => row.original.id,
        search: true,
        pagination: true,
        orderBy: ["title", "status", "created_at", "updated_at"]
      }
    )
  ] });
};

// src/routes/product-tags/product-tag-detail/product-tag-detail.tsx
import after from "virtual:medusa/widgets/product_tag/details/after";
import before from "virtual:medusa/widgets/product_tag/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ProductTagDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { product_tag, isPending, isError, error } = useProductTag(
    id,
    void 0,
    {
      initialData
    }
  );
  if (isPending || !product_tag) {
    return /* @__PURE__ */ jsx3(SingleColumnPageSkeleton, { showJSON: true, sections: 2 });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(SingleColumnPage, { widgets: { after, before }, showJSON: true, data: product_tag, children: [
    /* @__PURE__ */ jsx3(ProductTagGeneralSection, { productTag: product_tag }),
    /* @__PURE__ */ jsx3(ProductTagProductSection, { productTag: product_tag })
  ] });
};
export {
  ProductTagDetail as Component,
  productTagLoader as loader
};
