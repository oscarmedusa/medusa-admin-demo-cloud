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
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import {
  customerGroupsQueryKeys,
  useCustomerGroups
} from "./chunk-ZDMW42ZH.mjs";
import "./chunk-PBIY5KWT.mjs";
import {
  queryClient
} from "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import {
  sdk
} from "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customers/customers-add-customer-group/customer-add-customer-groups.tsx
import { useParams } from "react-router-dom";

// src/routes/customers/customers-add-customer-group/components/add-customers-form/add-customer-groups-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Hint, Tooltip, toast } from "@medusajs/ui";
import {
  createColumnHelper
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var AddCustomerGroupsSchema = zod.object({
  customer_group_ids: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 10;
var AddCustomerGroupsForm = ({
  customerId
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const [isPending, setIsPending] = useState(false);
  const form = useForm({
    defaultValues: {
      customer_group_ids: []
    },
    resolver: zodResolver(AddCustomerGroupsSchema)
  });
  const { setValue } = form;
  const [rowSelection, setRowSelection] = useState({});
  useEffect(() => {
    setValue(
      "customer_group_ids",
      Object.keys(rowSelection).filter((k) => rowSelection[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useCustomerGroupTableQuery({
    pageSize: PAGE_SIZE
  });
  const filters = useCustomerGroupTableFilters();
  const {
    customer_groups,
    count,
    isPending: isLoading,
    isError,
    error
  } = useCustomerGroups({
    fields: "*customers",
    ...searchParams
  });
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("customer_group_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const columns = useColumns();
  const { table } = useDataTable({
    data: customer_groups ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return !row.original.customers?.map((c) => c.id).includes(customerId);
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  const handleSubmit = form.handleSubmit(async (data) => {
    setIsPending(true);
    try {
      const promises = data.customer_group_ids.map(
        (id) => sdk.admin.customerGroup.batchCustomers(id, {
          add: [customerId]
        })
      );
      await Promise.all(promises);
      toast.success(t("general.success"), {
        description: t("customers.groups.add.success", {
          groups: data.customer_group_ids.map((id) => customer_groups?.find((g) => g.id === id)).filter(Boolean).map((cg) => cg.name)
        }),
        dismissLabel: t("actions.close")
      });
      await queryClient.invalidateQueries({
        queryKey: customerGroupsQueryKeys.lists()
      });
      handleSuccess(`/customers/${customerId}`);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsPending(false);
    }
  });
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsx(RouteFocusModal.Form, { form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      className: "flex h-full flex-col overflow-hidden",
      onSubmit: handleSubmit,
      children: [
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end gap-x-2", children: form.formState.errors.customer_group_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.customer_group_ids.message }) }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            pageSize: PAGE_SIZE,
            count,
            filters,
            orderBy: ["name", "created_at", "updated_at"],
            isLoading,
            layout: "fill",
            search: "autofocus",
            queryObject: raw,
            noRecords: {
              message: t("customers.groups.add.list.noRecordsMessage")
            }
          }
        ) }),
        /* @__PURE__ */ jsxs(RouteFocusModal.Footer, { children: [
          /* @__PURE__ */ jsx(RouteFocusModal.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              variant: "primary",
              size: "small",
              isLoading: isPending,
              children: t("actions.save")
            }
          )
        ] })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useCustomerGroupTableColumns();
  const columns = useMemo(
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
          const isPreSelected = !row.getCanSelect();
          const isSelected = row.getIsSelected() || isPreSelected;
          const Component = /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: isSelected,
              disabled: isPreSelected,
              onCheckedChange: (value) => row.toggleSelected(!!value),
              onClick: (e) => {
                e.stopPropagation();
              }
            }
          );
          if (isPreSelected) {
            return /* @__PURE__ */ jsx(
              Tooltip,
              {
                content: t("customers.groups.alreadyAddedTooltip"),
                side: "right",
                children: Component
              }
            );
          }
          return Component;
        }
      }),
      ...base
    ],
    [t, base]
  );
  return columns;
};

// src/routes/customers/customers-add-customer-group/customer-add-customer-groups.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CustomerAddCustomerGroups = () => {
  const { id } = useParams();
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(AddCustomerGroupsForm, { customerId: id }) });
};
export {
  CustomerAddCustomerGroups as Component
};
