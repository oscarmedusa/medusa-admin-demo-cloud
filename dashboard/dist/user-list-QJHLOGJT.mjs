import "./chunk-LQTHYS2Z.mjs";
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
  useUsers
} from "./chunk-2KLB4XUE.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/users/user-list/user-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/users/user-list/components/user-list-table/user-list-table.tsx
import { Button, Container, Heading } from "@medusajs/ui";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation3 } from "react-i18next";
import { Link } from "react-router-dom";

// src/routes/users/user-list/components/user-list-table/use-user-table-columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation as useTranslation2 } from "react-i18next";

// src/routes/users/user-list/components/user-list-table/user-row-actions.tsx
import { PencilSquare } from "@medusajs/icons";
import { useTranslation } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var UserRowActions = ({ user }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `${user.id}/edit`
            }
          ]
        }
      ]
    }
  );
};

// src/routes/users/user-list/components/user-list-table/use-user-table-columns.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var columnHelper = createColumnHelper();
var useUserTableColumns = () => {
  const { t } = useTranslation2();
  return useMemo(
    () => [
      columnHelper.accessor("email", {
        header: t("fields.email"),
        cell: ({ row }) => {
          return row.original.email;
        }
      }),
      columnHelper.display({
        id: "name",
        header: t("fields.name"),
        cell: ({ row }) => {
          const name = [row.original.first_name, row.original.last_name].filter(Boolean).join(" ");
          if (!name) {
            return /* @__PURE__ */ jsx2("span", { className: "text-ui-fg-muted", children: "-" });
          }
          return name;
        }
      }),
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx2(UserRowActions, { user: row.original })
      })
    ],
    [t]
  );
};

// src/routes/users/user-list/components/user-list-table/use-user-table-query.tsx
var useUserTableQuery = ({
  pageSize = 20,
  prefix
}) => {
  const raw = useQueryParams(["q", "order", "offset"], prefix);
  const { offset, ...params } = raw;
  const searchParams = {
    limit: pageSize,
    offset: offset ? parseInt(offset) : 0,
    ...params
  };
  return {
    searchParams,
    raw
  };
};

// src/routes/users/user-list/components/user-list-table/user-list-table.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var UserListTable = () => {
  const { raw, searchParams } = useUserTableQuery({
    pageSize: PAGE_SIZE
  });
  const {
    users,
    count,
    isPending: isLoading,
    isError,
    error
  } = useUsers(searchParams, {
    placeholderData: keepPreviousData
  });
  const columns = useUserTableColumns();
  const { table } = useDataTable({
    data: users ?? [],
    columns,
    count,
    enablePagination: true,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  const { t } = useTranslation3();
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx3(Heading, { children: t("users.domain") }),
      /* @__PURE__ */ jsx3(Button, { size: "small", variant: "secondary", asChild: true, children: /* @__PURE__ */ jsx3(Link, { to: "invite", children: t("users.invite") }) })
    ] }),
    /* @__PURE__ */ jsx3(
      DataTable,
      {
        table,
        columns,
        count,
        pageSize: PAGE_SIZE,
        isLoading,
        orderBy: ["email", "first_name", "last_name"],
        navigateTo: (row) => `${row.id}`,
        search: true,
        pagination: true,
        queryObject: raw
      }
    )
  ] });
};

// src/routes/users/user-list/user-list.tsx
import after from "virtual:medusa/widgets/user/list/after";
import before from "virtual:medusa/widgets/user/list/before";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var UserList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i)),
    /* @__PURE__ */ jsx4(UserListTable, {}),
    after.widgets.map((w, i) => /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsx4(w.Component, {}) }, i)),
    /* @__PURE__ */ jsx4(Outlet, {})
  ] });
};
export {
  UserList as Component
};
