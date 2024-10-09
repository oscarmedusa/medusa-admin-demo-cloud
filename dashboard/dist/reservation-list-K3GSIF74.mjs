import {
  DateCell
} from "./chunk-B4FQDBC3.mjs";
import {
  LinkButton
} from "./chunk-6WKBBTKM.mjs";
import "./chunk-LQTHYS2Z.mjs";
import {
  PlaceholderCell
} from "./chunk-P3UUX2T6.mjs";
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
  useDeleteReservationItem,
  useReservationItems
} from "./chunk-OMZRRPIN.mjs";
import {
  useStockLocations
} from "./chunk-G3GT763I.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-RZLMJCFD.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/reservations/reservation-list/reservation-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/reservations/reservation-list/components/reservation-list-table/reservation-list-table.tsx
import { Button, Container, Heading, Text } from "@medusajs/ui";
import { Link } from "react-router-dom";

// src/routes/reservations/reservation-list/components/reservation-list-table/use-reservation-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/reservations/reservation-list/components/reservation-list-table/reservation-actions.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { usePrompt } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var ReservationActions = ({
  reservation
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteReservationItem(reservation.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("reservations.deleteWarning"),
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
              to: `${reservation.id}/edit`,
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

// src/routes/reservations/reservation-list/components/reservation-list-table/use-reservation-table-columns.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useReservationTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("inventory_item", {
        header: t("fields.sku"),
        cell: ({ getValue }) => {
          const inventoryItem = getValue();
          if (!inventoryItem || !inventoryItem.sku) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: inventoryItem.sku }) });
        }
      }),
      columnHelper.accessor("line_item", {
        header: t("fields.order"),
        cell: ({ getValue }) => {
          const inventoryItem = getValue();
          if (!inventoryItem || !inventoryItem.order?.display_id) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2(LinkButton, { to: `/orders/${inventoryItem.order.id}`, children: /* @__PURE__ */ jsxs("span", { className: "truncate", children: [
            "#",
            inventoryItem.order.display_id
          ] }) }) });
        }
      }),
      columnHelper.accessor("description", {
        header: t("fields.description"),
        cell: ({ getValue }) => {
          const description = getValue();
          if (!description) {
            return /* @__PURE__ */ jsx2(PlaceholderCell, {});
          }
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center overflow-hidden", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: description }) });
        }
      }),
      columnHelper.accessor("created_at", {
        header: t("fields.created"),
        cell: ({ getValue }) => {
          const created = getValue();
          return /* @__PURE__ */ jsx2(DateCell, { date: created });
        }
      }),
      columnHelper.accessor("quantity", {
        header: () => /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center justify-end overflow-hidden text-right", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: t("fields.quantity") }) }),
        cell: ({ getValue }) => {
          const quantity = getValue();
          return /* @__PURE__ */ jsx2("div", { className: "flex size-full items-center justify-end overflow-hidden text-right", children: /* @__PURE__ */ jsx2("span", { className: "truncate", children: quantity }) });
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => {
          const reservation = row.original;
          return /* @__PURE__ */ jsx2(ReservationActions, { reservation });
        }
      })
    ],
    [t]
  );
};

// src/routes/reservations/reservation-list/components/reservation-list-table/use-reservation-table-filters.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
var useReservationTableFilters = () => {
  const { t } = useTranslation3();
  const { stock_locations } = useStockLocations({
    limit: 1e3
  });
  const filters = [];
  if (stock_locations) {
    const stockLocationFilter = {
      type: "select",
      options: stock_locations.map((s) => ({
        label: s.name,
        value: s.id
      })),
      key: "location_id",
      searchable: true,
      label: t("fields.location")
    };
    filters.push(stockLocationFilter);
  }
  filters.push({
    type: "date",
    key: "created_at",
    label: t("fields.createdAt")
  });
  return filters;
};

// src/routes/reservations/reservation-list/components/reservation-list-table/use-reservation-table-query.tsx
var useReservationTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(
    ["location_id", "offset", "created_at", "quantity", "updated_at", "order"],
    prefix
  );
  const { location_id, created_at, updated_at, quantity, offset, ...rest } = raw;
  const searchParams = {
    limit: pageSize,
    offset: offset ? parseInt(offset) : void 0,
    location_id,
    created_at: created_at ? JSON.parse(created_at) : void 0,
    updated_at: updated_at ? JSON.parse(updated_at) : void 0,
    ...rest
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/reservations/reservation-list/components/reservation-list-table/reservation-list-table.tsx
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var ReservationListTable = () => {
  const { t } = useTranslation4();
  const { searchParams } = useReservationTableQuery({
    pageSize: PAGE_SIZE
  });
  const { reservations, count, isPending, isError, error } = useReservationItems({
    ...searchParams
  });
  const filters = useReservationTableFilters();
  const columns = useReservationTableColumns();
  const { table } = useDataTable({
    data: reservations || [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs2("div", { children: [
        /* @__PURE__ */ jsx3(Heading, { children: t("reservations.domain") }),
        /* @__PURE__ */ jsx3(Text, { className: "text-ui-fg-subtle", size: "small", children: t("reservations.subtitle") })
      ] }),
      /* @__PURE__ */ jsx3(Button, { variant: "secondary", size: "small", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "create", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        isLoading: isPending,
        filters,
        pagination: true,
        navigateTo: (row) => row.id,
        search: false
      }
    )
  ] });
};

// src/routes/reservations/reservation-list/reservation-list.tsx
import after from "virtual:medusa/widgets/reservation/list/after";
import before from "virtual:medusa/widgets/reservation/list/before";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ReservationList = () => {
  return /* @__PURE__ */ jsxs3("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx4(ReservationListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}, i) }, i);
    }),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
export {
  ReservationList as Component
};
