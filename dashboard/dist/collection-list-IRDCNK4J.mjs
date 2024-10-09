import {
  useCollectionTableColumns
} from "./chunk-Y35YD3YU.mjs";
import {
  useCollectionTableQuery
} from "./chunk-5R4UGQUP.mjs";
import "./chunk-I5HYE2RW.mjs";
import "./chunk-RIV7FKGN.mjs";
import "./chunk-TDK3JDOB.mjs";
import {
  useCollectionTableFilters
} from "./chunk-IRV425DP.mjs";
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
import "./chunk-4M3ZY7KA.mjs";
import "./chunk-S3UCQAPU.mjs";
import "./chunk-OI7BBNYW.mjs";
import "./chunk-GSM3OOMB.mjs";
import "./chunk-VELNOPU6.mjs";
import "./chunk-OC7BQLYI.mjs";
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
import {
  useCollections,
  useDeleteCollection
} from "./chunk-2K25ZV2O.mjs";
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
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-T5XNVE2Q.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-V5KUQFZL.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/collections/collection-list/collection-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/collections/collection-list/components/collection-list-table/collection-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { keepPreviousData } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

// src/routes/collections/collection-list/components/collection-list-table/collection-row-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var CollectionRowActions = ({
  collection
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteCollection(collection.id);
  const handleDeleteCollection = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("collections.deleteWarning", {
        title: collection.title
      }),
      verificationText: collection.title,
      verificationInstruction: t("general.typeToConfirm"),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync();
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `/collections/${collection.id}/edit`,
              icon: /* @__PURE__ */ jsx(PencilSquare, {})
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              onClick: handleDeleteCollection,
              icon: /* @__PURE__ */ jsx(Trash, {}),
              disabled: !collection.id
            }
          ]
        }
      ]
    }
  );
};

// src/routes/collections/collection-list/components/collection-list-table/collection-list-table.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var CollectionListTable = () => {
  const { t } = useTranslation2();
  const { searchParams, raw } = useCollectionTableQuery({ pageSize: PAGE_SIZE });
  const { collections, count, isError, error, isLoading } = useCollections(
    {
      ...searchParams,
      fields: "+products.id"
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useCollectionTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: collections ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row, index) => row.id ?? `${index}`,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx2(Heading, { children: t("collections.domain") }),
        /* @__PURE__ */ jsx2(Text, { className: "text-ui-fg-subtle", size: "small", children: t("collections.subtitle") })
      ] }),
      /* @__PURE__ */ jsx2(Link, { to: "/collections/create", children: /* @__PURE__ */ jsx2(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        filters,
        orderBy: ["title", "handle", "created_at", "updated_at"],
        search: true,
        navigateTo: (row) => `/collections/${row.original.id}`,
        queryObject: raw,
        isLoading
      }
    )
  ] });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const base = useCollectionTableColumns();
  return useMemo(
    () => [
      ...base,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(CollectionRowActions, { collection: row.original })
      })
    ],
    [base]
  );
};

// src/routes/collections/collection-list/collection-list.tsx
import after from "virtual:medusa/widgets/product_collection/list/after";
import before from "virtual:medusa/widgets/product_collection/list/before";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var CollectionList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx3(CollectionListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx3(Outlet, {})
  ] });
};
export {
  CollectionList as Component
};
