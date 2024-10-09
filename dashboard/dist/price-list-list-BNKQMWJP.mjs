import {
  useDeletePriceListAction
} from "./chunk-YNJS6EQD.mjs";
import {
  getPriceListStatus
} from "./chunk-G2J2T2QU.mjs";
import "./chunk-XUQVQCAO.mjs";
import {
  useDateTableFilters
} from "./chunk-W7625H47.mjs";
import {
  TextCell,
  TextHeader
} from "./chunk-OI7BBNYW.mjs";
import "./chunk-6GU6IDUA.mjs";
import "./chunk-OC7BQLYI.mjs";
import {
  StatusCell
} from "./chunk-ADOCJB6L.mjs";
import "./chunk-LQTHYS2Z.mjs";
import "./chunk-P3UUX2T6.mjs";
import {
  DataTable,
  useDataTable
} from "./chunk-VASL4POI.mjs";
import "./chunk-YEDAFXMB.mjs";
import "./chunk-RKBIB2RM.mjs";
import "./chunk-WX2SMNCD.mjs";
import {
  useQueryParams
} from "./chunk-C76H5USB.mjs";
import "./chunk-IWTE57WW.mjs";
import "./chunk-M3VFKDXJ.mjs";
import "./chunk-QAF7PVQE.mjs";
import "./chunk-ODJSGZRJ.mjs";
import "./chunk-GQ6DSXIJ.mjs";
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  usePriceLists
} from "./chunk-D6JOCXZR.mjs";
import "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/price-lists/price-list-list/price-list-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/price-lists/price-list-list/components/price-list-list-table/price-list-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/price-lists/price-list-list/components/price-list-list-table/use-pricing-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/price-lists/price-list-list/components/price-list-list-table/price-list-list-table-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var PriceListListTableActions = ({
  priceList
}) => {
  const { t } = useTranslation();
  const handleDelete = useDeletePriceListAction({ priceList });
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `${priceList.id}/edit`,
              icon: /* @__PURE__ */ jsx(PencilSquare, {})
            }
          ]
        },
        {
          actions: [
            {
              label: t("actions.delete"),
              onClick: handleDelete,
              icon: /* @__PURE__ */ jsx(Trash, {})
            }
          ]
        }
      ]
    }
  );
};

// src/routes/price-lists/price-list-list/components/price-list-list-table/use-pricing-table-columns.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var usePricingTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("title", {
        header: () => /* @__PURE__ */ jsx2(TextHeader, { text: t("fields.title") }),
        cell: (info) => info.getValue()
      }),
      columnHelper.accessor("status", {
        header: t("priceLists.fields.status.label"),
        cell: ({ row }) => {
          const { color, text } = getPriceListStatus(t, row.original);
          return /* @__PURE__ */ jsx2(StatusCell, { color, children: text });
        }
      }),
      columnHelper.accessor("prices", {
        header: t("priceLists.fields.priceOverrides.header"),
        cell: (info) => /* @__PURE__ */ jsx2(TextCell, { text: `${info.getValue()?.length || "-"}` })
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(PriceListListTableActions, { priceList: row.original })
      })
    ],
    [t]
  );
};

// src/routes/price-lists/price-list-list/components/price-list-list-table/use-pricing-table-filters.tsx
var usePricingTableFilters = () => {
  const dateFilters = useDateTableFilters();
  return dateFilters;
};

// src/routes/price-lists/price-list-list/components/price-list-list-table/use-pricing-table-query.tsx
var usePricingTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(["offset", "q", "order", "status"], prefix);
  const searchParams = {
    limit: pageSize,
    offset: raw.offset ? Number(raw.offset) : 0,
    order: raw.order,
    status: raw.status?.split(","),
    q: raw.q
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/price-lists/price-list-list/components/price-list-list-table/price-list-list-table.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var PriceListListTable = () => {
  const { t } = useTranslation3();
  const { searchParams, raw } = usePricingTableQuery({
    pageSize: PAGE_SIZE
  });
  const { price_lists, count, isLoading, isError, error } = usePriceLists(
    searchParams,
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = usePricingTableFilters();
  const columns = usePricingTableColumns();
  const { table } = useDataTable({
    data: price_lists || [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx3(Heading, { children: t("priceLists.domain") }),
        /* @__PURE__ */ jsx3(Text, { className: "text-ui-fg-subtle", size: "small", children: t("priceLists.subtitle") })
      ] }),
      /* @__PURE__ */ jsx3(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        count,
        filters,
        orderBy: ["title", "status", "created_at", "updated_at"],
        queryObject: raw,
        pageSize: PAGE_SIZE,
        navigateTo: (row) => row.original.id,
        isLoading,
        pagination: true,
        search: true
      }
    )
  ] });
};

// src/routes/price-lists/price-list-list/price-list-list.tsx
import after from "virtual:medusa/widgets/price_list/list/after";
import before from "virtual:medusa/widgets/price_list/list/before";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var PriceListList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(PriceListListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
export {
  PriceListList as Component
};
