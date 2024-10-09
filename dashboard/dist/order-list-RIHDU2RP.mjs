import {
  useOrderTableColumns
} from "./chunk-NLR7MGM2.mjs";
import "./chunk-B4FQDBC3.mjs";
import "./chunk-LHJ6JQGA.mjs";
import "./chunk-XFSJ7YIN.mjs";
import "./chunk-FSMQADBD.mjs";
import {
  useOrderTableQuery
} from "./chunk-XMAWMECC.mjs";
import {
  useOrderTableFilters
} from "./chunk-J3QLEX6O.mjs";
import "./chunk-MWVM4TYO.mjs";
import "./chunk-ADOCJB6L.mjs";
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
import {
  useOrders
} from "./chunk-UXITYQ2U.mjs";
import "./chunk-CELPQCSR.mjs";
import "./chunk-7FQQ2EGV.mjs";
import "./chunk-TID2KHW6.mjs";
import "./chunk-K3ZYJA7Z.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/orders/order-list/components/order-list-table/order-list-table.tsx
import { keepPreviousData } from "@tanstack/react-query";
import { Container, Heading } from "@medusajs/ui";
import { useTranslation } from "react-i18next";

// src/routes/orders/order-list/const.ts
var DEFAULT_PROPERTIES = [
  "id",
  "status",
  "created_at",
  "email",
  "display_id",
  "payment_status",
  "fulfillment_status",
  "total",
  "currency_code"
];
var DEFAULT_RELATIONS = ["*customer", "*sales_channel"];
var DEFAULT_FIELDS = `${DEFAULT_PROPERTIES.join(
  ","
)},${DEFAULT_RELATIONS.join(",")}`;

// src/routes/orders/order-list/components/order-list-table/order-list-table.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var OrderListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useOrderTableQuery({
    pageSize: PAGE_SIZE
  });
  const { orders, count, isError, error, isLoading } = useOrders(
    {
      fields: DEFAULT_FIELDS,
      ...searchParams
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useOrderTableFilters();
  const columns = useOrderTableColumns({});
  const { table } = useDataTable({
    data: orders ?? [],
    columns,
    enablePagination: true,
    count,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx(Heading, { children: t("orders.domain") }) }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        columns,
        table,
        pagination: true,
        navigateTo: (row) => `/orders/${row.original.id}`,
        filters,
        count,
        search: true,
        isLoading,
        pageSize: PAGE_SIZE,
        orderBy: ["display_id", "created_at", "updated_at"],
        queryObject: raw,
        noRecords: {
          message: t("orders.list.noRecordsMessage")
        }
      }
    )
  ] });
};

// src/routes/orders/order-list/order-list.tsx
import after from "virtual:medusa/widgets/order/list/after";
import before from "virtual:medusa/widgets/order/list/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var OrderList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex w-full flex-col gap-y-3", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(OrderListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    })
  ] });
};
export {
  OrderList as Component
};
