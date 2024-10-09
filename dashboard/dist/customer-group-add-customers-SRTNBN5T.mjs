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
import "./chunk-XDUX5ONP.mjs";
import "./chunk-ZHSZGFLW.mjs";
import {
  RouteFocusModal,
  useRouteModal
} from "./chunk-RLLZZQKN.mjs";
import "./chunk-C7RYT3S3.mjs";
import {
  useAddCustomersToGroup
} from "./chunk-ZDMW42ZH.mjs";
import {
  useCustomers
} from "./chunk-PBIY5KWT.mjs";
import "./chunk-2T3PD3VS.mjs";
import "./chunk-OEVIH5XG.mjs";
import "./chunk-GPBQTNZI.mjs";
import "./chunk-PWWSB76U.mjs";
import "./chunk-GH77ZQI2.mjs";

// src/routes/customer-groups/customer-group-add-customers/customer-group-add-customers.tsx
import { useParams } from "react-router-dom";

// src/routes/customer-groups/customer-group-add-customers/components/add-customers-form/add-customers-form.tsx
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
var AddCustomersSchema = zod.object({
  customer_ids: zod.array(zod.string()).min(1)
});
var PAGE_SIZE = 10;
var AddCustomersForm = ({
  customerGroupId
}) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      customer_ids: []
    },
    resolver: zodResolver(AddCustomersSchema)
  });
  const { setValue } = form;
  const [rowSelection, setRowSelection] = useState({});
  useEffect(() => {
    setValue(
      "customer_ids",
      Object.keys(rowSelection).filter((k) => rowSelection[k]),
      {
        shouldDirty: true,
        shouldTouch: true
      }
    );
  }, [rowSelection, setValue]);
  const { searchParams, raw } = useCustomerTableQuery({ pageSize: PAGE_SIZE });
  const filters = useCustomerTableFilters();
  const { customers, count, isLoading, isError, error } = useCustomers({
    fields: "id,email,first_name,last_name,*groups",
    ...searchParams
  });
  const updater = (fn) => {
    const state = typeof fn === "function" ? fn(rowSelection) : fn;
    const ids = Object.keys(state);
    setValue("customer_ids", ids, {
      shouldDirty: true,
      shouldTouch: true
    });
    setRowSelection(state);
  };
  const columns = useColumns();
  const { table } = useDataTable({
    data: customers ?? [],
    columns,
    count,
    enablePagination: true,
    enableRowSelection: (row) => {
      return !row.original.groups?.map((gc) => gc.id).includes(customerGroupId);
    },
    getRowId: (row) => row.id,
    pageSize: PAGE_SIZE,
    rowSelection: {
      state: rowSelection,
      updater
    }
  });
  const { mutateAsync, isPending } = useAddCustomersToGroup(customerGroupId);
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(data.customer_ids, {
      onSuccess: () => {
        toast.success(
          t("customerGroups.customers.add.successToast", {
            count: data.customer_ids.length
          })
        );
        handleSuccess(`/customer-groups/${customerGroupId}`);
      },
      onError: (error2) => {
        toast.error(error2.message);
      }
    });
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
        /* @__PURE__ */ jsx(RouteFocusModal.Header, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
          form.formState.errors.customer_ids && /* @__PURE__ */ jsx(Hint, { variant: "error", children: form.formState.errors.customer_ids.message }),
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
        ] }) }),
        /* @__PURE__ */ jsx(RouteFocusModal.Body, { className: "size-full overflow-hidden", children: /* @__PURE__ */ jsx(
          DataTable,
          {
            table,
            columns,
            pageSize: PAGE_SIZE,
            count,
            filters,
            orderBy: [
              "email",
              "first_name",
              "last_name",
              "has_account",
              "created_at",
              "updated_at"
            ],
            isLoading,
            layout: "fill",
            search: "autofocus",
            queryObject: raw,
            noRecords: {
              message: t("customerGroups.customers.add.list.noRecordsMessage")
            }
          }
        ) })
      ]
    }
  ) });
};
var columnHelper = createColumnHelper();
var useColumns = () => {
  const { t } = useTranslation();
  const base = useCustomerTableColumns();
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
                content: t("customerGroups.customers.alreadyAddedTooltip"),
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

// src/routes/customer-groups/customer-group-add-customers/customer-group-add-customers.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var CustomerGroupAddCustomers = () => {
  const { id } = useParams();
  return /* @__PURE__ */ jsx2(RouteFocusModal, { children: /* @__PURE__ */ jsx2(AddCustomersForm, { customerGroupId: id }) });
};
export {
  CustomerGroupAddCustomers as Component
};
