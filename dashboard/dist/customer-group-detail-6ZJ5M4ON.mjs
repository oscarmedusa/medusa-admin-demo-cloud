import {
  useCustomerTableColumns
} from "./chunk-DJPQV344.mjs";
import "./chunk-B4FQDBC3.mjs";
import {
  useCustomerTableQuery
} from "./chunk-WRSGHGAT.mjs";
import {
  useCustomerTableFilters
} from "./chunk-WJAYXTY4.mjs";
import {
  SingleColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
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
import {
  useCustomerGroup,
  useDeleteCustomerGroup,
  useRemoveCustomersFromGroup
} from "./chunk-ZDMW42ZH.mjs";
import {
  useCustomers
} from "./chunk-PBIY5KWT.mjs";
import {
  ActionMenu
} from "./chunk-WRXTMI2J.mjs";
import {
  productsQueryKeys
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

// src/routes/customer-groups/customer-group-detail/customer-group-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/customer-groups/customer-group-detail/components/customer-group-customer-section/customer-group-customer-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import { Button, Checkbox, Container, Heading, usePrompt } from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CustomerGroupCustomerSection = ({
  group
}) => {
  const [rowSelection, setRowSelection] = useState({});
  const { t } = useTranslation();
  const prompt = usePrompt();
  const { searchParams, raw } = useCustomerTableQuery({ pageSize: PAGE_SIZE });
  const { customers, count, isLoading, isError, error } = useCustomers({
    ...searchParams,
    groups: group.id
  });
  const columns = useColumns();
  const filters = useCustomerTableFilters(["groups"]);
  const { table } = useDataTable({
    data: customers ?? [],
    columns,
    count,
    getRowId: (row) => row.id,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    },
    meta: {
      customerGroupId: group.id
    }
  });
  if (isError) {
    throw error;
  }
  const { mutateAsync } = useRemoveCustomersFromGroup(group.id);
  const handleRemove = async () => {
    const keys = Object.keys(rowSelection);
    const res = await prompt({
      title: t("customerGroups.customers.remove.title", {
        count: keys.length
      }),
      description: t("customerGroups.customers.remove.description", {
        count: keys.length
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(keys, {
      onSuccess: () => {
        setRowSelection({});
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { level: "h2", children: t("customers.domain") }),
      /* @__PURE__ */ jsx(Link, { to: `/customer-groups/${group.id}/add-customers`, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("general.add") }) })
    ] }),
    /* @__PURE__ */ jsx(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        navigateTo: (row) => `/customers/${row.id}`,
        filters,
        search: true,
        pagination: true,
        orderBy: [
          "email",
          "first_name",
          "last_name",
          "has_account",
          "created_at",
          "updated_at"
        ],
        queryObject: raw,
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        noRecords: {
          message: t("customerGroups.customers.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var CustomerActions = ({
  customer,
  customerGroupId
}) => {
  const { t } = useTranslation();
  const { mutateAsync } = useRemoveCustomersFromGroup(customerGroupId);
  const prompt = usePrompt();
  const handleRemove = async () => {
    const res = await prompt({
      title: t("customerGroups.customers.remove.title", {
        count: 1
      }),
      description: t("customerGroups.customers.remove.description", {
        count: 1
      }),
      confirmText: t("actions.continue"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync([customer.id]);
  };
  return /* @__PURE__ */ jsx(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(PencilSquare, {}),
              label: t("actions.edit"),
              to: `/customers/${customer.id}/edit`
            }
          ]
        },
        {
          actions: [
            {
              icon: /* @__PURE__ */ jsx(Trash, {}),
              label: t("actions.remove"),
              onClick: handleRemove
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const columns = useCustomerTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: row.getIsSelected(),
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
        }
      }),
      ...columns,
      columnHelper.display({
        id: "actions",
        cell: ({ row, table }) => {
          const { customerGroupId } = table.options.meta;
          return /* @__PURE__ */ jsx(
            CustomerActions,
            {
              customer: row.original,
              customerGroupId
            }
          );
        }
      })
    ],
    [columns]
  );
};

// src/routes/customer-groups/customer-group-detail/components/customer-group-general-section/customer-group-general-section.tsx
import { PencilSquare as PencilSquare2, Trash as Trash2 } from "@medusajs/icons";
import { Container as Container2, Heading as Heading2, Text, toast, usePrompt as usePrompt2 } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CustomerGroupGeneralSection = ({
  group
}) => {
  const { t } = useTranslation2();
  const prompt = usePrompt2();
  const navigate = useNavigate();
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
        navigate("/customer-groups", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { children: group.name }),
      /* @__PURE__ */ jsx2(
        ActionMenu,
        {
          groups: [
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
                  label: t("actions.edit"),
                  to: `/customer-groups/${group.id}/edit`
                }
              ]
            },
            {
              actions: [
                {
                  icon: /* @__PURE__ */ jsx2(Trash2, {}),
                  label: t("actions.delete"),
                  onClick: handleDelete
                }
              ]
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", weight: "plus", children: t("customers.domain") }),
      /* @__PURE__ */ jsx2(Text, { size: "small", leading: "compact", children: group.customers?.length || "-" })
    ] })
  ] });
};

// src/routes/customer-groups/customer-group-detail/customer-group-detail.tsx
import after from "virtual:medusa/widgets/customer_group/details/after";
import before from "virtual:medusa/widgets/customer_group/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var CustomerGroupDetail = () => {
  const initialData = useLoaderData();
  const { id } = useParams();
  const { customer_group, isLoading, isError, error } = useCustomerGroup(
    id,
    {
      fields: "+customers.id"
    },
    { initialData }
  );
  if (isLoading || !customer_group) {
    return /* @__PURE__ */ jsx3(SingleColumnPageSkeleton, { sections: 2, showJSON: true, showMetadata: true });
  }
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs3(
    SingleColumnPage,
    {
      widgets: {
        before,
        after
      },
      showJSON: true,
      showMetadata: true,
      data: customer_group,
      children: [
        /* @__PURE__ */ jsx3(CustomerGroupGeneralSection, { group: customer_group }),
        /* @__PURE__ */ jsx3(CustomerGroupCustomerSection, { group: customer_group })
      ]
    }
  );
};

// src/routes/customer-groups/customer-group-detail/loader.ts
var customerGroupDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.customerGroup.retrieve(id, {
    fields: "+customers.id"
  })
});
var customerGroupLoader = async ({ params }) => {
  const id = params.id;
  const query = customerGroupDetailQuery(id);
  return queryClient.getQueryData(query.queryKey) ?? await queryClient.fetchQuery(query);
};
export {
  CustomerGroupDetail as Component,
  customerGroupLoader as loader
};
