import {
  useCustomerGroupTableColumns
} from "./chunk-QIWEFQ5Y.mjs";
import {
  useCustomerGroupTableQuery
} from "./chunk-MOSRJHJ3.mjs";
import {
  useCustomerGroupTableFilters
} from "./chunk-DLZWPHHO.mjs";
import "./chunk-OI7BBNYW.mjs";
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
import {
  useCustomerGroups,
  useDeleteCustomerGroup
} from "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customer-groups/customer-group-list/customer-group-list.tsx
import { Outlet } from "react-router-dom";

// src/routes/customer-groups/customer-group-list/components/customer-group-list-table/customer-group-list-table.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import {
  Button,
  Container,
  Heading,
  Text,
  toast,
  usePrompt
} from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 20;
var CustomerGroupListTable = () => {
  const { t } = useTranslation();
  const { searchParams, raw } = useCustomerGroupTableQuery({
    pageSize: PAGE_SIZE
  });
  const { customer_groups, count, isLoading, isError, error } = useCustomerGroups({
    ...searchParams,
    fields: "id,name,customers.id"
  });
  const filters = useCustomerGroupTableFilters();
  const columns = useColumns();
  const { table } = useDataTable({
    data: customer_groups ?? [],
    columns,
    enablePagination: true,
    count,
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("customerGroups.domain") }),
        /* @__PURE__ */ jsx(Text, { className: "text-ui-fg-subtle", size: "small", children: t("customerGroups.subtitle") })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/customer-groups/create", children: /* @__PURE__ */ jsx(Button, { size: "small", variant: "secondary", children: t("actions.create") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        count,
        filters,
        search: true,
        pagination: true,
        navigateTo: (row) => `/customer-groups/${row.original.id}`,
        orderBy: ["name", "created_at", "updated_at"],
        queryObject: raw,
        isLoading
      }
    )
  ] });
};
var CustomerGroupRowActions = ({
  group
}) => {
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { mutateAsync } = useDeleteCustomerGroup(group.id);
  const handleDelete = async () => {
    const res = await prompt({
      title: t("customerGroups.delete.title"),
      description: t("customerGroups.delete.description", {
        name: group.name
      }),
      confirmText: t("actions.delete"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t("customerGroups.delete.successToast", {
            name: group.name
          })
        );
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t("actions.edit"),
              to: `/customer-groups/${group.id}/edit`,
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
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useCustomerGroupTableColumns();
  return useMemo(
    () => [
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row }) => /* @__PURE__ */ jsx(CustomerGroupRowActions, { group: row.original })
      })
    ],
    [columns]
  );
};

// src/routes/customer-groups/customer-group-list/customer-group-list.tsx
import after from "virtual:medusa/widgets/customer_group/list/after";
import before from "virtual:medusa/widgets/customer_group/list/before";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CustomerGroupsList = () => {
  return /* @__PURE__ */ jsxs2("div", { className: "flex flex-col gap-y-2", children: [
    before.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(CustomerGroupListTable, {}),
    after.widgets.map((w, i) => {
      return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2(w.Component, {}) }, i);
    }),
    /* @__PURE__ */ jsx2(Outlet, {})
  ] });
};
export {
  CustomerGroupsList as Component
};
