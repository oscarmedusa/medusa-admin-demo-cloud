import {
  useCustomerGroupTableColumns
} from "./chunk-QIWEFQ5Y.mjs";
import {
  useCustomerGroupTableQuery
} from "./chunk-MOSRJHJ3.mjs";
import {
  useCustomerGroupTableFilters
} from "./chunk-DLZWPHHO.mjs";
import {
  SingleColumnPage
} from "./chunk-FGHVNTU2.mjs";
import "./chunk-3IW4HYUP.mjs";
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
import {
  SingleColumnPageSkeleton
} from "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  customerGroupsQueryKeys,
  useCustomerGroups,
  useRemoveCustomersFromGroup
} from "./chunk-ZDMW42ZH.mjs";
import {
  useCustomer,
  useDeleteCustomer
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

// src/routes/customers/customer-detail/customer-detail.tsx
import { useLoaderData, useParams } from "react-router-dom";

// src/routes/customers/customer-detail/components/customer-general-section/customer-general-section.tsx
import { PencilSquare, Trash } from "@medusajs/icons";
import {
  Container,
  Heading,
  StatusBadge,
  Text,
  toast,
  usePrompt
} from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
var CustomerGeneralSection = ({
  customer
}) => {
  const { t: t2 } = useTranslation();
  const prompt = usePrompt();
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteCustomer(customer.id);
  const name = [customer.first_name, customer.last_name].filter(Boolean).join(" ");
  const statusColor = customer.has_account ? "green" : "orange";
  const statusText = customer.has_account ? t2("customers.fields.registered") : t2("customers.fields.guest");
  const handleDelete = async () => {
    const res = await prompt({
      title: t2("customers.delete.title"),
      description: t2("customers.delete.description", {
        email: customer.email
      }),
      verificationInstruction: t2("general.typeToConfirm"),
      verificationText: customer.email,
      confirmText: t2("actions.delete"),
      cancelText: t2("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync(void 0, {
      onSuccess: () => {
        toast.success(
          t2("customers.delete.successToast", {
            email: customer.email
          })
        );
        navigate("/customers", { replace: true });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Heading, { children: customer.email }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
        /* @__PURE__ */ jsx(StatusBadge, { color: statusColor, children: statusText }),
        /* @__PURE__ */ jsx(
          ActionMenu,
          {
            groups: [
              {
                actions: [
                  {
                    label: t2("actions.edit"),
                    icon: /* @__PURE__ */ jsx(PencilSquare, {}),
                    to: "edit"
                  }
                ]
              },
              {
                actions: [
                  {
                    label: t2("actions.delete"),
                    icon: /* @__PURE__ */ jsx(Trash, {}),
                    onClick: handleDelete
                  }
                ]
              }
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.name") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.company") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: customer.company_name || "-" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-ui-fg-subtle grid grid-cols-2 items-center px-6 py-4", children: [
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", weight: "plus", children: t2("fields.phone") }),
      /* @__PURE__ */ jsx(Text, { size: "small", leading: "compact", children: customer.phone || "-" })
    ] })
  ] });
};

// src/routes/customers/customer-detail/components/customer-group-section/customer-group-section.tsx
import {
  Button,
  Checkbox,
  Container as Container2,
  Heading as Heading2,
  toast as toast2,
  usePrompt as usePrompt2
} from "@medusajs/ui";
import { createColumnHelper } from "@tanstack/react-table";
import { t } from "i18next";
import { useMemo, useState } from "react";
import { PencilSquare as PencilSquare2, Trash as Trash2 } from "@medusajs/icons";
import { keepPreviousData } from "@tanstack/react-query";
import { useTranslation as useTranslation2 } from "react-i18next";
import { Link } from "react-router-dom";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PAGE_SIZE = 10;
var CustomerGroupSection = ({
  customer
}) => {
  const prompt = usePrompt2();
  const [rowSelection, setRowSelection] = useState({});
  const { raw, searchParams } = useCustomerGroupTableQuery({
    pageSize: PAGE_SIZE
  });
  const { customer_groups, count, isLoading, isError, error } = useCustomerGroups(
    {
      ...searchParams,
      fields: "+customers.id",
      customers: { id: customer.id }
    },
    {
      placeholderData: keepPreviousData
    }
  );
  const filters = useCustomerGroupTableFilters();
  const columns = useColumns(customer.id);
  const { table } = useDataTable({
    data: customer_groups ?? [],
    columns,
    count,
    getRowId: (row) => row.id,
    enablePagination: true,
    enableRowSelection: true,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater: setRowSelection
    }
  });
  const handleRemove = async () => {
    const customerGroupIds = Object.keys(rowSelection);
    const res = await prompt({
      title: t("general.areYouSure"),
      description: t("customers.groups.removeMany", {
        groups: customer_groups?.filter((g) => customerGroupIds.includes(g.id)).map((g) => g.name).join(",")
      }),
      confirmText: t("actions.remove"),
      cancelText: t("actions.cancel")
    });
    if (!res) {
      return;
    }
    try {
      const promises = customerGroupIds.map(
        (id) => sdk.admin.customerGroup.batchCustomers(id, {
          remove: [customer.id]
        })
      );
      await Promise.all(promises);
      await queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
    } catch (e) {
      toast2.error(e.message);
    }
  };
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(Container2, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx2(Heading2, { level: "h2", children: t("customerGroups.domain") }),
      /* @__PURE__ */ jsx2(Link, { to: `/customers/${customer.id}/add-customer-groups`, children: /* @__PURE__ */ jsx2(Button, { variant: "secondary", size: "small", children: t("general.add") }) })
    ] }),
    /* @__PURE__ */ jsx2(
      DataTable,
      {
        table,
        columns,
        pageSize: PAGE_SIZE,
        isLoading,
        count,
        navigateTo: (row) => `/customer-groups/${row.id}`,
        filters,
        search: true,
        pagination: true,
        orderBy: ["name", "created_at", "updated_at"],
        commands: [
          {
            action: handleRemove,
            label: t("actions.remove"),
            shortcut: "r"
          }
        ],
        queryObject: raw,
        noRecords: {
          message: t("customers.groups.list.noRecordsMessage")
        }
      }
    )
  ] });
};
var CustomerGroupRowActions = ({
  group,
  customerId
}) => {
  const prompt = usePrompt2();
  const { t: t2 } = useTranslation2();
  const { mutateAsync } = useRemoveCustomersFromGroup(group.id);
  const onRemove = async () => {
    const res = await prompt({
      title: t2("general.areYouSure"),
      description: t2("customers.groups.remove", {
        name: group.name
      }),
      confirmText: t2("actions.remove"),
      cancelText: t2("actions.cancel")
    });
    if (!res) {
      return;
    }
    await mutateAsync([customerId], {
      onError: (error) => {
        toast2.error(error.message);
      }
    });
  };
  return /* @__PURE__ */ jsx2(
    ActionMenu,
    {
      groups: [
        {
          actions: [
            {
              label: t2("actions.edit"),
              icon: /* @__PURE__ */ jsx2(PencilSquare2, {}),
              to: `/customer-groups/${group.id}/edit`
            },
            {
              label: t2("actions.remove"),
              onClick: onRemove,
              icon: /* @__PURE__ */ jsx2(Trash2, {})
            }
          ]
        }
      ]
    }
  );
};
var columnHelper = createColumnHelper();
var useColumns = (customerId) => {
  const columns = useCustomerGroupTableColumns();
  return useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => {
          return /* @__PURE__ */ jsx2(
            Checkbox,
            {
              checked: table.getIsSomePageRowsSelected() ? "indeterminate" : table.getIsAllPageRowsSelected(),
              onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value)
            }
          );
        },
        cell: ({ row }) => {
          return /* @__PURE__ */ jsx2(
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
        cell: ({ row }) => /* @__PURE__ */ jsx2(
          CustomerGroupRowActions,
          {
            group: row.original,
            customerId
          }
        )
      })
    ],
    [columns]
  );
};

// src/routes/customers/customer-detail/customer-detail.tsx
import after from "virtual:medusa/widgets/customer/details/after";
import before from "virtual:medusa/widgets/customer/details/before";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var CustomerDetail = () => {
  const { id } = useParams();
  const initialData = useLoaderData();
  const { customer, isLoading, isError, error } = useCustomer(id, void 0, {
    initialData
  });
  if (isLoading || !customer) {
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
      data: customer,
      hasOutlet: true,
      showJSON: true,
      showMetadata: true,
      children: [
        /* @__PURE__ */ jsx3(CustomerGeneralSection, { customer }),
        /* @__PURE__ */ jsx3(CustomerGroupSection, { customer })
      ]
    }
  );
};

// src/routes/customers/customer-detail/loader.ts
var customerDetailQuery = (id) => ({
  queryKey: productsQueryKeys.detail(id),
  queryFn: async () => sdk.admin.customer.retrieve(id)
});
var customerLoader = async ({ params }) => {
  const id = params.id;
  const query = customerDetailQuery(id);
  return queryClient.getQueryData(
    query.queryKey
  ) ?? await queryClient.fetchQuery(query);
};
export {
  CustomerDetail as Component,
  customerLoader as loader
};
